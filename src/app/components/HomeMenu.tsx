"use client";
import React from "react";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";
import foodMenu from "../../constant/foodMenu.json";
import { useGlobalContext } from "@/context/store";
function HomeMenu() {
  const { cart, updateCart } = useGlobalContext();

  const onAddToCart = (newItem: any) => {
    let updatedCart = [...cart];
    const index = updatedCart.findIndex((obj) => obj.id === newItem.id);
    if (index !== -1) {
      updatedCart[index].quantity += 1;
    } else {
      updatedCart.push({ ...newItem, quantity: 1 });
    }

    updateCart(updatedCart);
  };

  return (
    <motion.div
      initial={{ y: 250, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col">
        <h2 className="text-center text-white font-bold text-2xl uppercase">
          Our Menu
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          {foodMenu.map((item, index) => (
            <MenuItem
              id={item.id}
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
              addToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default HomeMenu;
