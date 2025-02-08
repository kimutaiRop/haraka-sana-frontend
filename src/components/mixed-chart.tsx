"use client";
import { SolidApexCharts } from "solid-apexcharts";
import { createSignal } from "solid-js";

const MixedChart = () => {
  const [options] = createSignal({
    chart: {
      type: "bar",
      height: 350,
      stacked: true, // Enable stacked bars
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 6,
      },
    },
    stroke: {
      show: true,
      width: [0, 3], // Hide stroke for bars, show for line
      curve: "smooth", // Smooth line
    },
    colors: ["#00C49F", "#117733"], // Gradient-like bar colors
    xaxis: {
      categories: ["JKT", "TNG", "DPK", "BKS", "BND", "YGK"],
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
        formatter: (val) => `${val / 1000000}M`,
      },
    },
    grid: {
      borderColor: "#ffffff33", // Dotted grid lines
      strokeDashArray: 5,
    },
    markers: {
      size: 5,
      colors: ["#fff"],
      strokeColors: "#FF3B3B", // Red border
      strokeWidth: 2,
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    },
  });

  const [series] = createSignal([
    {
      name: "Bar 1",
      type: "bar",
      data: [2.1e6, 1.8e6, 2.9e6, 2.0e6, 1.7e6, 1.9e6],
    },
    {
      name: "Bar 2",
      type: "bar",
      data: [1.2e6, 1.5e6, 1.4e6, 1.3e6, 1.1e6, 1.3e6],
    },
    {
      name: "Line",
      type: "line",
      data: [2.2e6, 1.9e6, 3.1e6, 2.1e6, 1.8e6, 2.0e6],
    },
  ]);

  return (
    <SolidApexCharts
      width="100%"
      height={300}
      type="line"
      options={options()}
      series={series()}
    />
  );
};

export default MixedChart;
