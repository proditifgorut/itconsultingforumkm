import React from 'react';
import { MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="bg-brand-primary-800 rounded-2xl p-8 md:p-16 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Siap Mengembangkan Bisnis Anda ke Level Berikutnya?
            </h2>
            <p className="mt-4 text-lg text-brand-primary-200 max-w-2xl mx-auto">
              Jangan tunda lagi. Ambil langkah pertama menuju transformasi digital. Jadwalkan sesi konsultasi gratis bersama tim ahli kami hari ini.
            </p>
            <div className="mt-8">
              <a 
                href="https://wa.me/6283119226089" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-white text-brand-primary-700 font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg text-lg"
              >
                <MessageCircle className="h-6 w-6" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
