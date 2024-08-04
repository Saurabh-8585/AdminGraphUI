import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import {
  MdShoppingCart,
  MdLocalShipping,
  MdCancel,
  MdAttachMoney,
} from "react-icons/md";
const WidgetCard = () => {
  const commonClass = "bg-gray-600 text-4xl p-2 rounded-lg text-white";

  const cardData = [
    {
      icon: <MdShoppingCart className={commonClass} />,
      title: "Total Orders",
      count: "75",
      percent: 3,
      percentColor: "green",
    },
    {
      icon: <MdLocalShipping className={commonClass} />,
      title: "Total Delivered",
      count: "70",
      percent: 3,
      percentColor: "red",
    },
    {
      icon: <MdCancel className={commonClass} />,
      title: "Total Cancelled",
      count: "05",
      percent: 3,
      percentColor: "green",
    },
    {
      icon: (
        <MdAttachMoney className="bg-gray-600 text-4xl p-2 rounded-md text-white" />
      ),
      title: "Total Revenue",
      count: 12,
      percent: 3,
      percentColor: "green",
      isRevenue: true,
    },
  ];
  return (
    <div className="flex gap-4 lg:flex-nowrap  flex-wrap w-full  lg:w-[60%]">
      {cardData.map(
        ({ count, icon, percent, percentColor, title, isRevenue }, index) => (
          <div
            className="flex flex-col w-full bg-white dark:bg-gray-800 shadow-sm rounded-xl py-5 "
            key={index}
          >
            <div className="px-3">
              <header className="flex justify-between flex-col items-start gap-2">
                {icon}
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {title}
                </h2>
              </header>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 mr-2">
                  {isRevenue && "$"}
                  {count}
                </div>
                <div
                  className={`flex  items-center text-sm font-medium text-${percentColor}-700 px-1.5  rounded-full`}
                >
                  {percentColor === "red" ? <FaCaretDown /> : <FaCaretUp />}{" "}
                  {percent}%
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default WidgetCard;
