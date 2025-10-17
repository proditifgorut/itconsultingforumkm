import React from 'react';

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Transformasi Digital untuk <span className="text-brand-primary-600">UMKM Hebat</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Kami adalah mitra strategis Anda dalam memberdayakan bisnis melalui solusi teknologi terpadu. Beralih dari manual ke digital secara efisien dan terukur.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a href="#contact" className="bg-brand-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-primary-700 transition-all duration-300 shadow-lg text-lg">
              Konsultasi Gratis
            </a>
            <a href="#services" className="bg-white text-brand-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 border border-gray-300 text-lg">
              Lihat Layanan
            </a>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop" 
            alt="Tim berkolaborasi dengan teknologi digital" 
            className="rounded-xl shadow-2xl w-full h-auto object-cover"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-primary-200 rounded-full -z-10"></div>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-secondary/30 rounded-lg -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
