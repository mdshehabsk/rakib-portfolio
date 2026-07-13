'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'পরিচিতি' },
  { href: '#services', label: 'সেবাসমূহ' },
  { href: '#portfolio', label: 'কাজসমূহ' },
  { href: '#testimonials', label: 'মতামত' },
  { href: '#contact', label: 'যোগাযোগ' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-sm shadow-emerald-900/5 backdrop-blur-md'
          : 'bg-transparent'
      }`}
      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span
            className="text-2xl text-emerald-600"
            style={{ fontFamily: "'Amiri', serif" }}
          >
            خ
          </span>
          <span className="text-lg font-bold text-emerald-800">
            ক্যালিগ্রাফি আর্ট
          </span>
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-emerald-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/8801XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            হোয়াটসঅ্যাপ
          </a>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-emerald-700 md:hidden"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-emerald-700 transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-emerald-700 transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-emerald-700 transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="flex flex-col gap-1 bg-white px-6 pb-6 md:hidden">
          {links.map((link) => (
                <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-emerald-50 hover:text-emerald-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/8801XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-emerald-600 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            হোয়াটসঅ্যাপ
          </a>
        </div>
      )}
    </nav>
  )
}