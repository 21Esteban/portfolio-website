"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-bold"> Software developer</span> with experience
        in languages such as{" "}
        <span className="font-bold">C++, JavaScript, and Python.</span> I
        specialize in web development, using modern frameworks like Vue.js and
        React.js, as well as tools like Docker to optimize my projects. I also
        have experience in mobile development, having worked with frameworks
        like <span className="font-bold">React Native and flutter</span> to
        build{" "}
        <span className="font-bold">high-performance mobile applications</span>.
        I consider myself a <span className="font-bold">proactive person</span>{" "}
        , always in search of new challenges that allow me to learn and improve.{" "}
        <span className="font-bold">
          My goal is to develop efficient, high-quality solutions
        </span>{" "}
        that have a positive impact on the teams and projects I participate in.
      </p>
    </motion.section>
  );
}
