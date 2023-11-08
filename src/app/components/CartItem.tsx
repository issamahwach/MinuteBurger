import { CartItem } from "@/types";
import React from "react";

function CartItem({
  id,
  image,
  title,
  quantity,
  price,
  increaseQuantity,
  decreaseQuantity,
}: CartItem) {
  return (
    <div className="grid grid-cols-2 text-gray-100">
      <div className="flex flex-row gap-2 items-center">
        <img src={image} className="w-16" />
        <div>
          <p>{title}</p>
          <p className="text-sm text-gray-300">${price}</p>
        </div>
      </div>
      <div className="flex flex-row justify-end items-center gap-4">
        <button
          type="button"
          onClick={() => decreaseQuantity(id)}
          className="px-4 py-2 bg-yellow-500 text-xl text-black font-bold rounded-md"
        >
          -
        </button>
        <span className="font-bold text-xl">{quantity}</span>
        <button
          type="button"
          onClick={() => increaseQuantity(id)}
          className="px-4 py-2 bg-yellow-500 text-xl text-black font-bold rounded-md"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
