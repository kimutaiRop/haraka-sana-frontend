"use client";
import { SolidApexCharts } from "solid-apexcharts";
import { createSignal } from "solid-js";

const RadialBar = () => {
  const [options] = createSignal({
    chart: {
      type: "radialBar",
      height: 350,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%", // Adjust size of the center hole
        },
        track: {
          background: "#2D3748", // Dark track color
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            show: false, // Hide category name inside the chart
          },
          value: {
            fontSize: "24px",
            fontWeight: "bold",
            color: "#fff",
            offsetY: 10,
            formatter: (val) => `$${val.toLocaleString()}.00`,
          },
        },
        roundedCorners: true, // Make rings smooth
      },
    },
    colors: ["#17B26A", "#1F1C27", "#067647"], // Green shades
    labels: ["Pending", "COD", "Inventory"],
    legend: {
      show: true,
      position: "bottom",
      markers: {
        width: 10,
        height: 10,
        radius: 12, // Make legend markers rounded
      },
      labels: {
        colors: "#fff",
      },
    },
  });

  const [series] = createSignal([65, 35, 80]); // Percent values for Inventory, COD, and Pending

  return (
    <SolidApexCharts
      width="100%"
      height={300}
      type="radialBar"
      options={options()}
      series={series()}
    />
  );
};

export default RadialBar;
