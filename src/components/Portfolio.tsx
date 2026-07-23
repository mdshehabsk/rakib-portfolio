"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = {
  id: string;
  titleBn: string;
  image: string;
};

const GALLERY_IMAGES: GalleryImage[] = [
  { id: "img-1", titleBn: "প্রোজেক্ট 1", image: "/12471.jpg.jpeg" },
  { id: "img-2", titleBn: "প্রোজেক্ট 2", image: "/12589.png" },
  { id: "img-3", titleBn: "প্রোজেক্ট 3", image: "/12591.png" },
  { id: "img-4", titleBn: "প্রোজেক্ট 4", image: "/12605.png" },
  { id: "img-5", titleBn: "প্রোজেক্ট 5", image: "/12607.png" },
  { id: "img-6", titleBn: "প্রোজেক্ট 6", image: "/12609.png" },
  { id: "img-7", titleBn: "প্রোজেক্ট 7", image: "/12610.png" },
  { id: "img-8", titleBn: "প্রোজেক্ট 8", image: "/12620.png" },
  { id: "img-9", titleBn: "প্রোজেক্ট 9", image: "/12622.png" },
  { id: "img-10", titleBn: "প্রোজেক্ট 10", image: "/12624.png" },
  { id: "img-11", titleBn: "প্রোজেক্ট 11", image: "/12771.png" },
  { id: "img-13", titleBn: "হিরো 1", image: "/hero/hero1.png" },
  { id: "img-14", titleBn: "হিরো 2", image: "/hero/hero2.png" },
  { id: "img-15", titleBn: "হিরো 3", image: "/hero/hero3.png" },
];

export default function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const selectedImage = selectedIndex !== null ? GALLERY_IMAGES[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const showPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    setZoom(1);
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % GALLERY_IMAGES.length);
    setZoom(1);
  };

  const handleWheel = (event: React.WheelEvent<HTMLImageElement>) => {
    event.preventDefault();
    setZoom((current) => {
      const delta = event.deltaY < 0 ? 0.1 : -0.1;
      const next = current + delta;
      return Math.min(3, Math.max(0.5, next));
    });
  };

  return (
    <section id="portfolio" className="bg-[#fdfaf3] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Our Gallery
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            আমাদের গ্যালারি
          </h2>
        </div>

        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3 ">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => {
                setSelectedIndex(index);
                setZoom(1);
              }}
              className="group mb-4 break-inside-avoid overflow-hidden bg-slate-100 p-0 text-left"
            >
              <img
                src={image.image}
                alt={image.titleBn}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-8"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative  overflow-hidden rounded-3xl shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition hover:bg-white/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition hover:bg-white/20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <div className="flex min-h-[60vh] items-center justify-center overflow-hidden p-4">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.titleBn}
                  className="max-h-[80vh] max-w-full object-contain transition-transform duration-150"
                  style={{ transform: `scale(${zoom})` }}
                  onWheel={handleWheel}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
