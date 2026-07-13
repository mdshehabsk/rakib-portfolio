const testimonials = [
  {
    name: 'মাওলানা আব্দুল করিম',
    role: 'প্রিন্সিপাল, দারুল উলূম মাদরাসা',
    text: 'আমাদের মাদরাসার দেয়ালে অসাধারণ কাজ করেছেন। প্রতিটি হরফ নিখুঁত ও প্রাণবন্ত মনে হয়।',
    avatar: 'https://placehold.co/100x100/065f46/ffffff?text=AK',
  },
  {
    name: 'মুফতি জসিম উদ্দিন',
    role: 'মুতাওয়াল্লি, বায়তুল মোকাররম মসজিদ',
    text: 'সময়মতো কাজ সম্পন্ন এবং কাজের মান অত্যন্ত উন্নত। সবাইকে সুপারিশ করব।',
    avatar: 'https://placehold.co/100x100/047857/ffffff?text=JU',
  },
  {
    name: 'হাফেজ রফিকুল ইসলাম',
    role: 'পরিচালক, আল-হেরা মাদরাসা',
    text: 'তার হাতের কাজে এক অন্যরকম প্রশান্তি অনুভব হয়। মাশাআল্লাহ চমৎকার শৈল্পিকতা।',
    avatar: 'https://placehold.co/100x100/059669/ffffff?text=RI',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-emerald-50/40 px-6 py-24"
      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
    >
      <span
        className="pointer-events-none absolute -left-10 bottom-0 text-[12rem] text-emerald-100 select-none"
        style={{ fontFamily: "'Amiri', serif" }}
      >
        ن
      </span>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-emerald-500">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-emerald-800 md:text-4xl">
            গ্রাহকদের মতামত
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-400" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white p-6 shadow-sm shadow-emerald-900/5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10"
            >
              <span className="mb-3 block text-3xl text-emerald-300">❝</span>
              <p className="mb-6 text-gray-600 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-3 border-t border-emerald-50 pt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-emerald-800">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}