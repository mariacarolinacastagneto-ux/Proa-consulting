import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SchemaOrg from '../../components/SchemaOrg';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SchemaOrg type="website" />
      <SchemaOrg type="organization" />
      <SchemaOrg type="localBusiness" />
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <Services />
        <About />
        <Advantages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
