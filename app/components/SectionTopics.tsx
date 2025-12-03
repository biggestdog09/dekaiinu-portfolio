import Image from "next/image";

export default function SectionTopics() {
  return (
    <section className="w-full max-w-[1152px] mx-auto py-20 relative z-10">
      {/* Title */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-[#0084d1] text-2xl font-pixel mb-4 text-center">New Topics</h2>
        <div className="w-24 h-1 bg-[#00bcff]" />
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="relative group">
          <div className="bg-[rgba(255,255,255,0.9)] border-4 border-[#333333] h-full shadow-[4px_4px_0px_0px_#5a9fbf] transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
               {/* Image placeholder */}
               <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-[#00bcff]" />
                <span className="text-[#0084d1] text-xs font-pixel">2025.11.28</span>
              </div>
              <h3 className="text-[#0069a8] text-lg font-pixel mb-4 min-h-[56px]">New Pixel Art Series</h3>
              <p className="text-[#4a5565] text-xs font-medium">新しいピクセルアートシリーズ公開しました</p>
            </div>
          </div>
          <div className="absolute inset-0 border-4 border-[#fdc700] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
        </div>

        {/* Card 2 */}
        <div className="relative group">
          <div className="bg-[rgba(255,255,255,0.9)] border-4 border-[#333333] h-full shadow-[4px_4px_0px_0px_#5a9fbf] transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
               {/* Image placeholder */}
               <div className="w-full h-full bg-gradient-to-br from-blue-400 to-red-400" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-2 h-2 bg-[#00bcff]" />
                <span className="text-[#0084d1] text-xs font-pixel">2025.11.20</span>
              </div>
              <h3 className="text-[#0069a8] text-lg font-pixel mb-4 min-h-[56px]">Web Project Launch</h3>
              <p className="text-[#4a5565] text-xs font-medium">クライアントワークのサイトがリリース</p>
            </div>
          </div>
          <div className="absolute inset-0 border-4 border-[#fdc700] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
        </div>

        {/* Card 3 */}
        <div className="relative group">
          <div className="bg-[rgba(255,255,255,0.9)] border-4 border-[#333333] h-full shadow-[4px_4px_0px_0px_#5a9fbf] transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
               {/* Image placeholder */}
               <div className="w-full h-full bg-gradient-to-br from-red-400 to-black" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-2 h-2 bg-[#00bcff]" />
                <span className="text-[#0084d1] text-xs font-pixel">2025.11.15</span>
              </div>
              <h3 className="text-[#0069a8] text-lg font-pixel mb-4 min-h-[56px]">Illustration Update</h3>
              <p className="text-[#4a5565] text-xs font-medium">ギャラリーに新しいイラストを追加</p>
            </div>
          </div>
          <div className="absolute inset-0 border-4 border-[#fdc700] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
        </div>

      </div>
    </section>
  );
}

