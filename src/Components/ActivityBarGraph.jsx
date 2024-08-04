import React from "react";
import Chart from "react-apexcharts";
import { graphThemeColor } from "../Constants/constant";

const ActivityBarGraph = () => {
  const data = {
    series: [
      {
        name: "Dataset 1",
        data: Array.from({ length: 27 }, () =>
          Math.floor(Math.random() * 15001)
        ),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 7,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: Array.from({ length: 27 }, (_, i) => i + 1),
        tickAmount: 7,
        labels: {
          style: {
            colors: "#FFFFFF",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return `${value / 1000}k`;
          },
          tickAmount: 4,
          style: {
            colors: "#FFFFFF",
          },
        },
      },
      fill: {
        colors: [graphThemeColor],
      },
      tooltip: {
        enabled: false,
      },
      grid: {
        show: false,
      },
    },
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl w-full p-5 h-64">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 my-2">
          Activity
        </h2>

        <div>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-2xl block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>
      <div className="h-5/6">
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          height="100%"
        />
      </div>
    </div>
  );
};

export default ActivityBarGraph;
