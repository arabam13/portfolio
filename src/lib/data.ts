import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import angularIcon from "/public/angular.png";
import awsIcon from "/public/aws.jpg";
import clinicalappImg from "/public/clinicalappImg.png";
import expressIcon from "/public/express.png";
import framerMotionIcon from "/public/framer-motion.png";
import gitIcon from "/public/git.png";
import javaIcon from "/public/java.png";
import javascrtipIcon from "/public/javaScript.png";
import mongodbIcon from "/public/mongodb.png";
import nexjsIcon from "/public/nextjs.png";
import nodejsIcon from "/public/nodejs.jpg";
import postgresqlIcon from "/public/postgresql.png";
import postsBlogImg from "/public/postsBlogImg.png";
import quizappImj from "/public/quizzappImj.png";
import reactIcon from "/public/react.png";
import realEstateAgencyImg from "/public/realEstateAgency.jpg";
import rxjs from "/public/RxJS.png";
import shopProductImg from "/public/shopProduct.png";
import sqlIcon from "/public/sql.png";
import tailwindIcon from "/public/tailwind.png";
import typescriptIcon from "/public/Typescript.png";

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
    titleExperiance1: "Master's degree in Computer Science",
    location: "Toulouse, France",
    descriptionExperiance1: "",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2019",
  },
  {
    titleExperiance2: "SQL Developer",
    location: "Marseille, France",
    descriptionExperiance2:
      "I'm working as a SQL developer in assurance sector. I'm in charge of the development of scripts, intended to process and analyze data.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2024",
  },
  {
    titleExperiance3: "Full-Stack Developer",
    location: "Marseille, France",
    descriptionExperiance3:
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
    tags: [
      "Angular",
      "TypeScript",
      "Material Angular",
      "Node.JS",
      "Express",
      "Docker",
      "CI/CD",
      "AWS",
    ],
    imageUrl: postsBlogImg,
    linkUrl: "https://posts-blog-aws.top/",
  },
  {
    titleProject3: "",
    descriptionProject3: "",
    tags: [
      "Angular",
      "TypeScript",
      "Facade Pattern",
      "PrimeNG",
      "Node.JS",
      "Express",
      "PostgreSQL",
    ],
    imageUrl: shopProductImg,
    linkUrl: "https://shop-products-postgresql-front.vercel.app/",
  },
  {
    titleProject4: "",
    descriptionProject4: "",
    tags: ["ReactJS", "TypeScript", "Spring", "JAVA", "PostgreSQL"],
    imageUrl: clinicalappImg,
    linkUrl: "http://54.211.242.156",
  },
  {
    titleProject5: "",
    descriptionProject5: "",
    tags: ["VueJS"],
    imageUrl: quizappImj,
    linkUrl: "https://quiz-app-chi-gray.vercel.app/",
  },
] as const;

export const skillsData = [
  { title: "Javascript", icon: javascrtipIcon },
  { title: "TypeScript", icon: typescriptIcon },
  { title: "React", icon: reactIcon },
  { title: "Next.JS", icon: nexjsIcon },
  { title: "Angular", icon: angularIcon },
  { title: "RxJS", icon: rxjs },
  { title: "Node.JS", icon: nodejsIcon },
  { title: "Express.JS", icon: expressIcon },
  { title: "Git", icon: gitIcon },
  { title: "Tailwind", icon: tailwindIcon },
  { title: "Framer Motion", icon: framerMotionIcon },
  { title: "Java", icon: javaIcon },
  { title: "SQL", icon: sqlIcon },
  { title: "PostgreSQL", icon: postgresqlIcon },
  { title: "MongoDB", icon: mongodbIcon },
  { title: "AWS", icon: awsIcon },
] as const;
