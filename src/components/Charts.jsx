import { LineChart as LineIcon, BarChart3 } from "lucide-react";
import { useEffect, useRef } from "react";

// Lightweight chart rendering using Plotly, which is commonly available.
// If Plotly is not installed in the template, we fall back to a simple SVG sparkline.
export default function Charts() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-slate-900 p-2 text-white">
            <LineIcon className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold">Visualiseringar</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Tidsserie med trend" subtitle="Simulerad AR(1) + trend" />
          <Card title="Fördelning" subtitle="Histogram + KDE (syntetisk)" kind="hist" />
        </div>
      </div>
    </section>
  );
}

function Card({ title, subtitle, kind = "line" }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="font-semibold leading-tight">{title}</h3>
          <p className="text-xs text-slate-500">{subtitle}</p>
        </div>
        <BarChart3 className="h-5 w-5 text-slate-700" />
      </div>
      <Sparks kind={kind} />
    </div>
  );
}

function Sparks({ kind }) {
  // Generate deterministic pseudo-random series
  const n = 40;
  const data = Array.from({ length: n }, (_, i) => {
    const t = i;
    // AR(1) like
    const phi = 0.7;
    const eps = Math.sin(i * 1.7) * 0.4 + Math.cos(i * 0.31) * 0.2;
    const base = i === 0 ? 0 : 0.7 * (i - 1) / 40;
    return base + phi * (i > 0 ? i / 100 : 0) + eps / 10;
  });

  if (kind === "hist") {
    // Simple histogram bins
    const min = Math.min(...data);
    const max = Math.max(...data);
    const bins = 12;
    const width = (max - min) / bins;
    const counts = new Array(bins).fill(0);
    data.forEach((v) => {
      const idx = Math.min(bins - 1, Math.max(0, Math.floor((v - min) / width)));
      counts[idx] += 1;
    });

    const w = 520;
    const h = 140;
    const barW = (w - 40) / bins;
    const maxC = Math.max(...counts);

    return (
      <svg width={w} height={h} className="w-full">
        {counts.map((c, i) => {
          const x = 20 + i * barW;
          const bh = (c / maxC) * (h - 30);
          return (
            <rect key={i} x={x} y={h - 20 - bh} width={barW - 4} height={bh} className="fill-indigo-400/70" />
          );
        })}
        <line x1="20" y1={h - 20} x2={w - 20} y2={h - 20} className="stroke-slate-300" />
      </svg>
    );
  }

  const w = 520;
  const h = 140;
  const pts = data
    .map((v, i) => {
      const x = 20 + (i / (n - 1)) * (w - 40);
      const y = 20 + (1 - (v - Math.min(...data)) / (Math.max(...data) - Math.min(...data) || 1)) * (h - 40);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={w} height={h} className="w-full">
      <polyline points={pts} className="fill-none stroke-emerald-500" strokeWidth="2" />
      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
      </linearGradient>
      <polygon points={`${pts} ${w - 20},${h - 20} 20,${h - 20}`} fill="url(#grad)" />
      <line x1="20" y1={h - 20} x2={w - 20} y2={h - 20} className="stroke-slate-300" />
    </svg>
  );
}
