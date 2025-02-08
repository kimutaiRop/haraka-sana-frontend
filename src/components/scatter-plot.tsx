"use client";
import { SolidApexCharts } from "solid-apexcharts";
import { createSignal } from "solid-js";

const ScatterPlot = () => {
  const [options] = createSignal({
    chart: {
      type: "scatter",
      zoom: {
        enabled: true,
        type: "xy",
      },
      toolbar: {
        show: false,
      },
    },
    grid: {
      borderColor: "#FFFFFF", // Set border color (white in this case)

      yaxis: {
        lines: {
          width: 1.5,
          show: true,
        },
      },
      xaxis: {
        lines: {
          width: 1.5,
          show: false,
        },
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan W1",
        "Jan W2",
        "Jan W3",
        "Jan W4",
        "Feb W1",
        "Feb W2",
        "Feb W3",
        "Feb W4",
        "Mar W1",
        "Mar W2",
        "Mar W3",
        "Mar W4",
        "Apr W1",
        "Apr W2",
        "Apr W3",
        "Apr W4",
        "May W1",
        "May W2",
        "May W3",
        "May W4",
        "Jun W1",
        "Jun W2",
        "Jun W3",
        "Jun W4",
        "Jul W1",
        "Jul W2",
        "Jul W3",
        "Jul W4",
        "Aug W1",
        "Aug W2",
        "Aug W3",
        "Aug W4",
        "Sep W1",
        "Sep W2",
        "Sep W3",
        "Sep W4",
        "Oct W1",
        "Oct W2",
        "Oct W3",
        "Oct W4",
        "Nov W1",
        "Nov W2",
        "Nov W3",
        "Nov W4",
        "Dec W1",
        "Dec W2",
        "Dec W3",
        "Dec W4",
      ],

      labels: {
        style: {
          fontSize: "12px",
          colors: "white",
        },
        formatter: function (value: string) {
          if (typeof value === "string") {
            // Check if value is a string
            const parts = value.split(" ");
            const week = parts[1];
            const month = parts[0];

            if (week === "W1") {
              return month; // Show month only for the first week
            } else {
              return ""; // Hide labels for other weeks
            }
          } else {
            return ""; // Return empty string if value is not a string
          }
        },
      },
    },
    yaxis: [
      {
        min: 0,
        max: 5000000,
        tickAmount: 6,
        labels: {
          show: true,
          formatter: (val: number) => `${(val / 1000000).toFixed(1)}M`,
          style: {
            fontSize: "12px",
            colors: "white",
          },
        },
        axisBorder: {
          show: true,
          color: "#FFFFFF", // Change to white or a stronger color
          width: 1.5, // Increase border thickness
        },
        axisTicks: {
          show: false,
        },
        title: {
          style: {
            fontSize: "12px",
            color: "#8e8da4",
          },
        },
      },
      {
        opposite: true, // Enables the right-side Y-axis
        min: 0,
        max: 5000000,
        tickAmount: 6,
        labels: {
          show: false,
          formatter: (val: number) => `${(val / 1000000).toFixed(1)}M`,
          style: {
            fontSize: "12px",
            colors: "white",
          },
        },
        axisBorder: {
          show: true,
          color: "#FFFFFF", // Change to white for more visibility
          width: 1.5, // Increase thickness
        },
      },
    ],

    markers: {
      size: 4,
    },
    legend: {
      position: "bottom",
      fontSize: "12px",
      fontFamily: "inherit",
      fontWeight: 400,
      labels: {
        colors: "#8e8da4",
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
      markers: {
        width: 15,
        height: 10, // Adjust height to make it more rectangular
        radius: 0, // Set radius to 0 for sharp corners (rectangle)
        shape: "square", // Keep shape as square for rectangle
        fillColors: ["#008000", "#FFFFFF"], // Colors for 'Complete' and 'Pending'
        strokeWidth: 2, // Add a border by setting stroke width
        strokeColor: "#ced4da", // Border color
        offsetX: -12,
        offsetY: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
    },
    colors: ["#008000", "#FFFFFF"],
    tooltip: {
      enabled: true,
      intersect: false,
      shared: true,
      followCursor: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: "inherit",
      },
      y: {
        formatter: (val: number) => `${(val / 1000000).toFixed(1)}M`,
      },
    },
  });
  const [series] = createSignal([
    {
      name: "Complete",
      data: [
        { x: "Jan W1", y: 100000, fillColor: "#008000" },
        { x: "Jan W2", y: 500000, fillColor: "#008000" },
        { x: "Jan W3", y: 2000000, fillColor: "#008000" },
        { x: "Jan W4", y: 4000000, fillColor: "#008000" },
        { x: "Feb W1", y: 300000, fillColor: "#008000" },
        { x: "Feb W2", y: 700000, fillColor: "#008000" },
        { x: "Feb W3", y: 2500000, fillColor: "#008000" },
        { x: "Feb W4", y: 4500000, fillColor: "#008000" },
        { x: "Mar W1", y: 1500000, fillColor: "#008000" },
        { x: "Mar W2", y: 3500000, fillColor: "#008000" },
        { x: "Mar W3", y: 1000000, fillColor: "#008000" },
        { x: "Mar W4", y: 2800000, fillColor: "#008000" },
        { x: "Apr W1", y: 4200000, fillColor: "#008000" },
        { x: "Apr W2", y: 2200000, fillColor: "#008000" },
        { x: "Apr W3", y: 3800000, fillColor: "#008000" },
        { x: "Apr W4", y: 1200000, fillColor: "#008000" },
        { x: "May W1", y: 800000, fillColor: "#008000" },
        { x: "May W2", y: 4800000, fillColor: "#008000" },
        { x: "May W3", y: 1800000, fillColor: "#008000" },
        { x: "May W4", y: 3200000, fillColor: "#008000" },
        { x: "Jun W1", y: 2600000, fillColor: "#008000" },
        { x: "Jun W2", y: 600000, fillColor: "#008000" },
        { x: "Jun W3", y: 4900000, fillColor: "#008000" },
        { x: "Jun W4", y: 2900000, fillColor: "#008000" },
        { x: "Jul W1", y: 3300000, fillColor: "#008000" },
        { x: "Jul W2", y: 1300000, fillColor: "#008000" },
        { x: "Jul W3", y: 500000, fillColor: "#008000" },
        { x: "Jul W4", y: 4100000, fillColor: "#008000" },
        { x: "Aug W1", y: 900000, fillColor: "#008000" },
        { x: "Aug W2", y: 3900000, fillColor: "#008000" },
        { x: "Aug W3", y: 1600000, fillColor: "#008000" },
        { x: "Aug W4", y: 2300000, fillColor: "#008000" },
        { x: "Sep W1", y: 4600000, fillColor: "#008000" },
        { x: "Sep W2", y: 2700000, fillColor: "#008000" },
        { x: "Sep W3", y: 750000, fillColor: "#008000" },
        { x: "Sep W4", y: 3100000, fillColor: "#008000" },
        { x: "Oct W1", y: 1100000, fillColor: "#008000" },
        { x: "Oct W2", y: 4300000, fillColor: "#008000" },
        { x: "Oct W3", y: 2100000, fillColor: "#008000" },
        { x: "Oct W4", y: 3600000, fillColor: "#008000" },
        { x: "Nov W1", y: 1900000, fillColor: "#008000" },
        { x: "Nov W2", y: 300000, fillColor: "#008000" },
        { x: "Nov W3", y: 4700000, fillColor: "#008000" },
        { x: "Nov W4", y: 2400000, fillColor: "#008000" },
        { x: "Dec W1", y: 3700000, fillColor: "#008000" },
        { x: "Dec W2", y: 1700000, fillColor: "#008000" },
        { x: "Dec W3", y: 950000, fillColor: "#008000" },
        { x: "Dec W4", y: 4400000, fillColor: "#008000" },
      ],
    },
    {
      name: "Pending",
      data: [
        { x: "Jan W1", y: 50000, fillColor: "#FFFFFF" },
        { x: "Jan W2", y: 250000, fillColor: "#FFFFFF" },
        { x: "Jan W3", y: 1000000, fillColor: "#FFFFFF" },
        { x: "Jan W4", y: 2000000, fillColor: "#FFFFFF" },
        { x: "Feb W1", y: 150000, fillColor: "#FFFFFF" },
        { x: "Feb W2", y: 350000, fillColor: "#FFFFFF" },
        { x: "Feb W3", y: 1250000, fillColor: "#FFFFFF" },
        { x: "Feb W4", y: 2250000, fillColor: "#FFFFFF" },
        { x: "Mar W1", y: 750000, fillColor: "#FFFFFF" },
        { x: "Mar W2", y: 1750000, fillColor: "#FFFFFF" },
        { x: "Mar W3", y: 500000, fillColor: "#FFFFFF" },
        { x: "Mar W4", y: 1400000, fillColor: "#FFFFFF" },
        { x: "Apr W1", y: 2100000, fillColor: "#FFFFFF" },
        { x: "Apr W2", y: 1100000, fillColor: "#FFFFFF" },
        { x: "Apr W3", y: 1900000, fillColor: "#FFFFFF" },
        { x: "Apr W4", y: 600000, fillColor: "#FFFFFF" },
        { x: "May W1", y: 400000, fillColor: "#FFFFFF" },
        { x: "May W2", y: 2400000, fillColor: "#FFFFFF" },
        { x: "May W3", y: 900000, fillColor: "#FFFFFF" },
        { x: "May W4", y: 1600000, fillColor: "#FFFFFF" },
        { x: "Jun W1", y: 1300000, fillColor: "#FFFFFF" },
        { x: "Jun W2", y: 300000, fillColor: "#FFFFFF" },
        { x: "Jun W3", y: 2450000, fillColor: "#FFFFFF" },
        { x: "Jun W4", y: 1450000, fillColor: "#FFFFFF" },
        { x: "Jul W1", y: 1650000, fillColor: "#FFFFFF" },
        { x: "Jul W2", y: 650000, fillColor: "#FFFFFF" },
        { x: "Jul W3", y: 250000, fillColor: "#FFFFFF" },
        { x: "Jul W4", y: 2050000, fillColor: "#FFFFFF" },
        { x: "Aug W1", y: 450000, fillColor: "#FFFFFF" },
        { x: "Aug W2", y: 1950000, fillColor: "#FFFFFF" },
        { x: "Aug W3", y: 800000, fillColor: "#FFFFFF" },
        { x: "Aug W4", y: 1150000, fillColor: "#FFFFFF" },
        { x: "Sep W1", y: 2300000, fillColor: "#FFFFFF" },
        { x: "Sep W2", y: 1350000, fillColor: "#FFFFFF" },
        { x: "Sep W3", y: 375000, fillColor: "#FFFFFF" },
        { x: "Sep W4", y: 1550000, fillColor: "#FFFFFF" },
        { x: "Oct W1", y: 550000, fillColor: "#FFFFFF" },
        { x: "Oct W2", y: 2150000, fillColor: "#FFFFFF" },
        { x: "Oct W3", y: 1050000, fillColor: "#FFFFFF" },
        { x: "Oct W4", y: 1800000, fillColor: "#FFFFFF" },
        { x: "Nov W1", y: 950000, fillColor: "#FFFFFF" },
        { x: "Nov W2", y: 150000, fillColor: "#FFFFFF" },
        { x: "Nov W3", y: 2350000, fillColor: "#FFFFFF" },
        { x: "Nov W4", y: 1200000, fillColor: "#FFFFFF" },
        { x: "Dec W1", y: 1850000, fillColor: "#FFFFFF" },
        { x: "Dec W2", y: 850000, fillColor: "#FFFFFF" },
        { x: "Dec W3", y: 475000, fillColor: "#FFFFFF" },
        { x: "Dec W4", y: 2200000, fillColor: "#FFFFFF" },
      ],
    },
  ]);

  return (
    <SolidApexCharts
      width={"100%"}
      height={"100%"}
      type="scatter"
      options={options()}
      series={series()}
    />
  );
};

export default ScatterPlot;
