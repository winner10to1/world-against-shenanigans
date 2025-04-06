import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import LogoText from './LogoText';
import { MapIcon } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'bg-white/80 backdrop-blur-subtle shadow-sm py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div
          className="tracking-tight cursor-pointer transition-opacity duration-200 hover:opacity-80"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <LogoText />
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection('evidence-repository')}
            className="text-sm font-medium hover:text-primary transition-colors duration-200"
          >
            Evidence Repository
          </button>
          <button 
            onClick={() => scrollToSection('timeline')}
            className="text-sm font-medium hover:text-primary transition-colors duration-200"
          >
            Timeline
          </button>
          <button
            onClick={() => scrollToSection('global-impact')}
            className="text-sm font-medium hover:text-primary transition-colors duration-200 flex items-center gap-1"
          >
            <MapIcon className="h-4 w-4" />
            Impact Map
          </button>
        </nav>
        
        <button className="block md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
