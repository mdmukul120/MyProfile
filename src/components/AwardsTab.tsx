import React, { useState } from 'react';
import { Award, Language } from '../types/profile';
import { GoldCrest } from './GoldIcons';

interface AwardsTabProps {
  awards: Award[];
  language: Language;
}

export const AwardsTab: React.FC<AwardsTabProps> = ({ awards, language }) => {
  const isBn = language === 'bn';
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyHash = (credId: string) => {
    navigator.clipboard.writeText(credId);
    setCopiedId(credId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="pb-6 border-b border-[#D4AF37]/20">
        <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
          {isBn ? '// আন্তর্জাতিক গৌরব' : '// GLOBAL LAURELS'}
        </span>
        <h2 className="mt-1 text-2xl sm:text-3xl font-display font-bold text-[#FFF4D0]">
          {isBn ? 'স্বীকৃতি, সম্মাননা ও সনদ' : 'Distinctions, Accolades & Laurels'}
        </h2>
        <p className="mt-2 text-sm text-[#B0A086] max-w-xl">
          {isBn
            ? 'আন্তর্জাতিক ডিজাইন ও প্রযুক্তি একাডেমী কর্তৃক স্বীকৃত মর্যাদাপূর্ণ ট্রফি এবং ফেলোশিপ সম্মাননা।'
            : 'Internationally adjudicated honors in interface architecture, ultra-luxury digital products, and tactile human factors.'}
        </p>
      </div>

      {/* Accolades Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {awards.map((award) => (
          <article
            key={award.id}
            className="p-7 rounded-xl bg-[#111218] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all duration-300 relative group shadow-xl"
          >
            {/* Top Row: Year and Crest */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#191B24] border border-[#D4AF37]/30 shadow-inner">
                  <GoldCrest size={28} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                    {award.tier}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#FFF4D0] group-hover:text-[#FBE8A6] transition-colors">
                    {isBn ? award.titleBn : award.title}
                  </h3>
                </div>
              </div>

              <span className="text-sm font-mono font-bold text-[#E6C875] px-3 py-1 bg-[#191B24] border border-[#D4AF37]/30 rounded-sm tabular-nums">
                {award.year}
              </span>
            </div>

            {/* Issuer */}
            <div className="text-xs font-mono text-[#A8987E] mb-3">
              {isBn ? award.issuerBn : award.issuer}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#C7B79E] leading-relaxed mb-6">
              {isBn ? award.descriptionBn : award.description}
            </p>

            {/* Verifiable Credential ID with 1-click copy */}
            <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-2 font-mono text-[11px] text-[#8C7D68]">
                <span>VERIFY ID:</span>
                <span className="text-[#D4AF37] font-semibold">{award.credentialId}</span>
              </div>

              <button
                onClick={() => handleCopyHash(award.credentialId)}
                className="px-2.5 py-1 text-[11px] font-mono text-[#D4AF37] hover:text-[#FFF4D0] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 rounded transition-colors cursor-pointer"
              >
                {copiedId === award.credentialId
                  ? (isBn ? '✓ কপি সম্পন্ন' : '✓ Copied')
                  : (isBn ? 'আইডি কপি' : 'Copy Hash')}
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Institutional Memberships & Councils */}
      <div className="p-8 rounded-sm bg-[#0E0F15] border border-[#D4AF37]/25 shadow-xl">
        <h3 className="font-display text-lg font-bold text-[#FFF4D0] mb-4">
          {isBn ? 'আন্তর্জাতিক কাউন্সিল সদস্যপদ ও বিচারকমণ্ডলী' : 'Institutional Memberships & Jury Appointments'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#C5B59A]">
          <div className="p-4 rounded bg-[#13141C] border border-[#D4AF37]/15">
            <h4 className="font-semibold text-[#F5E5C0] mb-1">
              {isBn ? 'ইন্টারন্যাশনাল ডিজাইন জুরি ২০২৪' : 'International Design Jury 2024'}
            </h4>
            <p className="text-[#8A7A64] text-[11px]">
              {isBn ? 'ডিজিটাল লাক্সারি ক্যাটাগরির প্রধান বিচারক' : 'Interface & Spatial Computing Category Judge'}
            </p>
          </div>
          <div className="p-4 rounded bg-[#13141C] border border-[#D4AF37]/15">
            <h4 className="font-semibold text-[#F5E5C0] mb-1">
              {isBn ? 'সুইস আর্কিটেকচারাল সিন্ডিকেট' : 'Swiss Design Atelier Syndicate'}
            </h4>
            <p className="text-[#8A7A64] text-[11px]">
              {isBn ? 'সম্মানিত ফেলো ও উপদেষ্টা পরিষদ সদস্য' : 'Honored Fellow & Digital Ergonomics Advisor'}
            </p>
          </div>
          <div className="p-4 rounded bg-[#13141C] border border-[#D4AF37]/15">
            <h4 className="font-semibold text-[#F5E5C0] mb-1">
              {isBn ? 'গ্লোবাল ফিনটেক স্ট্যান্ডার্ডস অ্যালায়েন্স' : 'Global Fintech Standards Alliance'}
            </h4>
            <p className="text-[#8A7A64] text-[11px]">
              {isBn ? 'হাই-সিকিউরিটি ইউএক্স কার্যনির্বাহী কমিটি' : 'High-Security UX Working Committee Contributor'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
