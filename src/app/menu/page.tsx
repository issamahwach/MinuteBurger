import React from "react";
import MenuItem from "../components/MenuItem";

function page() {
  return (
    <div className="px-4 pt-36 lg:px-24 min-h-screen">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 bg-gray-500/5 rounded-lg backdrop-filter backdrop-blur-lg text-white">
          <div className="flex flex-row justify-between items-center py-4 px-4 lg:px-6 border-b border-gray-500">
            <span>Filters</span>
            <svg
              className="w-8 h-8 text-white"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 w-full">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
