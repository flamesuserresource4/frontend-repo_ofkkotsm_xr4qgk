import { GraduationCap, User } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <User className="h-4 w-4" />
              <span>Masterstudent i Data Science</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              AI-utvecklare & systemdesigner
            </h1>
            <p className="mt-4 max-w-2xl text-slate-200">
              Stark bakgrund inom maskininlärning, probabilistisk modellering och numerisk optimering. 
              Erfarenhet från både akademi och industri med fokus på att översätta matematiska modeller 
              till skalbara, praktiska applikationer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-md bg-emerald-500/10 px-3 py-1 text-emerald-300 ring-1 ring-emerald-500/30">
                Python · PyTorch · scikit-learn
              </span>
              <span className="rounded-md bg-indigo-500/10 px-3 py-1 text-indigo-300 ring-1 ring-indigo-500/30">
                NumPy · pandas · SciPy
              </span>
              <span className="rounded-md bg-rose-500/10 px-3 py-1 text-rose-300 ring-1 ring-rose-500/30">
                Monte Carlo · tidsserier · optimering
              </span>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Uppsala universitet</h3>
                  <p className="text-sm text-slate-300">Masterprogram i Data Science — Pågående</p>
                  <p className="mt-2 text-sm text-slate-300">Inriktning: ML, statistik, sannolikhet, simulering, dataanalys</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                <div>
                  <p className="font-medium text-white">Språk</p>
                  <p>Engelska, Svenska, Marathi, Hindi, Tyska</p>
                </div>
                <div>
                  <p className="font-medium text-white">Verktyg</p>
                  <p>Git, Linux, Docker, JupyterLab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
    </section>
  );
}
