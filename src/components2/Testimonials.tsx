import { Star, Phone, Gift } from "lucide-react";

type Testimonial = {
  id: string;
  nameBn: string;
  locationBn: string;
  feedbackBn: string;
  avatar: string;
  rating: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    nameBn: "মোহাম্মদ ইউনুস",
    locationBn: "মিরপুর, ঢাকা",
    feedbackBn:
      "Artova এর কাজ অত্যন্ত নির্ভুল ও সৃজনশীল। সময়মতো কাজ সম্পন্ন ও সার্ভিস অসাধারণ।",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "t-2",
    nameBn: "রিয়াজ হোসেন",
    locationBn: "চট্টগ্রাম",
    feedbackBn:
      "আমাদের অফিসের জন্য ওয়াল আর্ট করিয়েছি, এতটাই সুন্দর হয়েছে যে সবাই প্রশংসা করছে।",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "t-3",
    nameBn: "আবুল করিম",
    locationBn: "প্রবাসী, সৌদি আরব",
    feedbackBn:
      "দূর থেকে ও দেশে অর্ডার দিয়েছিলাম, কাজটি একদম আমার প্রত্যাশামতো হয়েছে।",
    avatar:
      "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Client Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            আমাদের গ্রাহকদের মতামত
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Testimonial cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col rounded-2xl border border-slate-100 bg-[#fdfaf3] p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.nameBn}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {testimonial.nameBn}
                    </p>
                    <p className="text-xs text-slate-500">
                      {testimonial.locationBn}
                    </p>
                  </div>
                </div>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
                  {testimonial.feedbackBn}
                </p>

                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA card */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#0a1128] p-6 text-white">
            <div>
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
                <Phone className="h-5 w-5" />
              </span>
              <p className="text-xs font-medium text-slate-400">
                হোয়াটসঅ্যাপ করুন
              </p>
              <p className="mb-6 text-lg font-bold text-white">
                01740-367554
              </p>
            </div>

            <div>
              <a
                href="https://wa.me/8801740367554"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:from-amber-600 hover:to-amber-700"
              >
                <Gift className="h-4 w-4" />
                ফ্রি পরামর্শ নিন
              </a>
              <p className="mt-2 text-center text-xs text-slate-400">
                Get Free Consultation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
