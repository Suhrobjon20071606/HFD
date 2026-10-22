// DIQQAT: bu 1-bosqichdagi NAMUNAVIY kontent. 2–3-bosqichda Supabase bazasidan olinadi.
export type Course = { id: string; title: string; level: string; hours: number; lessons: number; price: number; oldPrice?: number; free: number; desc: string };
export const courses: Course[] = [
  { id: "web-asos", title: "Veb dasturlash asoslari", level: "Boshlang‘ich", hours: 24, lessons: 48, price: 490000, oldPrice: 690000, free: 3, desc: "HTML, CSS va JavaScript — noldan birinchi saytingizgacha." },
  { id: "python", title: "Python: amaliy kurs", level: "O‘rta", hours: 32, lessons: 64, price: 590000, free: 4, desc: "Dasturlash mantig‘i, ma’lumotlar bilan ishlash va mini-loyihalar." },
  { id: "ingliz", title: "IELTS tayyorlov", level: "O‘rta", hours: 40, lessons: 80, price: 690000, free: 2, desc: "Reading, Listening, Writing va Speaking bo‘yicha tizimli reja." },
];
export const posts = [
  { title: "Onlayn o‘qishda intizomni qanday saqlash mumkin", date: "2026-10-12", read: "5 daqiqa" },
  { title: "Birinchi dasturchilik ishingizga tayyorgarlik", date: "2026-09-28", read: "7 daqiqa" },
  { title: "Nega test — o‘rganishning eng yaxshi usuli", date: "2026-09-10", read: "4 daqiqa" },
];
export const faqs = [
  { q: "Kursga kirish qancha muddatga beriladi?", a: "Muddat har bir kurs sahifasida ko‘rsatiladi va to‘lov tasdiqlangach avtomatik boshlanadi." },
  { q: "Videolarni yuklab olish mumkinmi?", a: "Yo‘q. Videolar himoyalangan oqim orqali ko‘rsatiladi va akkauntingiz ma’lumoti bilan belgilanadi." },
  { q: "Qanday to‘lash mumkin?", a: "Click/Payme (ulangandan keyin) yoki admin tasdiqlaydigan qo‘lda to‘lov orqali." },
];
export const som = (n: number) => n.toLocaleString("uz-UZ").replace(/,/g, " ") + " so‘m";
