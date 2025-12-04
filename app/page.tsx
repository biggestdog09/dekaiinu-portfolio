"use client";

import Header from "./components/Header";
import SectionHero from "./components/SectionHero";
import SectionTopics from "./components/SectionTopics";
import SectionGallery from "./components/SectionGallery";
import SectionWorks from "./components/SectionWorks";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="font-pixel text-[#364153] bg-white">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <main className="relative w-full">
        {/* Section 1: Hero */}
        {/* PC: stickyで固定, Mobile: 通常配置 */}
        <div className="relative md:sticky md:top-0 h-screen w-full z-0 snap-start">
           <SectionHero />
        </div>

        {/* Section 2: Topics - 薄い水色 (#b8e6fe) */}
        {/* PC: stickyで重なる, Mobile: 通常配置 */}
        <div className="relative md:sticky md:top-0 min-h-screen w-full z-10 bg-[#b8e6fe] shadow-[0_-5px_20px_rgba(0,0,0,0.05)] snap-start flex flex-col justify-center">
            <SectionTopics />
        </div>

        {/* Section 3: Gallery - 薄いオレンジ (#ffe0b2) */}
        <div className="relative md:sticky md:top-0 min-h-screen w-full z-20 bg-[#ffe0b2] shadow-[0_-5px_20px_rgba(0,0,0,0.05)] snap-start flex flex-col justify-center">
            <SectionGallery />
        </div>

        {/* Section 4: Works & Footer - 濃いオレンジ (#ff8904) */}
        {/* 最後のセクションはstickyである必要はない（次に重なるものがないため） */}
        {/* 前のセクションの上に重なるように z-index を高くし、背景色をつける */}
        <div className="relative min-h-screen w-full z-30 bg-[#ff8904] shadow-[0_-5px_20px_rgba(0,0,0,0.05)] snap-start flex flex-col">
            <div className="flex-grow flex flex-col justify-center pt-24">
              <SectionWorks />
            </div>
            <Footer />
        </div>
      </main>
    </div>
  );
}
