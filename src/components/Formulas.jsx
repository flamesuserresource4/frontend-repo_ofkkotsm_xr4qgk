import { Sigma, FunctionSquare, LineChart } from "lucide-react";

export default function Formulas() {
  const cards = [
    {
      icon: <FunctionSquare className="h-5 w-5" />,
      title: "OLS & Ridge",
      lines: [
        "OLS: \\hat{\\beta} = (X^T X)^{-1} X^T y",
        "Ridge: \\hat{\\beta}_\\lambda = (X^T X + \\lambda I)^{-1} X^T y",
      ],
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Kalman-filter (linjärt)",
      lines: [
        "Pred: \\hat{x}_{t|t-1} = A x_{t-1|t-1} + B u_t",
        "Pred-kov: P_{t|t-1} = A P_{t-1|t-1} A^T + Q",
        "Gain: K_t = P_{t|t-1} H^T (H P_{t|t-1} H^T + R)^{-1}",
        "Uppd: x_{t|t} = \\hat{x}_{t|t-1} + K_t (y_t - H \\hat{x}_{t|t-1})",
      ],
    },
    {
      icon: <Sigma className="h-5 w-5" />,
      title: "Stokastisk differentialekvation",
      lines: [
        "dX_t = \\mu(X_t, t) dt + \\sigma(X_t, t) dW_t",
        "Euler–Maruyama: X_{t+\\Delta} = X_t + \\mu \\Delta + \\sigma \\sqrt{\\Delta} \\varepsilon",
      ],
    },
    {
      icon: <Sigma className="h-5 w-5" />,
      title: "Bayes uppdatering",
      lines: [
        "p(\\theta|D) \\propto p(D|\\theta) p(\\theta)",
        "MAP: \\hat{\\theta}_{MAP} = \\arg\\max_\\theta \\{ \\log p(D|\\theta) + \\log p(\\theta) \\}",
      ],
    },
  ];

  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-2xl font-bold">Formler (LaTeX-stil)</h2>
        <p className="mb-6 max-w-3xl text-slate-300">
          Nedan visas vanligt förekommande uttryck inom dataanalys, maskininlärning och kvantitativ modellering. De är skrivna med LaTeX-liknande notation och formaterade för läsbarhet.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-2">{c.icon}</div>
                <h3 className="font-semibold">{c.title}</h3>
              </div>
              <div className="rounded-md bg-black/40 p-4 font-mono text-sm leading-7">
                {c.lines.map((ln, idx) => (
                  <div key={idx} className="text-emerald-200">${ln}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
