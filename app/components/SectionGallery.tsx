import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import PixelButton from "./ui/PixelButton";

const GALLERY_IMAGES = [
  {
    src: "/assets/images/gallery/sanpo.png",
    alt: "Walking",
    // PC positions (absolute within 1152px container)
    className: "md:left-[600px] md:top-[400px] md:rotate-6",
    // Mobile positions (absolute within viewport/container)
    mobileClassName: "left-[55%] top-[60%] rotate-6 w-[180px]",
    width: 335,
    height: 301,
  },
  {
    src: "/assets/images/gallery/busstop.png",
    alt: "Bus Stop",
    className: "md:left-[100px] md:top-[500px] md:-rotate-3",
    mobileClassName: "left-[5%] top-[70%] -rotate-3 w-[200px]",
    width: 300,
    height: 200,
  },
  {
    src: "/assets/images/gallery/ufo.png",
    alt: "UFO",
    className: "md:left-[600px] md:top-[-50px] md:rotate-12",
    mobileClassName: "left-[60%] top-[10%] rotate-12 w-[160px]",
    width: 337,
    height: 337,
  },
  {
    src: "/assets/images/gallery/moonday_2025.png",
    alt: "Moonday",
    className: "md:left-[150px] md:top-[50px] md:-rotate-6",
    mobileClassName: "left-[10%] top-[15%] -rotate-6 w-[170px]",
    width: 329,
    height: 329,
  },
];

export default function SectionGallery() {
  return (
    <section className="w-full max-w-[1152px] mx-auto py-20 relative z-10 min-h-[800px] flex flex-col items-center justify-center overflow-hidden md:overflow-visible">
      {/* Title Centered */}
      <div className="relative z-20 mb-12">
        <SectionTitle title="Gallery" />
      </div>

      {/* Stickers Container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* PC View Loop */}
        {GALLERY_IMAGES.map((img, index) => (
          <div
            key={`pc-${index}`}
            className={`hidden md:block absolute transition-transform hover:scale-105 hover:z-30 duration-300 ease-out drop-shadow-xl ${img.className}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="object-contain"
            />
          </div>
        ))}
        
        {/* Mobile View Loop */}
        {GALLERY_IMAGES.map((img, index) => (
           <div
             key={`mob-${index}`}
             className={`md:hidden absolute drop-shadow-lg transition-transform hover:scale-105 hover:z-30 ${img.mobileClassName}`}
           >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width * 0.6} // Scale down for mobile
                height={img.height * 0.6}
                className="object-contain"
              />
           </div>
        ))}
      </div>

      {/* Button Centered */}
      <div className="relative z-20 mt-8">
        <PixelButton>
          See All Gallery →
        </PixelButton>
      </div>
    </section>
  );
}
