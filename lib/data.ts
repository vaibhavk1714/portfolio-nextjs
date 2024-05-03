import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
        title: "Core Team Member",
        location: "AdroIT, RNSIT, Bengaluru",
        description:
            "I am currently a core member of AdroIT, which is a technical club at my college. I have helped conduct various workshops and pep talks regarding technologies such as Blockchain, Cybersecurity and Data Analytics",
        icon: React.createElement(CgWorkAlt),
        date: "2023",
    },
    {
        title: "B.E in Computer Science",
        location: "RNS Institute of Technology, Bengaluru",
        description:
            "Currently pursuing my Bachelor's degree in Computer Science and Engineering at RNSIT. I'll be graduating in 2025.\n Current GPA: 9.13",
        icon: React.createElement(LuGraduationCap),
        date: "2021",
    },
] as const;

export const projectsData = [
    {
        title: "Academic Insight",
        description:
            "I volunteered to build a Student Attendance and Marks management application for my department at RNSIT. With automatic reports and emails.",
        tags: ["React", "Node.js", "Express.js", "MySQL", "Typescript"],
        imageUrl: corpcommentImg,
    },
    {
        title: "Mern-GPT",
        description:
            "A dynamic application to chat with a GPT-3.5 Turbo AI using OpenAI API.",
        tags: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Page pinner",
        description:
            "A book recommendation website created for users to browse through various books, and rate them according to their experiences",
        tags: ["HTML", "CSS", "JS", "MongoDB", "Bootstrap"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MySQL",
    "MongoDB",
    "Express",
    "Material UI",
    "Framer Motion",
    "Python",
    "Java",
    "Linux",
    "C++",
    "C",
] as const;
