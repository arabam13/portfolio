'use client';

import LocalSwitcher from "@/components/local-switcher";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Header = () => {
const t = useTranslations('Navigation');
const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

return ( 
    <header className="z-[999] relative">
        <motion.div
        className="fixed top-0 left-1/2 h-[6rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[39rem] md:w-[44rem] sm:rounded-lg dark:bg-gray-950 dark:border-gray dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>

        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 min-w-[12.3rem] sm:w-[initial] sm:flex-nowrap sm:gap-1 md:gap-4">
                {links.map((link) => (
                    <motion.li
                    className="h-3/4 w-24 flex items-center justify-center relative"
                    key={link.hash}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    >
                        <Link className={clsx("flex w-full items-center justify-center px-3 py-3 rounded-lg hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                            {
                            "text-gray-950 dark:text-gray-200":
                                activeSection === link.name,
                            }
                        )} 
                        href={link.hash} onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                        }}
                        >
                            {t(`${link.name}`)}
                            {link.name === activeSection && (
                                <motion.span
                                className="rounded-lg bg-gray-200 w-[6rem] absolute inset-0 -z-10 dark:bg-gray-800"
                                layoutId="activeSection"
                                transition={{
                                    type: "spring",
                                    stiffness: 380,
                                    damping: 30,
                                }}
                                ></motion.span>
                            )}
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </nav>
        <LocalSwitcher />
    </header> );
}
 
export default Header;