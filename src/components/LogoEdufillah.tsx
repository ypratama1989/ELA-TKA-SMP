import React from 'react';

interface LogoEdufillahProps {
  className?: string;
  variant?: 'full' | 'icon' | 'badge' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightMode?: boolean;
}

export const LogoEdufillah: React.FC<LogoEdufillahProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  if (variant === 'icon') {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-14 h-14',
      xl: 'w-20 h-20',
    };
    return (
      <div className={`relative inline-flex items-center justify-center p-1 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden ${sizeClasses[size]} ${className}`}>
        <img 
          src="/logo_edufillah.svg" 
          alt="EduFillah Logo" 
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm ${className}`}>
        <div className="w-8 h-8 shrink-0 bg-white p-0.5 rounded-lg flex items-center justify-center">
          <img 
            src="/logo_edufillah.svg" 
            alt="EduFillah Logo" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white">
          Edufillah Learning App
        </span>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 bg-white p-1 rounded-xl shadow-xs border border-slate-200/60 dark:border-slate-800 flex items-center justify-center">
          <img 
            src="/logo_edufillah.svg" 
            alt="EduFillah Logo" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-black leading-tight text-slate-900 dark:text-white">
            Edufillah Learning App
          </span>
          <span className="text-[9px] sm:text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-tight leading-none mt-0.5">
            Unlock the Secrets of Curious Minds
          </span>
        </div>
      </div>
    );
  }

  // Default 'full' variant
  return (
    <div className={`flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-3xl bg-white shadow-xl border border-slate-100 ${className}`}>
      <div className="w-full max-w-[200px] sm:max-w-[240px] flex items-center justify-center p-2 hover:scale-105 transition-transform duration-300">
        <img 
          src="/logo_edufillah.svg" 
          alt="EduFillah Logo" 
          className="w-full h-auto object-contain max-h-36 sm:max-h-44"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

