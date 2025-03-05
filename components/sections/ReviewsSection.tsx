import React from 'react';
import ReviewCarousel from '../review-carousel';

export default function ReviewsSection() {
  return (
    <section id="opiniones" className="section-padding">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="section-title text-center my-16 text-4xl md:text-5xl">¿Qué dicen de nosotros?</h2>
        <div className="max-w-4xl mx-auto section-text">
          <ReviewCarousel />
        </div>
      </div>
    </section>
  );
}
