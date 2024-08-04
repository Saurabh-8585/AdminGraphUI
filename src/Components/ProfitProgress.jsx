import React from "react";
import Chart from "react-apexcharts";
import { FaCaretUp } from "react-icons/fa";
import { graphThemeColor } from "../Constants/constant";

const ProfitProgress = () => {
  const data = {
    series: [70, 30],
    options: {
      chart: {
        type: "donut",
        width: "100%",
        height: "100%",
        toolbar: {
          show: false,
        },
      },
      colors: [graphThemeColor, "#52525B"],
      plotOptions: {
        pie: {
          donut: {
            size: "80%",
            background: "transparent",
            labels: {
              show: true,
              name: {
                show: false,
              },
              value: {
                show: false,
              },
              total: {
                show: true,
                showAlways: true,
                label: "70%",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#000",
              },
            },
          },
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: { enabled: false },
      legend: { show: false },
    },
  };

  return (
    <div className="flex justify-between w-full bg-white dark:bg-gray-800 shadow-sm rounded-xl p-5 h-[9.5rem]">
      <div className="flex flex-col justify-between gap-1">
        <span>Net Profit</span>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          $6759.25
        </h2>
        <div className="flex items-center text-sm font-bold text-green-700 px-1.5 rounded-full ">
          <FaCaretUp className="text-xl font-bold" />
          3%
        </div>
      </div>
      <div className="relative ">
        <Chart
          options={data.options}
          series={data.series}
          type="donut"
          height={150}
          width={200}
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl">
          70%
        </h1>
      </div>
    </div>
  );
};

export default ProfitProgress;
