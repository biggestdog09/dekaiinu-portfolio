import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[rgba(255,255,255,0.8)] border-t-4 border-[#ffb86a] pt-12 pb-8 mt-20 relative z-10 backdrop-blur-sm overflow-hidden">
      {/* Cloud Images (Decorative) */}
      <div className="absolute left-[5%] bottom-[10%] w-[80px] h-[80px] opacity-40 pointer-events-none select-none">
        <Image 
          src="/assets/images/cloud_1.png" 
          alt="" 
          fill 
          className="object-contain" 
        />
      </div>
      <div className="absolute right-[5%] top-[10%] w-[96px] h-[96px] opacity-40 pointer-events-none select-none">
        <Image 
          src="/assets/images/cloud_2.png" 
          alt="" 
          fill 
          className="object-contain" 
        />
      </div>

      <div className="max-w-[1152px] mx-auto px-4 relative">
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
            {/* Orange Bar */}
            <div className="w-[64px] h-1 bg-[#ff8904] mb-8" />
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {/* X (Twitter) */}
              <Link 
                href="https://x.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-[#ffedd4] border-[3px] border-[#ffb86a] flex items-center justify-center hover:bg-[#ffe0b2] transition-colors group"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#ffb86a] group-hover:fill-[#ff8904] transition-colors">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              
              {/* Note */}
              <Link 
                href="https://note.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-[#ffedd4] border-[3px] border-[#ffb86a] flex items-center justify-center hover:bg-[#ffe0b2] transition-colors group"
                aria-label="Note"
              >
                 <svg viewBox="0 0 40 20" className="w-8 h-4 fill-[#ffb86a] group-hover:fill-[#ff8904] transition-colors">
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="16">note</text>
                 </svg>
              </Link>

              {/* GitHub */}
              <Link 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-[#ffedd4] border-[3px] border-[#ffb86a] flex items-center justify-center hover:bg-[#ffe0b2] transition-colors group"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#ffb86a] group-hover:fill-[#ff8904] transition-colors">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Sitemap */}
          <div className="flex flex-col md:items-end gap-6">
            <h4 className="text-[#ca3500] font-pixel text-base">Site Map</h4>
            <nav className="flex flex-col gap-4 md:items-end">
              <Link href="/" className="text-[#4a5565] font-pixel text-xs hover:text-[#0084d1] transition-colors">Top</Link>
              <Link href="/gallery" className="text-[#4a5565] font-pixel text-xs hover:text-[#0084d1] transition-colors">Gallery</Link>
              <Link href="/works" className="text-[#4a5565] font-pixel text-xs hover:text-[#0084d1] transition-colors">Works</Link>
              <Link href="/about" className="text-[#4a5565] font-pixel text-xs hover:text-[#0084d1] transition-colors">About Me</Link>
              <Link href="/contact" className="text-[#4a5565] font-pixel text-xs hover:text-[#0084d1] transition-colors flex items-center gap-2">
                 {/* Contact Icon */}
                 <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                   <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                 </svg>
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Separator Gradient */}
        <div className="w-full h-[4px] bg-gradient-to-r from-transparent via-[#ffb86a] to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex justify-center gap-2">
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
