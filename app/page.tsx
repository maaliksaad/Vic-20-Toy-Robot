"use client";

import About from "@/components/main/About";
import Collection from "@/components/main/Collection";
import Community from "@/components/main/Community";
import Divider from "@/components/main/Divider";
import Hero from "@/components/main/Hero";
import Nav from "@/components/main/Nav";
import Roadmap from "@/components/main/Roadmap";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div initial="hidden" animate="visible">
      <Nav />
      <main className="h-full w-full">
        <div className="flex flex-col">
          <Hero />
          <Divider />
          <About />
          <Divider />
          <Roadmap />
          <Divider />
          <Collection />
          <Divider />
          <Community />
        </div>
      </main>
    </motion.div>
  );
}
