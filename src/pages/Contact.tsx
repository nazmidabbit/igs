import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section className="section-padding bg-light min-h-screen">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="section-title">{t('contact_us')}</h1>
                    <p className="section-subtitle max-w-2xl mx-auto">{t('contact_intro')}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="bg-soft p-10 rounded-[40px] relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-extrabold mb-6 flex items-center gap-3">
                                    <MessageSquare className="text-primary" />
                                    {t('get_in_touch')}
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-6 p-4 bg-white/50 rounded-2xl border border-white/50">
                                        <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold uppercase tracking-wider text-text-light">{t('address', { defaultValue: 'Adresse' })}</p>
                                            <p className="text-lg font-bold">Saarbrücken, Deutschland</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 p-4 bg-white/50 rounded-2xl border border-white/50">
                                        <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold uppercase tracking-wider text-text-light">{t('phone', { defaultValue: 'Telefon' })}</p>
                                            <p className="text-lg font-bold">+49 123 456789</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 p-4 bg-white/50 rounded-2xl border border-white/50">
                                        <div className="w-12 h-12 bg-primary-dark text-white rounded-xl flex items-center justify-center shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold uppercase tracking-wider text-text-light">{t('email', { defaultValue: 'Email' })}</p>
                                            <p className="text-lg font-bold">info@igs-saarland.de</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
