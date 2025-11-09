import { Briefcase, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Kvantitativ modellering — Kandidatuppsats",
    company: "Rebuildr & Partners",
    period: "2025",
    bullets: [
      "Utformade KvickSell med fokus på kvantitativa metoder för prissättning och resurseffektivitet.",
      "Byggde vektoriserade pipeline: dataextraktion, statistisk analys och osäkerhetsmodellering.",
      "Genomförde modellvalidering, konfidensintervall och känslighetsanalys.",
      "Kvantifierade potentiella CO₂-besparingar med Monte Carlo-simuleringar.",
    ],
  },
  {
    role: "Teknisk konsult (sommarroll)",
    company: "Advania",
    period: "2023–2025",
    bullets: [
      "Konfigurerade och driftsatte system; mätte och förbättrade processernas tillförlitlighet.",
      "Implementerade spårningsrutiner och rapporter baserat på dataunderlag.",
    ],
  },
  {
    role: "Teammedlem",
    company: "Uppsala University Makerspace",
    period: "2023–2025",
    bullets: [
      "Ledde workshops i programmering, numeriska metoder och 3D-modellering.",
      "Stödde teknisk problemlösning och metodisk prototypning.",
    ],
  },
  {
    role: "Servitör (sommarroll)",
    company: "Indian Streetfood",
    period: "2022–2024",
    bullets: [
      "Stärkt kommunikation, multitasking och samarbetsförmåga i snabb miljö.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-slate-900 p-2 text-white">
            <Briefcase className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold">Erfarenhet</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-indigo-600/10 p-2 text-indigo-600">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{exp.role}</h3>
                    <p className="text-sm text-slate-600">{exp.company}</p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                  {exp.period}
                </span>
              </div>
              <ul className="mt-4 list-disc space-y-1 pl-6 text-slate-700">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
