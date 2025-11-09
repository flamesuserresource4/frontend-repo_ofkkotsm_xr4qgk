import { School } from "lucide-react";

const educations = [
  {
    program: "Masterprogram i Data Science",
    school: "Uppsala universitet",
    period: "2025 – Pågående",
    detail:
      "Inriktning: Maskininlärning, statistik, sannolikhet, simulering och dataanalys",
  },
  {
    program: "Kandidatexamen i Informationsteknik",
    school: "Uppsala universitet",
    period: "2022 – 2025",
    detail:
      "Relevanta kurser: Numeriska metoder, datastrukturer, linjär algebra, systemdesign och användbarhet",
  },
  {
    program: "Teknik, design och form",
    school: "Anna Whitlocks gymnasium",
    period: "2019 – 2022",
    detail: "Gymnasial utbildning med teknisk inriktning",
  },
];

export default function Education() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-slate-900 p-2 text-white">
            <School className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold">Utbildning</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {educations.map((e, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">{e.program}</h3>
              <p className="text-sm text-slate-600">{e.school}</p>
              <p className="mt-1 text-xs text-slate-500">{e.period}</p>
              <p className="mt-3 text-sm text-slate-700">{e.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
