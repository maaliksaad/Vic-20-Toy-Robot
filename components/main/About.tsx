import React, { useRef } from "react";
import { motion } from "framer-motion";
import { slideUp } from "@/util/motion";
import { useInView } from "framer-motion";

const About = () => {
  const refAbout = useRef(null);
  const refdiv1 = useRef(null);
  const refdiv2 = useRef(null);

  const isInView = useInView(refAbout, { once: true });
  const isInView1 = useInView(refdiv1, { once: true });
  const isInView2 = useInView(refdiv2, { once: true });

  return (
    <section
      id="about"
      className="flex flex-col gap-20 items-center justify-center p-20 "
    >
      <motion.div
        ref={refAbout}
        initial="hidden"
        variants={slideUp(0.3)}
        animate={isInView ? "visible" : "hidden"}
        className="text-white font-bold text-6xl"
      >
        <h1>ABOUT VIC-20</h1>
      </motion.div>
      <motion.div
        ref={refdiv1}
        initial="hidden"
        variants={slideUp(0.3)}
        animate={isInView1 ? "visible" : "hidden"}
        className="flex items-center justify-center text-white   px-16"
      >
        <div className=" w-1/2">
          <img
            src="/images/features-03.png"
            alt="feature"
            height={500}
            width={500}
          />
        </div>

        <div className="p-16 w-1/2 text-left">
          <h2 className="tg-text-gradient text-6xl font-bold mb-4">
            Elon Musk's Inspiration
          </h2>
          <p className="text-xl opacity-[0.8] leading-normal">
            Elon Musk credits the VIC-20 computer for getting him hooked on
            programming. The VIC-20 computer inspired greatness in 10-year-old
            Elon just as the VIC-20 robot will inspire greatness in children.
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={refdiv2}
        initial="hidden"
        variants={slideUp(0.3)}
        animate={isInView2 ? "visible" : "hidden"}
        className="flex items-center justify-center text-white gap-7  px-5"
      >
        <div className="p-16  w-3/5 text-left">
          <h2 className="tg-text-gradient text-6xl font-bold mb-4">
            Ashlee Vance
          </h2>
          <div className="text-xl opacity-[0.8] leading-normal mr-32">
            <p className="mb-4">
              Excerpt from Ashlee Vance's biography on Elon Musk, recounting his
              experience when, at 10 years old, he saw the VIC-20 computer for
              the first time.
            </p>
            <p className="mb-4">
              Musk said, 'He felt awed right away—'It was like, 'Whoa. Holy
              shit!''—by this machine that could be programmed to do a person’s
              bidding. 'I had to have that and then hounded my father to get the
              computer,' Musk said.
            </p>
            <p className="mb-4">
              Soon he owned a Commodore VIC-20, a popular home machine that went
              on sale in 1980. Elon’s computer arrived with 5 kilobytes of
              memory and a workbook on the BASIC programming language.
            </p>
            <p className="mb-4">
              'It was supposed to take like 6 months to get through all the
              lessons,' Elon said. 'I just got super OCD on it and stayed up for
              3 days with no sleep and did the entire thing. It seemed like the
              most super compelling thing I had ever seen.'
            </p>
            <p className=" text-3xl font-bold opacity-1">
              "VIC-20 AI toy robot inspiring greatness in children."
            </p>
          </div>
        </div>

        <div className=" w-2/5 pl-26  ">
          <img
            src="/images/features-02.png"
            alt="feature"
            height={600}
            width={400}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
