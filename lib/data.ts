import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Technical Program",
    location: "Medellin",
    description: "I graduated after one year of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Software Developer",
    location: "Medellin",
    description:
      "I worked as a software developer for 1 year at JlCoders, using frameworks such as React.js, Express, Fastify, Nest.js, Next.js, Tailwind CSS, React Native, and databases like PostgreSQL and MongoDB",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Software Developer",
    location: "Medellin",
    description:
      "I worked as a Software Developer for 5 months at OneGroupIT, using frameworks such as Vue.js, Fastify, and Next.js, and databases like MongoDB.",

    icon: React.createElement(FaVuejs),
    date: "2024 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C++",
  "React",
  "React native",
  "Flutter",
  "VueJs",
  "NextJs",
  "NodeJs",
  "Git/Github",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "NestJs",
  "PostgreSQL",
  "Python",
] as const;
