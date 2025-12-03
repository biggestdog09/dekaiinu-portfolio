import React from 'react';

interface WorkCardProps {
  title: string;
  description: string;
  gradient: string;
}

export default function WorkCard({ title, description, gradient }: WorkCardProps) {
  return (
    <div className="bg-white border-4 border-[#333333] shadow-[4px_4px_0px_0px_#5a9fbf] group hover:-translate-y-1 transition-transform h-full flex flex-col">
      <div className="h-48 bg-gray-200 relative overflow-hidden shrink-0">
         <div className={`w-full h-full bg-gradient-to-tr ${gradient}`} />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[#0069a8] text-lg font-pixel mb-4 min-h-[40px]">{title}</h3>
        <p className="text-[#4a5565] text-xs font-medium">{description}</p>
      </div>
    </div>
  );
}

