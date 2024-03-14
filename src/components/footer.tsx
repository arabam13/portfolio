import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("Footer");
    return (
    <footer className="mb-10 px-4 text-center text-gray-500">
        <small className="mb-2 block text-xs">
        {t('paragraph1')}
        </small>
    </footer>
    );
}

export default Footer