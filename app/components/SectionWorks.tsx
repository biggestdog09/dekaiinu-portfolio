"use client";

import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import PixelButton from "./ui/PixelButton";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const WORK_IMAGES = [
  {
    src: "/assets/images/works/giant-puppy.png",
    alt: "Giant Puppy",
    // 左上、少し角度をつける
    className: "md:left-[80px] md:top-[60px] md:-rotate-12",
    mobileClassName: "left-[-2%] top-[5%] -rotate-12 w-[120px]",
    width: 240,
    height: 160,
    speed: 120, // 速度強化
  },
  {
    src: "/assets/images/works/inuverse.png",
    alt: "Inuverse",
    // 右上、少し下にずらす
    className: "md:right-[50px] md:top-[100px] md:rotate-6",
    mobileClassName: "right-[-8%] top-[30%] rotate-6 w-[180px]",
    width: 400,
    height: 266,
    speed: -200, // 速度強化
  },
  {
    src: "/assets/images/works/matyupuriri.png",
    alt: "Matyupuriri",
    // 左下、大きく傾ける
    className: "md:left-[120px] md:bottom-[80px] md:rotate-[8deg]",
    mobileClassName: "left-[5%] bottom-[20%] rotate-6 w-[160px]",
    width: 300,
    height: 300,
    speed: 80, // 速度強化
  },
  {
    src: "/assets/images/works/spark.png",
    alt: "Spark",
    // 右下、逆向きに傾ける
    className: "md:right-[80px] md:bottom-[100px] md:-rotate-[15deg]",
    mobileClassName: "right-[5%] bottom-[15%] -rotate-12 w-[140px]",
    width: 200,
    height: 200,
    speed: -150, // 速度強化
  },
];

// パララックス用コンポーネント
const ParallaxWork = ({ 
  img, 
  scrollYProgress 
}: { 
  img: typeof WORK_IMAGES[0], 
  scrollYProgress: MotionValue<number> 
}) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, img.speed]);
  const yMobile = useTransform(scrollYProgress, [0, 1], [0, img.speed * 0.5]);

  return (
    <div className="contents">
      {/* PC */}
      <motion.div 
        style={{ y }}
        className={`hidden md:block absolute drop-shadow-xl pointer-events-auto ${img.className}`}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ 
          scale: 1.1,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          className="object-contain"
        />
      </motion.div>
       {/* Mobile */}
      <motion.div 
        style={{ y: yMobile }}
        className={`md:hidden absolute drop-shadow-md pointer-events-auto ${img.mobileClassName}`}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ 
          scale: 1.1,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width * 0.7}
          height={img.height * 0.7}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default function SectionWorks() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="w-full max-w-[1152px] mx-auto py-20 relative z-10 flex flex-col">
      {/* Works Content Area */}
      <div className="relative min-h-[600px] flex flex-col items-center justify-center overflow-hidden md:overflow-visible mb-20">
          <div className="relative z-20 mb-12">
            <SectionTitle title="Works" />
          </div>

          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {WORK_IMAGES.map((img, index) => (
              <ParallaxWork 
                key={index} 
                img={img} 
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </div>

          <div className="relative z-20 mt-8">
            <PixelButton>
              View All Projects →
            </PixelButton>
          </div>
      </div>

      {/* Contact Banner (Keep existing) */}
      <div className="mt-12 max-w-[800px] mx-auto w-full px-4 relative z-20">
        <div className="bg-[rgba(255,255,255,0.9)] border-4 border-[#333333] p-8 md:p-12 text-center relative shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#dff2fe] border-[3px] border-[#74d4ff] flex items-center justify-center">
             <div className="w-8 h-8 bg-[#00bcff]" />
          </div>
          
          <div className="mt-8 space-y-6">
            <p className="text-[#364153] text-sm md:text-base font-medium leading-7 font-pixel">
              ポートフォリオを見ていただき<br/>ありがとうございます！
            </p>
            <p className="text-[#4a5565] text-xs md:text-sm font-medium leading-6 font-pixel">
              デザインのご依頼や<br/>
              コラボレーションのご相談など<br/>
              お気軽にご連絡ください
            </p>
            
            <div className="mt-8 flex justify-center">
              <PixelButton variant="blue">
                Contact Me
              </PixelButton>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
