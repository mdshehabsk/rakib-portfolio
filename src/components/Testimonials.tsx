import { Star, Phone, Gift } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Client Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Our Customers' Feedback
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="lg:col-span-4">
            <div className="flex min-h-[160px] items-center justify-center rounded-2xl bg-[#0a1128] p-8 text-white">
              <div className="text-center">
                <p className="text-sm font-medium text-amber-400">Contact via WhatsApp</p>
                <p className="mb-4 text-lg font-bold">01740-367554</p>
                <a
                  href="https://wa.me/8801740367554"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:from-amber-600 hover:to-amber-700"
                >
                  <Gift className="h-4 w-4" />
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
