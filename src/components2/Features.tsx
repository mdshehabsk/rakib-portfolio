import {
  Award,
  BadgeCheck,
  Headset,
  MapPin,
  Truck,
  Handshake,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  titleBn: string;
  descriptionBn: string;
};

const FEATURES: Feature[] = [
  {
    icon: Award,
    titleBn: "ইউনিক ডিজাইন",
    descriptionBn: "প্রতিটি কাজ হয় সম্পূর্ণ ইউনিক ও কাস্টমাইজড।",
  },
  {
    icon: BadgeCheck,
    titleBn: "প্রিমিয়াম কোয়ালিটি",
    descriptionBn: "উচ্চ মানের ক্যানভাস ও সেরা ফিনিশিং।",
  },
  {
    icon: Headset,
    titleBn: "পেশাদার সেবা",
    descriptionBn: "সময়ানুবর্তিতা ও পেশাদার সাপোর্ট।",
  },
  {
    icon: MapPin,
    titleBn: "দেশ-বিদেশে সেবা",
    descriptionBn: "সারা বাংলাদেশ ও আন্তর্জাতিক ক্লায়েন্টদের জন্য।",
  },
  {
    icon: Truck,
    titleBn: "দ্রুত ডেলিভারি",
    descriptionBn: "সময়মতো কাজ সম্পন্ন ও দ্রুত ডেলিভারি।",
  },
  {
    icon: Handshake,
    titleBn: "গ্রাহক সন্তুষ্টি",
    descriptionBn: "গ্রাহকের সন্তুষ্টিই আমাদের মূল লক্ষ্য।",
  },
];

export default function Features() {
  return (
    <section className="bg-[#fdfaf3] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.titleBn}
                className="flex flex-col items-center text-center"
              >
                <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-400/60 text-amber-600">
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h3 className="mb-1.5 text-sm sm:text-base font-bold text-slate-900">
                  {feature.titleBn}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
                  {feature.descriptionBn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}