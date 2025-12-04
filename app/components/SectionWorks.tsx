import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import PixelButton from "./ui/PixelButton";

const WORK_IMAGES = [
  {
    src: "/assets/images/works/giant-puppy.png",
    alt: "Giant Puppy",
    // 左上、少し角度をつける
    className: "md:left-[80px] md:top-[60px] md:-rotate-12",
    mobileClassName: "left-[-2%] top-[5%] -rotate-12 w-[120px]",
    width: 240,
    height: 160,
  },
  {
    src: "/assets/images/works/inuverse.png",
    alt: "Inuverse",
    // 右上、少し下にずらす
    className: "md:right-[50px] md:top-[100px] md:rotate-6",
    mobileClassName: "right-[-8%] top-[30%] rotate-6 w-[180px]",
    width: 400,
    height: 266,
  },
  {
    src: "/assets/images/works/matyupuriri.png",
    alt: "Matyupuriri",
    // 左下、大きく傾ける
    className: "md:left-[120px] md:bottom-[80px] md:rotate-[8deg]",
    mobileClassName: "left-[5%] bottom-[20%] rotate-6 w-[160px]",
    width: 300,
    height: 300,
  },
  {
    src: "/assets/images/works/spark.png",
    alt: "Spark",
    // 右下、逆向きに傾ける
    className: "md:right-[80px] md:bottom-[100px] md:-rotate-[15deg]",
    mobileClassName: "right-[5%] bottom-[15%] -rotate-12 w-[140px]",
    width: 200,
    height: 200,
  },
];

export default function SectionWorks() {
  return (
    <section className="w-full max-w-[1152px] mx-auto py-20 relative z-10 flex flex-col">
      {/* Works Content Area */}
      <div className="relative min-h-[600px] flex flex-col items-center justify-center overflow-hidden md:overflow-visible mb-20">
          <div className="relative z-20 mb-12">
            <SectionTitle title="Works" />
          </div>

          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {WORK_IMAGES.map((img, index) => (
              <div key={index} className="contents">
                {/* PC */}
                <div className={`hidden md:block absolute transition-transform hover:scale-105 duration-300 drop-shadow-xl ${img.className}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="object-contain"
                  />
                </div>
                 {/* Mobile */}
                <div className={`md:hidden absolute transition-transform hover:scale-105 duration-300 drop-shadow-md ${img.mobileClassName}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width * 0.7}
                    height={img.height * 0.7}
                    className="object-contain"
                  />
                </div>
              </div>
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
