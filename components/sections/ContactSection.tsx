import React from 'react';
import ContactForm from '../contact-form';

export default function ContactSection() {
  return (
    <section id="contacto" className="section-padding bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="section-title text-center my-16 text-4xl md:text-5xl">Contactanos</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm shadow-xl">
            <ContactForm />
            <div className="mt-8 text-center section-text">
              <p className="text-lg">También puedes contactarnos a través de nuestras redes sociales</p>
              <p className="mt-4 text-base">
                Horario de atención: Lunes a Viernes de 9:00 a 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
