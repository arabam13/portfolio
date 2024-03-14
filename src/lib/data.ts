import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import angularIcon from "/public/angular.png";
import apiRestIcon from "/public/api-rest.png";
import awsIcon from "/public/aws.jpg";
import bookStoreImg from "/public/bookStore.jpg";
import expressIcon from "/public/express.png";
import framerMotionIcon from "/public/framer-motion.png";
import gitIcon from "/public/git.png";
import javascrtipIcon from "/public/javascript.png";
import mongodbIcon from "/public/mongodb.png";
import nexjsIcon from "/public/nextjs.png";
import nodejsIcon from "/public/nodejs.jpg";
import postgresqlIcon from "/public/postgresql.png";
import prismaIcon from "/public/prisma.jpg";
import reactIcon from "/public/react.png";
import realEstateAgencyImg from "/public/realEstateAgency.jpg";
import reduxIcon from "/public/redux.png";
import rxjsIcon from "/public/rxjs.png";
import sqlIcon from "/public/sql.png";
import tailwindIcon from "/public/tailwind.png";
import typescriptIcon from "/public/typescript.png";
import zustandIcon from "/public/zustand.png";

export const links = [
  {
    name: "home",
    hash: "#home",
  },
  {
    name: "about",
    hash: "#about",
  },
  {
    name: "skills",
    hash: "#skills",
  },
  {
    name: "projects",
    hash: "#projects",
  },
  {
    name: "experience",
    hash: "#experience",
  },
  {
    name: "contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Master Degree",
    location: "Toulouse, France",
    description:
      "I graduated in statistics and business intelligence at Paul SABATIER University. I found a job as an IT corresponding, and then as statistician in assurance sector.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2019",
  },
  {
    title: "SQL Developer",
    location: "Marseille, France",
    description:
      "I'm working as a SQL developer in assurance sector. I'm in charge of the development of scripts, intended to process and analyze data.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Marseille, France",
    description:
      "I'm now a full-stack developer looking for a job, included freelance job. My stack includes React, Next.js, TypeScript, Angular, Express (Node.JS). I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    titleProject1: "",
    descriptionProject1: "",
    tags: [
      "React",
      "Typescript",
      "Context API",
      "SCSS",
      "Vitest",
      "React Testing Library",
      "Vercel",
    ],
    imageUrl: realEstateAgencyImg,
    linkUrl: "https://react-kasa-typescript.vercel.app/",
  },
  {
    titleProject2: "",
    descriptionProject2: "",
    tags: ["React", "Javascript", "Node.JS", "Express", "CI/CD", "AWS"],
    imageUrl: bookStoreImg,
    linkUrl: "https://book-store-aws.fr/",
  },
] as const;

export const skillsData = [
  { title: "Javascript", icon: javascrtipIcon },
  { title: "TypeScript", icon: typescriptIcon },
  { title: "React", icon: reactIcon },
  { title: "Next.JS", icon: nexjsIcon },
  { title: "Context API", icon: reactIcon },
  { title: "Redux", icon: reduxIcon },
  { title: "Zustand", icon: zustandIcon },
  { title: "Angular", icon: angularIcon },
  { title: "RxJS", icon: rxjsIcon },
  { title: "Node.JS", icon: nodejsIcon },
  { title: "Express.JS", icon: expressIcon },
  { title: "Git", icon: gitIcon },
  { title: "Tailwind", icon: tailwindIcon },
  { title: "Framer Motion", icon: framerMotionIcon },
  { title: "Prisma", icon: prismaIcon },
  { title: "SQL", icon: sqlIcon },
  { title: "API REST", icon: apiRestIcon },
  { title: "PostgreSQL", icon: postgresqlIcon },
  { title: "MongoDB", icon: mongodbIcon },
  { title: "AWS", icon: awsIcon },
] as const;
