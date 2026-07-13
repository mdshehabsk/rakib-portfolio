const divisions = [
  'ঢাকা', 'চট্টগ্রাম', 'সিলেট', 'রাজশাহী',
  'খুলনা', 'বরিশাল', 'রংপুর', 'ময়মনসিংহ',
]

export function Coverage() {
  return (
    <section
      className="bg-white px-6 py-20"
      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-2 text-sm uppercase tracking-widest text-emerald-500">
          Coverage Area
        </p>
        <h2 className="mb-4 text-3xl font-bold text-emerald-800 md:text-4xl">
          সারা বাংলাদেশে সেবা প্রদান
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-gray-500">
          দেশের ৮টি বিভাগেই মাদরাসা ও মসজিদে ক্যালিগ্রাফির কাজ করে থাকি
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {divisions.map((d) => (
            <span
              key={d}
              className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-600 hover:text-white"
            >
              📍 {d}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}