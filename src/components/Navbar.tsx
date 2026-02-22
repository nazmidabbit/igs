import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'de' ? 'ar' : 'de';
        i18n.changeLanguage(nextLang);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="logo"
                >
                    IGS - <span>Saarland</span>
                </motion.div>

                <div className="nav-links">
                    {[
                        { path: '/', label: t('home') },
                        { path: '/activities', label: t('activities') },
                        { path: '/prayer-times', label: t('prayer_times') },
                        { path: '/support', label: t('support') },
                        { path: '/contact', label: t('contact') },
                    ].map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleLanguage}
                    className="lang-toggle"
                >
                    {i18n.language === 'de' ? 'العربية' : 'Deutsch'}
                </motion.button>
            </nav>
        </header>
    );
};

export default Navbar;
