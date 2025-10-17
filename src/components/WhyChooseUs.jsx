import React from 'react';
import { Handshake, Target, UserCheck, Package } from 'lucide-react';

const features = [
  {
    icon: <Handshake className="h-8 w-8 text-brand-secondary" />,
    title: 'Partner Strategis Bisnis',
    description: 'Kami bukan sekadar penyedia IT, tapi mitra yang memahami tujuan bisnis Anda dan merancang teknologi untuk mencapainya.',
  },
  {
    icon: <Target className="h-8 w-8 text-brand-secondary" />,
    title: 'Solusi Terukur & Tepat Sasaran',
    description: 'Setiap solusi disesuaikan dengan kebutuhan, kapasitas, dan target pasar Anda untuk hasil yang optimal dan terukur.',
  },
  {
    icon: <UserCheck className="h-8 w-8 text-brand-secondary" />,
    title: 'Pendekatan Human-Centered',
    description: 'Teknologi yang kami bangun berpusat pada kemudahan pengguna, memastikan tim Anda dapat beradaptasi dengan cepat.',
  },
  {
    icon: <Package className="h-8 w-8 text-brand-secondary" />,
    title: 'Ekosistem Solusi Terpadu',
    description: 'Menggabungkan strategi bisnis, teknologi, dan pemasaran digital sebagai satu kesatuan untuk pertumbuhan berkelanjutan.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" 
                alt="Tim Mitra Digital UMKM sedang berdiskusi" 
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mengapa Kami Pilihan Tepat untuk Bisnis Anda?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Kami berkomitmen untuk menjadi penggerak pertumbuhan UMKM lokal melalui digitalisasi yang cerdas dan manusiawi.
            </p>
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-secondary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
