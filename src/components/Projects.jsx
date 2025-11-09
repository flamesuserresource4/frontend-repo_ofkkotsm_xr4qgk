import { Calculator, Sigma, LineChart, Layers } from "lucide-react";

const projects = [
  {
    title: "Monte Carlo-riskestimering för volatila system",
    stack: "Python · NumPy · Variansreduktion",
    icon: <Calculator className="h-5 w-5" />,
    desc:
      "Simulerade tail-risk och osäkerhet i dynamiska system. Konvergenstester och kontrollvariabler gav +25% effektivitet.",
  },
  {
    title: "Prognoser för brusiga tidsserier",
    stack: "Python · AR/ARIMA · Bayes · Filtrering",
    icon: <LineChart className="h-5 w-5" />,
    desc:
      "Modellerade serier med autoregressiva modeller och tillståndsrymd. Kvantifierade osäkerhet och förbättrade stabilitet.",
  },
  {
    title: "Huspris – stokastisk modell",
    stack: "Regression · Brownska rörelser · SDE",
    icon: <Sigma className="h-5 w-5" />,
    desc:
      "Analyserade data och modellerade prisevolution som stokastisk process för scenarioanalys.",
  },
  {
    title: "Epidemispridning – diskret händelsesimulering",
    stack: "Gillespie · stokastik · parameterkänslighet",
    icon: <Layers className="h-5 w-5" />,
    desc:
      "Utvärderade dynamik och stabilitet med stokastisk simulering och känslighetsstudier.",
  },
  {
    title: "Referensräknare för minneshantering",
    stack: "C · datastrukturer · prestanda",
    icon: <Layers className="h-5 w-5" />,
    desc:
      "Implementerade effektiv referensräkning för hash-tabeller och länkade listor.",
  },
  {
    title: "Wordfeud-lösare",
    stack: "TypeScript · Röd-svart-träd · sök",
    icon: <Calculator className="h-5 w-5" />,
    desc:
      "Sök och filtrering med balans-träd för snabba uppslag och kombinationer.",
  },
];

export default function Projects() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-2xl font-bold">Utvalda projekt</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-slate-900/5 p-2 text-slate-900">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-semibold leading-snug">{p.title}</h3>
                  <p className="text-xs text-slate-500">{p.stack}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
