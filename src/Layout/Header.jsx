import React from "react";
import {
  MdMessage,
  MdSettings,
  MdNotifications,
  MdSearch,
} from "react-icons/md";

function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 before:absolute before:inset-0 before:backdrop-blur-md max-lg:before:bg-white/90 dark:max-lg:before:bg-gray-800/90 before:-z-10 z-30 max-lg:shadow-sm lg:before:bg-gray-100/90 dark:lg:before:bg-gray-900/90">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:border-b border-gray-200 dark:border-gray-700/60">
          <div className="flex">
            <button
              className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            <div className="max-w-md mx-5">
              <div className="relative w-full ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <MdSearch />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MdMessage className="bg-gray-600 text-3xl p-2 rounded-full text-white" />
            <MdNotifications className="bg-gray-600 text-3xl p-2 rounded-full text-white" />
            <MdSettings className="bg-gray-600 text-3xl p-2 rounded-full text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
