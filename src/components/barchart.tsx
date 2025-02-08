import { SolidApexCharts } from "solid-apexcharts";
import { createSignal } from "solid-js";

function BarChart() {
  const [options] = createSignal({
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    xaxis: {
      categories: ["Total Cities", "Nairobi"],
      axisBorder: { show: false }, // Remove x-axis border
      axisTicks: { show: false }, // Remove x-axis ticks
      labels: {
        style: {
          fontSize: "12px",
          colors: "#ffffff", // White labels
        },
      },
    },
    yaxis: {
      show: false, // Remove y-axis completely
    },
    grid: {
      show: false, // Remove grid
    },
    colors: ["#17B26A", "#067647"], // Motorcycle (lighter green) & Car (darker green)
    tooltip: { theme: "dark" },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#ffffff"], // White bar labels
      },
    },
    legend: {
      position: "bottom",
      labels: {
        colors: "#ffffff", // White legend labels
      },
    },
  });

  const [series] = createSignal([
    { name: "Motorcycle", data: [40, 56] },
    { name: "Car", data: [60, 44] },
  ]);

  return (
    <SolidApexCharts
      width="100%"
      height="100%"
      type="bar"
      options={options()}
      series={series()}
    />
  );
}

export default BarChart;
