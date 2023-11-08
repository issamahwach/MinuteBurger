import React from "react";

function ProductFilter() {
  return (
    <div>
      <div className="space-y-4 border-b px-4 lg:px-6 pb-6 border-gray-700">
        <div className="flex flex-row items-center gap-2">
          <input
            type="radio"
            value="ham"
            name="type"
            className="bg-yellow-800 checked:bg-yellow-400"
          />
          <label>All</label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            type="radio"
            value="ham"
            name="type"
            className="bg-yellow-800 checked:bg-yellow-400"
          />
          <label>Ham</label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            type="radio"
            value="ham"
            name="type"
            className="bg-yellow-800 checked:bg-yellow-400"
          />
          <label>Chicken</label>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
