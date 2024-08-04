import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ActivityBarGraph = () => {
  const data = {
    labels: Array.from({ length: 27 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Dataset 1",
        data: Array.from({ length: 27 }, () =>
          Math.floor(Math.random() * 15001)
        ),
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          stepSize: 7,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `${value / 1000}k`;
          },
          stepSize: 5000,
        },
      },
    },
    style: {
      backgroundColor: "red",
    },
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl w-full p-5 h-64">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 my-2">
          Activity
        </h2>

        <div className="">
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-2xl block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>
      <div className="h-5/6">
        <Bar data={data} options={options} style={{ margin: "auto" }} />
      </div>
    </div>
  );
};

export default ActivityBarGraph;
