"use client";
import React from "react";
import { motion } from "framer-motion";
function page() {
  return (
    <div className="px-4 pt-36 lg:px-24 min-h-screen">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ ease: "easeOut", duration: 1.1 }}
        className="flex flex-col"
      >
        <div className="w-full relative bg-yellow-400 shadow-lg shadow-yellow-700 px-4 py-6 rotate-1 lg:rotate-2 rounded-lg">
          <div className="w-full px-8 py-8 bg-[#141414] rounded-lg backdrop-filter backdrop-blur-lg text-white -rotate-1 lg:-rotate-2 min-h-screen">
            <h2 className="text-yellow-400 text-5xl font-bold capitalize font-Caveat text-center lg:text-start">
              Our Story
            </h2>
            <p className="text-gray-100 text-xl mt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              vero eos molestiae itaque ipsa accusantium doloremque nulla
              corrupti? Sint iusto non placeat consequatur cum pariatur
              obcaecati est provident labore expedita. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Debitis fugit amet fuga
              pariatur impedit sint fugiat ex eligendi, quam error deleniti
              maiores provident quisquam voluptatum eius expedita vel
              exercitationem placeat!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default page;
