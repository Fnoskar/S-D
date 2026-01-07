import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projectsData: Project[] = [
  {
    id: 1,
    title: "IMOBIL REZIDENȚIAL 2S+P+6E",
    category: "Rezidențial",
    location: "București Sectorul 1",
    imageUrl: "bloc bucuresti.jpeg",
    description: "Proiectare structurală completă și calcul structural pentru imobil cu regim de înălțime 2S+P+6E. Structură în cadre de beton armat."
  },
  {
    id: 2,
    title: "Divertiland",
    category: "Special",
    location: "Chiajna, jud. Ilfov",
    imageUrl: "divertiland.jpg",
    description: "Proiectare structuri speciale pentru tobogane acvatice. Concepute pentru siguranță și durabilitate."
  },
  {
    id: 3,
    title: "OMV ",
    category: "Industrial",
    location: "Burcioaia, jud. Vrancea",
    imageUrl: "omv burcioaia.jpeg",
    description: "Dimensionare și proiectare structurală estacade (piperacks) pentru obiective industriale OMV."
  },
  {
    id: 4,
    title: "REABLITIARE SI MODERNIZARE STAȚIE DE EPURARE BUCURESTI-GLINA",
    category: "Reabilitare",
    location: "Glina, jud. Ilfov",
    imageUrl: "statie de epurare.jpeg",
    description: "Proiectare structurală pentru bazine de aerare din beton armat monolit, în cadrul Stației de Epurare București-Glina. Soluție tehnică bazată pe radier general de 65 cm și structură îngropată în proporție de 80% sub nivelul terenului."
  },
  {
    id: 5,
    title: "STAȚIE ITP",
    category: "Civil",
    location: "Ștefan cel Mare, jud. Constanța",
    imageUrl: "statie itp.jpeg",
    description: "Stație ITP: proiectare integrală și gestionare completă a documentației (CU, DTAC, PTH). Structură metalică dimensionată pentru integrarea fluxului auto și a echipamentelor specifice de verificare."
  },
  {
    id: 6,
    title: "GRĂDINIȚA NR. 4",
    category: "Civil",
    location: "Cernavodă, jud. Constanța",
    imageUrl: "https://picsum.photos/seed/apartments_modern/800/600",
    description: "Reabilitare spații verzi: proiectare și gestionare a documentației tehnice pentru modernizarea zonelor exterioare"
  },
  {
    id: 7,
    title: "HALĂ METALICĂ WELDE",
    category: "Industrial",
    location: "Cernavodă, jud. Constanța",
    imageUrl: "hala leucoplast.jpeg",
    description: "Hală metalică: proiectare structurală și dimensionare pentru fazele DTAC și PTH. Structură metalică optimizată pentru eficiența consumului de oțel, adaptată încărcărilor tehnologice și condițiilor de teren. "
  },
  {
    id: 8,
    title: "SHOWROOM SAINT GOBAIN",
    category: "Comercial",
    location: "Vălenii de Munte, jud. Prahova", 
    imageUrl: "saintgobain.jpg",
    description: "Amenajare interioară și configurare a zonelor de prezentare. Compartimentarea spațiului și instalarea elementelor decorative au fost realizate pentru a asigura continuitatea parcursului interior și delimitarea zonelor de interes ."
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 border-b border-black pb-8 flex flex-col md:flex-row justify-between items-end">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-sd-black">
            Proiecte Recente
          </h2>
          <span className="text-sm uppercase tracking-widest mt-4 md:mt-0">Portofoliu Extins</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
          {projectsData.map((project, index) => (
            <div key={project.id} className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <div className="relative overflow-hidden mb-6 aspect-[4/5] md:aspect-[4/3] bg-gray-100">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <div className="flex justify-between items-start border-t border-gray-200 pt-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">{project.location} / {project.year}</p>
                  <p className="text-gray-600 mt-2 max-w-md">{project.description}</p>
                </div>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
