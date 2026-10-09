import React from 'react';
import { GoldCrest } from './GoldIcons';
import { Language } from '../types/profile';

interface FooterProps {
  language: Language;
  onNavigate: (section: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate, onOpenContact }) => {
  const isBn = language === 'bn';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#08080C] border-t border-[#D4AF37]/20 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#D4AF37]/15">
          {/* Brand lockup */}
          <div className="flex items-center gap-3">
            <GoldCrest size={32} />
            <div>
              <span className="font-display font-bold text-base tracking-widest gold-gradient-text uppercase block">
                AURA GOLD ATELIER
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A7B64]">
                {isBn ? 'প্রিন্সিপাল প্রোডাক্ট আর্কিটেক্ট ও ক্রিয়েটিভ ডিরেক্টরেট' : 'Principal Product Architecture & Creative Directorate'}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex items-center flex-wrap gap-6 text-[#A8987E]">
            <button onClick={() => onNavigate('overview')} className="hover:text-[#FFF4D0] transition-colors cursor-pointer">
              {isBn ? 'সারসংক্ষেপ' : 'Overview'}
            </button>
            <button onClick={() => onNavigate('portfolio')} className="hover:text-[#FFF4D0] transition-colors cursor-pointer">
              {isBn ? 'পোর্টফোলিও' : 'Portfolio'}
            </button>
            <button onClick={() => onNavigate('milestones')} className="hover:text-[#FFF4D0] transition-colors cursor-pointer">
              {isBn ? 'অভিজ্ঞতা' : 'Experience'}
            </button>
            <button onClick={() => onNavigate('accolades')} className="hover:text-[#FFF4D0] transition-colors cursor-pointer">
              {isBn ? 'স্বীকৃতি' : 'Accolades'}
            </button>
            <button onClick={onOpenContact} className="hover:text-[#FFF4D0] transition-colors cursor-pointer text-[#D4AF37]">
              {isBn ? 'যোগাযোগ' : 'Inquire'}
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 border border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37] rounded-sm transition-all cursor-pointer font-mono text-[11px]"
          >
            <span>↑ {isBn ? 'শীর্ষে চলুন' : 'Back to Top'}</span>
          </button>
        </div>

        {/* Quiet Copyright Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#736551] font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} Md. Mukul Ahmed. All sovereign architectural rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Zurich & Dhaka</span>
            <span>·</span>
            <span>Swiss Standard NDA</span>
            <span>·</span>
            <span className="text-[#D4AF37]">WCAG AAA Calibrated</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
