export function Footer() {
  return (
    <footer
      className="bg-emerald-950 px-6 py-10 text-center text-emerald-200/70"
      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
        <span
          className="text-3xl text-emerald-400"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          خ
        </span>
        <p className="text-sm">
          © {new Date().getFullYear()} ক্যালিগ্রাফি আর্ট। সর্বস্বত্ব সংরক্ষিত।
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}