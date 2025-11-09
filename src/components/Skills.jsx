import { Wrench, Sigma, FunctionSquare, Database, BarChart3 } from "lucide-react";

const categories = [
  {
    title: "Programmering & Verktyg",
    icon: Wrench,
    items: [
      "Python",
      "C/C++",
      "Java",
      "TypeScript/JavaScript",
      "MATLAB",
      "SQL",
      "Git · Linux · Docker",
    ],
  },
  {
    title: "Matematik & Modellering",
    icon: Sigma,
    items: [
      "Sannolikhetsteori & statistik",
      "Stokastiska processer (BM, Poisson, SDE)",
      "Monte Carlo, variansreduktion",
      "Numeriska metoder",
      "Optimering (gradientbaserad & konvex)",
      "Statistisk inferens & lärandeteori",
    ],
  },
  {
    title: "Tidsserier & Prognoser",
    icon: FunctionSquare,
    items: [
      "AR/ARIMA · SARIMA",
      "Linjär-regression & regularisering",
      "Tillståndsrymdsmodeller & filtrering",
      "Osäkerhetskvantifiering",
    ],
  },
  {
    title: "Databaser & Dataflöden",
    icon: Database,
    items: ["SQL", "ETL", "Schemadesign", "Vektorindex/embeddings"],
  },
  {
    title: "Visualisering & Kvalitet",
    icon: BarChart3,
    items: [
      "Matplotlib · Seaborn · Plotly",
      "Datakvalitet & dokumentation",
      "Metadata & datastyrning",
      "Root cause analysis",
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-2xl font-bold">Tekniska färdigheter</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-lg bg-white/10 p-2">
                  <cat.icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">{cat.title}</h3>
              </div>
              <ul className="space-y-1 text-sm text-slate-200">
                {cat.items.map((it, i) => (
                  <li key={i}>• {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
