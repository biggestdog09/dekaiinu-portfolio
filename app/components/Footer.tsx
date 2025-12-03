import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[rgba(255,255,255,0.8)] border-t-4 border-[#ffb86a] pt-12 pb-8 mt-20 relative z-10 backdrop-blur-sm">
      <div className="max-w-[1152px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Left Column: Logo & Socials */}
          <div className="flex flex-col items-start">
            <div className="relative w-[156px] h-[96px] mb-8">
              <Image 
                src="/assets/images/logo_dekaiinu.png" 
                alt="Dekai Inu" 
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="w-16 h-1 bg-[#ff8904] mb-8" />
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 bg-[#ffedd4] border-[3px] border-[#ffb86a] flex items-center justify-center hover:bg-[#ffe0b2] cursor-pointer transition-colors">
                  <div className="w-6 h-6 bg-[#ffb86a]" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sitemap */}
          <div className="flex flex-col md:items-end">
            <h4 className="text-[#ca3500] font-pixel text-base mb-6">Site Map</h4>
            <nav className="flex flex-col gap-4 md:items-end">
              <Link href="/" className="text-[#4a5565] font-pixel text-xs hover:text-[#0084d1]">Top</Link>
              <Link href="/gallery" className="text-[#4a5565] font-pixel text-xs hover:text-[#0084d1]">Gallery</Link>
              <Link href="/works" className="text-[#4a5565] font-pixel text-xs hover:text-[#0084d1]">Works</Link>
              <Link href="/about" className="text-[#4a5565] font-pixel text-xs hover:text-[#0084d1]">About Me</Link>
              <Link href="/contact" className="text-[#4a5565] font-pixel text-xs hover:text-[#0084d1] flex items-center gap-2">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ffb86a] pt-8">
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#ff6467]" />
            <div className="w-2 h-2 bg-[#ff6467]" />
            <div className="w-2 h-2 bg-[#ff6467]" />
          </div>
          <p className="text-center text-[#4a5565] text-xs font-pixel">
            © 2025 Dekai Inu Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

