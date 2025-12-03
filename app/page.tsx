"use client";

import Image from "next/image";
import Header from "./components/Header";
import SectionTopics from "./components/SectionTopics";
import SectionGallery from "./components/SectionGallery";
import SectionWorks from "./components/SectionWorks";
import Footer from "./components/Footer";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#00a6f4");
  
  // 背景色のグラデーション定義
  // start: 0px (#00a6f4 - Blue Sky)
  // middle: 1000px (#00bcff - Lighter Blue)
  // end: 3000px (#ff6900 - Sunset Orange)
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // 背景色の計算
      // 0 - 1500px: Blue to Light Blue
      // 1500px - 3000px: Light Blue to Sunset
      
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = Math.min(currentScrollY / maxScroll, 1);
      
      // 簡易的な色遷移ロジック
      // 実際にはもっと滑らかにするために補間関数を使うが、
      // ここではスクロール位置に応じてクラスを切り替えるか、インラインスタイルで色を制御する
      
      // 青(#00a6f4) -> オレンジ(#ff6900) への補間
      // RGB変換して計算
      // Start: R:0, G:166, B:244
      // End: R:255, G:105, B:0
      
      // スクロールが進むにつれて夕暮れにする
      // 0px -> 青
      // 2000px -> 夕暮れ開始
      
      const threshold = 1000;
      const fadeLength = 1500;
      
      if (currentScrollY < threshold) {
        setBackgroundColor("#00a6f4");
      } else {
        const progress = Math.min((currentScrollY - threshold) / fadeLength, 1);
        
        const startR = 0, startG = 166, startB = 244;
        const endR = 255, endG = 137, endB = 4; // #ff8904
        
        const r = Math.round(startR + (endR - startR) * progress);
        const g = Math.round(startG + (endG - startG) * progress);
        const b = Math.round(startB + (endB - startB) * progress);
        
        setBackgroundColor(`rgb(${r}, ${g}, ${b})`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="min-h-screen transition-colors duration-500 ease-out overflow-hidden relative font-pixel text-[#364153]"
      style={{ backgroundColor: backgroundColor }}
    >
      {/* Background Gradients Layer */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000"
        style={{
            background: `linear-gradient(to bottom, ${backgroundColor} 0%, #b8e6fe 100%)`,
            opacity: 1
        }}
      />
      
      {/* Sunset Overlay for deeper effect */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-0 transition-opacity duration-500"
        style={{
            opacity: scrollY > 1500 ? Math.min((scrollY - 1500) / 1000, 0.9) : 0,
            background: 'linear-gradient(to bottom, transparent 0%, #ff8904 100%)'
        }}
      />

      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <main className="relative flex flex-col items-center justify-start w-full mx-auto px-4 z-10 pt-16">
        
        {/* Hero Section */}
        <div className="relative w-full max-w-[1470px] min-h-[calc(100vh-64px)] flex flex-col items-center justify-center">
            {/* Logo Section - Parallax Effect */}
            <div 
                className="relative z-10 flex flex-col items-center justify-center w-full"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
            <div className="relative w-[300px] h-[100px] md:w-[600px] md:h-[200px] animate-float">
                <Image
                src="/assets/images/logo_dekaiinu.png"
                alt="DekaiInu"
                fill
                className="object-contain"
                priority
                />
            </div>
            </div>

            {/* Clouds - Parallax Effect */}
            {/* Cloud 1 */}
            <div 
                className="absolute top-[12%] left-[8%] w-24 h-24 md:w-32 md:h-32 opacity-70 animate-float-delayed pointer-events-none"
                style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
            <Image src="/assets/images/cloud_1.png" alt="cloud" fill className="object-contain" />
            </div>

            {/* Cloud 2 */}
            <div 
                className="absolute top-[15%] right-[10%] w-32 h-32 md:w-40 md:h-40 opacity-60 animate-float pointer-events-none"
                style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
            <Image src="/assets/images/cloud_2.png" alt="cloud" fill className="object-contain" />
            </div>

            {/* Cloud 3 */}
            <div 
                className="absolute bottom-[15%] left-[10%] w-28 h-28 md:w-36 md:h-36 opacity-50 animate-float pointer-events-none"
                style={{ transform: `translateY(${scrollY * 0.4}px)` }}
            >
            <Image src="/assets/images/cloud_3.png" alt="cloud" fill className="object-contain" />
            </div>

            {/* Cloud 4 */}
            <div 
                className="absolute bottom-[18%] right-[5%] w-32 h-32 md:w-44 md:h-44 opacity-60 animate-float-delayed pointer-events-none"
                style={{ transform: `translateY(${scrollY * 0.6}px)` }}
            >
            <Image src="/assets/images/cloud_2.png" alt="cloud" fill className="object-contain" />
            </div>
            
            {/* Cloud 5 */}
            <div 
                className="absolute top-[38%] left-[4%] w-20 h-20 md:w-28 md:h-28 opacity-55 animate-float pointer-events-none"
                style={{ transform: `translateY(${scrollY * 0.45}px)` }}
            >
            <Image src="/assets/images/cloud_1.png" alt="cloud" fill className="object-contain" />
            </div>

            {/* Scroll Down Indicator */}
            <div 
                className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 transition-opacity duration-300"
                style={{ opacity: Math.max(1 - scrollY / 300, 0) }}
            >
            <span className="text-sm tracking-widest text-white">Scroll Down</span>
            <div className="w-0.5 h-8 bg-white" />
            </div>
        </div>

        {/* Content Sections */}
        <div className="w-full space-y-24 pb-24">
            <SectionTopics />
            <SectionGallery />
            <SectionWorks />
        </div>

      </main>

      <Footer />
    </div>
  );
}
