'use client'

import { useState } from 'react'

export function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleWhatsApp = () => {
    const text = `আসসালামু আলাইকুম, আমি ${form.name || '...'}, ফোন: ${
      form.phone || '...'
    }%0A${form.message || ''}`
    window.open(`https://wa.me/8801XXXXXXXXX?text=${text}`, '_blank')
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-emerald-900 px-6 py-24 text-white"
      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
    >
      <span
        className="pointer-events-none absolute -right-10 -top-10 text-[14rem] text-emerald-800/60 select-none"
        style={{ fontFamily: "'Amiri', serif" }}
      >
        ﷲ
      </span>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-2">
        {/* left: info */}
        <div>
          <p className="mb-2 text-sm uppercase tracking-widest text-emerald-300">
            Contact
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            আপনার প্রকল্প নিয়ে কথা বলুন
          </h2>
          <p className="mb-10 max-w-md text-emerald-100/80 leading-relaxed">
            মাদরাসা বা মসজিদের দেয়ালে ক্যালিগ্রাফির কাজের জন্য যোগাযোগ করুন।
            বিনামূল্যে পরামর্শ ও কোটেশন পেতে নিচের ফর্ম পূরণ করুন অথবা সরাসরি
            হোয়াটসঅ্যাপে বার্তা পাঠান।

          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700">📞</span>
              <span>+৮৮০ ১XXX-XXXXXX</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700">✉️</span>
              <span>example@email.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700">📍</span>
              <span>ঢাকা, বাংলাদেশ</span>
            </div>
          </div>
        </div>

        {/* right: form */}
        <div className="rounded-2xl bg-white p-8 text-gray-700 shadow-xl">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="আপনার নাম"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
            />
            <input
              type="tel"
              placeholder="ফোন নম্বর"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
            />
            <textarea
              placeholder="আপনার বার্তা লিখুন..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
            />
            <button
              onClick={handleWhatsApp}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-500"
            >
              হোয়াটসঅ্যাপে পাঠান
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}