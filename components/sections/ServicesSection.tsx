import React from 'react';
import ServiceCard from '../service-card';
import { SERVICES } from '../../lib/constants';

export default function ServicesSection() {
  return (
    <section id="servicios" className="section-padding bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center my-16 text-4xl md:text-5xl">Nuestros Servicios</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch">
            {SERVICES.map((service) => (
              <div key={service.title} className="w-full max-w-sm flex">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
