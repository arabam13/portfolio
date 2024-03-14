"use client";

import Project from "@/components/project";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import React from "react";
import SectionHeading from "./section-heading";

const Projects = () =>  {
    const { ref } = useSectionInView("projects", 0.5);
    const t = useTranslations("Projects");

    return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-40">
        <SectionHeading>{t('title')}</SectionHeading>
        <div>
        {projectsData.map((project, index) => (
            <React.Fragment key={index}>
            <Project {...project} index={index+1}/>
            </React.Fragment>
        ))}
        </div>
    </section>
    );
}

export default Projects
