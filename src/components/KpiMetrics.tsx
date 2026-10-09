import React from 'react';
import { UserProfile, Language } from '../types/profile';

interface KpiMetricsProps {
  profile: UserProfile;
  language: Language;
}

export const KpiMetrics: React.FC<KpiMetricsProps> = ({ profile, language }) => {
  const isBn = language === 'bn';

  const metrics = [
    {
      value: `${profile.yearsExperience}+`,
      valueBn: `${profile.yearsExperience}+`,
      unit: isBn ? 'বছর' : 'YRS',
      label: isBn ? 'বৈশ্বিক ডিজাইন আর্কিটেকচার' : 'Global Design Architecture',
      detail: isBn ? 'ইউরোপ ও এশিয়া ভিত্তিক ক্লায়েন্ট পোর্টফোলিও' : 'European & Pan-Asian portfolio'
    },
    {
      value: `${profile.completedProjects}+`,
      valueBn: `${profile.completedProjects}+`,
      unit: isBn ? 'টি' : 'WORKS',
      label: isBn ? 'সফল ডিজিটাল পণ্য ও ব্র্যান্ড' : 'Luxury & Enterprise Deployments',
      detail: isBn ? 'ফিনটেক, রিয়েল এস্টেট ও মেকানিক্যাল আর্ট' : 'Fintech, horlogerie & high-stakes UX'
    },
    {
      value: `${profile.clientSatisfaction}%`,
      valueBn: `${profile.clientSatisfaction}%`,
      unit: isBn ? 'স্কোর' : 'INDEX',
      label: isBn ? 'এক্সিকিউটিভ ক্লায়েন্ট রেটিং' : 'Client Satisfaction Index',
      detail: isBn ? 'শীর্ষ সি-লেভেল ও পার্টনার অনুমোদন' : 'Peer-reviewed C-level endorsements'
    },
    {
      value: `${profile.awardsCount}`,
      valueBn: `${profile.awardsCount}`,
      unit: isBn ? 'পুরস্কার' : 'AWARDS',
      label: isBn ? 'আন্তর্জাতিক ডিজাইন ট্রফি' : 'International Design Laurels',
      detail: isBn ? 'রেড ডট, এ\' ডিজাইন ও ওয়েবি ফেলোশিপ' : 'Red Dot, A\' Design & Webby honors'
    }
  ];

  return (
    <section className="w-full bg-[#0E0F15] border-b border-[#D4AF37]/20 py-8 relative">
      {/* Subtle hairline gradient top and bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-sm bg-[#13141C]/80 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group shadow-md"
            >
              {/* Corner Golden Accent Notch */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#F7E79B] transition-colors" />

              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight gold-gradient-text tabular-nums">
                  {isBn ? item.valueBn : item.value}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E8D6E]">
                  {item.unit}
                </span>
              </div>

              <h4 className="mt-2 text-xs sm:text-sm font-semibold text-[#E5D7BF] tracking-wide">
                {item.label}
              </h4>

              <p className="mt-1 text-[11px] text-[#8C7E68] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
