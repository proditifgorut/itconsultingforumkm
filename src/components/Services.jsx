import React from 'react';
import { Globe, ShoppingCart, BarChart3, Megaphone, Users, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-10 w-10 text-brand-primary-600" />,
    title: 'Website & Toko Online',
    description: 'Bangun kehadiran digital profesional yang menarik pelanggan dan meningkatkan penjualan.',
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-brand-primary-600" />,
    title: 'Sistem Kasir & Inventori',
    description: 'Modernisasi operasional dengan sistem POS digital untuk transaksi cepat dan manajemen stok akurat.',
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-brand-primary-600" />,
    title: 'Otomatisasi Laporan',
    description: 'Dapatkan laporan keuangan dan penjualan otomatis untuk pengambilan keputusan yang lebih cerdas.',
  },
  {
    icon: <Megaphone className="h-10 w-10 text-brand-primary-600" />,
    title: 'Digital Marketing',
    description: 'Jangkau pasar lebih luas melalui strategi SEO, Iklan Digital, dan media sosial yang efektif.',
  },
  {
    icon: <Users className="h-10 w-10 text-brand-primary-600" />,
    title: 'Pelatihan & Pendampingan',
    description: 'Tingkatkan kapabilitas tim Anda dengan pelatihan digital yang disesuaikan kebutuhan bisnis.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-brand-primary-600" />,
    title: 'Solusi Kustom',
    description: 'Solusi teknologi yang dirancang khusus untuk menjawab tantangan unik bisnis Anda.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Layanan Unggulan Kami</h2>
          <p className="mt-4 text-lg text-gray-600">
            Solusi teknologi terintegrasi yang dirancang untuk mendorong pertumbuhan, efisiensi, dan daya saing bisnis UMKM Anda.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary-100 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
