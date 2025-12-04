"use client";

import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import PixelButton from "./ui/PixelButton";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const GALLERY_IMAGES = [
  {
    src: "/assets/images/gallery/sanpo.png",
    alt: "Walking",
    // PC positions (右上に配置) - 見切れ防止のため下げる
    className: "md:right-[80px] md:top-[150px] md:rotate-[12deg]",
    // Mobile positions (右上に配置)
    mobileClassName: "right-[5%] top-[15%] rotate-12 w-[140px]",
    width: 280,
    height: 252,
    speed: -160, // スクロールで上に移動
  },
  {
    src: "/assets/images/gallery/busstop.png",
    alt: "Bus Stop",
    // PC positions (左下に配置) - 中央寄りに調整
    className: "md:left-[80px] md:bottom-[80px] md:-rotate-[5deg]",
    // Mobile positions (左下に配置)
    mobileClassName: "left-[5%] bottom-[10%] -rotate-6 w-[160px]",
    width: 280,
    height: 187,
    speed: 120, // スクロールで下に移動（速度強化）
  },
  {
    src: "/assets/images/gallery/ufo.png",
    alt: "UFO",
    // PC positions (右下に配置) - 見切れ防止のため下げる
    className: "md:right-[100px] md:bottom-[50px] md:rotate-[8deg]",
    // Mobile positions (右下に配置)
    mobileClassName: "right-[5%] bottom-[5%] rotate-12 w-[130px]",
    width: 260,
    height: 260,
    speed: -240, // 速く上に移動
  },
  {
    src: "/assets/images/gallery/moonday_2025.png",
    alt: "Moonday",
    // PC positions (左上に配置) - 中央寄りに調整
    className: "md:left-[80px] md:top-[80px] md:-rotate-[10deg]",
    // Mobile positions (左上に配置)
    mobileClassName: "left-[5%] top-[15%] -rotate-6 w-[140px]",
    width: 260,
    height: 260,
    speed: 100, // ゆっくり下に移動（速度強化）
  },
];

// パララックス用コンポーネント
const ParallaxSticker = ({ 
  img, 
  scrollYProgress 
}: { 
  img: typeof GALLERY_IMAGES[0], 
  scrollYProgress: MotionValue<number> 
}) => {
  // スクロール量に応じたY座標の移動
  const y = useTransform(scrollYProgress, [0, 1], [0, img.speed]);

  return (
    <div className="contents">
      {/* PC View */}
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
      
      {/* Mobile View - モバイルでもパララックスを適用（控えめに） */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, img.speed * 0.5]) }}
        className={`md:hidden absolute drop-shadow-lg pointer-events-auto ${img.mobileClassName}`}
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
           width={img.width * 0.6}
           height={img.height * 0.6}
           className="object-contain"
         />
      </motion.div>
    </div>
  );
};

export default function SectionGallery() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="w-full max-w-[1152px] mx-auto py-20 relative z-10 min-h-[800px] flex flex-col items-center justify-center overflow-hidden">
      {/* Title Centered */}
      <div className="relative z-20 mb-12">
        <SectionTitle title="Gallery" />
      </div>

      {/* Stickers Container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {GALLERY_IMAGES.map((img, index) => (
          <ParallaxSticker 
            key={index} 
            img={img} 
            scrollYProgress={scrollYProgress} 
          />
        ))}
      </div>

      {/* Button Centered */}
      <div className="relative z-20 mt-8">
        <PixelButton>
          See All Gallery →
        </PixelButton>
      </div>
    </section>
  );
}
