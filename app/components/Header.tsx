import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 w-full h-16 bg-[#e6f3ff]">
      {/* Logo */}
      <Link href="/" className="h-16 w-[104px] shrink-0 block">
        <div className="h-16 w-full relative">
          <Image
            src="/assets/images/logo_dekaiinu.png"
            alt="Dekaiinu Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </Link>

      {/* Navigation */}
      <nav className="h-[22px] shrink-0">
        <div className="flex gap-8 h-[22px] items-center">
          {/* Top Link - Active */}
          <Link href="/" className="h-[22px] shrink-0 relative group">
            <div className="flex gap-2 h-[22px] items-center" style={{ fontFamily: 'var(--font-mihi-pixelmoji)' }}>
              <span className="text-[#0084d1] text-xs leading-4">
                ▶
              </span>
              <span className="text-[#0084d1] text-xs leading-4">
                Top
              </span>
            </div>
            <div className="absolute bg-[#0084d1] h-0.5 left-0 bottom-0 w-full" />
          </Link>

          {/* Gallery Link */}
          <Link href="/gallery" className="h-[22px] shrink-0" style={{ fontFamily: 'var(--font-mihi-pixelmoji)' }}>
            <span className="text-[#364153] text-xs leading-4">
              Gallery
            </span>
          </Link>

          {/* Works Link */}
          <Link href="/works" className="h-[22px] shrink-0" style={{ fontFamily: 'var(--font-mihi-pixelmoji)' }}>
            <span className="text-[#364153] text-xs leading-4">
              Works
            </span>
          </Link>

          {/* About Me Link */}
          <Link href="/about" className="h-[22px] shrink-0" style={{ fontFamily: 'var(--font-mihi-pixelmoji)' }}>
            <span className="text-[#364153] text-xs leading-4">
              About Me
            </span>
          </Link>

          {/* Contact Link */}
          <Link href="/contact" className="h-[22px] shrink-0" style={{ fontFamily: 'var(--font-mihi-pixelmoji)' }}>
            <span className="text-[#364153] text-xs leading-4">
              Contact
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

