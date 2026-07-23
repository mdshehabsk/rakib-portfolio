import { Phone, Mail, MapPin } from "lucide-react";
import type { SVGProps } from "react";
import logo from '../app/favicon.ico';
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
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      {...props}
    >
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

function Pinterest(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.5 2 3 5.9 3 10.2c0 2.6 1.4 4.7 3.5 5.5.3.1.5 0 .6-.3.1-.2.2-.8.3-1.1.1-.3 0-.4-.1-.6-.4-.5-.7-1.3-.7-2.3 0-3 2.2-5.6 5.7-5.6 3.1 0 4.8 1.9 4.8 4.4 0 3.3-1.5 6.1-3.7 6.1-1.2 0-2.1-1-1.8-2.3.3-1.4 1-3 1-4 0-.9-.5-1.7-1.5-1.7-1.2 0-2.2 1.2-2.2 2.9 0 1 .4 1.7.4 1.7l-1.4 5.7c-.4 1.6-.1 3.6-.1 3.8.1.1.1.2.2.1.1-.1 1.5-1.9 2-3.6l.7-2.8c.4.7 1.5 1.3 2.6 1.3 3.5 0 5.9-3.2 5.9-7.4C21 5.5 17.9 2 12 2Z" />
    </svg>
  );
}

type LinkItem = { labelBn: string; href: string };

const QUICK_LINKS: LinkItem[] = [
  { labelBn: "Home", href: "#home" },
  { labelBn: "About Us", href: "#about" },
  // { labelBn: "Services", href: "#services" },
  { labelBn: "Portfolio", href: "#portfolio" },
  // { labelBn: "Testimonials", href: "#testimonials" },
  // { labelBn: "Contact", href: "#contact" },
];

const SERVICES: LinkItem[] = [
  { labelBn: "Calligraphy", href: "#services" },
  { labelBn: "Canvas Painting", href: "#services" },
  { labelBn: "Wall Art", href: "#services" },
  { labelBn: "Interior Design", href: "#services" },
  { labelBn: "Typography", href: "#services" },
  { labelBn: "Landscape Painting", href: "#services" },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Pinterest, label: "Pinterest", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1128] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="mb-4 flex items-center gap-2.5">
                       <Image src={logo} alt="logo image" className="w-12 h-12 rounded-full" />
              <span className="leading-tight">
                <span className="block text-lg font-extrabold tracking-wide text-white">
                  ARTOVA
                </span>
                <span className="block text-[10px] font-medium tracking-wide text-amber-400">
                  YOUR VISION IS OUR CREATION
                </span>
              </span>
            </a>
            <p className="mb-5 text-sm leading-relaxed text-slate-400">
              We bring your vision to life through calligraphy, painting, wall art,
              interior design, and landscape design with a creative touch.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-amber-400 hover:text-amber-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <a
                href="https://wa.me/8801740367554"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:from-amber-600 hover:to-amber-700"
              >
                <Phone className="h-4 w-4" />
                  Get Free Consultation
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Quick Links</h3>
            <ul className="space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.labelBn}>
                    <a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-amber-400">{link.labelBn}</a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Our Services</h3>
            <ul className="space-y-2.5">
                {SERVICES.map((link) => (
                  <li key={link.labelBn}>
                    <a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-amber-400">{link.labelBn}</a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
              Contact Us
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <a href="tel:+8801740367554" className="hover:text-amber-400">
                  01740-367554 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Facebook className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <a href="#" className="hover:text-amber-400">
                  facebook.com/ArtovaOfficial
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <a
                  href="mailto:artova.bd@gmail.com"
                  className="hover:text-amber-400"
                >
                  artova.bd@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <span>Bangladesh (Worldwide Service)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-5 flex flex-col-reverse items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Artova. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Designed with{" "}
            <span className="text-amber-500" aria-hidden="true">
              ❤️
            </span>{" "}
            by Artova.
          </p>
        </div>
      </div>
    </footer>
  );
}
