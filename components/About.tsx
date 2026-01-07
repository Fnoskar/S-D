import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface AboutImage {
  url: string; 
  name: string;
}

const aboutImages: AboutImage[] = [
  {
    url: "/poza 1.jpeg", 
    name: "Ing. Denis Bucatica"
  },
  {
    url: "/poza 2.jpeg", 
    name: "Echipa Tehnică"
  },
  {
    url: "/poza 3.jpeg", 
    name: "Vizită Șantier"
  },
  {
    url: "/poza 4.jpeg", 
    name: "Proiect Finalizat"
  }
];

export const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextImage();
    if (distance < -50) prevImage();
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="about" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Carousel Section - Format 4:3 Orizontal */}
          <div className="md:col-span-6 relative group select-none">
            <div 
              className="aspect-[4/3] bg-gray-100 w-full relative overflow-hidden rounded-sm flex items-center justify-center shadow-sm"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img 
                src={aboutImages[currentIndex].url} 
                alt={aboutImages[currentIndex].name} 
                className="w-full h-full object-cover transition-opacity duration-500"
                key={currentIndex}
              />

              {/* Navigare Săgeți */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button 
                  onClick={prevImage} 
                  className="pointer-events-auto bg-black/40 text-white p-2 hover:bg-black/60 transition-colors rounded-full backdrop-blur-sm"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage} 
                  className="pointer-events-auto bg-black/40 text-white p-2 hover:bg-black/60 transition-colors rounded-full backdrop-blur-sm"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Indicator Nume Poză */}
              <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs uppercase tracking-widest px-3 py-1 backdrop-blur-md">
                {aboutImages[currentIndex].name}
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-6">
            <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 font-semibold mb-8">
              Cine suntem
            </h2>
            
            <div className="space-y-8">
              {/* Prima Propoziție - Impact Vizual */}
              <p className="text-2xl md:text-4xl font-medium leading-tight tracking-tight text-black">
                Suntem un birou de proiectare completă cu sediul în Constanța, dedicat excelenței în inginerie structurală și arhitectură.
              </p>
              
              {/* Paragrafele Umante / Personale */}
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
                <p>
                  Noi am format o echipă de ingineri cu peste 15 ani de experiență, timp în care am învățat să abordăm cu încredere orice provocare în construcții civile, industriale sau agricole, folosind cele mai bune echipamente de pe piață pentru a ne asigura că rezultatul final este impecabil.
                </p>
                
                <p>
                  Pentru noi, respectarea normativelor și a rigorilor legii nu este doar o bifă birocratică, ci modul nostru de a-ți garanta siguranța și liniștea în fiecare proiect pe care îl construim împreună.
                </p>

                {/* Footer Localități */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">
                    Activitate extinsă: Constanța — Mangalia — Medgidia — Năvodari
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
