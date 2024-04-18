"use client";
import { slideUp } from "@/util/motion";
import { motion } from "framer-motion";
import React from "react";

const Nav = () => {
  return (
    <motion.div
      variants={slideUp(0.3)}
      className="flex sticky top-0 z-50 justify-between max-h-[200px] bg-transparent text-white font-bold p-5 px-36"
    >
      <div className="text-5xl  hover:text-purple-700">
        <a href="#home">Vic-20</a>
      </div>
      <div className="flex justify-around text-xl">
        <a href="" className="p-3 hover:text-purple-700">
          Home
        </a>
        <a href="#about" className="p-3 hover:text-purple-700">
          About
        </a>
        <a href="#roadmap" className="p-3 hover:text-purple-700">
          Roadmap
        </a>
        <a href="#community" className="p-3 hover:text-purple-700">
          Community
        </a>
      </div>
    </motion.div>
  );
};

export default Nav;
