import React, { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { slideUp } from "@/util/motion";
import { useInView } from "framer-motion";

interface Props {
  children: ReactNode;
  className: string;
}
const Card = ({ children, className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={slideUp(0.3)}
      animate={isInView ? "visible" : "hidden"}
      className={`${className} rounded-[24px] text-center p-4 shadow-md cursor-pointer bg-[hsla(0,0%,100%,.05)] max-w-fit `}
    >
      {children}
    </motion.div>
  );
};

export default Card;
