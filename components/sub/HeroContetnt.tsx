import React, { useRef } from "react";
import { motion } from "framer-motion";
import { slideUp } from "@/util/motion";
import { useInView } from "framer-motion";

const HeroContetnt = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex flex-row z-20 absolute w-full justify-around mt-36 pt-32 text-white font-bold">
      <img
        src="/images/circle-01.png"
        alt="circle"
        loading="lazy"
        className="h-12 relative top-6 left-[10.25rem]"
      />
      <motion.div
        ref={ref}
        initial="hidden"
        variants={slideUp(0.3)}
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center animate-slide-down"
      >
        <h1 className=" text-8xl ">VIC-20 Robot</h1>
        <div>
          <p className=" text-4xl mt-4">this is dummy text</p>
        </div>
      </motion.div>
      <img
        src="/images/x.png"
        alt="x"
        loading="lazy"
        className="h-12 relative top-6 right-[10.25rem]"
      />
    </div>
  );
};

export default HeroContetnt;
