import React from 'react';
import BranchCard from '../branch-card';
import { BRANCHES } from '../../lib/constants';

export default function BranchesSection() {
  return (
    <section id="sucursales" className="section-padding">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="section-title text-center my-16 text-4xl md:text-5xl">Nuestras Sucursales</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch">
            {BRANCHES.map((branch) => (
              <div key={branch.name} className="w-full max-w-sm flex section-text">
                <BranchCard
                  name={branch.name}
                  image={branch.image}
                  mapUrl={branch.mapUrl}
                  whatsappUrl={branch.whatsappUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
