export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 text-center">
      {/* floating decorative shapes, same vibe as hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-24 w-24 rounded-full bg-emerald-100 blur-2xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute right-[12%] top-[30%] h-32 w-32 rounded-full bg-emerald-200/60 blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-[18%] left-[18%] h-20 w-20 rounded-full bg-teal-100 blur-2xl animate-[float_7s_ease-in-out_infinite]" />

        <span
          className="absolute left-[12%] bottom-[25%] text-6xl text-emerald-100 animate-[float_9s_ease-in-out_infinite]"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          ض
        </span>
        <span
          className="absolute right-[14%] top-[15%] text-7xl text-emerald-100 animate-[float_10s_ease-in-out_infinite_reverse]"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          ل
        </span>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.12)_1px,transparent_0)] bg-[size:28px_28px]" />

      <div className="relative" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
        {/* big arabic-style 404 */}
        <p
          className="text-8xl font-bold text-emerald-100 md:text-9xl"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          ٤٠٤
        </p>

        <h1 className="-mt-8 text-4xl font-bold text-emerald-700 md:text-5xl">
          পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mx-auto mt-4 max-w-md text-gray-500">
          দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি হয়তো সরানো হয়েছে অথবা
          বিদ্যমান নেই।
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/"
            className="rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
          >
            হোমে ফিরে যান
          </a>
          <a
            href="/#contact"
            className="rounded-full border border-emerald-300 bg-emerald-50 px-8 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-100"
          >
            যোগাযোগ করুন
          </a>
        </div>
      </div>
    </section>
  )
}