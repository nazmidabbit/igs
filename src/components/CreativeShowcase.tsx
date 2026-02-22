import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Heart, Star, Calendar, MessageCircle, GraduationCap, Users2, Leaf, ArrowUpRight } from 'lucide-react';

// Robust Image Discovery
const imageModules = import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,webp,svg}', { eager: true });
const imagesMap: Record<string, string> = {};

Object.entries(imageModules).forEach(([path, mod]: any) => {
    // Standardize path to use forward slashes and extract base filename
    const filename = path.replace(/\\/g, '/').split('/').pop()?.split('.')[0] || '';
    imagesMap[filename] = mod.default;
});

// Unified Activities Data - Matching ACTUAL filenames in src/assets/images/
export const activitiesData = (t: any) => [
    { id: 1, title: t('activity1_title'), desc: t('activity1_desc'), icon: <BookOpen className="w-7 h-7" />, size: 'large', color: '#064e3b', slug: 'community' },
    { id: 2, title: t('activity2_title'), desc: t('activity2_desc'), icon: <Users className="w-7 h-7" />, size: 'medium', color: '#b8860b', slug: 'education' },
    { id: 3, title: t('activity3_title'), desc: t('activity3_desc'), icon: <Heart className="w-7 h-7" />, size: 'small', color: '#1a365d', slug: 'support' },
    { id: 4, title: t('prayer_times'), desc: t('prayer_desc'), icon: <Star className="w-7 h-7" />, size: 'small', color: '#4c1d95', slug: 'spirituality' },
    { id: 5, title: t('Education'), desc: t('edu_desc', { defaultValue: 'Religiöse Bildung' }), icon: <GraduationCap className="w-7 h-7" />, size: 'small', color: '#065f46', slug: 'quran_circle' }, // Matched to file
    { id: 6, title: t('Youth'), desc: t('youth_desc', { defaultValue: 'Jugendarbeit' }), icon: <Users2 className="w-7 h-7" />, size: 'small', color: '#1e40af', slug: 'youth_workshop' }, // Matched to file
    { id: 7, title: t('Environment'), desc: t('env_desc', { defaultValue: 'Umwelt & Natur' }), icon: <Leaf className="w-7 h-7" />, size: 'medium', color: '#15803d', slug: 'environment' },
    { id: 8, title: t('upcoming_events'), desc: t('events_desc'), icon: <Calendar className="w-7 h-7" />, size: 'medium', color: '#78350f', slug: 'events' },
    { id: 9, title: t('contact'), desc: t('contact_desc'), icon: <MessageCircle className="w-7 h-7" />, size: 'small', color: '#134e4a', slug: 'contact' },
];

const CreativeShowcase = () => {
    const { t } = useTranslation();
    const items = activitiesData(t).slice(0, 6);

    return (
        <section className="section-padding bg-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-title">{t('our_activities')}</h2>
                </div>

                <div className="bento-grid">
                    {items.map((item) => {
                        const bgImage = imagesMap[item.slug];
                        const hasImage = !!bgImage;

                        // Use a single property for background to avoid shorthand conflicts
                        const backgroundStyles = {
                            '--accent-color': item.color,
                            backgroundImage: hasImage
                                ? `url(${bgImage})`
                                : `linear-gradient(165deg, ${item.color} 0%, #011c15 100%)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        };

                        return (
                            <Link to={`/activities/${item.slug}`} key={item.id} className={`bento-link bento-${item.size}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`bento-item ${!hasImage ? 'bento-color-mode' : ''}`}
                                    style={backgroundStyles as any}
                                >
                                    <div className="bento-icon-wrapper">{item.icon}</div>
                                    <div className="bento-content">
                                        <h3>{item.title}</h3>
                                        <p className="line-clamp-2">{item.desc}</p>
                                    </div>
                                    <div className="bento-bg-accent">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CreativeShowcase;
