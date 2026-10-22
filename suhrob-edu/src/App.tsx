import { useState } from "react";
import { courses, posts, faqs, som } from "./data/content";

const nav = [["Kurslar", "#kurslar"], ["Blog", "#blog"], ["Men haqimda", "#haqida"], ["FAQ", "#faq"]];

export default function App() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const soon = (m: string) => { setToast(m); setTimeout(() => setToast(""), 3500); };
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="font-display text-xl font-extrabold tracking-tight">SUHROB <span className="text-violet">EDU</span></a>
          <nav className="hidden gap-8 text-sm text-white/70 md:flex">{nav.map(([t, h]) => <a key={h} href={h} className="hover:text-white">{t}</a>)}</nav>
          <div className="hidden gap-3 md:flex">
            <button onClick={() => soon("Kirish 2-bosqichda (Supabase Auth) ulanadi.")} className="rounded-lg px-4 py-2 text-sm text-white/80 hover:text-white">Kirish</button>
            <button onClick={() => soon("Ro‘yxatdan o‘tish 2-bosqichda ulanadi.")} className="rounded-lg bg-violet px-4 py-2 text-sm font-semibold text-ink hover:brightness-110">Ro‘yxatdan o‘tish</button>
          </div>
          <button aria-label="Menyu" aria-expanded={open} onClick={() => setOpen(!open)} className="md:hidden rounded-lg border border-white/15 px-3 py-2 text-sm">Menyu</button>
        </div>
        {open && <div className="border-t border-white/10 px-5 py-3 md:hidden">{nav.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block py-2 text-white/80">{t}</a>)}</div>}
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-navy to-ink">
          <div className="mx-auto max-w-6xl px-5 pb-24 pt-20 md:pt-28">
            <h1 className="hero-in max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">Bilimni tartib bilan o‘rganing. Natijani o‘zingiz ko‘ring.</h1>
            <p className="hero-in mt-6 max-w-xl text-lg text-white/70" style={{ animationDelay: ".15s" }}>Video darslar, testlar va sertifikat — bitta kabinetda. Har bir kurs uchun bepul namunaviy darslar mavjud.</p>
            <div className="hero-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: ".3s" }}>
              <a href="#kurslar" className="rounded-xl bg-violet px-6 py-3 font-semibold text-ink hover:brightness-110">Kurslarni ko‘rish</a>
              <button onClick={() => soon("Namunaviy darslar 4-bosqichda ulanadi.")} className="rounded-xl border border-white/20 px-6 py-3 hover:bg-white/5">Bepul darsni ko‘rish</button>
            </div>
          </div>
        </section>

        <section id="kurslar" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold">Kurslar katalogi</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {courses.map((c) => (
              <article key={c.id} className="flex flex-col rounded-2xl border border-white/10 bg-navy p-6">
                <div className="mb-5 h-32 rounded-xl bg-gradient-to-br from-navy2 to-violet/40" aria-hidden />
                <h3 className="font-display text-xl font-bold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm text-white/65">{c.desc}</p>
                <p className="mt-4 text-sm text-white/55">{c.level}, {c.hours} soat, {c.lessons} dars, {c.free} ta bepul</p>
                <p className="mt-4 flex items-baseline gap-2"><span className="text-lg font-bold">{som(c.price)}</span>{c.oldPrice && <s className="text-sm text-white/40">{som(c.oldPrice)}</s>}</p>
                <button onClick={() => soon("“Kursga qiziqish” 6-bosqichda bazaga ulanadi.")} className="mt-4 rounded-lg bg-white/10 py-2.5 text-sm font-semibold hover:bg-white/15">Kursga qiziqish bildirish</button>
              </article>
            ))}
          </div>
        </section>

        <section id="haqida" className="bg-navy">
          <div className="mx-auto max-w-6xl px-5 py-20 md:grid md:grid-cols-[1fr_2fr] md:gap-12">
            <div className="mb-6 h-48 rounded-2xl bg-gradient-to-br from-violet/50 to-navy2 md:mb-0" role="img" aria-label="O‘qituvchi surati o‘rni" />
            <div><h2 className="font-display text-3xl font-bold">Men haqimda</h2>
              <p className="mt-4 max-w-xl text-white/70">Bu yerga o‘qituvchi haqidagi haqiqiy ma’lumot qo‘yiladi (admin paneldan tahrirlanadi). Hozircha namunaviy matn.</p></div>
          </div>
        </section>

        <section id="blog" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold">Blog</h2>
          <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {posts.map((p) => <li key={p.title} className="flex flex-wrap items-center justify-between gap-2 py-5"><span className="font-medium">{p.title}</span><span className="text-sm text-white/50">{p.date}, o‘qish {p.read}</span></li>)}
          </ul>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-5 pb-24">
          <h2 className="font-display text-3xl font-bold">Ko‘p so‘raladigan savollar</h2>
          <div className="mt-8 space-y-3">{faqs.map((f) => (
            <details key={f.q} className="rounded-xl border border-white/10 bg-navy p-5"><summary className="cursor-pointer font-medium">{f.q}</summary><p className="mt-3 text-white/65">{f.a}</p></details>))}</div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-white/50">
        © 2026 SUHROB EDU, suhrob1.uz. Maxfiylik siyosati, Foydalanish shartlari (matnlar 9-bosqichgacha qo‘shiladi).
      </footer>
      <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 flex justify-center px-4">
        {toast && <div className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-ink shadow-xl">{toast}</div>}
      </div>
    </div>
  );
}
