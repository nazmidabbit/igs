import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { activitiesData } from '../components/CreativeShowcase';

// Import images for background discovery
const imageModules = import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,webp,svg}', { eager: true });
const imagesMap: Record<string, string> = {};
Object.entries(imageModules).forEach(([path, mod]: any) => {
    const filename = path.split('/').pop()?.split('.')[0] || '';
    imagesMap[filename] = mod.default;
});

const Activities = () => {
    const { t } = useTranslation();
    const activities = activitiesData(t);

    return (
        <div className="section-padding bg-soft min-h-screen">
            <div className="container">
                <div className="text-center mb-16 pt-8">
                    <h1 className="section-title">{t('our_activities')}</h1>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        {t('activities_intro_page', { defaultValue: 'Entdecken Sie die vielfältigen Angebote und Projekte unserer Gemeinde.' })}
                    </p>
                </div>

                <div className="bento-grid">
                    {activities.map((item) => {
                        const bgImage = imagesMap[item.slug];
                        const hasImage = !!bgImage;

                        return (
                            <Link to={`/activities/${item.slug}`} key={item.id} className={`bento-link bento-${item.slug === 'community' ? 'large' : 'medium'}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    className={`bento-item ${!hasImage ? 'bento-color-mode' : ''}`}
                                    style={{
                                        '--accent-color': item.color,
                                        backgroundImage: hasImage ? `url(${bgImage})` : 'none',
                                        background: !hasImage ? `linear-gradient(145deg, ${item.color} 0%, #022c22 100%)` : undefined // Deep Emerald dark end for harmony
                                    } as any}
                                >
                                    <div className="bento-icon-wrapper">{item.icon}</div>
                                    <div className="bento-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="bento-bg-accent"></div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Activities;
