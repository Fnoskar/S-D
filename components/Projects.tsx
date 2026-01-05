import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projectsData: Project[] = [
  {
    id: 1,
    title: "Complex Rezidențial Tomis",
    category: "Rezidențial",
    location: "Constanța",
    year: "2023",
    imageUrl: "https://picsum.photos/seed/arch9/800/600",
    description: "Structură în cadre de beton armat, regim P+8E."
  },
  {
    id: 2,
    title: "Hală Industrială Logistică",
    category: "Industrial",
    location: "Agigea",
    year: "2022",
    imageUrl: "https://picsum.photos/seed/construct2/800/800",
    description: "Structură metalică cu deschideri mari pentru depozitare."
  },
  {
    id: 3,
    title: "Vila Modernă Mamaia Nord",
    category: "Rezidențial",
    location: "Mamaia Sat",
    year: "2024",
    imageUrl: "https://picsum.photos/seed/villa/800/600",
    description: "Proiectare structurală pentru arhitectură minimalistă."
  },
  {
    id: 4,
    title: "Consolidare Clădire Istorică",
    category: "Reabilitare",
    location: "Zona Peninsulară",
    year: "2023",
    imageUrl: "https://picsum.photos/seed/oldbuild/800/1000",
    description: "Expertiză tehnică și proiect de consolidare structurală."
  },
  {
    id: 5,
    title: "Clădire Birouri Class A",
    category: "Office",
    location: "Bulevardul Mamaia",
    year: "2024",
    imageUrl: "https://picsum.photos/seed/office_glass/800/700",
    description: "Imobil de birouri S+P+6E, structură duală și fațadă ventilată."
  },
  {
    id: 6,
    title: "Ansamblu Rezidențial Palazu",
    category: "Rezidențial",
    location: "Palazu Mare",
    year: "2023",
    imageUrl: "https://picsum.photos/seed/apartments_modern/800/600",
    description: "Complex de 3 blocuri P+4E cu parcare subterană generală."
  },
  {
    id: 7,
    title: "Hotel Boutique & Spa",
    category: "HoReCa",
    location: "Eforie Nord",
    year: "2022",
    imageUrl: "https://picsum.photos/seed/hotel_resort/800/900",
    description: "Reabilitare și extindere structură existentă, integrare zonă SPA."
  },
  {
    id: 8,
    title: "Showroom Auto & Service",
    category: "Comercial",
    location: "Valu lui Traian",
    year: "2024",
    imageUrl: "https://picsum.photos/seed/showroom_steel/800/600",
    description: "Structură metalică ușoară, grinzi cu zăbrele și pereți cortină."
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