import React from 'react';
import { UserProfile, Language } from '../types/profile';
import { GoldRadarSkillChart, GoldCircularMetric, GoldRibbonDivider } from './GoldIcons';

interface OverviewTabProps {
  profile: UserProfile;
  language: Language;
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({
  profile,
  language,
  onExploreProjects,
  onOpenContact,
}) => {
  const isBn = language === 'bn';

  const pillars = [
    {
      number: '01',
      title: isBn ? 'আপসহীন নান্দনিকতা' : 'Haute Visual Integrity',
      description: isBn
        ? 'প্রতিটি ইন্টারফেসে স্বর্ণালী আভিজাত্য, ভারসাম্যপূর্ণ স্পেসিং এবং নিখুঁত টাইপোগ্রাফিক স্পষ্টতা নিশ্চিত করা হয়।'
        : 'Every viewport is treated as a bespoke monograph, combining dark obsidian gravity with hand-calibrated gold ratios.'
    },
    {
      number: '02',
      title: isBn ? 'জিরো-লেটেন্সি পারফরম্যান্স' : 'Sub-50ms Architectural Precision',
      description: isBn
        ? 'অপ্রয়োজনীয় কোড বর্জন করে হাই-পারফরম্যান্স রিঅ্যাক্ট এবং অপ্টিমাইজড এসভিজি দিয়ে তৈরি বিদ্যুৎগতির অভিজ্ঞতা।'
        : 'Lean dependency trees, zero cumulative layout shift, and GPU-accelerated motion dynamics.'
    },
    {
      number: '03',
      title: isBn ? 'এন্টারপ্রাইজ সিকিউরিটি ও স্কেল' : 'High-Stakes Resilience',
      description: isBn
        ? 'সুইস প্রাইভেট ব্যাংকিং ও আন্তর্জাতিক ফিনটেক স্ট্যান্ডার্ড অনুযায়ী সর্বোচ্চ সাইবার নিরাপত্তা ও নির্ভরযোগ্যতা।'
        : 'Engineered for institutional fintech, biometric workflows, and confidential asset ledger transactions.'
    },
    {
      number: '04',
      title: isBn ? 'গাণিতিক ডিজাইন সিস্টেম' : 'Algorithmic Token Discipline',
      description: isBn
        ? 'মাল্টি-প্ল্যাটফর্ম স্কেলিংয়ের জন্য সুশৃঙ্খল ডিজাইন টোকেন ও অ্যাটমিক কম্পোনেন্ট আর্কিটেকচার।'
        : 'Strict token hierarchies with WCAG AAA dark contrast calibration and systematic multi-device harmony.'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Executive Bio & Philosophy Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Biography (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            <span>//</span>
            <span>{isBn ? 'এক্সিকিউটিভ প্রোক্লেমেশন' : 'EXECUTIVE PROCLAMATION'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#FFF4D0] leading-tight">
            {isBn ? (
              <>অভিজাত ডিজিটাল পণ্যে <span className="gold-gradient-text">প্রকৌশল ও আভিজাত্যের</span> মেলবন্ধন</>
            ) : (
              <>Where High-Stakes Engineering Meets <span className="gold-gradient-text">Bespoke Luxury Craftsmanship</span></>
            )}
          </h2>

          <div className="prose prose-invert text-sm sm:text-base text-[#C7B79E] leading-relaxed space-y-4 font-normal">
            <p>
              {isBn ? profile.bioBn : profile.bio}
            </p>
            <p>
              {isBn
                ? 'মুকুল আহমেদের আর্কিটেকচারাল দর্শনে প্রতিটি ইন্টারঅ্যাকশন শুধু একটি ফাংশন নয়, বরং ব্র্যান্ডের আভিজাত্যের প্রত্যক্ষ স্পর্শ। আন্তর্জাতিক ফিনটেক ও লাক্সারি ম্যানুফ্যাকচারিংয়ের জন্য তাঁর ডিজাইন করা সফটওয়্যার কোটি কোটি ডলারের পোর্টফোলিও পরিচালনা করে।'
                : 'Over the last decade, Mukul has operated at the nexus of fine design ateliers and cutting-edge software engineering. His bespoke architectures power sovereign family offices, Swiss horlogerie flagships, and mission-critical financial terminals globally.'
              }
            </p>
          </div>

          {/* Philosophy Monograph Card */}
          <div className="p-6 rounded-sm bg-[#12131A] border-l-2 border-[#D4AF37] border-y border-r border-[#D4AF37]/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-2 right-4 text-5xl font-display text-[#D4AF37]/10 pointer-events-none">
              “
            </div>
            <p className="font-display italic text-[#EADBBA] text-sm sm:text-base leading-relaxed relative z-10">
              {isBn ? profile.philosophyBn : profile.philosophy}
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9E8D6E]">
              <span>— {isBn ? profile.nameBn : profile.name}</span>
              <span className="text-[#D4AF37]">·</span>
              <span>{isBn ? 'আর্কিটেকচারাল ডিক্লারেশন' : 'Architectural Thesis'}</span>
            </div>
          </div>

          {/* CTA actions */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={onExploreProjects}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A0B0E] bg-gradient-to-r from-[#F5E08E] to-[#D4AF37] hover:from-[#FFF0A8] hover:to-[#E5BD45] rounded-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] cursor-pointer"
            >
              {isBn ? 'সিগনেচার প্রজেক্টসমূহ দেখুন' : 'Explore Signature Works'}
            </button>
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-[#FFF4D0] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 rounded-sm transition-all cursor-pointer"
            >
              {isBn ? 'পরামর্শ সেশন বুক করুন' : 'Schedule Consultation'}
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Golden SVG Skill Radar & Circular Gauges (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-sm bg-[#12131A] border border-[#D4AF37]/25 shadow-2xl relative">
          <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/20">
            <div>
              <h3 className="font-display font-semibold text-sm sm:text-base text-[#F5E8C7]">
                {isBn ? 'দক্ষতার আর্কিটেকচারাল ম্যাট্রিক্স' : 'Architectural Competencies'}
              </h3>
              <p className="text-[11px] font-mono text-[#99876C]">
                {isBn ? 'এসভিজি ইন্টারঅ্যাক্টিভ রেডার চার্ট' : 'Interactive SVG Radar Assessment'}
              </p>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 border border-[#D4AF37]/40 text-[#D4AF37] rounded-sm bg-[#0A0B0E]">
              98.2% INDEX
            </span>
          </div>

          {/* The Custom Golden Radar SVG */}
          <GoldRadarSkillChart skills={profile.skills} isBengali={isBn} />

          {/* Micro Circular Meters below Radar */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#D4AF37]/15">
            <GoldCircularMetric
              value={99}
              label={isBn ? 'ইউআই স্পষ্টতা' : 'UI Precision'}
              size={76}
            />
            <GoldCircularMetric
              value={96}
              label={isBn ? 'সিস্টেম গতি' : 'Sub-50ms Engine'}
              size={76}
            />
            <GoldCircularMetric
              value={98}
              label={isBn ? 'ক্লায়েন্ট আস্থা' : 'Retention'}
              size={76}
            />
          </div>
        </div>

      </div>

      <GoldRibbonDivider title={isBn ? 'মূল আর্কিটেকচারাল স্তম্ভ' : 'ARCHITECTURAL PILLARS'} />

      {/* 4 Pillars of Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-6 rounded-sm bg-[#111218] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 relative group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-[#D4AF37] font-bold tracking-widest">
                {pillar.number}
              </span>
              <div className="w-2 h-2 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#F7E79B] transition-colors" />
            </div>

            <h4 className="font-display font-semibold text-base text-[#EFE4CF] mb-2 group-hover:text-[#FFF4D0] transition-colors">
              {pillar.title}
            </h4>

            <p className="text-xs text-[#9E8E77] leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Featured Competency Breakdown Cards */}
      <div className="p-8 rounded-sm bg-[#0E0F15] border border-[#D4AF37]/25 shadow-xl">
        <h3 className="font-display text-lg sm:text-xl font-bold text-[#F5E8C7] mb-6">
          {isBn ? 'প্রযুক্তি ও ডিজাইন স্ট্যাক' : 'Core Technology & Design Foundations'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 rounded-sm bg-[#14151E] border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-semibold text-[#E2D2B0] mb-2">
                <span>{isBn ? skill.nameBn : skill.name}</span>
                <span className="font-mono text-[#D4AF37] tabular-nums">{skill.level}%</span>
              </div>

              {/* Progress bar with gold gradient */}
              <div className="w-full h-1.5 bg-[#20222D] rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-gradient-to-r from-[#AA8022] via-[#D4AF37] to-[#FFF2B2] rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-[11px] text-[#8C7D68]">
                {isBn ? skill.focusBn : skill.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
