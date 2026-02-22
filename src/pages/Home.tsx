import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import ValuesSection from '../components/ValuesSection';
import CreativeShowcase from '../components/CreativeShowcase';

const Home = () => {
    const { t } = useTranslation();

    const events = [
        { title: t('event1_title'), date: '25.02.2026', description: t('event1_desc'), type: t('spiritual') },
        { title: t('event2_title'), date: '28.02.2026', description: t('event2_desc'), type: t('social') },
        { title: t('event3_title'), date: '05.03.2026', description: t('event3_desc'), type: t('education') },
    ];

    return (
        <>
            <Hero
                title={t('welcome')}
                subtitle={t('hero_text')}
            />

            <CreativeShowcase />
            <ValuesSection />

            <section className="section-padding">
                <div className="container">
                    <h2 className="section-title text-center mb-12">{t('upcoming_events')}</h2>
                    <div className="events-grid">
                        {events.map((event, index) => (
                            <EventCard key={index} {...event} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
