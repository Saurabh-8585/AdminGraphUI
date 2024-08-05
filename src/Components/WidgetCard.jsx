import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import {
  MdShoppingCart,
  MdLocalShipping,
  MdCancel,
  MdAttachMoney,
} from "react-icons/md";

const WidgetCard = () => {
  const gradientBackgrounds = {
    blue: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600",
    green: "bg-gradient-to-r from-green-400 via-green-500 to-green-600",
    orange: "bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600",
    pink: "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600",
  };

  const cardData = [
    {
      icon: (
        <MdShoppingCart
          className={`text-4xl p-2 rounded-lg text-white ${gradientBackgrounds.blue}`}
        />
      ),
      title: "Total Orders",
      count: "75",
      percent: 3,
      isIncrease: true,
    },
    {
      icon: (
        <MdLocalShipping
          className={`text-4xl p-2 rounded-lg text-white ${gradientBackgrounds.green}`}
        />
      ),
      title: "Total Delivered",
      count: "70",
      percent: 3,
      isIncrease: false,
    },
    {
      icon: (
        <MdCancel
          className={`text-4xl p-2 rounded-lg text-white ${gradientBackgrounds.orange}`}
        />
      ),
      title: "Total Cancelled",
      count: "05",
      percent: 3,
      isIncrease: true,
    },
    {
      icon: (
        <MdAttachMoney
          className={`text-4xl p-2 rounded-lg text-white ${gradientBackgrounds.pink}`}
        />
      ),
      title: "Total Revenue",
      count: 12,
      percent: 3,
      isIncrease: false,
      isRevenue: true,
    },
  ];

  return (
    <div className="flex gap-4 lg:flex-nowrap flex-wrap w-full lg:w-[60%]">
      {cardData.map(
        ({ count, icon, isIncrease, percent, title, isRevenue }, index) => (
          <div
            className="flex flex-col w-full bg-white dark:bg-gray-800 shadow-sm rounded-xl py-5"
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
                  className={`flex items-center text-sm font-bold ${isIncrease ? "text-green-700" : "text-red-700"
                    } px-1.5 rounded-full`}
                >
                  {isIncrease ? (
                    <FaCaretUp className="text-xl font-bold" />
                  ) : (
                    <FaCaretDown className="text-xl font-bold" />
                  )}{" "}
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
