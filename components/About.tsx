import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white text-sd-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
               <img 
                 src="https://picsum.photos/seed/engineer/800/1000" 
                 alt="Denis Bucatica - Administrator" 
                 className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
             <div className="absolute -bottom-6 -right-6 bg-sd-black text-white p-6 md:p-8 max-w-[200px]">
               <p className="font-bold text-lg">Ing. Denis Bucatica</p>
               <p className="text-sm text-gray-400">Administrator</p>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-8">
              S&D Design Project
            </h2>
            <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed">
              <p>
                Suntem un birou de proiectare completă cu sediul în Constanța, dedicat excelenței în <strong>inginerie structurală</strong> și <strong>arhitectură</strong>. Abordăm fiecare proiect integrat, de la conceptul vizual până la detaliul de execuție.
              </p>
              <p>
                Sub coordonarea inginerului <strong>Denis Bucatica</strong>, firma S&D Design Project oferă soluții optimizate, respectând cele mai noi normative în construcții. Îmbinăm estetica arhitecturală cu siguranța structurală pentru a livra clădiri durabile și funcționale.
              </p>
              <blockquote className="border-l-4 border-sd-black pl-6 py-2 my-8 italic text-xl text-black">
                "Arhitectura dă formă visului, iar structura îi oferă trăinicie în timp."
              </blockquote>
              <p>
                Active în tot județul Constanța (Mangalia, Medgidia, Năvodari) și zonele limitrofe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};