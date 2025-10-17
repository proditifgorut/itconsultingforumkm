import React from 'react';
import { Layers, Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook />, href: '#' },
    { icon: <Instagram />, href: '#' },
    { icon: <Linkedin />, href: '#' },
    { icon: <Twitter />, href: '#' },
  ];

  return (
    <footer className="bg-brand-primary-950 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Layers className="h-8 w-8 text-white" />
              <span className="text-xl font-bold">Mitra Digital UMKM</span>
            </a>
            <p className="text-brand-primary-200 max-w-md">
              Mitra strategis bagi pelaku usaha kecil dan menengah yang ingin berkembang di era digital. Kami hadir untuk membuat teknologi lebih mudah dan berdampak.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-brand-primary-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-brand-primary-200 hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#about" className="text-brand-primary-200 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#contact" className="text-brand-primary-200 hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-brand-primary-200">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-brand-primary-300" />
                <a href="mailto:umkminfo@unisgu.ac.id" className="hover:text-white transition-colors break-all">umkminfo@unisgu.ac.id</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-brand-primary-300" />
                <a href="https://wa.me/6283119226089" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+62 831-1922-6089</a>
              </li>
              <li className="pt-2">
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} className="hover:text-white transition-colors">{link.icon}</a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-primary-800 pt-6 text-center text-brand-primary-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Mitra Digital UMKM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
