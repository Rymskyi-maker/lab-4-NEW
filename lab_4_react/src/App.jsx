import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactModal from './components/ContactModal';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setTheme((hour < 7 || hour >= 21) ? 'dark' : 'light');
    
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('modalClosed')) setIsModalOpen(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const closeModal = () => { 
    setIsModalOpen(false); 
    sessionStorage.setItem('modalClosed', 'true'); 
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme === 'dark' ? 'bg-slate-900 text-slate-300 dark' : 'bg-slate-50 text-slate-900'}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Experience />
        <Education />
        <Reviews />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}