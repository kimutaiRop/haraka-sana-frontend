// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import { Component, createSignal, createEffect, onCleanup } from "solid-js";
import type {
  Map as GMap,
  LatLngLiteral,
  Marker as GMarker,
  Polyline as GPolyline,
  InfoWindow as GInfoWindow,
  DirectionsService as GDirectionsService,
  DirectionsRenderer as GDirectionsRenderer,
  LatLng,
} from "googlemaps";

const TrackLocation: Component = () => {
  let mapRef: HTMLDivElement | null = null;
  const [map, setMap] = createSignal<GMap | null>(null);
  const [location, setLocation] = createSignal<LatLngLiteral | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [liveLocations, setLiveLocations] = createSignal<
    Record<string, LatLngLiteral>
  >({}); // Store live locations
  let locationMarker: GMarker | null = null; // Store the marker
  const [markers, setMarkers] = createSignal<Record<string, GMarker>>({});
  const [polylines, setPolylines] = createSignal<Record<string, GPolyline>>({}); // Store polylines for each driver
  const [infoWindow, setInfoWindow] = createSignal<GInfoWindow | null>(null); // Define infoWindow signal
  const [directionsService, setDirectionsService] =
    createSignal<GDirectionsService | null>(null); // Directions service
  const [directionsRenderer, setDirectionsRenderer] =
    createSignal<GDirectionsRenderer | null>(null); // Directions renderer

  createEffect(() => {
    if (mapRef && window.google && window.google.maps && !map()) {
      const newMap = new window.google.maps.Map(mapRef, {
        center: { lat: -1.2921, lng: 36.8219 }, // Initial center - Nairobi, Kenya
        zoom: 14,
      }) as GMap;

      const newInfoWindow = new window.google.maps.InfoWindow() as GInfoWindow;
      locationMarker = new window.google.maps.Marker({
        map: newMap,
      }) as GMarker;

      const locationButton = document.createElement("button");
      locationButton.textContent = "Pan to Current Location";
      locationButton.classList.add("custom-map-control-button");
      newMap.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
        locationButton
      );

      locationButton.addEventListener("click", () => {
        setError(null);
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };

              setLocation(pos);
              newInfoWindow.setPosition(pos);
              newInfoWindow.setContent("Location found.");
              newInfoWindow.open(newMap);
              newMap.setCenter(pos);
              locationMarker!.setPosition(pos);
            },
            (err) => {
              handleLocationError(
                true,
                newInfoWindow,
                newMap.getCenter()!,
                err
              );
            }
          );
        } else {
          handleLocationError(false, newInfoWindow, newMap.getCenter()!);
        }
      });

      setMap(newMap);
      setInfoWindow(newInfoWindow);

      // Initialize Directions Service and Renderer
      const newDirectionsService =
        new window.google.maps.DirectionsService() as GDirectionsService;
      const newDirectionsRenderer = new window.google.maps.DirectionsRenderer({
        map: newMap,
      }) as GDirectionsRenderer;
      setDirectionsService(newDirectionsService);
      setDirectionsRenderer(newDirectionsRenderer);

      // Define default start and end locations (replace with your actual locations)
      const defaultStartLocation = { lat: -1.286389, lng: 36.817223 }; // Nairobi CBD
      const defaultEndLocation = { lat: -1.3107, lng: 36.8333 }; // Upper Hill, Nairobi

      // Display default route on map load
      calculateAndDisplayRoute(
        newDirectionsService,
        newDirectionsRenderer,
        defaultStartLocation,
        defaultEndLocation
      );

      // WebSocket connection setup (replace with your server URL)
      const ws = new WebSocket("ws://your-server-url"); // Replace with your WebSocket server URL
      let previousLocations: Record<string, LatLngLiteral> = {}; // Store previous locations for polylines

      ws.onopen = () => {
        console.log("WebSocket connected");
      };

      ws.onmessage = (event) => {
        try {
          const newLocations = JSON.parse(event.data) as Record<
            string,
            LatLngLiteral
          >;
          setLiveLocations(newLocations); // Update live locations state

          // Update markers and polylines
          for (const id in newLocations) {
            const loc = newLocations[id];
            if (!markers()[id]) {
              // Create marker if it doesn't exist
              const marker = new window.google.maps.Marker({
                map: newMap,
                position: loc,
                label: `Driver ${id}`, // Optional: label markers
              }) as GMarker;
              setMarkers({ ...markers(), [id]: marker });
            } else {
              // Update existing marker position
              markers()[id].setPosition(loc);
            }

            // Plotting road of movement using Polylines
            if (previousLocations[id]) {
              const prevLoc = previousLocations[id];
              const currentLocation = new window.google.maps.LatLng(
                loc.lat,
                loc.lng
              );
              const lastLocation = new window.google.maps.LatLng(
                prevLoc.lat,
                prevLoc.lng
              );

              // Calculate distance between current and previous location
              const distance =
                window.google.maps.geometry.spherical.computeDistanceBetween(
                  lastLocation,
                  currentLocation
                );

              if (distance <= 1000) {
                const path = [prevLoc, loc];
                if (!polylines()[id]) {
                  // Create polyline if it doesn't exist
                  const polyline = new window.google.maps.Polyline({
                    path: path,
                    geodesic: false, // Straight lines
                    strokeColor: "#FF0000",
                    strokeOpacity: 1.0,
                    strokeWeight: 2,
                    map: newMap,
                  }) as GPolyline;
                  setPolylines({ ...polylines(), [id]: polyline });
                } else {
                  // Extend existing polyline
                  const currentPath = polylines()[id].getPath().getArray();
                  currentPath.push(loc);
                  polylines()[id].setPath(currentPath);
                }
              }
              // If distance > 1000m, you can decide to start a new polyline or do nothing
              // For now, we are just not extending the polyline if distance is too far.
            }
            previousLocations[id] = loc; // Update previous location
          }
        } catch (error) {
          console.error("Error parsing WebSocket message:", error);
        }
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      ws.onclose = () => {
        console.log("WebSocket disconnected");
      };

      onCleanup(() => {
        ws.close(); // Close WebSocket connection on component unmount
      });
    }
  });

  createEffect(() => {
    if (map() && location()) {
      locationMarker?.setPosition(location()!);
      map()?.setCenter(location()!);
    }
  });

  const handleLocationError = (
    browserHasGeolocation: boolean,
    infoWindow: GInfoWindow,
    pos: LatLng,
    err?: GeolocationPositionError
  ) => {
    const errorMessage = browserHasGeolocation
      ? `Error: The Geolocation service failed. ${err?.message || ""}`
      : "Error: Your browser doesn't support geolocation.";

    setError(errorMessage);

    infoWindow.setPosition(pos);
    infoWindow.setContent(errorMessage);
    infoWindow.open(map()!);
  };

  const calculateAndDisplayRoute = (
    service: GDirectionsService,
    renderer: GDirectionsRenderer,
    start: LatLngLiteral,
    end: LatLngLiteral
  ) => {
    service.route(
      {
        origin: start,
        destination: end,
        travelMode: window.google.maps.TravelMode.DRIVING, // Default driving mode
      },
      (result, status) => {
        if (status === "OK" && result) {
          renderer.setDirections(result);
        } else {
          console.error("Directions request failed due to " + status);
        }
      }
    );
  };

  return (
    <div class="w-full h-full">
      <div
        id="map"
        ref={(el) => (mapRef = el)}
        style={{ height: "100%", width: "100%" }}
      ></div>
      {error() && <p style={{ color: "red" }}>{error()}</p>}
    </div>
  );
};

export default TrackLocation;
