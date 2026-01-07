import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section id="about" className="py-24 bg-sd-gray text-sd-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Carousel Section - Format 4:3 Orizontal */}
          <div className="md:col-span-6 relative group select-none">
            <div 
              className="aspect-[4/3] bg-black/5 w-full relative overflow-hidden shadow-2xl rounded-sm flex items-center justify-center"
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
                  <ChevronLeft size={28} />
                </button>
                <button 
                  onClick={nextImage} 
                  className="pointer-events-auto bg-black/40 text-white p-2 hover:bg-black/60 transition-colors rounded-full backdrop-blur-sm"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-5 md:col-start-8">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-8 leading-none">
              Despre <br/> Noi
            </h2>
            <div className="space-y-6 text-lg text-black font-light leading-relaxed">
              <p>
                Suntem un birou de proiectare completă cu sediul în Cernavodă, dedicat excelenței în <strong className="font-bold border-b-2 border-sd-black">inginerie structurală</strong> și <strong className="font-bold border-b-2 border-sd-black">arhitectură</strong>.
              </p>
              <p>
                Noi am format o echipă de ingineri cu peste 15 ani de experiență, timp în care am învățat să abordăm cu încredere orice provocare în construcții civile, industriale sau agricole, folosind printre cele mai bune echipamente de pe piață pentru a ne asigura că rezultatul final este <span className="italic">impecabil</span>.
              </p>
              <p>
                Pentru noi, respectarea normativelor și a rigorilor legii nu este doar o bifă birocratică, ci modul nostru de a-ți garanta siguranța și liniștea în fiecare proiect pe care îl construim împreună.
              </p>
              
              <div className="my-12">
                 <blockquote className="relative p-8 text-xl italic text-black border-l-4 border-sd-black bg-black/5">
                   {/* Ghilimele început */}
                   <span className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-6xl text-sd-black opacity-50">“</span>
                   
                   <p className="mb-4">Calitatea înseamnă să faci lucrurile bine atunci când nu se uită nimeni.</p>
                   
                   {/* Ghilimele final */}
                   <span className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 text-6xl text-sd-black opacity-50">”</span>
                   
                   <footer className="text-base font-bold text-sd-black">— Henry Ford</footer>
                 </blockquote>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
