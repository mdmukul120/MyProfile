import React from 'react';
import { Testimonial, Language } from '../types/profile';
import { GoldStarRating } from './GoldIcons';

interface TestimonialsTabProps {
  testimonials: Testimonial[];
  language: Language;
}

export const TestimonialsTab: React.FC<TestimonialsTabProps> = ({ testimonials, language }) => {
  const isBn = language === 'bn';

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="pb-6 border-b border-[#D4AF37]/20">
        <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
          {isBn ? '// ক্লায়েন্ট ও পার্টনার মতামত' : '// EXECUTIVE ENDORSEMENTS'}
        </span>
        <h2 className="mt-1 text-2xl sm:text-3xl font-display font-bold text-[#FFF4D0]">
          {isBn ? 'সি-লেভেল পার্টনার ও ক্লায়েন্ট প্রতিক্রিয়া' : 'Executive Peer & Client Endorsements'}
        </h2>
        <p className="mt-2 text-sm text-[#B0A086] max-w-xl">
          {isBn
            ? 'বিশ্বখ্যাত প্রাইভেট ব্যাংক, সুইস ঘড়ি নির্মাতা এবং আর্কিটেকচারাল ভেঞ্চার পার্টনারদের সরাসরি মূল্যায়ন।'
            : 'Unfiltered appraisals from institutional directors, brand heritage curators, and real-estate principals.'}
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((test) => (
          <article
            key={test.id}
            className="p-7 rounded-xl bg-[#111218] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
          >
            {/* Top: 5-Star Golden Rating & Quote mark */}
            <div className="flex items-center justify-between mb-5">
              <GoldStarRating rating={test.rating} size={15} />
              <span className="text-3xl font-display text-[#D4AF37]/20">“</span>
            </div>

            {/* Quote Body */}
            <blockquote className="text-xs sm:text-sm text-[#CFC0A8] leading-relaxed italic mb-6">
              "{isBn ? test.quoteBn : test.quote}"
            </blockquote>

            {/* Author info */}
            <div className="pt-4 border-t border-[#D4AF37]/15">
              <h4 className="font-display font-bold text-sm text-[#FFF4D0]">
                {test.author}
              </h4>
              <p className="text-xs text-[#E5C875] font-medium mt-0.5">
                {isBn ? test.roleBn : test.role}
              </p>
              <p className="text-[11px] font-mono text-[#8C7D68] mt-0.5">
                {test.company}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Trust & Confidentiality Statement */}
      <div className="p-6 rounded-sm bg-[#0E0F15] border border-[#D4AF37]/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-display font-semibold text-sm text-[#F7E79B]">
            {isBn ? 'গোপনীয়তা ও এনডিএ সুরক্ষা নীতি' : 'Confidentiality & Swiss NDA Standards'}
          </h4>
          <p className="text-xs text-[#8C7D68] mt-1">
            {isBn
              ? 'সকল প্রাতিষ্ঠানিক ক্লায়েন্টের ডেটা এবং আর্কিটেকচারাল ব্লুপ্রিন্ট কঠোর নন-ডিসক্লোজার চুক্তি দ্বারা সুরক্ষিত।'
              : 'All enterprise engagements operate under strict bilateral NDAs and end-to-end cryptographic discretion.'}
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 border border-[#D4AF37]/35 rounded-sm bg-[#14151D] text-xs font-mono text-[#D4AF37]">
          <span>🔒 ENCRYPTED ADVISORY</span>
        </div>
      </div>
    </div>
  );
};
