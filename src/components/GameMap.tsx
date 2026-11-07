import { Compass } from 'lucide-react';
import { locations } from '../data/locations';

export function GameMap() {
  return (
    <section className="relative aspect-5/3 overflow-hidden rounded-2xl border-4 border-wood-700 bg-[radial-gradient(ellipse_at_center,#f3e6c8_0%,#d4b980_70%,#a88450_100%)] shadow-2xl">
      {/* quadriculado do mapa */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(92,58,36,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(92,58,36,0.12)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* terrenos */}
      <div className="absolute left-[28%] top-[38%] h-[30%] w-[26%] rounded-[50%] bg-moss-600/40 blur-sm" />
      <div className="absolute left-[60%] top-[56%] h-[22%] w-[24%] rounded-[50%] bg-lake-600/40 blur-sm" />

      {/* estradas */}
      <svg viewBox="0 0 400 300" fill="none" className="absolute inset-0 h-full w-full">
        <path
          d="M60 228 C100 200 120 160 160 144 S250 110 280 84 S320 60 336 42"
          className="stroke-wood-600"
          strokeWidth="3"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />
        <path
          d="M160 144 C220 190 270 200 312 198"
          className="stroke-wood-600"
          strokeWidth="3"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />
      </svg>

      {/* sombra nas bordas, efeito de papel envelhecido */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(60,35,15,0.55)]" />

      <h2 className="absolute left-4 top-4 font-title text-lg font-bold tracking-wide text-wood-800 md:text-2xl">
        Mapa de Aldoria
      </h2>

      <Compass className="absolute bottom-4 right-4 size-12 text-wood-700/60 md:size-16" />

      {/* pins dos lugares */}
      {locations.map(location => {
        const Icon = location.icon;

        return (
          <div
            key={location.id}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: location.top, left: location.left }}
          >
            <div className="flex size-9 items-center justify-center rounded-full border-2 border-gold-500 bg-wood-800 text-gold-400 shadow-lg transition group-hover:scale-125 group-hover:bg-wood-700">
              <Icon className="size-5" />
            </div>
            <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-wood-900 px-2 py-0.5 text-xs text-parchment-100 opacity-0 transition-opacity group-hover:opacity-100">
              {location.name}
            </span>
          </div>
        );
      })}
    </section>
  );
}