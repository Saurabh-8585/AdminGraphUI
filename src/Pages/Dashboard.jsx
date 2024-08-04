import React, { useState } from "react";

import Sidebar from "../Layout/SideBar";
import Header from "../Layout/Header";
import FeedBack from "../Components/FeedBack";
import OrderTable from "../Components/OrderTable";
import GoalCard from "../Components/GoalCard";
import WidgetCard from "../Components/WidgetCard";
import ProfitProgress from "../Components/ProfitProgress";
import ActivityBarGraph from "../Components/ActivityBarGraph";
function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                  Dashboard
                </h1>
              </div>
            </div>

            <div className="flex flex-col w-full gap-7 py-2">
              <div className="flex justify-center lg:flex-nowrap w-full items-center  flex-wrap   gap-2">
                <WidgetCard />
                <div className="w-full  lg:w-[40%] ">
                  <ProfitProgress />
                </div>
              </div>
              <div className="flex justify-center md:flex-nowrap w-full items-center  flex-wrap   gap-2">
                <div className="flex gap-4 lg:flex-nowrap  flex-wrap w-full  md:w-[60%]">
                  <ActivityBarGraph />
                </div>
                <div className="w-full md:w-[40%] h-full">
                  <GoalCard />
                </div>
              </div>
              <div className="flex justify-center md:flex-nowrap w-full items-center  flex-wrap   gap-2">
                <div className="flex gap-4 lg:flex-nowrap  flex-wrap w-full  md:w-[60%]">
                  <OrderTable />
                </div>
                <div className="w-full md:w-[40%] h-full">
                  <FeedBack />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
