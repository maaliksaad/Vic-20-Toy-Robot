import React, { useRef } from "react";
import { motion } from "framer-motion";
import { slideUp } from "@/util/motion";
import { useInView } from "framer-motion";

const Divider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={slideUp(0)}
      animate={isInView ? "visible" : "hidden"}
      className="mx-auto  block max-w-20 mt-[-1.625rem]"
    >
      <img
        className=" w-[3.125rem] "
        src="/images/divider-01.svg"
        alt="divider"
      />
    </motion.div>
  );
};

export default Divider;
