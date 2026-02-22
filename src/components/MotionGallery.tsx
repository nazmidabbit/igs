import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MotionGallery = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    const images = [
        { id: 1, title: "Community", color: "linear-gradient(135deg, #064e3b, #059669)" },
        { id: 2, title: "Education", color: "linear-gradient(135deg, #d97706, #f59e0b)" },
        { id: 3, title: "Spirituality", color: "linear-gradient(135deg, #065f46, #0d9488)" },
        { id: 4, title: "Support", color: "linear-gradient(135deg, #1e293b, #334155)" },
        { id: 5, title: "Unity", color: "linear-gradient(135deg, #0f172a, #1e1b4b)" },
    ];

    return (
        <section ref={targetRef} className="gallery-container">
            <div className="gallery-sticky">
                <div className="gallery-header">
                    <h2 className="section-title text-white">Momente der Gemeinschaft</h2>
                </div>
                <motion.div style={{ x }} className="gallery-track">
                    {images.map((img) => (
                        <motion.div
                            key={img.id}
                            whileHover={{ scale: 0.95, rotate: -2 }}
                            className="gallery-item-card"
                            style={{ background: img.color }}
                        >
                            <div className="gallery-item-content">
                                <h3>{img.title}</h3>
                                <p>Inspiration & Action</p>
                            </div>
                            <div className="gallery-item-overlay"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MotionGallery;
