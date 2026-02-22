import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, Clock, Heart, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAB = () => {
    const [isOpen, setIsOpen] = useState(false);

    const actions = [
        { icon: <Clock />, path: '/prayer-times', color: 'var(--primary)' },
        { icon: <Heart />, path: '/support', color: 'var(--secondary)' },
        { icon: <MessageCircle />, path: '/contact', color: 'var(--primary-dark)' },
    ];

    return (
        <div className="fab-container">
            <AnimatePresence>
                {isOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
                        {actions.map((action, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0, y: 20 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    to={action.path}
                                    className="fab-main"
                                    style={{
                                        width: '55px',
                                        height: '55px',
                                        borderRadius: '20px',
                                        background: action.color,
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    {action.icon}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <button
                className="fab-main"
                onClick={() => setIsOpen(!isOpen)}
                style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
            >
                <Plus size={32} />
            </button>
        </div>
    );
};

export default FAB;
