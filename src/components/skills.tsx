"use client";

import SectionHeading from "@/components/section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
const { ref } = useSectionInView("skills");
const t = useTranslations("Skills");


return (
  <section
  id="skills"
  ref={ref}
  className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
  >
    <SectionHeading>{t('title')}</SectionHeading>
    <ul className="grid grid-cols-autoFitSM md:grid-cols-autoFitMD lg:grid-cols-autoFitLG  gap-2 text-lg text-gray-800">
      {skillsData.map(({title, icon}, index) => (
        <motion.li
          className="flex items-center justify-center gap-2 bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
          once: true,
          }}
          custom={index}
        >
          <Image src={icon} alt={title} width={25} height={25} className='rounded-lg aspect-square' />
          <p className="pt-1">{title}</p>
        </motion.li>
      ))}
    </ul>
  </section>
);
}
export default Skills