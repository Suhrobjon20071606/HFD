# SUHROB EDU — arxitektura
Brauzer (React+TS+Vite+Tailwind, Cloudflare Pages) → Supabase (Auth, Postgres+RLS, Storage, Edge Functions)
Edge Functions: to'lov callback (Payme/Click), Telegram bot, OTP/SMS, imzolangan video URL, heartbeat, admin API.
Video: S3-compatible storage (masalan Cloudflare R2) + qisqa muddatli imzolangan URL; YouTube faqat ruxsat etilgan embed.
Maxfiy kalitlar faqat Edge Functions secrets'da. Kirish huquqi RLS + server tekshiruvi orqali.
## Bosqichlar: 1 UI/bosh sahifa (tayyor) | 2 DB+Auth | 3 Admin | 4 Video | 5 Test | 6 To'lov | 7 Telegram/SMS | 8 Watermark | 9 Xavfsizlik | 10 Deploy
