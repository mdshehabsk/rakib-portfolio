"use client";

import { useState } from "react";
import { ArrowRight, Eye } from "lucide-react";

type CategoryKey =
  | "all"
  | "calligraphy"
  | "painting"
  | "wall-mural"
  | "interior-art"
  | "typography"
  | "landscape";

type Category = {
  key: CategoryKey;
  labelBn: string;
  labelEn: string;
};

type Work = {
  id: string;
  category: Exclude<CategoryKey, "all">;
  titleBn: string;
  image: string;
};

const CATEGORIES: Category[] = [
  { key: "all", labelBn: "সব কাজ", labelEn: "All Works" },
  { key: "calligraphy", labelBn: "ইসলামিক ক্যালিগ্রাফি", labelEn: "Calligraphy" },
  { key: "painting", labelBn: "ক্যানভাস পেইন্টিং", labelEn: "Painting" },
  { key: "wall-mural", labelBn: "ওয়াল মুরাল", labelEn: "Wall Mural" },
  { key: "interior-art", labelBn: "ইন্টেরিয়র আর্ট", labelEn: "Interior Art" },
  { key: "typography", labelBn: "টাইপোগ্রাফি", labelEn: "Typography" },
  { key: "landscape", labelBn: "ল্যান্ডস্কেপ ডিজাইন", labelEn: "Landscape" },
];

const WORKS: Work[] = [
  {
    id: "work-1",
    category: "calligraphy",
    titleBn: "ইসলামিক ক্যালিগ্রাফি",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "work-2",
    category: "calligraphy",
    titleBn: "কালার ক্যালিগ্রাফি আর্ট",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "work-3",
    category: "landscape",
    titleBn: "প্রাকৃতিক ল্যান্ডস্কেপ",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "work-4",
    category: "typography",
    titleBn: "পোস্টার টাইপোগ্রাফি",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "work-5",
    category: "typography",
    titleBn: "বাংলা টাইপোগ্রাফি ডিজাইন",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "work-6",
    category: "wall-mural",
    titleBn: "ওয়াল মুরাল ও গার্ডেন আর্ট",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredWorks =
    activeCategory === "all"
      ? WORKS
      : WORKS.filter((work) => work.category === activeCategory);

  return (
    <section id="portfolio" className="bg-[#fdfaf3] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Our Portfolio
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            আমাদের কিছু নির্বাচিত কাজ
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.key;
            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                className={`rounded-lg px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-amber-300 hover:text-amber-600"
                }`}
              >
                <span className="block">{category.labelBn}</span>
                <span
                  className={`block text-[10px] sm:text-[11px] ${
                    isActive ? "text-amber-100" : "text-slate-400"
                  }`}
                >
                  {category.labelEn}
                </span>
              </button>
            );
          })}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl"
            >
              <img
                src={work.image}
                alt={work.titleBn}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white">
                  <Eye className="h-4 w-4" />
                </span>
                <p className="text-xs font-semibold text-white">
                  {work.titleBn}
                </p>
              </div>
            </div>
          ))}

          {filteredWorks.length === 0 && (
            <p className="col-span-full py-10 text-center text-sm text-slate-500">
              এই ক্যাটাগরিতে কোনো কাজ পাওয়া যায়নি।
            </p>
          )}
        </div>

        {/* View all button */}
        <div className="mt-10 flex justify-center">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0a1128] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#131c3e]"
          >
            সব কাজ দেখুন
            <span className="text-slate-300">/ View All Works</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}