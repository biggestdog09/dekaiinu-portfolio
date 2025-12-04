import React from 'react';

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'white' | 'blue';
}

export default function PixelButton({ children, variant = 'white', className = '', ...props }: PixelButtonProps) {
  const baseStyles = "border-4 border-[#333333] py-4 px-8 shadow-[4px_4px_0px_0px_#5a9fbf] hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1 font-pixel text-xs";
  
  const variants = {
    white: "bg-white text-[#0084d1]",
    blue: "bg-[#00a6f4] text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}


