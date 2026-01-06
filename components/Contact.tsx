import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-sd-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Coloana Stânga: Informații Contact */}
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">
              Contact
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-sd-gray" />
                <div>
                  <h4 className="uppercase font-bold tracking-wider mb-2 text-sm text-gray-400">Adresă</h4>
                  <p className="text-xl">Constanța, România</p>
                  <p className="text-gray-400">Disponibil în tot județul</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-sd-gray" />
                <div>
                  <h4 className="uppercase font-bold tracking-wider mb-2 text-sm text-gray-400">Telefon</h4>
                  <p className="text-xl">+40 700 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-sd-gray" />
                <div>
                  <h4 className="uppercase font-bold tracking-wider mb-2 text-sm text-gray-400">Email</h4>
                  <a href="mailto:contact@sd-design.ro" className="text-xl hover:text-gray-300 transition-colors">
                    contact@sd-design.ro
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coloana Dreaptă: Formular */}
          <div className="md:col-span-7 bg-white/5 p-8 md:p-12">
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Trimite un mesaj</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Nume</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:border-white focus:outline-none transition-colors" placeholder="Numele dvs." />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:border-white focus:outline-none transition-colors" placeholder="Email contact" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Mesaj</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:border-white focus:outline-none transition-colors" placeholder="Detalii despre proiect..."></textarea>
              </div>
              <button className="bg-white text-black px-8 py-3 uppercase tracking-widest font-bold text-sm hover:bg-gray-200 transition-colors w-full md:w-auto">
                Trimite Solicitare
              </button>
            </form>
          </div>
        </div>

        {/* Secțiunea Footer / Poza și Copyright */}
        <div className="mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8 text-xs uppercase tracking-widest text-gray-600 font-bold">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p>&copy; {new Date().getFullYear()} S&D Design Project.</p>
            <div className="relative group">
              <img 
                src="/firma.png" 
                alt="Firma de Incredere 2019" 
                className="h-16 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-500">Toate drepturile rezervate.</p>
            <p className="mt-2">Ing. Denis Bucatica</p>
          </div>
        </div>

      </div> {/* Închide container principal */}
    </section> /* Închide section */
  );
};

export default Contact;
