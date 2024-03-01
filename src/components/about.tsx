'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

const About = ()=> {
    const { ref } = useSectionInView('about');

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
        After graduating with a degree in{' '}
        <span className="font-medium">
            Statistic and Business Intelligence, and working in the data analysis
            field
        </span>
        , I decided to pursue my passion for programming. I&apos;ve enrolled in a Web
        developer program and learned{' '}
        <span className="font-medium">full-stack web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
        <span className="font-medium">
            React, Next.js, Node.js, MongoDB, and PostgreSQL
        </span>
        . I am also familiar with TypeScript, Prisma, and NEXT-AUTH as far as
        managing authentication part. I am always looking to learn new
        technologies. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
        </p>

        <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy practicing
        sport, going to the gym, watching movies, and playing with my daughter,
        who is my source of inspiration. I also enjoy{' '}
        <span className="font-medium">learning new things</span>.
        </p>
    </motion.section>
    );
}
export default About;
