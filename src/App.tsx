import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Activities from './pages/Activities';
import PrayerTimes from './pages/PrayerTimes';
import SupportUs from './pages/SupportUs';
import Contact from './pages/Contact';
import ActivityDetail from './pages/ActivityDetail';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="activities" element={<Activities />} />
                    <Route path="activities/:slug" element={<ActivityDetail />} />
                    <Route path="prayer-times" element={<PrayerTimes />} />
                    <Route path="support" element={<SupportUs />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
