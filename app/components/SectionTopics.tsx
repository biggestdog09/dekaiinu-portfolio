"use client";

import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import PixelButton from "./ui/PixelButton";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

// Topics用の装飾画像（ステッカー）
const TOPIC_DECORATIONS = [
  {
    src: "/assets/images/cloud_1.png",
    alt: "Cloud 1",
    className: "md:left-[100px] md:top-[150px] md:rotate-[-8deg]",
    mobileClassName: "left-[5%] top-[10%] -rotate-6 w-[120px]",
    width: 200,
    height: 120,
    speed: -100, // 速度強化
  },
  {
    src: "/assets/images/cloud_2.png",
    alt: "Cloud 2",
    className: "md:right-[150px] md:top-[100px] md:rotate-[5deg]",
    mobileClassName: "right-[5%] top-[15%] rotate-6 w-[130px]",
    width: 220,
    height: 130,
    speed: -180, // 速度強化
  },
  {
    src: "/assets/images/heart.png",
    alt: "Heart",
    className: "md:left-[250px] md:bottom-[100px] md:rotate-[15deg]",
    mobileClassName: "left-[15%] bottom-[20%] rotate-12 w-[80px]",
    width: 100,
    height: 100,
    speed: 140, // 速度強化
  },
  {
    src: "/assets/images/gallery/pallet.png",
    alt: "Pallet",
    className: "md:right-[200px] md:bottom-[150px] md:rotate-[-10deg]",
    mobileClassName: "right-[10%] bottom-[25%] -rotate-12 w-[100px]",
    width: 150,
    height: 150,
    speed: 220, // 速度強化
  },
];

const ParallaxDecoration = ({ 
  item, 
  scrollYProgress 
}: { 
  item: typeof TOPIC_DECORATIONS[0], 
  scrollYProgress: MotionValue<number> 
}) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, item.speed]);
  const yMobile = useTransform(scrollYProgress, [0, 1], [0, item.speed * 0.5]);

  return (
    <div className="contents">
       {/* PC View */}
      <motion.div 
        style={{ y }}
        className={`hidden md:block absolute drop-shadow-lg pointer-events-auto ${item.className}`}
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
           src={item.src}
           alt={item.alt}
           width={item.width}
           height={item.height}
           className="object-contain"
         />
      </motion.div>
      {/* Mobile View */}
      <motion.div 
        style={{ y: yMobile }}
        className={`md:hidden absolute drop-shadow-md pointer-events-auto ${item.mobileClassName}`}
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
           src={item.src}
           alt={item.alt}
           width={item.width * 0.7}
           height={item.height * 0.7}
           className="object-contain"
         />
      </motion.div>
    </div>
  );
};

export default function SectionTopics() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="w-full max-w-[1152px] mx-auto py-20 relative z-10 min-h-[600px] flex flex-col items-center justify-center overflow-hidden md:overflow-visible">
      
      <div className="relative z-20 mb-8">
        <SectionTitle title="New Topics" />
      </div>

      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {TOPIC_DECORATIONS.map((item, index) => (
          <ParallaxDecoration 
            key={index} 
            item={item} 
            scrollYProgress={scrollYProgress} 
          />
        ))}
      </div>

      <div className="relative z-20 mt-8">
        <PixelButton>
          See All Topics →
        </PixelButton>
      </div>
    </section>
  );
}
