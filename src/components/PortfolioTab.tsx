import React, { useState } from 'react';
import { Project, Language } from '../types/profile';

interface PortfolioTabProps {
  projects: Project[];
  language: Language;
  onSelectProject: (project: Project) => void;
}

export const PortfolioTab: React.FC<PortfolioTabProps> = ({
  projects,
  language,
  onSelectProject,
}) => {
  const isBn = language === 'bn';
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: isBn ? 'সকল প্রজেক্ট' : 'All Projects' },
    { id: 'fintech', label: isBn ? 'ফিনটেক ও সম্পদ' : 'Fintech & Wealth' },
    { id: 'horlogerie', label: isBn ? 'লাক্সারি ঘড়ি' : 'Haute Horlogerie' },
    { id: 'architecture', label: isBn ? 'স্থাপত্য ও মনোগ্রাফ' : 'Luxury Architecture' },
    { id: 'systems', label: isBn ? 'ডিজাইন সিস্টেম' : 'Brand Systems' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="space-y-8">
      {/* Header and Filter Control Strip */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D4AF37]/20">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            {isBn ? '// নির্বাচিত মাস্টারপিস' : '// CURATED MONOGRAPHS'}
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-display font-bold text-[#FFF4D0]">
            {isBn ? 'সিগনেচার পোর্টফোলিও শোকেস' : 'Signature Architectural Works'}
          </h2>
          <p className="mt-2 text-sm text-[#B0A086] max-w-xl">
            {isBn
              ? 'আন্তর্জাতিক শীর্ষ প্রতিষ্ঠান এবং প্রাইভেট ক্লায়েন্টদের জন্য নির্মিত প্রিমিয়াম ডিজিটাল পণ্যের নির্বাচিত সংগ্রহ।'
              : 'A curated selection of high-profile digital systems, luxury editorial portals, and ultra-resilient financial terminals.'}
          </p>
        </div>

        {/* Interactive Filter Tabs (Button elements as per guidelines Section 1.A) */}
        <div className="flex items-center flex-wrap gap-1 p-1 bg-[#12131A] border border-[#D4AF37]/25 rounded-md self-start md:self-auto">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA8022] text-[#0A0B0E] font-semibold shadow-sm'
                    : 'text-[#A6957A] hover:text-[#FFF2B2]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {filteredProjects.map((project, idx) => {
          // Asymmetric bento span
          const isSpanLarge = idx === 0 || idx === 3;
          const colSpanClass = isSpanLarge ? 'lg:col-span-7' : 'lg:col-span-5';

          return (
            <article
              key={project.id}
              className={`${colSpanClass} group relative flex flex-col rounded-xl overflow-hidden bg-[#111219] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-xl hover:shadow-[0_12px_40px_rgba(212,175,55,0.12)]`}
            >
              {/* Image Frame with Measured Scrim */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0A0B0E]">
                <img
                  src={project.image}
                  alt={isBn ? project.titleBn : project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 contrast-105"
                />
                
                {/* Contrast Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111219] via-[#111219]/40 to-transparent" />

                {/* Category & Year Stamp */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-[#090A0E]/85 backdrop-blur-md border border-[#D4AF37]/35 rounded-sm">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5E5B5]">
                    {isBn ? project.categoryLabelBn : project.categoryLabel}
                  </span>
                  <span className="text-[#6C5B3E]">·</span>
                  <span className="text-[10px] font-mono text-[#D4AF37]">
                    {project.year}
                  </span>
                </div>

                {/* Inspect Action Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A0B0E] bg-gradient-to-r from-[#F5E08E] to-[#D4AF37] rounded-sm shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer"
                  >
                    {isBn ? 'কেস স্টাডি বিস্তারিত' : 'Inspect Case Study'}
                  </button>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Clean unboxed client info */}
                  <div className="flex items-center gap-2 text-xs text-[#9E8D6E] font-mono">
                    <span>{project.client}</span>
                    <span>·</span>
                    <span className="text-[#D4AF37]">{project.tags[0]}</span>
                  </div>

                  <h3 className="mt-2 text-xl font-display font-bold text-[#FFF4D0] group-hover:text-[#FBE8A6] transition-colors leading-snug">
                    {isBn ? project.titleBn : project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#A8987E] leading-relaxed line-clamp-3">
                    {isBn ? project.summaryBn : project.summary}
                  </p>
                </div>

                {/* Tags and Key Result */}
                <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono text-[#D8C6A5] bg-[#1A1B24] px-2 py-0.5 border border-[#D4AF37]/15 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-[#D4AF37] hover:text-[#FFF4D0] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>{isBn ? 'বিস্তারিত' : 'Examine'}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
