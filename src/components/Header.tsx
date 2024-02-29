import { useTranslations } from "next-intl";
import LocalSwitcher from "./local-switcher";

const Header = () => {
    const t = useTranslations('Navigation');
    return ( <header className="flex p-2 items-center">
        <nav className="w-full flex justify-center">
            <ul className="flex gap-3">
                <li>{t('home')}</li>
                <li>{t('projects')}</li>
                <li>{t('skills')}</li>
                <li>{t('experience')}</li>
                <li>{t('contact')}</li>
            </ul>
        </nav>
        <LocalSwitcher />
    </header> );
}
 
export default Header;