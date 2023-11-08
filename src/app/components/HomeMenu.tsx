import React from "react";
import MenuItem from "./MenuItem";

function HomeMenu() {
  return (
    <div className="flex flex-col">
      <h2 className="text-center text-white font-bold text-2xl uppercase">
        Our Menu
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}

export default HomeMenu;
