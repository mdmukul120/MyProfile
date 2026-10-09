import React, { useState } from 'react';
import { UserProfile, Language } from '../types/profile';

interface ContactTabProps {
  profile: UserProfile;
  language: Language;
}

export const ContactTab: React.FC<ContactTabProps> = ({ profile, language }) => {
  const isBn = language === 'bn';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    domain: 'Fintech & Private Banking',
    budgetTier: '$25,000 — $50,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="pb-6 border-b border-[#D4AF37]/20">
        <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
          {isBn ? '// এক্সিকিউটিভ যোগাযোগ' : '// EXECUTIVE INQUIRY'}
        </span>
        <h2 className="mt-1 text-2xl sm:text-3xl font-display font-bold text-[#FFF4D0]">
          {isBn ? 'সরাসরি প্রজেক্ট আলোচনা ও কনসালটেন্সি' : 'Direct Engagement & Commissioning'}
        </h2>
        <p className="mt-2 text-sm text-[#B0A086] max-w-xl">
          {isBn
            ? 'আপনার পরবর্তী সিগনেচার প্রোডাক্ট বা ব্র্যান্ড আর্কিটেকচার নিয়ে আলোচনা করতে বার্তা পাঠান।'
            : 'Initiate a discrete discussion regarding private wealth interfaces, design systems, or bespoke brand monographs.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 p-7 rounded-xl bg-[#12131A] border border-[#D4AF37]/25 shadow-xl">
          {submitted ? (
            <div className="py-12 px-6 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center text-[#F5E5B5] text-2xl shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                ✓
              </div>
              <h3 className="font-display font-bold text-xl text-[#FFF4D0]">
                {isBn ? 'আপনার বার্তা সফলভাবে গৃহীত হয়েছে' : 'Inquiry Received with Distinction'}
              </h3>
              <p className="text-xs sm:text-sm text-[#B8A78D] max-w-md mx-auto leading-relaxed">
                {isBn
                  ? 'ধন্যবাদ! আপনার প্রস্তাবটি গুরুত্বের সাথে পর্যালোচনা করা হচ্ছে। আগামী ২৪ ঘণ্টার মধ্যে এক্সিকিউটিভ ডিরেক্টরেট থেকে যোগাযোগ করা হবে।'
                  : 'Thank you for reaching out. The atelier directorate will review your brief with strict confidentiality within 24 hours.'}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#0A0B0E] bg-gradient-to-r from-[#F5E08E] to-[#D4AF37] rounded-sm cursor-pointer"
              >
                {isBn ? 'নতুন বার্তা পাঠান' : 'Submit Another Inquiry'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#D8C6A5] mb-2">
                    {isBn ? 'আপনার নাম *' : 'Executive Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isBn ? 'যেমন: মো. রহিম উদ্দিন' : 'e.g. Lord Alexander Vance'}
                    className="w-full px-4 py-2.5 bg-[#090A0E] border border-[#D4AF37]/30 rounded-sm text-sm text-[#FFF4D0] placeholder-[#6E6350] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#D8C6A5] mb-2">
                    {isBn ? 'অফিসিয়াল ইমেইল *' : 'Corporate Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alexander@sovereign-wealth.ch"
                    className="w-full px-4 py-2.5 bg-[#090A0E] border border-[#D4AF37]/30 rounded-sm text-sm text-[#FFF4D0] placeholder-[#6E6350] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#D8C6A5] mb-2">
                    {isBn ? 'প্রতিষ্ঠান / ব্র্যান্ড *' : 'Organization / Enterprise *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder={isBn ? 'যেমন: প্রাইভেট ক্যাপিটাল লি.' : 'e.g. Helvetia Capital Lab'}
                    className="w-full px-4 py-2.5 bg-[#090A0E] border border-[#D4AF37]/30 rounded-sm text-sm text-[#FFF4D0] placeholder-[#6E6350] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#D8C6A5] mb-2">
                    {isBn ? 'প্রজেক্ট ডোমেন' : 'Engagement Domain'}
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#090A0E] border border-[#D4AF37]/30 rounded-sm text-sm text-[#FFF4D0] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  >
                    <option value="Fintech & Private Banking">{isBn ? 'ফিনটেক ও প্রাইভেট ব্যাংকিং' : 'Fintech & Private Banking'}</option>
                    <option value="Haute Horlogerie & Luxury Goods">{isBn ? 'লাক্সারি পণ্য ও ঘড়ি শিল্প' : 'Haute Horlogerie & Luxury Goods'}</option>
                    <option value="Luxury Architecture & Monograph">{isBn ? 'স্থাপত্য ও রিয়েল এস্টেট' : 'Luxury Architecture & Monograph'}</option>
                    <option value="Design System & Enterprise Token">{isBn ? 'ডিজাইন সিস্টেম ও সফটওয়্যার' : 'Design System & Enterprise Token'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#D8C6A5] mb-2">
                  {isBn ? 'বাজেট স্কেল' : 'Estimated Capital Scope'}
                </label>
                <select
                  value={formData.budgetTier}
                  onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#090A0E] border border-[#D4AF37]/30 rounded-sm text-sm text-[#FFF4D0] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                >
                  <option value="$15,000 — $25,000">$15,000 — $25,000 (Advisory / Strategic Sprint)</option>
                  <option value="$25,000 — $50,000">$25,000 — $50,000 (Comprehensive Architecture)</option>
                  <option value="$50,000 — $100,000+">$50,000 — $100,000+ (Full Luxury Ecosystem)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#D8C6A5] mb-2">
                  {isBn ? 'প্রজেক্টের বিবরণ ও লক্ষ্য *' : 'Project Thesis & Executive Brief *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={isBn ? 'আপনার প্রজেক্টের লক্ষ্য এবং আনুমানিক সময়সীমা লিখুন...' : 'Outline your core objectives, target clientele, and scheduled milestones...'}
                  className="w-full px-4 py-2.5 bg-[#090A0E] border border-[#D4AF37]/30 rounded-sm text-sm text-[#FFF4D0] placeholder-[#6E6350] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs font-bold uppercase tracking-widest text-[#0A0B0E] bg-gradient-to-r from-[#F5E08E] via-[#D4AF37] to-[#B38728] hover:from-[#FFF0A8] hover:to-[#C69230] rounded-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
              >
                {isBn ? 'প্রস্তাবনা প্রেরণ করুন' : 'Dispatch Confidential Brief'}
              </button>
            </form>
          )}
        </div>

        {/* Global Locations & Direct Reach (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Atelier Hubs */}
          <div className="p-6 rounded-xl bg-[#12131A] border border-[#D4AF37]/25 shadow-xl space-y-5">
            <h3 className="font-display font-bold text-lg text-[#FFF4D0] pb-3 border-b border-[#D4AF37]/20">
              {isBn ? 'বৈশ্বিক স্টুডিও ও উপস্থিতি' : 'Atelier Headquarters & Presence'}
            </h3>

            <div className="space-y-4 text-xs text-[#C5B59C]">
              <div className="flex items-start gap-3">
                <span className="text-[#D4AF37] text-base mt-0.5">🏛</span>
                <div>
                  <h4 className="font-semibold text-[#F7E79B] text-sm">
                    {isBn ? 'ঢাকা প্রধান স্টুডিও' : 'Dhaka Primary Studio'}
                  </h4>
                  <p className="text-[#8C7D68] mt-0.5">
                    {isBn ? 'গুলশান ডিপ্লোম্যাটিক জোন, ঢাকা ১২১২, বাংলাদেশ' : 'Gulshan Diplomatic Zone, Dhaka 1212, Bangladesh'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#D4AF37] text-base mt-0.5">🏔</span>
                <div>
                  <h4 className="font-semibold text-[#F7E79B] text-sm">
                    {isBn ? 'জুরিখ লিয়াজোঁ অফিস' : 'Zurich Advisory Liaison'}
                  </h4>
                  <p className="text-[#8C7D68] mt-0.5">
                    {isBn ? 'বাহনহোফস্ট্রাসে ৪৫, ৮০০১ জুরিখ, সুইজারল্যান্ড' : 'Bahnhofstrasse 45, 8001 Zurich, Switzerland'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/15 space-y-2.5 text-xs font-mono">
              <div className="flex items-center justify-between text-[#8C7D68]">
                <span>DIRECT EMAIL:</span>
                <a href={`mailto:${profile.email}`} className="text-[#E6C875] hover:underline">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center justify-between text-[#8C7D68]">
                <span>PRIVATE TEL:</span>
                <span className="text-[#E6C875]">{profile.phone}</span>
              </div>
              <div className="flex items-center justify-between text-[#8C7D68]">
                <span>AVAILABILITY:</span>
                <span className="text-[#65D465]">Q3/Q4 COMMISSIONS</span>
              </div>
            </div>
          </div>

          {/* Direct vCard Card */}
          <div className="p-5 rounded-lg bg-[#0E0F15] border border-[#D4AF37]/20 text-xs text-[#9E8E77] flex items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[#D4AF37] font-semibold block mb-0.5">
                EXECUTIVE VCARD
              </span>
              <span>{isBn ? 'ডিজিটাল ভিজিটিং কার্ড সংরক্ষণ করুন' : 'Export cryptographic contact monograph'}</span>
            </div>
            <a
              href={`mailto:${profile.email}?subject=Commission%20Discussion`}
              className="px-3 py-1.5 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-sm font-mono text-[11px] whitespace-nowrap transition-colors"
            >
              {isBn ? 'যোগাযোগ' : 'Direct Email'}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
