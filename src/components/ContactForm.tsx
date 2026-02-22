import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-white p-10 rounded-[40px] shadow-xl border border-black/5">
            <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-text-light ml-1">{t('name')}</label>
                    <input
                        type="text"
                        className="w-full p-4 bg-soft rounded-2xl border-none focus:ring-2 focus:ring-primary transition-all outline-none"
                        placeholder={t('name_placeholder', { defaultValue: 'Ihr Name' })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-text-light ml-1">{t('email')}</label>
                    <input
                        type="email"
                        className="w-full p-4 bg-soft rounded-2xl border-none focus:ring-2 focus:ring-primary transition-all outline-none"
                        placeholder="email@example.com"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-text-light ml-1">{t('message')}</label>
                    <textarea
                        rows={5}
                        className="w-full p-4 bg-soft rounded-2xl border-none focus:ring-2 focus:ring-primary transition-all outline-none resize-none"
                        placeholder={t('message_placeholder', { defaultValue: 'Ihre Nachricht an uns...' })}
                    ></textarea>
                </div>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all"
                >
                    {t('send_message')}
                </motion.button>
            </form>
        </div>
    );
};

export default ContactForm;
