import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projectsData: Project[] = [
  {
    id: 1,
    title: "IMOBIL REZIDENȚIAL 2S+P+6E",
    category: "Rezidențial",
    location: "București, Sectorul 1",
    imageUrl: "bloc bucuresti.jpeg",
    description: "Proiectare structurală și calcul pentru un imobil cu regim de înălțime ridicat. Structura este realizată în cadre de beton armat, fiind dimensionată pentru a asigura stabilitatea ansamblului și integrarea locurilor de parcare în cele două niveluri de subsol."
  },
  {
    id: 2,
    title: "DIVERTILAND",
    category: "Special",
    location: "Chiajna, jud. Ilfov",
    imageUrl: "divertiland.jpg",
    description: "Proiectare structuri speciale pentru tobogane acvatice. Activitatea a constat în dimensionarea stâlpilor metalici de susținere și a fundațiilor aferente, structura fiind gândită pentru a rezista la utilizare intensă și la sarcinile dinamice specifice echipamentelor de agrement."
  },
  {
    id: 3,
    title: "OMV",
    category: "Industrial",
    location: "Burcioaia, jud. Vrancea",
    imageUrl: "omv burcioaia.jpeg",
    description: "Dimensionare și proiectare structurală estacade (piperacks) pentru obiective industriale OMV. Activitatea a inclus configurarea cadrelor metalice pentru 5 tipuri de structuri și a elementelor de fundare, asigurând susținerea și continuitatea rețelelor industriale de conducte."
  },
  {
    id: 4,
    title: "REABILITARE ȘI MODERNIZARE STAȚIE DE EPURARE BUCUREȘTI-GLINA",
    category: "Reabilitare",
    location: "Glina, jud. Ilfov",
    imageUrl: "statie de epurare.jpeg",
    description: "Proiectare structurală pentru bazine de aerare realizate din beton armat monolit. Soluția tehnică include un radier general de 65 cm și o structură îngropată în proporție de 80%, fiind adaptată pentru rezistență ridicată în medii cu umiditate constantă."
  },
  {
    id: 5,
    title: "STAȚIE ITP",
    category: "Civil",
    location: "Ștefan cel Mare, jud. Constanța",
    imageUrl: "statie itp.jpeg",
    description: "Proiectare integrală și gestionare a documentației tehnice pentru construcție civilă. Structura metalică a fost dimensionată pentru a acomoda fluxul auto și pentru a permite montarea echipamentelor specifice de verificare tehnică."
  },
  {
    id: 6,
    title: "GRĂDINIȚA NR. 4",
    category: "Civil",
    location: "Cernavodă, jud. Constanța",
    imageUrl: "gradinita.jpg",
    description: "Reabilitare și amenajare a spațiilor verzi exterioare. Planul de modernizare a inclus sistematizarea terenului și integrarea locurilor de joacă pentru copii, asigurând o experiență sigură și optimizată pentru utilizarea spațiului exterior."
  },
  {
    id: 7,
    title: "HALĂ METALICĂ WELDE",
    category: "Industrial",
    location: "Cernavodă, jud. Constanța",
    imageUrl: "hala leucoplast.jpeg",
    description: "Proiectare structurală și dimensionare pentru obiectiv industrial. Structura metalică a fost configurată pentru a optimiza consumul de oțel, incluzând cadrele principale și sistemele de fundații adaptate sarcinilor tehnologice din incintă."
  },
  {
    id: 8,
    title: "SHOWROOM SAINT GOBAIN",
    category: "Comercial",
    location: "Vălenii de Munte, jud. Prahova", 
    imageUrl: "saintgobain.jpg",
    description: "Amenajare interioară și configurare a zonelor de prezentare. Compartimentarea spațiului și instalarea elementelor decorative au fost realizate pentru a asigura continuitatea parcursului interior și delimitarea clară a zonelor de interes."
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 border-b border-black pb-8 flex flex-col md:flex-row justify-between items-end">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-black">
            Proiecte Recente
          </h2>
          <span className="text-sm uppercase tracking-widest mt-4 md:mt-0">Portofoliu Extins</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
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
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wide mb-3">
                    {project.location}
                  </p>
                  {/* Am eliminat max-w-md pentru a lăsa textul să ocupe toată lățimea coloanei */}
                  <p className="text-gray-600 text-base leading-relaxed text-justify">
                    {project.description}
                  </p>
                </div>
                
                {/* Am adăugat flex-shrink-0 pentru a proteja iconița de textul lung */}
                <ArrowUpRight className="flex-shrink-0 ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
