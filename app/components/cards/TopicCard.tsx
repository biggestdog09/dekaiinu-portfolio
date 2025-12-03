import React from 'react';

interface TopicCardProps {
  date: string;
  title: string;
  description: string;
  gradient: string;
}

export default function TopicCard({ date, title, description, gradient }: TopicCardProps) {
  return (
    <div className="relative group h-full">
      <div className="bg-[rgba(255,255,255,0.9)] border-4 border-[#333333] h-full shadow-[4px_4px_0px_0px_#5a9fbf] transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] flex flex-col">
        <div className="h-48 bg-gray-200 relative overflow-hidden shrink-0">
           {/* Image placeholder */}
           <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#00bcff]" />
            <span className="text-[#0084d1] text-xs font-pixel">{date}</span>
          </div>
          <h3 className="text-[#0069a8] text-lg font-pixel mb-4 min-h-[56px]">{title}</h3>
          <p className="text-[#4a5565] text-xs font-medium">{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 border-4 border-[#fdc700] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
    </div>
  );
}

