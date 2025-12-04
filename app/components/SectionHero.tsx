"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SectionHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#00a6f4]">
      
      {/* Hero Content */}
      <div className="relative w-full max-w-[1470px] h-full flex flex-col items-center justify-center">
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
    </div>
  );
}
