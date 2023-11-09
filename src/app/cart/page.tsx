"use client";
import React from "react";
import CartItem from "../components/CartItem";
import { useGlobalContext } from "@/context/store";

function page() {
  const { cart, updateCart } = useGlobalContext();
  const [subtotal, setSubtotal] = React.useState(0);

  React.useEffect(() => {
    let total = cart.reduce((a, b) => a + (b.quantity * b.price || 0), 0);
    setSubtotal(total);
  }, [cart]);

  const onIncreaseQuantity = (id: number) => {
    let clonedItems = [...cart];
    clonedItems.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
    });
    updateCart(clonedItems);
  };
  const onDecreaseQuantity = (id: number) => {
    let clonedItems = [...cart];
    const index = clonedItems.findIndex((obj) => obj.id === id);
    if (index !== -1) {
      if (clonedItems[index].quantity >= 1) {
        clonedItems[index].quantity -= 1;
        updateCart(clonedItems);
      } else {
        clonedItems.splice(index, 1);
        updateCart(clonedItems);
      }
    }
  };
  return (
    <div className="px-4 pt-36 lg:px-24 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2 bg-gray-500/5 rounded-lg backdrop-filter backdrop-blur-lg">
          <div className="border-b border-gray-600 py-4 px-4">
            <h2 className="text-white text-xl">Contact Info</h2>
          </div>
          <div className="px-4 py-4">
            <div className="flex flex-col">
              <label className="text-gray-100">Full Name: *</label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="bg-transparent border border-gray-500 text-white mt-1"
              />
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex flex-col">
              <label className="text-gray-100">Phone Number: *</label>
              <input
                type="text"
                placeholder="Your Phone Number"
                className="bg-transparent border border-gray-500 text-white mt-1"
              />
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex flex-col">
              <label className="text-gray-100">Address: *</label>
              <input
                type="text"
                placeholder="Your Address"
                className="bg-transparent border border-gray-500 text-white mt-1"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-gray-500/5 rounded-lg backdrop-filter backdrop-blur-lg">
          <div className="border-b border-gray-600 py-4 px-4">
            <h2 className="text-white text-xl">Order Summary</h2>
          </div>
          <div className="px-4 py-4 flex flex-col gap-4 border-b border-gray-600">
            {cart.map((item, index) => (
              <CartItem
                key={index}
                name={item.name}
                image={item.image}
                id={item.id}
                price={item.price}
                quantity={item.quantity}
                increaseQuantity={onIncreaseQuantity}
                decreaseQuantity={onDecreaseQuantity}
              />
            ))}
          </div>
          <div className="px-4 py-6 flex flex-col">
            <div className="flex flex-row justify-between text-white">
              <span>Subtotal:</span>
              <span className="font-semibold">$ {subtotal}</span>
            </div>

            <button
              type="button"
              className="w-full rounded-full py-2 font-bold text-lg bg-yellow-400 text-black mt-10 transition-transform hover:scale-105 shadow-lg shadow-yellow-800"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
