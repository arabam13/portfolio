import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bookStoreImg from "/public/bookStore.jpg";
import realEstateAgencyImg from "/public/realEstateAgency.jpg";

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
    title: "realEstateAgency",
    description:
      // "Ce site est un clone d'une agence immobilière. Il est responsive et a été développé avec React et TypeScript. Il utilise le Context API pour gérer l'état global. Les tests ont été écrits avec React Testing Library. Le site est déployé sur Vercel.",
      "This site is a clone of a real estate agency. It is responsive and was developed with React and TypeScript. It uses the Context API to manage global state. Some unit tests were written with Vitest and React Testing Library. The site is deployed on Vercel.",
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
    title: "bookStore",
    description:
      // "Ce site représente une librairie de livres. Il est responsive et a été développé avec React et Node.js. L'utilisateur peut s'incrire et se connecter, créer une fiche d'unlivre, la modifier et la supprimer. Il peut également attribuer une note à un livre. Le site est déployé sur Amazon Web Service.",
      "This site represents a book store. It is responsive and was developed with React and Express (Node.JS). The user can sign up and log in, create a book card, update and delete it. He can also rate a book. The site is deployed on Amazon Web Service.",
    tags: ["React", "Javascript", "Node.JS", "Express", "CI/CD", "AWS"],
    imageUrl: bookStoreImg,
    linkUrl: "https://book-store-aws.fr/",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Context API",
  "Redux",
  "Zustand",
  "Angular",
  "RxJS",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Prisma",
  "SQL",
  "API REST",
  "PostgreSQL",
  "MongoDB",
  "AWS",
] as const;
