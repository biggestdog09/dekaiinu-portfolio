import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00a6f4] via-[#00bcff] to-[#b8e6fe] overflow-hidden relative font-pixel text-[#364153]">
      <div className="absolute inset-0 z-0">
         {/* 背景グラデーション (Tailwindクラスで対応済みだが、Figmaの指示通りに微調整が必要ならここ) */}
      </div>

      <Header />

      <main className="relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center w-full max-w-[1470px] mx-auto px-4">
        
        {/* Logo Section */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <div className="relative w-[300px] h-[100px] md:w-[600px] md:h-[200px] animate-float">
            <Image
              src="/assets/images/logo_dekaiinu.png"
              alt="DekaiInu"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <h1 className="mt-8 text-2xl md:text-4xl tracking-widest opacity-80">
            Welcome
          </h1>
        </div>

        {/* Clouds */}
        {/* Cloud 1 - Left Top */}
        <div className="absolute top-[12%] left-[8%] w-24 h-24 md:w-32 md:h-32 opacity-70 animate-float-delayed pointer-events-none">
          <Image src="/assets/images/cloud_1.png" alt="cloud" fill className="object-contain" />
        </div>

        {/* Cloud 2 - Right Top */}
        <div className="absolute top-[15%] right-[10%] w-32 h-32 md:w-40 md:h-40 opacity-60 animate-float pointer-events-none">
          <Image src="/assets/images/cloud_2.png" alt="cloud" fill className="object-contain" />
        </div>

        {/* Cloud 3 - Left Bottom */}
        <div className="absolute bottom-[15%] left-[10%] w-28 h-28 md:w-36 md:h-36 opacity-50 animate-float pointer-events-none">
          <Image src="/assets/images/cloud_3.png" alt="cloud" fill className="object-contain" />
        </div>

        {/* Cloud 4 - Right Bottom */}
        <div className="absolute bottom-[18%] right-[5%] w-32 h-32 md:w-44 md:h-44 opacity-60 animate-float-delayed pointer-events-none">
          <Image src="/assets/images/cloud_2.png" alt="cloud" fill className="object-contain" />
        </div>
        
        {/* Cloud 5 - Middle Left (Logo side) */}
        <div className="absolute top-[38%] left-[4%] w-20 h-20 md:w-28 md:h-28 opacity-55 animate-float pointer-events-none">
           <Image src="/assets/images/cloud_1.png" alt="cloud" fill className="object-contain" />
        </div>


        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-sm tracking-widest text-[#0084d1]">Scroll Down</span>
          <div className="w-0.5 h-8 bg-[#0084d1]" />
        </div>

      </main>
    </div>
  );
}
