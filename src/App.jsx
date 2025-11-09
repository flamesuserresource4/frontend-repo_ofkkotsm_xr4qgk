import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-semibold">Portfolio — AI · Dataanalys · Maskininlärning</div>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#skills" className="hover:text-slate-900/80">Färdigheter</a>
            <a href="#experience" className="hover:text-slate-900/80">Erfarenhet</a>
            <a href="#contact" className="hover:text-slate-900/80">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 py-8 text-sm">
        <div className="mx-auto max-w-6xl px-6 text-slate-600">
          <p>
            Språk: Engelska (modersmål), Svenska (modersmål), Marathi (modersmål), Hindi (flytande), Tyska (medelnivå)
          </p>
          <p className="mt-2">© {new Date().getFullYear()} — Byggd med React & Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
