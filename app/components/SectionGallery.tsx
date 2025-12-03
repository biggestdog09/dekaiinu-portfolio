import Image from "next/image";

export default function SectionGallery() {
  return (
    <section className="w-full max-w-[1152px] mx-auto py-20 relative z-10">
      <div className="bg-[rgba(255,255,255,0.3)] p-8 md:p-16 rounded-xl backdrop-blur-sm">
        {/* Title */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-[#0084d1] text-2xl font-pixel mb-4 text-center">Gallery</h2>
          <div className="w-24 h-1 bg-[#00bcff]" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square bg-white border-4 border-[#333333] relative group overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gray-200" /> 
              {/* Image Placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                item % 3 === 0 ? 'from-green-200 to-blue-200' : 
                item % 3 === 1 ? 'from-yellow-200 to-red-200' : 
                'from-purple-200 to-pink-200'
              }`} />
              
              <div className="absolute inset-0 border-4 border-[#fdc700] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center">
          <button className="bg-white border-4 border-[#333333] py-4 px-8 shadow-[4px_4px_0px_0px_#5a9fbf] hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1">
            <span className="text-[#0084d1] text-xs font-pixel">See All Gallery →</span>
          </button>
        </div>
      </div>
    </section>
  );
}

