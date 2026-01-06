import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AboutImage {
  url: string;
  name: string;
  role: string;
}

const aboutImages: AboutImage[] = [
  {
    url: "https://picsum.photos/seed/engineer/800/1000",
    name: "Ing. Denis Bucatica",
    role: "Administrator & Lead Engineer"
  },
  {
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
    name: "Echipa Tehnică",
    role: "Proiectare & Arhitectură"
  },
  {
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    name: "Vizită Șantier",
    role: "Supraveghere Execuție"
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

  // Logică pentru Swipe pe mobil
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
    
    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="about" className="py-24 bg-sd-gray text-sd-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Carousel Section */}
          <div className="md:col-span-5 relative group select-none">
            <div 
              className="aspect-[3/4] bg-white w-full relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
               {/* Image */}
               <img 
                 src={aboutImages[currentIndex].url} 
                 alt={aboutImages[currentIndex].name} 
                 className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-500"
                 key={currentIndex} // Force re-render for strict replacement or remove for smooth generic transition
               />

               {/* Desktop Navigation Buttons (Visible on Hover) */}
               <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <button 
                    onClick={prevImage}
                    className="pointer-events-auto bg-black/80 text-white p-3 hover:bg-sd-accent transition-colors backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="pointer-events-auto bg-black/80 text-white p-3 hover:bg-sd-accent transition-colors backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
               </div>
               
               {/* Mobile/Tablet Swipe Hint (Optional visual cue) */}
               <div className="absolute bottom-4 right-4 md:hidden bg-black/50 text-white text-[10px] px-2 py-1 uppercase tracking-widest backdrop-blur-md">
                 Swipe
               </div>
            </div>

            {/* Caption & Counter Bar */}
             <div className="bg-sd-black text-white p-6 mt-0 w-full flex justify-between items-end">
               <div>
                 <p className="font-bold text-lg uppercase tracking-wider animate-in fade-in slide-in-from-left-2 duration-300" key={`name-${currentIndex}`}>
                    {aboutImages[currentIndex].name}
                 </p>
                 <p className="text-xs uppercase tracking-widest text-gray-400 animate-in fade-in slide-in-from-left-2 duration-300 delay-75" key={`role-${currentIndex}`}>
                    {aboutImages[currentIndex].role}
                 </p>
               </div>
               {/* Pagination Counter */}
               <div className="text-xs font-mono tracking-widest text-gray-500">
                  0{currentIndex + 1} — 0{aboutImages.length}
               </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-6 md:col-start-7 pt-8 md:pt-0">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-12 leading-none">
              Despre <br/> Noi
            </h2>
            <div className="space-y-8 text-lg text-black font-light leading-relaxed">
              <p>
                Suntem un birou de proiectare completă cu sediul în Constanța, dedicat excelenței în <strong className="font-bold border-b-2 border-sd-black">inginerie structurală</strong> și <strong className="font-bold border-b-2 border-sd-black">arhitectură</strong>. Abordăm fiecare proiect integrat, de la conceptul vizual până la detaliul de execuție.
              </p>
              <p>
                Sub coordonarea inginerului <strong>Denis Bucatica</strong>, firma S&D Design Project oferă soluții optimizate, respectând cele mai noi normative în construcții. 
              </p>
              
              <div className="border-t-2 border-b-2 border-sd-black py-8 my-12">
                 <blockquote className="text-2xl font-serif italic text-black">
                  "Arhitectura dă formă visului, iar structura îi oferă trăinicie în timp."
                </blockquote>
              </div>
              
              <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">
                Mangalia — Medgidia — Năvodari — Constanța
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
