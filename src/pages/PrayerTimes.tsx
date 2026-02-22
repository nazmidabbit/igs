import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Clock, Calendar, Sunrise, Sun, Sunset, Moon, CloudSun, Info } from 'lucide-react';

const PrayerTimes = () => {
    const { t } = useTranslation();

    const times = [
        { name: t('fajr'), time: '05:45', icon: <Sunrise size={28} /> },
        { name: t('shorooq'), time: '07:15', icon: <CloudSun size={28} /> },
        { name: t('dhuhr'), time: '12:35', icon: <Sun size={28} /> },
        { name: t('asr'), time: '15:20', icon: <CloudSun size={28} /> },
        { name: t('maghrib'), time: '18:05', icon: <Sunset size={28} /> },
        { name: t('isha'), time: '19:40', icon: <Moon size={28} /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <div className="section-padding bg-soft min-h-screen">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-prayer"
                >
                    <div className="text-center mb-16">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <Clock size={32} />
                        </div>
                        <h1 className="section-title mb-4">{t('prayer_times_title')}</h1>
                        <div className="flex items-center justify-center gap-2 text-text-light font-bold text-lg">
                            <Calendar size={20} className="text-secondary" />
                            <span>{new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="prayer-grid"
                    >
                        {times.map((p, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="prayer-card"
                            >
                                <div className="prayer-icon-container">
                                    {p.icon}
                                </div>
                                <h3 className="prayer-name">{p.name}</h3>
                                <div className="prayer-time-display">{p.time}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-16 p-8 bg-primary/5 rounded-3xl border border-primary/10 flex items-center gap-6"
                    >
                        <div className="w-12 h-12 bg-white rounded-full flex-shrink-0 flex items-center justify-center text-primary shadow-sm">
                            <Info size={24} />
                        </div>
                        <p className="text-primary-dark font-semibold text-lg italic">
                            {t('prayer_note')}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrayerTimes;
