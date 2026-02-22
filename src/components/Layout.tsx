import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Navbar from './Navbar';
import NewsTicker from './NewsTicker';

const Layout = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <div className="app-container">
            <NewsTicker />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2026 Islamische Gemeinde Saarland e.V. | {i18n.t('all_rights_reserved')}</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
