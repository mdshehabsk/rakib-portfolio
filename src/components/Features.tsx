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
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Award,
    title: "Unique Design",
    description: "Every piece is completely unique and customized.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description: "High-quality canvas and superior finishing.",
  },
  {
    icon: Headset,
    title: "Professional Service",
    description: "Punctuality and professional support.",
  },
  {
    icon: MapPin,
    title: "Nationwide & International Service",
    description: "Serving clients across Bangladesh and around the world.",
  },
  // {
  //   icon: Truck,
  //   title: "Fast Delivery",
  //   description: "Timely completion and quick delivery.",
  // },
  {
    icon: Handshake,
    title: "Customer Satisfaction",
    description: "Customer satisfaction is our main goal.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#fdfaf3] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center"
              >
                <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-400/60 text-amber-600">
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h3 className="mb-1.5 text-sm sm:text-base font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}