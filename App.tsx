import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Brands } from './components/Brands';
import { ExpertService } from './components/ExpertService';
import { DigitalSolution } from './components/DigitalSolution';
import { WorkProcess } from './components/WorkProcess';
import { Reviews } from './components/Reviews';
import { CTA } from './components/CTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <Navbar />

      <main className="w-full">
        {/* Primary Landing Area */}
        <HeroSection />

        {/* Social Proof / Trust */}
        <Brands />

        {/* Services Breakdown */}
        <ExpertService />

        {/* Solution Details */}
        <DigitalSolution />

        {/* How it Works */}
        <WorkProcess />

        {/* User Feedback */}
        <Reviews />

        {/* Call to Action & Footer */}
        <CTA />
      </main>
    </div>
  );
};

export default App;