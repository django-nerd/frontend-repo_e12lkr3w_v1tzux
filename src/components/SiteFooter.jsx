import React from 'react';

export default function SiteFooter() {
  return (
    <footer className="w-full bg-black text-white/80 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Mystères de l’espace. Tous droits réservés.</p>
        <div className="text-xs text-white/60">
          Inspiré par la beauté du cosmos — galaxies, nébuleuses et rêves stellaires.
        </div>
      </div>
    </footer>
  );
}
