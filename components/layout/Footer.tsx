import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://instagram.com/nuevoparket',
    icon: <Instagram size={24} />,
    label: 'Instagram'
  },
  {
    href: 'https://wa.me/5492216172006',
    icon: <MessageCircle size={24} />,
    label: 'WhatsApp'
  },
  {
    href: 'https://www.facebook.com/pisosnuevoparket/',
    icon: <Facebook size={24} />,
    label: 'Facebook'
  }
] as const;

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Image
              src="/npwhite.png"
              alt="Nuevo Parket Logo"
              width={60}
              height={60}
              className="mb-4 mx-auto md:mx-0"
            />
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Nuevo Parket. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ef7f1a] transition-colors"
              >
                {icon}
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
