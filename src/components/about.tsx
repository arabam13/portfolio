'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SectionHeading from './section-heading';

const About = ()=> {
    const { ref } = useSectionInView('about');
    const t = useTranslations('About');

    return (
    <motion.section
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 sm:scroll-mt-48"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
        <SectionHeading> {t('title')}</SectionHeading>
        <p>
        {t('paragraph')}
        </p>
    </motion.section>
    );
}
export default About;
