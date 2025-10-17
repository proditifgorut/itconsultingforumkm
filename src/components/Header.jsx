import React, { useState } from 'react';
import { Layers, X, Menu } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Layanan', href: '#services' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header id="home" className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <Layers className="h-8 w-8 text-brand-primary-600" />
            <span className="text-xl font-bold text-gray-800">Mitra Digital UMKM</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-brand-primary-600 font-medium transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a href="#contact" className="bg-brand-primary-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-700 transition-all duration-300 shadow">
              Mulai Konsultasi
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-brand-primary-600 font-medium py-2">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-brand-primary-600 text-white font-semibold w-full text-center px-5 py-2.5 rounded-lg hover:bg-brand-primary-700 transition-all duration-300 mt-2">
              Mulai Konsultasi
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
