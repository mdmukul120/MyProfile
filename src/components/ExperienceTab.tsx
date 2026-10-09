import React from 'react';
import { Experience, Language } from '../types/profile';

interface ExperienceTabProps {
  experiences: Experience[];
  language: Language;
}

export const ExperienceTab: React.FC<ExperienceTabProps> = ({ experiences, language }) => {
  const isBn = language === 'bn';

  const education = [
    {
      degree: isBn ? 'মাস্টার অব আর্কিটেকচার অ্যান্ড এইচসিআই' : 'Master of Science in Human-Computer Interaction & Spatial Systems',
      institution: 'ETH Zurich & Global Design Institute',
      year: '2016 — 2018',
      focus: isBn ? 'ডিজিটাল অর্গোনমিক্স এবং ডার্ক ইন্টারফেস ভিজ্যুয়ালাইজেশন' : 'Thesis on Dark Visual Ergonomics and Latency-Free Tactile Computing',
    },
    {
      degree: isBn ? 'বিএসসি ইন কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং' : 'Bachelor of Science in Computer Science & Engineering',
      institution: 'Premier Institute of Technology, Dhaka',
      year: '2011 — 2015',
      focus: isBn ? 'ডিস্ট্রিবিউটেড সিস্টেম ও গ্রাফিক্যাল অ্যালগরিদম' : 'First Class Distinction · Graphical Algorithms & Distributed Architectures',
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="pb-6 border-b border-[#D4AF37]/20">
        <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
          {isBn ? '// ক্যারিয়ার মাইলফলক' : '// EXECUTIVE PROVENANCE'}
        </span>
        <h2 className="mt-1 text-2xl sm:text-3xl font-display font-bold text-[#FFF4D0]">
          {isBn ? 'পেশাদার অভিজ্ঞতা ও নেতৃত্ব' : 'Professional Provenance & Leadership'}
        </h2>
        <p className="mt-2 text-sm text-[#B0A086] max-w-xl">
          {isBn
            ? 'এক দশকেরও বেশি সময় ধরে আন্তর্জাতিক পরিমণ্ডলে শীর্ষ প্রযুক্তি ও ডিজাইন আর্কিটেকচারের সফল নেতৃত্ব।'
            : 'Over a decade of orchestrating multidisciplinary design engineering units across Zurich, Basel, and pan-Asian headquarters.'}
        </p>
      </div>

      {/* Vertical Golden Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#D4AF37]/30 space-y-12 my-6">
        {experiences.map((exp, idx) => (
          <div key={exp.id} className="relative group">
            {/* Golden Node Connector */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0A0B0E] border-2 border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)] group-hover:scale-125 transition-transform duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFF4D0] m-auto mt-0.5" />
            </div>

            {/* Timeline Item Container */}
            <div className="p-6 rounded-lg bg-[#12131A] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl">
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#D4AF37]/15">
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#FFF4D0]">
                    {isBn ? exp.roleBn : exp.role}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                    <span>{exp.company}</span>
                    <span>·</span>
                    <span className="text-[#99876C]">{exp.location}</span>
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 bg-[#1A1B24] border border-[#D4AF37]/25 rounded-sm text-[#F7E79B] self-start sm:self-auto shrink-0 tabular-nums">
                  {exp.period}
                </span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[#C4B496] leading-relaxed">
                {isBn ? exp.descriptionBn : exp.description}
              </p>

              {/* Highlights & Quantitative Impact */}
              <div className="mt-4 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9E8D6E]">
                  {isBn ? 'মূল কৃতিত্ব ও প্রভাব:' : 'Key Milestones & Impact:'}
                </span>
                <ul className="space-y-1.5">
                  {(isBn ? exp.highlightsBn : exp.highlights).map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs text-[#D8C9AA]">
                      <span className="text-[#D4AF37] font-bold text-xs mt-0.5">✦</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Formal Academic & Professional Education */}
      <div className="p-8 rounded-sm bg-[#0E0F15] border border-[#D4AF37]/25 shadow-xl">
        <div className="pb-4 border-b border-[#D4AF37]/20 mb-6">
          <h3 className="text-lg sm:text-xl font-display font-bold text-[#FFF4D0]">
            {isBn ? 'শিক্ষা ও প্রাতিষ্ঠানিক গবেষণা' : 'Academic Credentials & Systems Research'}
          </h3>
          <p className="text-xs text-[#8C7D68]">
            {isBn ? 'স্নাতকোত্তর ও স্নাতক প্রাতিষ্ঠানিক ডিগ্রি' : 'Formal foundations in HCI, spatial design, and computational systems'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 rounded-sm bg-[#13141D] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#D4AF37] mb-2">
                <span>{edu.institution}</span>
                <span className="tabular-nums text-[#A69579]">{edu.year}</span>
              </div>
              <h4 className="font-display font-bold text-base text-[#F5E5C0] mb-2">
                {edu.degree}
              </h4>
              <p className="text-xs text-[#998870] leading-relaxed">
                {edu.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
