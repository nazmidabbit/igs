import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
}

// --------------------------------------------------------------------------
// THE ONE AND ONLY PLACE FOR DYNAMIC IMAGES: src/assets/images/
// --------------------------------------------------------------------------
const imageModules = import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,webp,svg}', { eager: true });
const dynamicImages = Object.values(imageModules).map((mod: any) => mod.default);

const fallbackImages = [
  'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1564121211835-e88c852648ab?auto=format&fit=crop&q=80&w=2000'
];

const Hero = ({ title, subtitle }: HeroProps) => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const heroImages = dynamicImages.length > 0 ? dynamicImages : fallbackImages;

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="hero-section">
      <div className="hero-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="hero-slide"
            style={{ backgroundImage: `url(${heroImages[current]})` }}
          />
        </AnimatePresence>
        <div className="hero-overlay"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="flex gap-4">
            <Link to="/activities" className="hero-cta">
              {t('our_activities')}
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
