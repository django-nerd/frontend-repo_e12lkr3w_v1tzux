import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Cosmic Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient + vignette overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-violet-200 via-white to-fuchsia-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Les mystères de l’espace
          </motion.h1>
          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-violet-100/90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Plongez dans un univers interactif: galaxies lumineuses, nébuleuses
            éthérées et décollages de fusées spectaculaires.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <a
              href="#launch"
              className="rounded-full bg-fuchsia-500/80 hover:bg-fuchsia-500 px-6 py-3 text-white shadow-lg shadow-fuchsia-500/30 transition"
            >
              Lancer une fusée
            </a>
            <a
              href="#galaxies"
              className="rounded-full bg-white/10 hover:bg-white/20 px-6 py-3 text-white backdrop-blur border border-white/10 transition"
            >
              Explorer les galaxies
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
