"use client";
import { SolidApexCharts } from "solid-apexcharts";
import { createSignal } from "solid-js";

const IncomeChart = () => {
  const [options] = createSignal({
    chart: {
      type: "area",
      height: 200,
      toolbar: {
        // to remove toolbar icons
        show: false,
      },
    },
    xaxis: {
      type: "category",
      categories: ["01-07 Apr", "08-14 Apr", "15-21 Apr", "22-30 Apr"],
      labels: {
        style: {
          colors: "#fff", // make the text on grid white
        },
      },
    },
    yaxis: {
      // Add yaxis labels style to make y-axis text white as well
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.4,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => `$${val.toLocaleString()}`,
      },
      theme: "dark",
    },
    markers: {
      size: 0, // remove markers
      colors: ["#00C49F"],
      strokeColors: "#fff",
      strokeWidth: 2,
    },
    grid: {
      borderColor: "#ccc",
      strokeDashArray: 9, // Makes the grid lines dotted
    },
  });

  const [series] = createSignal([
    {
      name: "Last Month",
      data: [10, 30, 65, 90],
    },
    {
      name: "THis Month",
      data: [20, 40, 55, 75],
    },
  ]);

  return (
    <SolidApexCharts
      width="100%"
      height={200}
      type="area"
      options={options()}
      series={series()}
    />
  );
};

export default IncomeChart;
