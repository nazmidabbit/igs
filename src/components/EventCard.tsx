import { motion } from 'framer-motion';

interface EventProps {
    title: string;
    date: string;
    description: string;
    type: string;
}

const EventCard = ({ title, date, description, type }: EventProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="event-card"
        >
            <div className="event-badge">{type}</div>
            <h3 className="event-title">{title}</h3>
            <p className="event-date">{date}</p>
            <p className="event-desc">{description}</p>
        </motion.div>
    );
};

export default EventCard;
