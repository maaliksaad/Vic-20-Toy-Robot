import React, { useRef } from "react";
import { motion } from "framer-motion";
import { slideUp } from "@/util/motion";
import { useInView } from "framer-motion";

const Community = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="community" className="m-20 pl-20 pr-16">
      <div className="flex flex-row justify-center items-center  ">
        <div className="absolute">
          <img
            src="/images/circle-01.png"
            alt="circle"
            loading="lazy"
            width={24}
            height={24}
            className="relative -top-11 right-[22.5rem]"
          />
          <img
            src="/images/x.png"
            alt="x"
            loading="lazy"
            width={24}
            height={24}
            className="relative top-[7.25rem] left-[21.5rem]"
          />
          <img
            src="/images/ethereum-02.png"
            alt="ethereum"
            loading="lazy"
            width={40}
            height={40}
            className="relative top-[-6rem] left-[23rem]"
          />
          <img
            src="/images/bitcoin-01.png"
            alt="bitcoin"
            loading="lazy"
            width={48}
            height={48}
            className="relative top-[2rem] right-[20.5rem]"
          />
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          variants={slideUp(0.3)}
          animate={isInView ? "visible" : "hidden"}
          className="text-white font-bold flex flex-col justify-center items-center w-1/2 text-center"
        >
          <div className="">
            <h2 className=" text-7xl m-4">The VIC-20 Toy Robot</h2>
          </div>
          <div className="bg-gradient-to-tr from-[#2600f3] to-[#ff00ea] rounded-full p-6 px-8 mt-4 max-w-fit">
            <a href="" className="text-2xl">
              Join Community
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
