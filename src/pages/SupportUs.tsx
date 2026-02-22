import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Heart, Gift, Handshake, ChevronRight } from 'lucide-react';

const SupportUs = () => {
    const { t } = useTranslation();

    const options = [
        {
            title: t('donation_title'),
            desc: t('donation_desc'),
            icon: <Gift size={32} />,
            color: 'var(--primary)'
        },
        {
            title: t('volunteer_title'),
            desc: t('volunteer_desc'),
            icon: <Handshake size={32} />,
            color: 'var(--secondary)'
        },
        {
            title: t('membership_title'),
            desc: t('membership_desc'),
            icon: <Heart size={32} />,
            color: 'var(--primary-dark)'
        },
    ];

    return (
        <div className="section-padding bg-soft min-h-screen">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="section-title">{t('support_us_title')}</h1>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        {t('support_intro', { defaultValue: 'Helfen Sie uns, die Gemeinschaft zu stärken und Gutes zu tun.' })}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {options.map((opt, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[40px] shadow-md border border-black/5 flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 rounded-3xl mb-8 flex items-center justify-center" style={{ background: `${opt.color}10`, color: opt.color }}>
                                {opt.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-text-dark">{opt.title}</h3>
                            <p className="text-text-light leading-relaxed mb-8 flex-grow">{opt.desc}</p>
                            <button className="flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
                                {t('learn_more')}
                                <ChevronRight size={20} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SupportUs;
