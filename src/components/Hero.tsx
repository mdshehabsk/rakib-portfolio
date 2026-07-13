'use client'

import { useTypewriter } from '../hooks/useTypeWritter'

const Hero = () => {
  const typed = useTypewriter([
    'আরবি ক্যালিগ্রাফি শিল্পী',
    'দেয়াল চিত্রকর',
    'মাদরাসা ক্যালিগ্রাফি বিশেষজ্ঞ',
  ])
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
         {/* floating decorative shapes */}
         <div className="pointer-events-none absolute inset-0">
           <div className="absolute left-[8%] top-[15%] h-24 w-24 rounded-full bg-emerald-100 blur-2xl animate-[float_6s_ease-in-out_infinite]" />
           <div className="absolute right-[12%] top-[25%] h-32 w-32 rounded-full bg-emerald-200/60 blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]" />
           <div className="absolute bottom-[20%] left-[15%] h-20 w-20 rounded-full bg-teal-100 blur-2xl animate-[float_7s_ease-in-out_infinite]" />
           <div className="absolute bottom-[15%] right-[20%] h-16 w-16 rounded-full bg-emerald-300/40 blur-xl animate-[float_5s_ease-in-out_infinite_reverse]" />

           {/* floating Arabic glyph accents */}
           <span
             className=" font-kufi absolute left-[10%] top-[40%] text-6xl text-emerald-200/70 animate-[float_9s_ease-in-out_infinite]"
            
           >
             ﷲ
           </span>
           <span
             className=" font-kufi absolute right-[10%] bottom-[30%] text-7xl text-emerald-100 animate-[float_10s_ease-in-out_infinite_reverse]"
            
           >
             خ
           </span>
           <span
             className=" font-kufi absolute right-[25%] top-[12%] text-5xl text-emerald-200/50 animate-[float_7s_ease-in-out_infinite]"
            
           >
             ن
           </span>
         </div>

         {/* subtle dot grid */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.12)_1px,transparent_0)] bg-[size:28px_28px]" />

         <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
           <p
             className="mb-6 text-4xl text-emerald-600/90 md:text-5xl font-kufi "
            
           >
             الخط العربي
           </p>

           <h1
             className=" text-4xl font-bold leading-tight text-emerald-700  md:text-6xl"
             
           >
             {typed}
             <span className="animate-pulse text-emerald-400">|</span>
           </h1>

           <p
             className="mt-4 max-w-2xl text-lg text-gray-600 md:text-xl font-bold leading-10 "
             
           >
             মাদরাসার দেয়ালে সৌন্দর্যের ছোঁয়া — অভিজ্ঞতা ও ভালোবাসার সাথে
             আরবি ক্যালিগ্রাফি ফুটিয়ে তোলা হয়
           </p>

           {/* <p className="mt-2 text-sm uppercase tracking-widest text-emerald-500/80 font-playwrite font-bold ">
             Wall &amp; Mural Calligraphy Specialist · Bangladesh
           </p> */}

           <div className="mt-10 flex flex-col gap-4 sm:flex-row">
             <a
               href="/portfolio"
               className="rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
               
             >
               কাজ দেখুন
             </a>
             <a
               href="https://wa.me/8801XXXXXXXXX"
               target="_blank"
               rel="noopener noreferrer"
               className="rounded-full border border-emerald-300 bg-emerald-50 px-8 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-100"
               
             >
               যোগাযোগ করুন
             </a>
           </div>

           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-emerald-400">
             ↓
           </div>
         </div>
       </section>
  );
};

export default Hero ;
