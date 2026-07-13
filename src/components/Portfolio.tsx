'use client'

import { useState } from 'react'

type Project = {
  id: number
  title: string
  style: string
  location: string
  image: string
}

const categories = ['সব', 'সুলুস', 'নাসখ', 'কুফি', 'দিওয়ানি']

const projects: Project[] = [
  { id: 1, title: 'দারুল উলূম মাদরাসা', style: 'সুলুস', location: 'ঢাকা', image: 'https://placehold.co/600x400/065f46/ffffff?text=Calligraphy+1' },
  { id: 2, title: 'জামিয়া ইসলামিয়া', style: 'নাসখ', location: 'চট্টগ্রাম', image: 'https://placehold.co/600x400/047857/ffffff?text=Calligraphy+2' },
  { id: 3, title: 'বায়তুল মোকাররম মসজিদ', style: 'কুফি', location: 'সিলেট', image: 'https://placehold.co/600x400/059669/ffffff?text=Calligraphy+3' },
  { id: 4, title: 'আল-হেরা মাদরাসা', style: 'দিওয়ানি', location: 'রাজশাহী', image: 'https://placehold.co/600x400/065f46/ffffff?text=Calligraphy+4' },
  { id: 5, title: 'নূরানী মাদরাসা', style: 'সুলুস', location: 'খুলনা', image: 'https://placehold.co/600x400/047857/ffffff?text=Calligraphy+5' },
  { id: 6, title: 'মদিনাতুল উলূম', style: 'নাসখ', location: 'বরিশাল', image: 'https://placehold.co/600x400/059669/ffffff?text=Calligraphy+6' },
]

export function Portfolio() {
  const [active, setActive] = useState('সব')

  const filtered =
    active === 'সব' ? projects : projects.filter((p) => p.style === active)

  return (
    <section
      id="portfolio"
      className="relative bg-white px-6 py-24"
      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
    >
      {/* soft green decoration */}
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-emerald-100 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-emerald-50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-emerald-500">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold text-emerald-800 md:text-4xl">
            আমাদের কাজের নমুনা
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-400" />
        </div>

        {/* filter tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                active === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* gallery grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* overlay on hover */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-emerald-950/80 via-emerald-950/10 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="mb-1 w-fit rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white">
                  {project.style}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-emerald-100/90">{project.location}</p>
              </div>

              {/* static caption (visible without hover, mobile-friendly) */}
              <div className="p-4 group-hover:opacity-0 transition">
                <h3 className="font-semibold text-emerald-800">{project.title}</h3>
                <p className="text-sm text-gray-500">
                  {project.style} · {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* view all */}
        <div className="mt-14 text-center">
          <a
            href="/portfolio"
            className="inline-block rounded-full border border-emerald-300 bg-emerald-50 px-8 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-100"
          >
            সব কাজ দেখুন
          </a>
        </div>
      </div>
    </section>
  )
}