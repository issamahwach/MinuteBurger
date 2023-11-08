"use client";
import React from "react";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";
function HomeMenu() {
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
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
    </motion.div>
  );
}

export default HomeMenu;
