import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { slideUp } from "@/util/motion";
import { useRef } from "react";

interface Props {
  phase: string;
  context: string;
}

const RoadmapCard = ({ phase, context }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex flex-col bg-[hsla(0,0%,100%,.05)] max-w-[466px] shadow-[0 3px 8px -1px rgba(0,0,0,.08)] rounded-[32px] text-xl leading-[1.45] p-8">
      <motion.div
        ref={ref}
        initial="hidden"
        variants={slideUp(0.3)}
        animate={isInView ? "visible" : "hidden"}
      >
        <p className="tg-text-gradient mb-4">Phase 0{phase}</p>
        <p className="text-white">{context}</p>
      </motion.div>
    </div>
  );
};

export default RoadmapCard;
