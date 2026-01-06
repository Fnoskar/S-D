import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-sd-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Coloana Stânga: Informații Contact */}
         {/* Coloana Stânga: Informații Contact + Hartă Integrată */}
<div className="md:col-span-5 flex flex-col justify-between">
  <div>
    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">
      Contact
    </h2>
    <div className="space-y-8 mb-12">
      {/* Adresă Interactivă */}
      <div className="flex items-start gap-4 group cursor-pointer">
        <MapPin className="mt-1 text-sd-gray shrink-0 group-hover:text-white transition-colors" />
        <div>
          <h4 className="uppercase font-bold tracking-wider mb-2 text-sm text-gray-400">Adresă</h4>
          <p className="text-xl group-hover:text-sd-gray transition-colors">Strada Gheorghe Doja Nr. 40</p>
          <p className="text-gray-400 group-hover:text-sd-gray transition-colors">Cernavodă, Constanța</p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <Phone className="mt-1 text-sd-gray shrink-0" />
        <div>
          <h4 className="uppercase font-bold tracking-wider mb-2 text-sm text-gray-400">Telefon</h4>
          <p className="text-xl">+40 700 000 000</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Mail className="mt-1 text-sd-gray shrink-0" />
        <div>
          <h4 className="uppercase font-bold tracking-wider mb-2 text-sm text-gray-400">Email</h4>
          <a href="mailto:contact@sd-design.ro" className="text-xl hover:text-sd-gray transition-colors">
            contact@sd-design.ro
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* HARTA INTEGRATĂ - Va fi vizibilă permanent aici */}
  <div className="w-full h-[300px] bg-white/5 rounded-sm overflow-hidden border border-gray-800 shadow-2xl relative">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.336444855734!2d28.02844887664871!3d44.34421110746654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ba26f2f986221f%3A0x7d678563c6d59b20!2sStrada%20Gheorghe%20Doja%2040%2C%20Cernavod%C4%83%20905200!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
      width="100%"
      height="100%"
      style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(1.2)' }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Harta Locație S&D Design"
    ></iframe>
  </div>
</div>

          {/* Coloana Dreaptă: Formular Funcțional */}
          <div className="md:col-span-7 bg-white/5 p-8 md:p-12">
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Trimite un mesaj</h3>
            
            <form 
              action="https://formspree.io/f/xojvgazd" 
              method="POST"
              className="space-y-6"
            >
              {/* Câmp ascuns pentru a preveni spam-ul */}
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
              <button 
                type="submit" 
                className="bg-white text-black px-8 py-3 uppercase tracking-widest font-bold text-sm hover:bg-gray-200 transition-colors w-full md:w-auto"
              >
                Trimite Solicitare
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8 text-xs uppercase tracking-widest text-gray-600 font-bold">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p>&copy; {new Date().getFullYear()} S&D Design Project.</p>
            <div className="relative group">
              <img 
                src="/firma1.png" 
                alt="Firma de Incredere 2019" 
                className="h-32 w-auto grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-500">Toate drepturile rezervate.</p>
            <p className="mt-2">Ing. Denis Bucatica</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
