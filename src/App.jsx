import React from 'react';
import Hero from './components/Hero';
import RocketSection from './components/RocketSection';
import GalaxyGrid from './components/GalaxyGrid';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <RocketSection />
      <GalaxyGrid />
      <SiteFooter />
    </div>
  );
}

export default App;
