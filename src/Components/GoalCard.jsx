import React from "react";
import { BiTargetLock } from "react-icons/bi";
import { GiHotMeal } from "react-icons/gi";
import { MdMenuBook } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const GoalCard = () => {
  const data = [
    {
      title: "Goals",
      icon: <BiTargetLock className="text-[#ff3658]" />,
      bg: "#FCA5A5",
    },
    {
      title: "Popular Dishes",
      icon: <GiHotMeal className="text-white" />,
      bg: "#4338CA",
    },
    {
      title: "Menus",
      icon: <MdMenuBook className="text-white" />,
      bg: "#06B6D4",
    },
  ];

  return (
    <div className="flex flex-col justify-center col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl w-full h-full px-5 py-7">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center px-2 my-4"
        >
          <div className="flex gap-5 items-center">
            <div
              className="p-2 rounded-full"
              style={{ backgroundColor: item.bg }}
            >
              {item.icon}
            </div>
            <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100">
              {item.title}
            </h2>
          </div>
          <div>
            <IoIosArrowForward className="bg-gray-600 text-4xl p-2 rounded-full text-white" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoalCard;
