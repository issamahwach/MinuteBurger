import { MenuItemProps } from "@/types";
import React from "react";

interface MenuItemComponentProps extends MenuItemProps {
  addToCart: (item: MenuItemProps) => void;
}

function MenuItem({
  id,
  name,
  image,
  price,
  addToCart,
}: MenuItemComponentProps) {
  return (
    <div className="group">
      <div className="flex flex-col items-center">
        <img
          src={image}
          className="w-64 transition-transform group-hover:translate-y-4 duration-300"
        />
        <p className="text-white uppercase text-xs lg:text-base">{name}</p>
        <p className="text-gray-400 text-xs lg:text-base">${price}</p>
        <button
          type="button"
          onClick={() => addToCart({ id, name, image, price })}
          className="border border-gray-600 text-white px-8 py-2 mt-4 transition-colors hover:bg-white hover:text-black text-sm whitespace-nowrap"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
