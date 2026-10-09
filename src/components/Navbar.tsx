import React from 'react';
import { GoldCrest } from './GoldIcons';
import { Language } from '../types/profile';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
  onNavigate: (section: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  activeSection,
  onNavigate,
  onOpenContact,
}) => {
  const isBn = language === 'bn';

  const navLinks = [
    { id: 'overview', label: isBn ? 'সারসংক্ষেপ' : 'Overview' },
    { id: 'portfolio', label: isBn ? 'পোর্টফোলিও' : 'Portfolio' },
    { id: 'milestones', label: isBn ? 'অভিজ্ঞতা' : 'Experience' },
    { id: 'accolades', label: isBn ? 'স্বীকৃতি' : 'Accolades' },
    { id: 'endorsements', label: isBn ? 'মন্তব্য' : 'Testimonials' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#090A0E]/85 border-b border-[#D4AF37]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Wordmark & Crest */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => onNavigate('overview')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
            aria-label="Aura Gold Home"
          >
            <GoldCrest size={34} className="transition-transform group-hover:scale-105 duration-300" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-[0.12em] gold-gradient-text uppercase whitespace-nowrap">
                AURA GOLD
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A69371] font-mono whitespace-nowrap">
                {isBn ? 'এক্সিকিউটিভ প্রোফাইল' : 'EXECUTIVE ATELIER'}
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`transition-colors whitespace-nowrap py-1 relative tracking-wide cursor-pointer text-xs uppercase ${
                  isActive
                    ? 'text-[#F7E79B] font-semibold'
                    : 'text-[#B8A78A] hover:text-[#FFF4D0]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Language Switcher & Primary Action */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Dual Language Switcher */}
          <div className="flex items-center p-0.5 rounded-md border border-[#D4AF37]/30 bg-[#121319]">
            <button
              onClick={() => onLanguageChange('bn')}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                language === 'bn'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA8022] text-[#090A0E] font-semibold shadow-sm'
                  : 'text-[#B8A78A] hover:text-white'
              }`}
              title="বাংলা ভাষা নির্বাচন করুন"
            >
              বাং
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                language === 'en'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA8022] text-[#090A0E] font-semibold shadow-sm'
                  : 'text-[#B8A78A] hover:text-white'
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={onOpenContact}
            className="px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#090A0E] bg-gradient-to-r from-[#F5E08E] via-[#D4AF37] to-[#B38728] hover:from-[#FFF0A8] hover:to-[#C69230] rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_28px_rgba(212,175,55,0.45)] whitespace-nowrap active:scale-95 cursor-pointer"
          >
            {isBn ? 'যোগাযোগ করুন' : 'Inquire Now'}
          </button>
        </div>

      </div>
    </header>
  );
};
