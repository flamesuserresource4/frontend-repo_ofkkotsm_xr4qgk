import { Code2, FlaskConical, LineChart, Brain } from "lucide-react";

const projects = [
  {
    title: "Monte Carlo-riskestimering för volatila system",
    stack: "Python · NumPy · variansreduktion",
    icon: <FlaskConical className="h-5 w-5" />,
    desc:
      "Utvecklade simulering för att modellera osäkerhet och tail-risk. Konvergenstester ökade effektiviteten med 25%.",
  },
  {
    title: "Prognoser för brusiga tidsserier med probabilistiska modeller",
    stack: "Python · AR/LSTM · Bayes",
    icon: <LineChart className="h-5 w-5" />,
    desc:
      "Byggde en modell för att förutsäga brusiga serier likt finansdata. Osäkerhetskvantifiering och stabilitet förbättrades.",
  },
  {
    title: "Husprisprognosmodell",
    stack: "Python · Regression · Brownska rörelser",
    icon: <Brain className="h-5 w-5" />,
    desc:
      "Analyserade bostadsdata och simulerade stokastisk prisevolution.",
  },
  {
    title: "Simulering av epidemispridning",
    stack: "Python · Gillespie · stokastik",
    icon: <Code2 className="h-5 w-5" />,
    desc:
      "Modellerade sjukdomsspridning med stokastiska metoder och utvärderade systemstabilitet.",
  },
  {
    title: "Referensräknare för minneshantering",
    stack: "C · datastrukturer",
    icon: <Code2 className="h-5 w-5" />,
    desc:
      "Designade ett anpassat referensräkningssystem för hash-tabeller och länkade listor.",
  },
  {
    title: "Wordfeud-lösare",
    stack: "TypeScript · Röd-svart-träd",
    icon: <Code2 className="h-5 w-5" />,
    desc:
      "Implementerade sökalgoritm för effektiv ord-filtrering och ordboksuppslag.",
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
