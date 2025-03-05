import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-stretch justify-center">
          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            <div className="w-full max-w-[600px]">
              <Image
                src="/logo-header.png"
                alt="Nuevo Parket Logo"
                width={1000}
                height={250}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center px-8">
            <div className="flex flex-1 items-center">
              <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            <div className="w-full max-w-[400px] flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-[#ef7f1a] text-center whitespace-nowrap">
                Creamos Bienestar
              </h2>
              <p className="text-lg md:text-xl text-center font-bold section-text">
                En Nuevo Parket simplificamos tu obra estando en cada detalle
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="my-12 h-0.5 w-[60%] border-t-0 bg-neutral-100 dark:bg-white/10" />
      </div>
    </section>
  );
}
