import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Target, Compass } from 'lucide-react';

const ValuesSection = () => {
    const { t } = useTranslation();

    const values = [
        { title: t('value1_title'), desc: t('value1_desc'), icon: <Shield size={40} />, color: 'var(--primary)' },
        { title: t('value2_title'), desc: t('value2_desc'), icon: <Target size={40} />, color: 'var(--secondary)' },
        { title: t('value3_title'), desc: t('value3_desc'), icon: <Compass size={40} />, color: 'var(--primary)' },
    ];

    return (
        <section className="section-padding bg-soft relative overflow-hidden">
            <div className="container">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="section-title text-center">{t('our_values')}</h2>
                    <div className="w-24 h-1 bg-primary mt-4 rounded-full"></div>
                </div>

                <div className="values-grid">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="value-card"
                        >
                            <div className="mb-6 flex justify-center" style={{ color: v.color }}>
                                {v.icon}
                            </div>
                            <h3>{v.title}</h3>
                            <p>{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
