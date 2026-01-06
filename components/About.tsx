import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AboutImage {
  url: string;
  name: string;
}

const aboutImages: AboutImage[] = [
  {
    url: "https://picsum.photos/seed/engineer/800/1000",
    name: "Ing. Denis Bucatica"
  },
  {
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
    name: "Echipa Tehnică"
  },
  {
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    name: "Vizită Șantier"
  },
  {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", 
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
          
          {/* Carousel Section */}
          <div className="md:col-span-5 relative group select-none">
            <div 
              className="aspect-[3/4] bg-gray-200 w-full relative overflow-hidden shadow-2xl rounded-sm"
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

              {/* Navigare Săgeți - Vizibile la hover pe desktop */}
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
          <div className="md:col-span-6 md:col-start-7">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-8 leading-none">
              Despre <br/> Noi
            </h2>
            <div className="space-y-6 text-lg text-black font-light leading-relaxed">
              <p>
                Suntem un birou de proiectare completă cu sediul în Constanța, dedicat excelenței în <strong className="font-bold border-b-2 border-sd-black">inginerie structurală</strong> și <strong className="font-bold border-b-2 border-sd-black">arhitectură</strong>.
              </p>
              <p>
                Sub coordonarea inginerului <strong>Denis Bucatica</strong>, oferim soluții optimizate, respectând cele mai noi normative în construcții. 
              </p>
              
              <div className="border-l-4 border-sd-black pl-6 py-4 my-8 bg-black/5">
                 <blockquote className="text-xl italic text-black">
                   "Arhitectura dă formă visului, iar structura îi oferă trăinicie în timp."
                 </blockquote>
              </div>
              
              <p className="text-sm uppercase tracking-widest text-gray-500 font-bold pt-4">
                Constanța — Mangalia — Medgidia — Năvodari
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
