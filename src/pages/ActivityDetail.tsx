import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';

const ActivityDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { t } = useTranslation();

    // Dynamically import images for this specific activity
    // Vite feature: searching in src/assets/images/activities/[slug]/*
    const imageModules = import.meta.glob('/src/assets/images/activities/**/*.{jpg,jpeg,png,webp,svg}', { eager: true });

    const activityImages = Object.entries(imageModules)
        .filter(([path]) => path.includes(`/activities/${slug}/`))
        .map(([_, mod]: any) => mod.default);

    // Staggered animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemAnim = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <div className="pt-24 pb-12">
            <div className="container">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8 font-semibold">
                    <ArrowLeft size={20} />
                    {t('back_to_home', { defaultValue: 'Zurück zur Startseite' })}
                </Link>

                <header className="mb-12">
                    <h1 className="section-title mb-4">
                        {t(`${slug}_title`, { defaultValue: slug?.toUpperCase() })}
                    </h1>
                    <p className="section-subtitle max-w-3xl">
                        {t(`${slug}_desc`, { defaultValue: 'Erfahren Sie mehr über unsere Aktivitäten und Gemeinschaftsprojekte.' })}
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Info Section */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 p-8 rounded-2xl bg-white shadow-xl border border-gray-100">
                            <h3 className="text-xl font-bold mb-4 text-dark">{t('about_activity', { defaultValue: 'Über diese Aktivität' })}</h3>
                            <div className="space-y-4 text-light leading-relaxed">
                                <p>{t(`${slug}_long_desc`, { defaultValue: 'Wir engagieren uns für die Förderung der Gemeinschaft und den kulturellen Austausch im Saarland.' })}</p>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    <div className="lg:col-span-8">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <ImageIcon className="text-primary" />
                            {t('activity_gallery', { defaultValue: 'Fotogalerie' })}
                        </h3>

                        {activityImages.length > 0 ? (
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                            >
                                {activityImages.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemAnim}
                                        className="group relative aspect-video overflow-hidden rounded-xl border border-gray-200 shadow-sm"
                                    >
                                        <img
                                            src={img}
                                            alt={`${slug} gallery ${idx}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <div className="bg-soft p-12 rounded-2xl text-center border-2 border-dashed border-gray-200">
                                <ImageIcon size={48} className="mx-auto mb-4 text-gray-300" />
                                <p className="text-light italic">
                                    {t('no_images_yet', { defaultValue: 'Noch keine Fotos in dieser Galerie. Schauen Sie bald wieder vorbei!' })}
                                </p>
                                <p className="text-xs text-gray-400 mt-2">
                                    {t('upload_hint', { defaultValue: `Bilder in src/assets/images/activities/${slug}/ hochladen.` })}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityDetail;
