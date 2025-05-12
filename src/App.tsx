import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Technology from './components/Technology';
import UseCases from './components/UseCases';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.parallax-layer');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const scrolled = window.scrollY;
        const rate = scrolled * -0.3;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          (element as HTMLElement).style.transform = `translateY(${rate}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 animate-gradient">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ProblemStatement />
        <HowItWorks />
        <Benefits />
        <Features />
        <Technology />
        <UseCases />
        <CTA />
        <Footer />
      </div>
      
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-teal-500/10 to-transparent rounded-full blur-3xl animate-gradient"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-3xl animate-gradient"></div>
      </div>
    </div>
  );
}

export default App;