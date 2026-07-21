import {
  Star,
  Feather,
  Palette,
  Waves,
  Building2,
  Type,
  Trees,
} from "lucide-react";

type Stat = {
  value: string;
  labelBn: string;
};

const STATS: Stat[] = [
  { value: "5+", labelBn: "বছরের অভিজ্ঞতা" },
  { value: "250+", labelBn: "সম্পন্ন প্রোজেক্ট" },
  { value: "180+", labelBn: "সন্তুষ্ট ক্লায়েন্ট" },
  { value: "64+", labelBn: "জেলায় সেবা" },
];

const EXPERTISE = [
  { icon: Star, labelBn: "ইসলামিক ক্যালিগ্রাফি" },
  { icon: Feather, labelBn: "ক্যানভাস পেইন্টিং" },
  { icon: Palette, labelBn: "ওয়াল মুরাল" },
  { icon: Building2, labelBn: "ইন্টেরিয়র আর্ট" },
  { icon: Type, labelBn: "টাইপোগ্রাফি ডিজাইন" },
  { icon: Trees, labelBn: "ল্যান্ডস্কেপ ডিজাইন" },
];

export default function Founder() {
  return (
    <section id="about" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr_0.7fr]">
          {/* Photo */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
              alt="Md. Rakib Khan, Founder & Creative Director of Artova"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Bio + stats */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Meet the Founder
            </p>
            <h2 className="mb-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Md. Rakib Khan
            </h2>
            <p className="mb-5 text-sm sm:text-base font-medium text-amber-700">
              Founder &amp; Creative Director, Artova
            </p>

            <blockquote className="mb-5 border-l-4 border-amber-400 pl-4 text-base sm:text-lg italic text-slate-700">
              &ldquo;Art is not just decoration; it is a way to express
              identity, faith, and imagination.&rdquo;
            </blockquote>

            <p className="mb-8 text-sm sm:text-base leading-relaxed text-slate-600">
              ৫+ বছরের অভিজ্ঞতা নিয়ে আমরা ইসলামিক ক্যালিগ্রাফি, ক্যানভাস
              পেইন্টিং, ওয়াল মুরাল, টাইপোগ্রাফি এবং ইন্টেরিয়র আর্টের মাধ্যমে
              দেশ-বিদেশের ক্লায়েন্টদের জন্য কাজ করে যাচ্ছি। আমাদের লক্ষ্য
              থাকে প্রতিটি কাজে শৈল্পিক সৌন্দর্য, শান্তি ও নান্দনিকতার ছোঁয়া
              পৌঁছে দেওয়া।
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.labelBn}
                  className="rounded-xl border border-slate-100 bg-[#fdfaf3] px-3 py-4 text-center"
                >
                  <p className="text-xl sm:text-2xl font-extrabold text-amber-600">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] sm:text-xs font-medium text-slate-500">
                    {stat.labelBn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise panel */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#0a1128] p-6 text-white">
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-amber-400">
                বিশেষজ্ঞতা
              </h3>
              <ul className="space-y-3.5">
                {EXPERTISE.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.labelBn}
                      className="flex items-center gap-3 text-sm text-slate-200"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-amber-400">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      {item.labelBn}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="mb-1 font-signature text-2xl italic text-white">
                Md. Rakib Khan
              </p>
              <p className="text-xs text-slate-400">
                Founder &amp; Creative Director
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}