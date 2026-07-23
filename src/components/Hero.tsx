"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight, Sparkles, MessageCircle } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

type Slide = {
  id: string;
  image: string;
  eyebrowBn: string;
  titleBn: string;
  taglineBn: string;
  descriptionBn: string;
};

const SLIDES: Slide[] = [
  {
    id: "slide-1",
    image:
      "/hero/hero1.png",
    eyebrowBn: "ARTOVA",
    titleBn: "YOUR VISION IS OUR CREATION",
    taglineBn: "আপনার কল্পনাই আমাদের সৃষ্টির অনুপ্রেরণা",
    descriptionBn:
      "ক্যালিগ্রাফি, পেইন্টিং, ওয়াল আর্ট, ইন্টেরিয়র ডিজাইন ও ল্যান্ডস্কেপ ডিজাইনের মাধ্যমে আমরা আপনার স্বপ্নকে রূপ দেই শিল্পের ছোঁয়ায়।",
  },
  {
    id: "slide-2",
    image:
      "/hero/hero2.png",
    eyebrowBn: "ARTOVA",
    titleBn: "CRAFTED WITH PASSION",
    taglineBn: "প্রতিটি কাজে থাকে নিখুঁত যত্ন ও ভালোবাসা",
    descriptionBn:
      "৫+ বছরের অভিজ্ঞতা নিয়ে আমরা সারা বাংলাদেশ ও আন্তর্জাতিক ক্লায়েন্টদের জন্য মানসম্পন্ন শিল্পকর্ম তৈরি করে যাচ্ছি।",
  },
  {
    id: "slide-3",
    image:
      "/hero/hero3.png",
    eyebrowBn: "ARTOVA",
    titleBn: "DESIGN THAT SPEAKS",
    taglineBn: "আপনার প্রতিষ্ঠানের গল্প বলবে আমাদের ডিজাইন",
    descriptionBn:
      "টাইপোগ্রাফি থেকে শুরু করে ওয়াল মুরাল পর্যন্ত, প্রতিটি প্রজেক্টে আমরা যোগ করি অনন্য সৃজনশীলতা।",
  },
];

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#0a1128]"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ el: ".hero-pagination", clickable: true }}
        onSwiper={(s) => (swiperRef.current = s)}
        className="h-140 sm:h-150 md:h-160 lg:h-170"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background image */}
              <Image
                src={slide.image}
                alt="hero section slider image"
                className="absolute inset-0 h-full w-full object-cover"
                width={1920}
                height={1080}
                priority
              />

              {/* Gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-linear-to-r from-[#0a1128]/95 via-[#0a1128]/70 to-[#0a1128]/20" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a1128]/80 via-transparent to-transparent" />

              {/* Content */}
              <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 lg:px-8">
                <div className="max-w-xl">
                  <p className="mb-1 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-white">
                    {slide.eyebrowBn}
                  </p>
                  <p className="mb-4 text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-amber-400">
                    {slide.titleBn}
                  </p>

                  <p className="mb-4 text-lg sm:text-xl font-medium text-amber-300">
                    {slide.taglineBn}
                  </p>

                  <p className="mb-8 text-sm sm:text-base leading-relaxed text-slate-200">
                    {slide.descriptionBn}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="#portfolio"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-900/30 transition-colors hover:from-amber-600 hover:to-amber-700"
                    >
                      <Sparkles className="h-4 w-4" />
                      আমাদের কাজ দেখুন
                      <span className="hidden sm:inline">
                        &nbsp;/ View Portfolio
                      </span>
                    </a>

                    <a
                      href="https://wa.me/8801740367554"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    >
                      <MessageCircle className="h-4 w-4" />
                      হোয়াটসঅ্যাপ করুন
                      <span className="hidden sm:inline">
                        &nbsp;/ WhatsApp Now
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom prev/next arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => swiperRef.current?.slidePrev()}
        className="group absolute left-3 sm:left-6 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
        className="group absolute right-3 sm:right-6 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Custom pagination dots */}
      <div className="hero-pagination absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2" />

      {/* Pagination bullet styling (Swiper renders plain spans; style them here).
          Plain <style> tag so this works in any React setup, not just Next.js. */}
      <style>{`
        .hero-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.25s ease;
        }
        .hero-pagination .swiper-pagination-bullet-active {
          width: 24px;
          background: #f59e0b;
        }
      `}</style>
    </section>
  );
}