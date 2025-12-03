"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // ロード進捗のシミュレーション
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 5; // ランダムに進む
        if (next >= 100) {
          clearInterval(interval);
          setIsFading(true);
          setTimeout(() => setIsVisible(false), 500); // フェードアウト後に非表示
          return 100;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  // 進捗に基づいてハートの数を決定 (1-4)
  // 0%でも1つ目を薄く表示したいので、計算ロジックを調整
  const filledHearts = Math.ceil((progress / 100) * 4);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-[#74d4ff] via-[#b8e6fe] to-[#dbeafe] font-[family-name:var(--font-mihi-pixelmoji)] transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* キャラクター */}
      <div className="relative mb-8 h-[160px] w-[160px]">
        <Image
          src="/assets/images/character.png"
          alt="Loading Character"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* ハート */}
      <div className="mb-12 flex gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative h-[72px] w-[72px]">
            {/* ハート画像 */}
            <div
              className={`relative h-full w-full transition-all duration-300 ${
                i <= filledHearts
                  ? "opacity-100 scale-110 drop-shadow-md"
                  : "opacity-40 grayscale scale-100"
              }`}
            >
              <Image
                src="/assets/images/heart.png"
                alt="Heart"
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Now Loading Text */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-[#0084D1] tracking-widest drop-shadow-sm">
          Now Loading
        </p>
        <p className="text-[#0084D1] text-sm">
            {/* 進捗のドットアニメーション的なものを入れてもいいがシンプルに */}
            {Math.min(100, Math.round(progress))}%
        </p>
      </div>
    </div>
  );
}

