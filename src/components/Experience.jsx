import { Briefcase, Building2 } from "lucide-react";

const experiences = [
  {
    role: "AI-utvecklare & systemdesigner — Kandidatuppsats",
    company: "Rebuildr & Partners",
    period: "2025",
    bullets: [
      "Medutformade och utvecklade KvickSell, ett AI-drivet system för automatiska annonser och CO₂-besparingar.",
      "Implementerade LLM och vektordatabas för bildanalys och fältextraktion, ökade noggrannheten med 30%.",
      "Samarbetade kring datamängder, modellevaluering och kravspecifikation.",
      "Levererade ML-insikter om materialåterbruk och hållbarhet i byggsektorn.",
    ],
  },
  {
    role: "Teknisk konsult (sommarroll)",
    company: "Advania",
    period: "2023–2025",
    bullets: [
      "Konfigurerade och driftsatte IT-system för företagskunder och skolor.",
      "Hanterade storskaliga system för tillgångsspårning och förbättrade precision och effektivitet.",
    ],
  },
  {
    role: "Teammedlem",
    company: "Uppsala University Makerspace",
    period: "2023–2025",
    bullets: [
      "Ledde workshops i programmering och 3D-modellering.",
      "Stödde teknisk problemlösning och kreativ projektutveckling.",
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
