const services = [
  {
    title: 'দেয়াল ক্যালিগ্রাফি',
    desc: 'মাদরাসা ও মসজিদের দেয়ালে কুরআনের আয়াত ও ইসলামিক বাণী অঙ্কন।',
    icon: '🕌',
  },
  {
    title: 'সাইনবোর্ড ডিজাইন',
    desc: 'প্রতিষ্ঠানের নামফলক ও সাইনবোর্ডে আরবি ক্যালিগ্রাফি সংযোজন।',
    icon: '🪧',
  },
  {
    title: 'ক্যানভাস আর্ট',
    desc: 'ঘর ও অফিসের জন্য ফ্রেমযুক্ত ক্যালিগ্রাফি পেইন্টিং।',
    icon: '🖼️',
  },
  {
    title: 'কাস্টম ডিজাইন',
    desc: 'গ্রাহকের চাহিদা অনুযায়ী বিশেষ ক্যালিগ্রাফি নকশা তৈরি।',
    icon: '✒️',
  },
]

const process = [
  { step: '০১', title: 'পরামর্শ', desc: 'আপনার চাহিদা ও স্থান বোঝা' },
  { step: '০২', title: 'ডিজাইন খসড়া', desc: 'প্রাথমিক নকশা প্রস্তুত ও অনুমোদন' },
  { step: '০৩', title: 'বাস্তবায়ন', desc: 'সরাসরি স্থানে গিয়ে কাজ সম্পন্ন' },
  { step: '০৪', title: 'হস্তান্তর', desc: 'কাজ পরিদর্শন ও চূড়ান্ত হস্তান্তর' },
]

export function Services() {
  return (
    <section
      id="services"
      className="bg-white px-6 py-24"
      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-emerald-500">
            Services
          </p>
          <h2 className="text-3xl font-bold text-emerald-800 md:text-4xl">
            আমাদের সেবাসমূহ
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-400" />
        </div>

        {/* service cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-white hover:shadow-lg hover:shadow-emerald-100"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-2xl transition group-hover:bg-emerald-600">
                {s.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-emerald-800">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* process timeline */}
        <div className="mt-24">
          <h3 className="mb-12 text-center text-2xl font-bold text-emerald-800">
            কাজের ধাপসমূহ
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                  {p.step}
                </div>
                {i < process.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-emerald-200 lg:block" />
                )}
                <h4 className="mb-1 font-semibold text-emerald-800">{p.title}</h4>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}