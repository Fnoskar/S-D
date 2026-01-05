import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculăm poziția manual pentru a compensa header-ul fix
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Proiecte', id: 'projects' },
    { name: 'Servicii', id: 'services' },
    { name: 'Despre', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" onClick={(e) => scrollToSection(e, 'root')} className={`text-2xl font-bold tracking-tighter uppercase transition-colors ${scrolled ? 'text-sd-black' : 'text-sd-black md:text-white mix-blend-difference'}`}>
          S&D <span className="font-light">Design Project</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-sm uppercase tracking-widest font-semibold hover:underline decoration-2 underline-offset-4 transition-colors ${scrolled ? 'text-sd-black' : 'text-white mix-blend-difference'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden focus:outline-none ${scrolled ? 'text-sd-black' : 'text-white mix-blend-difference'}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 md:hidden z-40">
           <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-6 right-6 text-sd-black"
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-3xl font-bold uppercase tracking-tight text-sd-black hover:text-sd-accent"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};