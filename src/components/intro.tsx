'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Intro = () => {
    const { ref } = useSectionInView('home', 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const t = useTranslations('Intro');

    return (
    <section
        ref={ref}
        id="home"
        className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: 'tween',
                    duration: 0.2,
                }}
                >
                <Image
                    src="/me.png"
                    alt="Mohammed ARABA"
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className="rounded-photoProfileRadius object-none object-center"
                />
                </motion.div>
            </div>
        </div>

        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
            {t('paragraph')}
        </motion.h1>

        <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.1,
        }}
        >
        <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
            setActiveSection('contact');
            setTimeOfLastClick(Date.now());
            }}
        >
            {t('contact')}{' '}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/CV.pdf"
            target="_blank"
        >
            {t('resume')}{' '}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com"
            target="_blank"
        >
            <BsLinkedin />
        </a>

        <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com"
            target="_blank"
        >
            <FaGithubSquare />
        </a>
        </motion.div>
    </section>
    );
}
export default Intro