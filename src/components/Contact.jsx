import { Mail, Phone, MapPin, Download } from "lucide-react";

export default function Contact() {
  const name = "Rahul Bhat";
  const phone = "+46 769056484";
  const email = "Bhat04rahul@gmail.com";
  const city = "Uppsala, Sverige";

  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-2xl font-bold">Kontakt</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-300">Namn</p>
            <p className="mt-1 text-lg font-semibold">{name}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-300">Telefon</p>
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="mt-1 inline-flex items-center gap-2 font-semibold text-emerald-300 hover:text-emerald-200">
              <Phone className="h-4 w-4" /> {phone}
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-300">E-post</p>
            <a href={`mailto:${email}`} className="mt-1 inline-flex items-center gap-2 font-semibold text-emerald-300 hover:text-emerald-200">
              <Mail className="h-4 w-4" /> {email}
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
            <MapPin className="h-4 w-4" /> {city}
          </span>
          {/* If you have a CV file, link it below by replacing # with the file path */}
          {/* <a href="/Rahul_Bhat_CV.pdf" className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-200 ring-1 ring-emerald-400/40"><Download className="h-4 w-4"/>Ladda ned CV</a> */}
        </div>
      </div>
    </section>
  );
}
