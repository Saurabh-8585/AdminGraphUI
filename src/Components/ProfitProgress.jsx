import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { FaCaretUp } from "react-icons/fa";

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);
const ProfitProgress = () => {
  const data = {
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["red", "#e0e0e0"],
        hoverBackgroundColor: ["red", "#f5f5f5"],
        borderWidth: 0,
        datalabels: {
          display: false,
        },
      },
    ],
  };

  const options = {
    cutout: "80%",
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
      datalabels: {
        display: true,
        formatter: () => "70%",
        color: "#000",
        font: {
          size: 24,
          weight: "bold",
        },
        anchor: "center",
        align: "center",
      },
    },
  };

  return (
    <div className="flex justify-between w-full bg-white dark:bg-gray-800 shadow-sm rounded-xl p-5 h-[9.5rem]">
      <div className="flex flex-col justify-between gap-1">
        <span>Net Profit</span>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          $6759.25
        </h2>
        <div className="flex items-center text-sm font-medium text-green-700 px-1.5 rounded-full ">
          <FaCaretUp />
          3%
        </div>
      </div>
      <div className="relative">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default ProfitProgress;
