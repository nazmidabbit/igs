import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Clock, Calendar } from 'lucide-react';

const PrayerTimes = () => {
    const { t } = useTranslation();

    const times = [
        { name: 'Fajr', time: '05:45' },
        { name: 'Shorooq', time: '07:15' },
        { name: 'Dhuhr', time: '12:35' },
        { name: 'Asr', time: '15:20' },
        { name: 'Maghrib', time: '18:05' },
        { name: 'Isha', time: '19:40' },
    ];

    return (
        <div className="section-padding bg-soft min-h-screen">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-prayer"
                    >
                        <div className="text-center mb-12">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock size={32} />
                            </div>
                            <h1 className="section-title mb-2">{t('prayer_times_title')}</h1>
                            <div className="flex items-center justify-center gap-2 text-text-light font-medium">
                                <Calendar size={18} />
                                <span>{new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                        </div>

                        <div className="grid gap-2">
                            {times.map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="prayer-row"
                                >
                                    <span className="text-xl font-bold text-text-dark">{p.name}</span>
                                    <span className="text-2xl font-black text-primary">{p.time}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                            <p className="text-center text-primary-dark font-medium italic">
                                {t('prayer_note')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PrayerTimes;
