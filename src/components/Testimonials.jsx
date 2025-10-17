import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Sejak dibantu Mitra Digital, omzet kedai kopi saya naik 30%! Sistem kasirnya simpel dan laporan penjualan jadi otomatis. Sangat membantu!",
    name: 'Budi Santoso',
    business: 'Kopi Senja',
    avatar: 'https://i.pravatar.cc/150?u=budi'
  },
  {
    quote: "Website dan toko online yang dibuatkan sangat profesional. Sekarang produk fashion saya bisa menjangkau pelanggan di seluruh Indonesia.",
    name: 'Rina Wijaya',
    business: 'Gaya Nusantara',
    avatar: 'https://i.pravatar.cc/150?u=rina'
  },
  {
    quote: "Pelatihannya sangat mudah dipahami. Tim saya yang tadinya gaptek, sekarang sudah mahir mengelola media sosial dan iklan digital.",
    name: 'Agus Setiawan',
    business: 'Kerajinan Rotan Jaya',
    avatar: 'https://i.pravatar.cc/150?u=agus'
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Apa Kata Klien Kami?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Kisah sukses para pelaku UMKM yang telah bertransformasi bersama kami.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5" />)}
              </div>
              <p className="text-gray-600 italic flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                <div className="ml-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
