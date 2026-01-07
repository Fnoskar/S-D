import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-sd-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Coloana Stânga: Informații Contact + Hartă */}
          <div className="md:col-span-5 space-y-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">
                Contact
              </h2>
              <div className="space-y-8">
                {/* Adresă */}
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-sd-gray shrink-0" />
                  <div>
                    <h4 className="uppercase font-bold tracking-wider mb-2 text-sm text-gray-400">Adresă</h4>
                    <a 
                      href="https://www.google.com/maps/dir//S.C.+S%26D+DESIGN+PROJECT+SRL+Strada+Gheorghe+Doja+40+Cernavod%C4%83+905200/@44.3371905,28.032608,16z" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group"
                    >
                      <p className="text-xl group-hover:text-sd-gray transition-colors">Strada Gheorghe Doja Nr. 40</p>
                      <p className="text-gray-400 group-hover:text-sd-gray transition-colors">Cernavodă, Constanța</p>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 text-sd-gray shrink-0" />
                  <div>
                    <h4 className="uppercase font-bold tracking-wider mb-2 text-sm text-gray-400">Telefon</h4>
                    <p className="text-xl">+40 729 661 175</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-sd-gray shrink-0" />
                  <div>
                    <h4 className="uppercase font-bold tracking-wider mb-2 text-sm text-gray-400">Email</h4>
                    <a href="mailto:se7den@gmail.com" className="text-xl hover:text-sd-gray transition-colors">
                      se7den@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hartă Integrată - Pin mutat la S&D Design Project S.R.L. (Nr. 40) */}
            <div className="w-full h-[300px] bg-white/5 rounded-sm overflow-hidden border border-gray-800 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/place/S.C.+S%26D+DESIGN+PROJECT+SRL/@44.3400793,28.0408193,17.08z/data=!4m6!3m5!1s0x40ba9dd5181d95f3:0x37a0c24da2dad36d!8m2!3d44.3390657!4d28.0426755!16s%2Fg%2F11h3dgpbyp?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                allowFullScreen={true}
                loading="lazy"
                title="Locație S&D Design Project S.R.L."
              ></iframe>
            </div>
          </div>

          {/* Coloana Dreaptă: Formular */}
          <div className="md:col-span-7 bg-white/5 p-8 md:p-12 border border-white/10 rounded-sm h-fit">
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Trimite un mesaj</h3>
            
            <form 
              action="https://formspree.io/f/xojvgazd" 
              method="POST"
              className="space-y-6"
            >
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Nume</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:border-white focus:outline-none transition-colors" 
                    placeholder="Numele dvs." 
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:border-white focus:outline-none transition-colors" 
                    placeholder="Email contact" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Mesaj</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  required 
                  className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:border-white focus:outline-none transition-colors" 
                  placeholder="Detalii despre proiect..."
                ></textarea>
              </div>
              
              <div className="flex justify-start pt-4">
                <button 
                  type="submit" 
                  className="bg-white text-black px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-sd-gray transition-all w-full md:w-auto shadow-lg"
                >
                  Trimite Solicitare
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8 text-xs uppercase tracking-widest text-gray-600 font-bold">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p>© {new Date().getFullYear()} S&D Design Project.</p>
            <img src="/firma1.png" alt="Firma de Incredere" className="h-16 w-auto opacity-50 invert" />
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-500">Toate drepturile rezervate.</p>
            <p className="mt-2 text-white">Ing. Denis Bucatica</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
