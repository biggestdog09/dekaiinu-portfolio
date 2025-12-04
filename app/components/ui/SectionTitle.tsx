import React from 'react';

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center mb-12">
      <h2 className="text-[#0084d1] text-2xl font-pixel mb-4 text-center">{title}</h2>
      <div className="w-24 h-1 bg-[#00bcff]" />
    </div>
  );
}


