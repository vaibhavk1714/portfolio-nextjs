"use client";

import React from "react";
import SectionHeading from "./section-header";
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
                Currently pursuing a degree in{" "}
                <span className="font-medium">Computer Science</span>.
                I enrolled in a coding bootcamp and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span>{" "}
                is learnning how real world applications work and learn to do that on my own.
                I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React, Express.js, Node.js, and MongoDB
                </span>
                . I am also familiar with MySQL and Prisma. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">intern position</span> as a software
                developer.
            </p>

            <p>
                <span className="italic">When I&apos;m not coding</span>, I enjoy playing
                video games, watching movies, and playing table tennis. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">Quantum Physics</span>.
            </p>
        </motion.section>
    );
}

