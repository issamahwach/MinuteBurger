import React from "react";

function MenuItem() {
  return (
    <div className="group">
      <div className="flex flex-col items-center">
        <img
          src="/beef-burger.webp"
          className="w-64 transition-transform group-hover:translate-y-4 duration-300"
        />
        <p className="text-white uppercase text-xs lg:text-base">
          cheese hamburger
        </p>
        <p className="text-gray-400">$29.99</p>
        <button
          type="button"
          className="border border-gray-600 text-white px-8 py-2 mt-4 transition-colors hover:bg-white hover:text-black"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default MenuItem;