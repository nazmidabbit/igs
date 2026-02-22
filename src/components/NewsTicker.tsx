import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const NewsTicker = () => {
    const { t, i18n } = useTranslation();

    // In a real app, diese könnten aus einer API oder Konfig kommen
    const news = [
        t('news_item_1', { defaultValue: 'Willkommen in der Islamischen Gemeinde Saarland e.V.' }),
        t('news_item_2', { defaultValue: 'Freitagsgebet: 13:30 Uhr' }),
        t('news_item_3', { defaultValue: 'Neue Sprachkurse starten im März' }),
    ];

    // Prüfe, ob die aktuelle Sprache Arabisch ist
    const isArabic = i18n.language === 'ar' || i18n.language.startsWith('ar');

    return (
        <div className="news-ticker-container" dir={isArabic ? "rtl" : "ltr"}>
            <div className="news-ticker-label">{t('latest_news', { defaultValue: 'Aktuelles' })}</div>
            <div className="news-ticker-wrapper">
                <motion.div
                    className="news-ticker-content"
                    animate={isArabic ? { x: ["0%", "100%"] } : { x: ["0%", "-100%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={isArabic ? { flexDirection: 'row-reverse' } : {}}
                >
                    {[...news, ...news].map((item, index) => (
                        <span key={index} className="news-ticker-item">
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default NewsTicker;
