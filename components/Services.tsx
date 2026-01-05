import React from 'react';
import { PenTool, HardHat, FileText, Component } from 'lucide-react';
import { Service } from '../types';

const servicesData: Service[] = [
  {
    id: 1,
    title: "Proiectare Rezistență",
    description: "Calcul structural complet pentru clădiri civile și industriale (beton, metal, lemn/zidărie).",
    icon: "Component"
  },
  {
    id: 2,
    title: "Design Arhitectural",
    description: "Concepte vizuale unice, randări 3D fotorealiste și planificare funcțională pentru spații moderne.",
    icon: "PenTool"
  },
  {
    id: 3,
    title: "Urmărire Șantier",
    description: "Asistență tehnică pe parcursul execuției pentru asigurarea conformității cu proiectul.",
    icon: "HardHat"
  },
  {
    id: 4,
    title: "Avize & Autorizații",
    description: "Documentație tehnică pentru obținerea Certificatului de Urbanism și Autorizației de Construire (DTAC).",
    icon: "FileText"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-sd-gray text-sd-black">
      <div className="container mx-auto px-6 md:px-12">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase sticky top-32">
                Servicii <br/> Complete
              </h2>
            </div>
            
            <div className="md:col-span-8 grid grid-cols-1 gap-0 border-t border-gray-300">
              {servicesData.map((service) => (
                <div key={service.id} className="group border-b border-gray-300 py-12 hover:bg-white transition-colors duration-300 px-4 md:px-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="bg-sd-black text-white p-3 w-12 h-12 flex items-center justify-center rounded-sm shrink-0">
                      {service.icon === 'Component' && <Component size={24} />}
                      {service.icon === 'PenTool' && <PenTool size={24} />}
                      {service.icon === 'HardHat' && <HardHat size={24} />}
                      {service.icon === 'FileText' && <FileText size={24} />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed max-w-xl">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </div>
    </section>
  );
};