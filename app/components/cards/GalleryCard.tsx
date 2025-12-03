import React from 'react';

interface GalleryCardProps {
  gradient: string;
}

export default function GalleryCard({ gradient }: GalleryCardProps) {
  return (
    <div className="aspect-square bg-white border-4 border-[#333333] relative group overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-gray-200" /> 
      {/* Image Placeholder */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      
      <div className="absolute inset-0 border-4 border-[#fdc700] opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

