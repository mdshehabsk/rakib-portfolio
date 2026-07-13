export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-emerald-50/40 px-6 py-24"
      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
    >
      {/* decorative floating arabic glyph */}
      <span
        className="pointer-events-none absolute -right-6 top-10 text-[10rem] text-emerald-100 select-none"
        style={{ fontFamily: "'Amiri', serif" }}
      >
        خ
      </span>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        {/* image side */}
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-emerald-300" />
          <img
            src="/avatar.jpg"
            alt="Calligrapher at work"
            className="relative z-10 h-full w-full rounded-2xl object-cover shadow-xl shadow-emerald-900/10"
          />
          {/* experience badge */}
          <div className="absolute -bottom-6 -right-6 z-20 rounded-2xl bg-white px-6 py-4 shadow-lg shadow-emerald-900/10">
            <p className="text-3xl font-bold text-emerald-600">১৫+</p>
            <p className="text-sm text-gray-500">বছরের অভিজ্ঞতা</p>
          </div>
        </div>

        {/* text side */}
        <div>
          <p className="mb-2 text-sm uppercase tracking-widest text-emerald-500">
            About the Artist
          </p>
          <h2 className="mb-6 text-3xl font-bold text-emerald-800 md:text-4xl">
            শিল্পীর সম্পর্কে
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-600">
            দীর্ঘ ১৫ বছর ধরে আরবি ক্যালিগ্রাফির সাথে যুক্ত। দেশের বিভিন্ন
            মাদরাসা ও মসজিদের দেয়ালে সুলুস, নাসখ, কুফি ও দিওয়ানি রীতিতে
            কুরআনের আয়াত ও ইসলামিক বাণী ফুটিয়ে তোলার কাজ করে আসছি।
          </p>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            প্রতিটি কাজে ঐতিহ্যবাহী কারুকার্য এবং নিখুঁততার প্রতি বিশেষ
            গুরুত্ব দেওয়া হয় — যাতে আল্লাহর কালাম যথাযথ সম্মানের সাথে
            উপস্থাপিত হয়।
          </p>

          {/* stats row */}
          <div className="grid grid-cols-3 gap-6 border-t border-emerald-200 pt-8">
            <div>
              <p className="text-2xl font-bold text-emerald-700">১২০+</p>
              <p className="text-sm text-gray-500">সম্পন্ন প্রকল্প</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-700">৪০+</p>
              <p className="text-sm text-gray-500">মাদরাসা</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-700">৮</p>
              <p className="text-sm text-gray-500">বিভাগ কভারেজ</p>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-block rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
          >
            যোগাযোগ করুন
          </a>
        </div>
      </div>
    </section>
  )
}