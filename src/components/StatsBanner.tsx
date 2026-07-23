import {
  FolderCheck,
  Users,
  MapPinned,
  ThumbsUp,
  BadgePercent,
  type LucideIcon,
} from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: string;
  labelBn: string;
};

const STATS: Stat[] = [
  { icon: FolderCheck, value: "250+", labelBn: "সম্পন্ন প্রোজেক্ট" },
  { icon: Users, value: "180+", labelBn: "সন্তুষ্ট ক্লায়েন্ট" },
  { icon: MapPinned, value: "64+", labelBn: "জেলায় সেবা" },
  { icon: ThumbsUp, value: "5+", labelBn: "বছরের অভিজ্ঞতা" },
  { icon: BadgePercent, value: "100%", labelBn: "কাস্টম ডিজাইন" },
];

export default function StatsBanner() {
  return (
    <section className="bg-[#0a1128] py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-4">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            const isLast = index === STATS.length - 1;
            return (
              <div
                key={stat.labelBn}
                className={`flex items-center justify-center gap-3 px-2 sm:justify-start lg:border-r lg:border-white/10 ${
                  isLast ? "lg:border-r-0" : ""
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-xs font-medium text-slate-400">
                    {stat.labelBn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
