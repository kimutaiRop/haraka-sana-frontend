"use client";
import { SolidApexCharts } from "solid-apexcharts";
import { createSignal } from "solid-js";

const Sparkline = ({ color }: { color: string }) => {
  const [options] = createSignal({
    series: [
      {
        name: "STOCK ABC", // You can remove the name if you don't need it in tooltip
        data: [
          { x: new Date("2024-01-01").getTime(), y: 34 },
          { x: new Date("2024-01-02").getTime(), y: 43 },
          { x: new Date("2024-01-03").getTime(), y: 31 },
          { x: new Date("2024-01-04").getTime(), y: 43 },
          { x: new Date("2024-01-05").getTime(), y: 33 },
          { x: new Date("2024-01-06").getTime(), y: 52 },
          { x: new Date("2024-01-07").getTime(), y: 31 },
          { x: new Date("2024-01-08").getTime(), y: 43 },
          { x: new Date("2024-01-09").getTime(), y: 52 },
          { x: new Date("2024-01-10").getTime(), y: 41 },
          { x: new Date("2024-01-11").getTime(), y: 43 },
          { x: new Date("2024-01-12").getTime(), y: 33 },
        ], // Replace with your actual data
      },
    ],
    chart: {
      type: "line",
      height: 50, // Reduced height for a compact sparkline
      sparkline: {
        enabled: true, // Enable sparkline mode to remove extra elements
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false, // Hide toolbar
      },
    },
    dataLabels: {
      enabled: false, // Hide data labels
    },
    stroke: {
      curve: "smooth",
      width: 2, // Adjust stroke width if needed
    },
    tooltip: {
      enabled: false, // Hide tooltip
    },
    xaxis: {
      type: "datetime",
      labels: {
        show: false, // Hide x-axis labels
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      axisBorder: {
        show: false, // Hide x-axis border
      },
    },
    yaxis: {
      show: false, // Hide y-axis completely
    },
    legend: {
      show: false, // Hide legend
    },
    colors: [color], // Keep your desired line color
  });

  return (
    <SolidApexCharts
      type="area"
      options={options()}
      series={options().series}
      width={"100%"}
    />
  );
};

export default Sparkline;
