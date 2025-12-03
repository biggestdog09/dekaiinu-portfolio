import SectionTitle from "./ui/SectionTitle";
import PixelButton from "./ui/PixelButton";
import WorkCard from "./cards/WorkCard";

const WORKS_DATA = [
  {
    id: 1,
    title: "UI Design Project",
    description: "ミニマルで使いやすいインターフェースデザイン",
    gradient: "from-gray-700 to-gray-900"
  },
  {
    id: 2,
    title: "Web Development",
    description: "クリエイティブなウェブサイト制作",
    gradient: "from-blue-600 to-indigo-800"
  },
  {
    id: 3,
    title: "Game Design",
    description: "レトロゲーム風UIデザイン",
    gradient: "from-green-600 to-teal-800"
  }
];

export default function SectionWorks() {
  return (
    <section className="w-full max-w-[1152px] mx-auto py-20 relative z-10">
      <SectionTitle title="Works" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {WORKS_DATA.map((work) => (
          <WorkCard
            key={work.id}
            title={work.title}
            description={work.description}
            gradient={work.gradient}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <PixelButton>
          View All Projects →
        </PixelButton>
      </div>

      {/* Contact Banner */}
      <div className="mt-32 max-w-[800px] mx-auto">
        <div className="bg-[rgba(255,255,255,0.9)] border-4 border-[#333333] p-12 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#dff2fe] border-[3px] border-[#74d4ff] flex items-center justify-center">
             <div className="w-8 h-8 bg-[#00bcff]" />
          </div>
          
          <div className="mt-8 space-y-6">
            <p className="text-[#364153] text-xs font-medium leading-6">
              ポートフォリオを見ていただき<br/>ありがとうございます！
            </p>
            <p className="text-[#4a5565] text-xs font-medium leading-6">
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
