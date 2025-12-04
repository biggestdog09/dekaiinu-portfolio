import SectionTitle from "./ui/SectionTitle";
import PixelButton from "./ui/PixelButton";
import GalleryCard from "./cards/GalleryCard";

const GALLERY_ITEMS = [
  { id: 1, gradient: "from-green-200 to-blue-200" },
  { id: 2, gradient: "from-yellow-200 to-red-200" },
  { id: 3, gradient: "from-purple-200 to-pink-200" },
  { id: 4, gradient: "from-green-200 to-blue-200" },
  { id: 5, gradient: "from-yellow-200 to-red-200" },
  { id: 6, gradient: "from-purple-200 to-pink-200" },
];

export default function SectionGallery() {
  return (
    <section className="w-full max-w-[1152px] mx-auto py-20 relative z-10">
      <div className="p-8 md:p-16">
        <SectionTitle title="Gallery" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard key={item.id} gradient={item.gradient} />
          ))}
        </div>

        <div className="flex justify-center">
          <PixelButton>
            See All Gallery →
          </PixelButton>
        </div>
      </div>
    </section>
  );
}
