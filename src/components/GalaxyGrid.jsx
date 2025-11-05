import React from 'react';
import { motion } from 'framer-motion';
import { Star, Moon, Rocket } from 'lucide-react';

const items = [
  {
    icon: Star,
    title: 'Galaxies spirales',
    text: 'Des bras tourbillonnants où naissent de nouvelles étoiles dans des nuages de gaz cosmiques.'
  },
  {
    icon: Moon,
    title: 'Nébuleuses éthérées',
    text: 'Des voiles colorés de poussières interstellaires, sculptés par les vents stellaires.'
  },
  {
    icon: Rocket,
    title: 'Voyages interstellaires',
    text: 'Imaginez franchir les frontières du temps pour explorer des mondes lointains.'
  },
  {
    icon: Star,
    title: 'Amas d’étoiles',
    text: 'Des milliers d’astres liés gravitationnellement, scintillant à l’unisson.'
  },
];

export default function GalaxyGrid() {
  return (
    <section id="galaxies" className="relative w-full py-24 bg-gradient-to-b from-black to-indigo-950 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Explorer les merveilles cosmiques</h2>
          <p className="mt-3 text-violet-100/90">Un bref aperçu des phénomènes qui peuplent l’obscurité lumineuse du cosmos.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" aria-hidden />
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 p-2 border border-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-violet-100/90">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
