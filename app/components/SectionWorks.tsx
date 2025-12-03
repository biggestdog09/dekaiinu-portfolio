import Image from "next/image";

export default function SectionWorks() {
  return (
    <section className="w-full max-w-[1152px] mx-auto py-20 relative z-10">
      {/* Title */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-[#0084d1] text-2xl font-pixel mb-4 text-center">Works</h2>
        <div className="w-24 h-1 bg-[#00bcff]" />
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Work 1 */}
        <div className="bg-white border-4 border-[#333333] shadow-[4px_4px_0px_0px_#5a9fbf] group hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
             <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-gray-900" />
          </div>
          <div className="p-6">
            <h3 className="text-[#0069a8] text-lg font-pixel mb-4 min-h-[40px]">UI Design Project</h3>
            <p className="text-[#4a5565] text-xs font-medium">ミニマルで使いやすいインターフェースデザイン</p>
          </div>
        </div>

        {/* Work 2 */}
        <div className="bg-white border-4 border-[#333333] shadow-[4px_4px_0px_0px_#5a9fbf] group hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
             <div className="w-full h-full bg-gradient-to-tr from-blue-600 to-indigo-800" />
          </div>
          <div className="p-6">
            <h3 className="text-[#0069a8] text-lg font-pixel mb-4 min-h-[40px]">Web Development</h3>
            <p className="text-[#4a5565] text-xs font-medium">クリエイティブなウェブサイト制作</p>
          </div>
        </div>

        {/* Work 3 */}
        <div className="bg-white border-4 border-[#333333] shadow-[4px_4px_0px_0px_#5a9fbf] group hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
             <div className="w-full h-full bg-gradient-to-tr from-green-600 to-teal-800" />
          </div>
          <div className="p-6">
            <h3 className="text-[#0069a8] text-lg font-pixel mb-4 min-h-[40px]">Game Design</h3>
            <p className="text-[#4a5565] text-xs font-medium">レトロゲーム風UIデザイン</p>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <button className="bg-white border-4 border-[#333333] py-4 px-8 shadow-[4px_4px_0px_0px_#5a9fbf] hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1">
          <span className="text-[#0084d1] text-xs font-pixel">View All Projects →</span>
        </button>
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
            
            <button className="mt-8 bg-[#00a6f4] border-4 border-[#333333] py-4 px-8 shadow-[4px_4px_0px_0px_#5a9fbf] hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1">
              <span className="text-white text-xs font-pixel">Contact Me</span>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}

