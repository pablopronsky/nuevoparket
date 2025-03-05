import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navigationItems = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#sucursales', label: 'Sucursales' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#contacto', label: 'Contacto' },
] as const;

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto p-6 flex justify-between items-center bg-gradient-to-b from-black to-transparent relative">
      <div className="flex items-center">
        <Image
          src="/npwhite.png"
          alt="Nuevo Parket Logo"
          width={64}
          height={64}
          className="mr-2 opacity-95"
        />
      </div>
      
      <nav className="hidden md:flex space-x-6 font-bold text-[#f5f5f5]">
        {navigationItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="relative hover:text-[#ef7f1a] transition-colors group"
          >
            {label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ef7f1a] transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>

      <MobileMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
    </header>
  );
};

type MobileMenuProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const MobileMenu = ({ isOpen, onToggle }: MobileMenuProps) => (
  <>
    <button onClick={onToggle} className="md:hidden z-50" aria-label="Toggle menu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>

    {isOpen && (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40">
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navigationItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-2xl text-[#f5f5f5]/90 hover:text-[#ef7f1a] transition-colors"
              onClick={onToggle}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    )}
  </>
);

export default Navbar;
