"use client";

import { useState, useEffect, type SVGProps } from "react";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";

import logo from "../app/favicon.ico";
import Image from "next/image";
function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.7c0-.9.25-1.5 1.55-1.5H16.7V3.4C16.4 3.36 15.4 3.27 14.24 3.27c-2.4 0-4.04 1.47-4.04 4.16v2.32H7.5v3.2h2.7V21h3.3Z" />
    </svg>
  );
}

function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17.1" cy="6.9" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Youtube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2C22 15.2 22 12 22 12Z" />
      <path d="M10 9.6v4.8l4.6-2.4L10 9.6Z" fill="#fff" />
    </svg>
  );
}

type NavLink = {

  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  {  label: "Home", href: "#home" },
  {  label: "About Us", href: "#about" },
  // { labelBn: "সেবাসমূহ", labelEn: "Services", href: "#services" },
  {  label: "Portfolio", href: "#portfolio" },
  // { labelBn: "টেস্টিমোনিয়াল", labelEn: "Testimonials", href: "#testimonials" },
];

const PHONE_NUMBER = "01740-367554";
const PHONE_HREF = "tel:+8801740367554";
const WHATSAPP_HREF = "https://wa.me/8801740367554";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"bn" | "en">("bn");
  const [activeHref, setActiveHref] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);



  return (
    <header className="sticky top-0 z-50 font-sans">
      {/* Top utility bar */}
      <div className="hidden md:block bg-[#0a1128] text-slate-200 text-sm">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 h-9 flex items-center justify-between">
          <p className="flex items-center gap-2 text-slate-300">
            <span className="text-amber-400">★</span>
            {lang === "bn"
              ? "Artova-তে স্বাগতম – আপনার কল্পনাই আমাদের সৃষ্টি"
              : "Welcome to Artova \u2013 Your Vision Is Our Creation"}
          </p>

          <div className="flex items-center gap-5">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {PHONE_NUMBER}
            </a>

            <div className="flex items-center gap-3 border-l border-slate-700 pl-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-amber-400 transition-colors"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-amber-400 transition-colors"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-amber-400 transition-colors"
              >
                <Youtube className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={`bg-white transition-shadow ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
           <Image src={logo} alt="Artova Logo" width={32} height={32} className="rounded-full w-12 h-12" />
            <span className="leading-tight">
              <span className="block text-lg md:text-xl font-extrabold tracking-wide text-slate-900">
                ARTOVA
              </span>
              <span className="hidden sm:block text-[10px] md:text-[11px] font-medium tracking-wide text-amber-600">
                YOUR VISION IS OUR CREATION
              </span>
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-amber-600"
                      : "text-black hover:text-amber-600"
                  }`}
                >
                  <span className="block">{link?.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-amber-500" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right side: CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 rounded-lg bg-linear-to-r from-amber-500 to-amber-600 px-4 py-2.5 text-white shadow-sm hover:from-amber-600 hover:to-amber-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="leading-tight text-left">
                <span className="block text-[11px] font-medium opacity-90">
                  {"WhatsApp Us"}
                </span>
                <span className="block text-sm font-semibold">
                  {PHONE_NUMBER}
                </span>
              </span>
            </a>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/40"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[85%] bg-white shadow-xl transition-transform duration-300 flex flex-col ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 h-16 border-b border-slate-100">
            <span className="font-extrabold text-slate-900 tracking-wide">
              ARTOVA
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => {
                const isActive = activeHref === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => {
                        setActiveHref(link.href);
                        setMobileOpen(false);
                      }}
                      className={`flex items-center justify-between py-3 border-b border-slate-50 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-amber-600"
                          : "text-slate-700 hover:text-amber-600"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4 -rotate-90 opacity-40" />
                    </a>
                  </li>
                );
              })}
            </ul>


          </nav>

          <div className="p-4 border-t border-slate-100 space-y-3">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 text-white font-semibold text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              { "WhatsApp Now"}
            </a>
            <div className="flex items-center justify-center gap-5 text-black">
              <a href={PHONE_HREF} className="flex items-center gap-1.5 text-sm">
                <Phone className="h-3.5 w-3.5" />
                {PHONE_NUMBER}
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 text-black">
              <a href="#" aria-label="Facebook" className="hover:text-amber-600">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-amber-600">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-amber-600">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}