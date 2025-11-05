import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function RocketSection() {
  const [launch, setLaunch] = useState(false);

  const handleLaunch = () => {
    setLaunch(false);
    // small delay to restart the animation
    setTimeout(() => setLaunch(true), 80);
  };

  return (
    <section id="launch" className="relative w-full py-24 bg-gradient-to-b from-black via-indigo-950 to-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* subtle stars */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Décollage en direct
            </h2>
            <p className="mt-4 text-violet-100/90">
              Appuyez sur le bouton pour propulser la fusée et laissez une traînée
              lumineuse derrière elle.
            </p>
            <button
              onClick={handleLaunch}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-fuchsia-500/90 hover:bg-fuchsia-500 px-5 py-3 text-white shadow-lg shadow-fuchsia-500/30 transition"
            >
              <Rocket className="h-5 w-5" /> Lancer la fusée
            </button>
          </div>

          <div className="relative h-[340px] md:h-[420px] rounded-xl border border-white/10 bg-gradient-to-b from-indigo-900/40 to-black/40 overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-fuchsia-500/20 to-transparent pointer-events-none" />

            <AnimatePresence>
              {launch && (
                <motion.div
                  key="rocket"
                  initial={{ y: 120, x: 0, opacity: 1, rotate: 0 }}
                  animate={{ y: -420, x: 40, opacity: 1, rotate: -8 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2.4, ease: [0.2, 0.8, 0.2, 1] }}
                  className="absolute bottom-8 left-8"
                >
                  <div className="relative">
                    <Rocket className="h-12 w-12 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
                    {/* flame */}
                    <motion.div
                      className="absolute left-1/2 top-9 -translate-x-1/2 w-2 h-2 rounded-full"
                      style={{ background: 'radial-gradient(circle, #FFD37D 0%, #FF5A8A 60%, rgba(255,90,138,0) 70%)' }}
                      animate={{
                        scale: [1, 1.6, 1],
                        opacity: [0.9, 0.6, 0.9],
                        y: [0, 6, 0],
                      }}
                      transition={{ repeat: Infinity, duration: 0.28 }}
                    />
                    {/* exhaust trail */}
                    <motion.div
                      className="absolute left-1/2 top-11 -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-fuchsia-300 via-fuchsia-500 to-transparent rounded-b-full"
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: [0.9, 0.5, 0.9], height: [96, 112, 96] }}
                      transition={{ repeat: Infinity, duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* twinkling stars */}
            <div className="absolute inset-0">
              {[...Array(24)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute block h-1 w-1 rounded-full bg-white/90"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    boxShadow: '0 0 6px rgba(255,255,255,0.8)'
                  }}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
