import { CartItemProps } from "@/types";
import React from "react";

interface CartItemComponent extends CartItemProps {
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

function CartItem({
  id,
  image,
  name,
  quantity,
  price,
  increaseQuantity,
  decreaseQuantity,
}: CartItemComponent) {
  return (
    <div className="grid grid-cols-2 text-gray-100">
      <div className="flex flex-row gap-2 items-center">
        <img src={image} className="w-16" />
        <div>
          <p>{name}</p>
          <p className="text-sm text-gray-300">${price}</p>
        </div>
      </div>
      <div className="flex flex-row justify-end items-center gap-4">
        <button
          type="button"
          onClick={() => decreaseQuantity(id)}
          className="p-1 bg-yellow-500 text-xl text-black font-bold rounded-md"
        >
          {quantity === 0 ? (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        <span className="lg:font-bold lg:text-xl">{quantity}</span>
        <button
          type="button"
          onClick={() => increaseQuantity(id)}
          className="p-1 bg-yellow-500 text-xl text-black font-bold rounded-md"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6v12m6-6H6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
