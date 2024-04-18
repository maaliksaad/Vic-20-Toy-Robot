import React, { useRef } from "react";
import { motion } from "framer-motion";
import { slideUp } from "@/util/motion";
import { useInView } from "framer-motion";
import RoadmapTable from "../sub/RoadmapTable";

const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="roadmap"
      className="flex flex-col gap-20 items-center justify-center p-28 m-10"
    >
      <div className="text-white font-bold text-7xl">
        <motion.h1
          ref={ref}
          initial="hidden"
          variants={slideUp(0.3)}
          animate={isInView ? "visible" : "hidden"}
        >
          VIC-20 Roadmap
        </motion.h1>
      </div>
      <RoadmapTable />
    </section>
  );
};

export default Roadmap;
