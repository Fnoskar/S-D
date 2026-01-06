import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/poza fatada.jpeg"
          alt="Structură beton armat" 
          className="w-full h-full object-cover filter contrast-125"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-9 md:col-start-1">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-none mb-6">
              Inginerie Structurală <br/> <span className="text-gray-300">&</span> Arhitectură
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide max-w-lg mb-8 text-gray-200">
              Soluții complete de proiectare civilă și industrială în Constanța. 
              Îmbinăm rigoarea inginerească cu viziunea arhitecturală.
            </p>
          </div>
          
          <div className="md:col-span-3 flex items-end justify-start md:justify-end">
             <a 
               href="#projects" 
               onClick={scrollToProjects}
               className="group flex items-center gap-4 text-sm uppercase tracking-widest font-semibold hover:text-white/80 transition-colors"
             >
                Vezi Portofoliu
                <span className="p-2 border border-white rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};
