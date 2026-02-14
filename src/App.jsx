import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <ThemeProvider>
            <div className="app-container">
                {/* New Scroll Progress Bar */}
                <ScrollProgress />

                {/* Custom cursor optional, can remain if it exists */}
                <CustomCursor />

                <Navbar />

                <main className="main-content">
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </AnimatePresence>
                </main>
            </div>
        </ThemeProvider>
    );
};

export default App;
