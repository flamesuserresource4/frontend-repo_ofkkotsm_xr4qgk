import { Wrench, Atom, Database, BarChart3, GitBranch } from "lucide-react";

const categories = [
  {
    title: "Programmering & Verktyg",
    icon: Wrench,
    items: ["Python", "C/C++", "Java", "TypeScript/JavaScript", "MATLAB", "SQL", "Git", "Linux", "Docker"],
  },
  {
    title: "ML & Dataanalys",
    icon: Atom,
    items: [
      "PyTorch",
      "scikit-learn",
      "NumPy · pandas · SciPy",
      "regressionsanalys",
      "Monte Carlo & stokastik",
      "tidsserieprognoser",
      "feature engineering",
      "modelloptimering",
    ],
  },
  {
    title: "Databaser",
    icon: Database,
    items: ["SQL", "ETL", "schemadesign", "vektordatabaser"],
  },
  {
    title: "Visualisering & Data Governance",
    icon: BarChart3,
    items: [
      "Matplotlib · Seaborn · Plotly",
      "Datakvalitet & datastyrning",
      "metadata & dokumentation",
      "root cause analysis",
    ],
  },
  {
    title: "Övrigt",
    icon: GitBranch,
    items: ["JupyterLab", "VS Code", "Autodesk CAD", "Blender", "Autodesk Inventor"],
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
