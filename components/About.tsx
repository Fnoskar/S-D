import React, { useState } from 'react';
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Carousel Section */}
          <div className="md:col-span-5 relative group select-none">
            <div 
              className="aspect-[3/4] bg-gray-200 w-full relative overflow-hidden shadow-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Image */}
              <img 
                src={aboutImages[currentIndex].url} 
                alt={aboutImages[currentIndex].name} 
                className="w-full h-full object-cover transition-opacity duration-500"
                key={currentIndex}
              />

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button onClick={prevImage} className="pointer-events-auto bg-black/50 text-white p-2 hover:bg-black transition-colors rounded-full">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextImage} className="pointer-events-auto bg-black/50 text-white p-2 hover:bg-black transition-colors rounded-full">
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Instagram Style Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {aboutImages.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}
                  />
                ))}
              </div>
            </div>

            {/* Caption Info */}
            <div className="bg-sd-black text-white p-6 w-full flex justify-between items-center">
              <div>
                <p className="font-bold text-lg uppercase tracking-wider" key={`n-${currentIndex}`}>
                  {aboutImages[currentIndex].name}
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-400" key={`r-${currentIndex}`}>
                  {aboutImages[currentIndex].role}
                </p>
              </div>
              <div className="text-xs font-mono text-gray-500">
                0{currentIndex + 1} / 0{aboutImages.length}
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
