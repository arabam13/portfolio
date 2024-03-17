"use client";

import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "@/components/submit-btn";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";

export default function Contact() {
    const { ref } = useSectionInView("contact");
    const t = useTranslations("Contact");

    return (
    <motion.section
        id="contact"
        ref={ref}
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{
        opacity: 0,
        }}
        whileInView={{
        opacity: 1,
        }}
        transition={{
        duration: 1,
        }}
        viewport={{
        once: true,
        }}
    >
        <SectionHeading>{t('title')}</SectionHeading>

        <p className="text-gray-700 -mt-6 dark:text-white/80">
        {t('sentence1')}{" "}
        <a className="underline" href="mailto:araba.mohamed@gmail.com">
            araba.mohamed@gmail.com
        </a>{" "}
        {t('sentence2')}
        </p>

        <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
            toast.error(error);
            return;
            }
            toast.success("Email sent successfully!");
        }}
        >
        <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder={t('placeholderEmail')}
        />
        <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder={t('placeholderMessage')}
            required
            maxLength={5000}
        />
        <SubmitBtn />
        </form>
    </motion.section>
    );
}
