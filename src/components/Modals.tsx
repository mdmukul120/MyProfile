import React, { useState } from 'react';
import { UserProfile, Project, Language } from '../types/profile';
import { GoldCrest, GoldVerifiedBadge } from './GoldIcons';

// =================== PROFILE EDITOR MODAL ===================
interface ProfileEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  language: Language;
  onSave: (updatedProfile: UserProfile) => void;
}

export const ProfileEditorModal: React.FC<ProfileEditorModalProps> = ({
  isOpen,
  onClose,
  profile,
  language,
  onSave,
}) => {
  if (!isOpen) return null;
  const isBn = language === 'bn';

  const [formState, setFormState] = useState<UserProfile>({ ...profile });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formState);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#111219] border border-[#D4AF37]/40 rounded-xl shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/20">
          <div className="flex items-center gap-3">
            <GoldCrest size={28} />
            <div>
              <h3 className="font-display font-bold text-lg text-[#FFF4D0]">
                {isBn ? 'প্রোফাইল তথ্য সম্পাদনা' : 'Edit Executive Profile'}
              </h3>
              <p className="text-xs text-[#9E8D6E]">
                {isBn ? 'আপনার প্রোফাইলের তথ্য পরিবর্তন করুন' : 'Live profile customizer with instant preview'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#9E8D6E] hover:text-[#FFF4D0] text-xl p-1 cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono uppercase text-[#D8C6A5] mb-1">
                {isBn ? 'পূর্ণ নাম (ইংরেজি)' : 'Full Name (EN)'}
              </label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-3 py-2 bg-[#0A0B0E] border border-[#D4AF37]/30 rounded text-[#FFF4D0] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="block font-mono uppercase text-[#D8C6A5] mb-1">
                {isBn ? 'পূর্ণ নাম (বাংলা)' : 'Full Name (BN)'}
              </label>
              <input
                type="text"
                value={formState.nameBn}
                onChange={(e) => setFormState({ ...formState, nameBn: e.target.value })}
                className="w-full px-3 py-2 bg-[#0A0B0E] border border-[#D4AF37]/30 rounded text-[#FFF4D0] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono uppercase text-[#D8C6A5] mb-1">
                {isBn ? 'পদবি (ইংরেজি)' : 'Executive Title (EN)'}
              </label>
              <input
                type="text"
                value={formState.title}
                onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                className="w-full px-3 py-2 bg-[#0A0B0E] border border-[#D4AF37]/30 rounded text-[#FFF4D0] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="block font-mono uppercase text-[#D8C6A5] mb-1">
                {isBn ? 'পদবি (বাংলা)' : 'Executive Title (BN)'}
              </label>
              <input
                type="text"
                value={formState.titleBn}
                onChange={(e) => setFormState({ ...formState, titleBn: e.target.value })}
                className="w-full px-3 py-2 bg-[#0A0B0E] border border-[#D4AF37]/30 rounded text-[#FFF4D0] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono uppercase text-[#D8C6A5] mb-1">
                {isBn ? 'অবস্থান (ইংরেজি)' : 'Location (EN)'}
              </label>
              <input
                type="text"
                value={formState.location}
                onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                className="w-full px-3 py-2 bg-[#0A0B0E] border border-[#D4AF37]/30 rounded text-[#FFF4D0] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="block font-mono uppercase text-[#D8C6A5] mb-1">
                {isBn ? 'ইমেইল অ্যাড্রেস' : 'Official Email'}
              </label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-3 py-2 bg-[#0A0B0E] border border-[#D4AF37]/30 rounded text-[#FFF4D0] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono uppercase text-[#D8C6A5] mb-1">
              {isBn ? 'সংক্ষিপ্ত বায়ো (ইংরেজি)' : 'Executive Bio (EN)'}
            </label>
            <textarea
              rows={3}
              value={formState.bio}
              onChange={(e) => setFormState({ ...formState, bio: e.target.value })}
              className="w-full px-3 py-2 bg-[#0A0B0E] border border-[#D4AF37]/30 rounded text-[#FFF4D0] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block font-mono uppercase text-[#D8C6A5] mb-1">
              {isBn ? 'সংক্ষিপ্ত বায়ো (বাংলা)' : 'Executive Bio (BN)'}
            </label>
            <textarea
              rows={3}
              value={formState.bioBn}
              onChange={(e) => setFormState({ ...formState, bioBn: e.target.value })}
              className="w-full px-3 py-2 bg-[#0A0B0E] border border-[#D4AF37]/30 rounded text-[#FFF4D0] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div>
              <label className="block font-mono text-[10px] text-[#A8987E] mb-1">
                {isBn ? 'অভিজ্ঞতা (বছর)' : 'Experience (Yrs)'}
              </label>
              <input
                type="number"
                value={formState.yearsExperience}
                onChange={(e) => setFormState({ ...formState, yearsExperience: Number(e.target.value) })}
                className="w-full px-2 py-1.5 bg-[#0A0B0E] border border-[#D4AF37]/30 rounded text-[#FFF4D0] text-center"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] text-[#A8987E] mb-1">
                {isBn ? 'প্রজেক্ট সংখ্যা' : 'Works Count'}
              </label>
              <input
                type="number"
                value={formState.completedProjects}
                onChange={(e) => setFormState({ ...formState, completedProjects: Number(e.target.value) })}
                className="w-full px-2 py-1.5 bg-[#0A0B0E] border border-[#D4AF37]/30 rounded text-[#FFF4D0] text-center"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] text-[#A8987E] mb-1">
                {isBn ? 'সন্তুষ্টি (%)' : 'Satisfaction (%)'}
              </label>
              <input
                type="number"
                step="0.1"
                value={formState.clientSatisfaction}
                onChange={(e) => setFormState({ ...formState, clientSatisfaction: Number(e.target.value) })}
                className="w-full px-2 py-1.5 bg-[#0A0B0E] border border-[#D4AF37]/30 rounded text-[#FFF4D0] text-center"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] text-[#A8987E] mb-1">
                {isBn ? 'পুরস্কার সংখ্যা' : 'Awards Count'}
              </label>
              <input
                type="number"
                value={formState.awardsCount}
                onChange={(e) => setFormState({ ...formState, awardsCount: Number(e.target.value) })}
                className="w-full px-2 py-1.5 bg-[#0A0B0E] border border-[#D4AF37]/30 rounded text-[#FFF4D0] text-center"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#D4AF37]/20">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-[#D4AF37]/30 text-[#A8987E] hover:text-[#FFF4D0] rounded transition-colors cursor-pointer"
            >
              {isBn ? 'বাতিল' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-5 py-2 font-bold uppercase tracking-wider text-[#0A0B0E] bg-gradient-to-r from-[#F5E08E] to-[#D4AF37] rounded transition-all shadow-md cursor-pointer"
            >
              {isBn ? 'সংরক্ষণ করুন' : 'Save Changes'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};


// =================== SHARE PROFILE MODAL ===================
interface ShareProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  language: Language;
  onCopied: () => void;
}

export const ShareProfileModal: React.FC<ShareProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  language,
  onCopied,
}) => {
  if (!isOpen) return null;
  const isBn = language === 'bn';
  const profileUrl = typeof window !== 'undefined' ? window.location.href : 'https://aura-gold.design/mukul-ahmed';

  const copyUrl = () => {
    navigator.clipboard.writeText(profileUrl);
    onCopied();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#12131A] border border-[#D4AF37]/40 rounded-xl shadow-2xl p-6 sm:p-7 text-center">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#9E8D6E] hover:text-[#FFF4D0] text-lg cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="mx-auto w-12 h-12 rounded-full bg-[#1A1B24] border border-[#D4AF37] flex items-center justify-center mb-3">
          <GoldCrest size={28} />
        </div>

        <h3 className="font-display font-bold text-xl text-[#FFF4D0]">
          {isBn ? 'এক্সিকিউটিভ প্রোফাইল শেয়ার' : 'Share Executive Monograph'}
        </h3>
        
        <p className="mt-1 text-xs text-[#9E8D6E]">
          {isBn ? profile.nameBn : profile.name} · {isBn ? profile.titleBn : profile.title}
        </p>

        {/* Custom Luxury Golden QR Code SVG */}
        <div className="my-6 mx-auto w-48 h-48 p-3 rounded-lg bg-[#090A0E] border border-[#D4AF37]/40 flex items-center justify-center relative shadow-inner">
          <svg viewBox="0 0 100 100" width="160" height="160" fill="#D4AF37">
            {/* Top-left corner marker */}
            <rect x="5" y="5" width="26" height="26" rx="2" fill="none" stroke="#D4AF37" strokeWidth="3" />
            <rect x="11" y="11" width="14" height="14" fill="#D4AF37" />

            {/* Top-right corner marker */}
            <rect x="69" y="5" width="26" height="26" rx="2" fill="none" stroke="#D4AF37" strokeWidth="3" />
            <rect x="75" y="11" width="14" height="14" fill="#D4AF37" />

            {/* Bottom-left corner marker */}
            <rect x="5" y="69" width="26" height="26" rx="2" fill="none" stroke="#D4AF37" strokeWidth="3" />
            <rect x="11" y="75" width="14" height="14" fill="#D4AF37" />

            {/* Center Monogram Shield Accent */}
            <circle cx="50" cy="50" r="10" fill="#12131A" stroke="#D4AF37" strokeWidth="2" />
            <path d="M47 54V47L50 50L53 47V54" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />

            {/* Artistic Data Matrix dots */}
            <rect x="36" y="10" width="5" height="5" />
            <rect x="46" y="10" width="8" height="5" />
            <rect x="59" y="10" width="5" height="5" />
            <rect x="36" y="20" width="10" height="5" />
            <rect x="51" y="20" width="6" height="5" />
            
            <rect x="10" y="36" width="5" height="5" />
            <rect x="20" y="36" width="7" height="5" />
            <rect x="72" y="36" width="5" height="5" />
            <rect x="82" y="36" width="7" height="5" />

            <rect x="35" y="65" width="6" height="6" />
            <rect x="45" y="70" width="5" height="5" />
            <rect x="55" y="65" width="6" height="6" />
            <rect x="65" y="75" width="5" height="5" />
            <rect x="75" y="68" width="6" height="6" />

            <rect x="35" y="82" width="7" height="5" />
            <rect x="47" y="80" width="12" height="5" />
            <rect x="65" y="85" width="6" height="6" />
            <rect x="78" y="82" width="8" height="5" />
          </svg>
        </div>

        {/* Link input with copy button */}
        <div className="flex items-center gap-2 p-1.5 rounded bg-[#090A0E] border border-[#D4AF37]/30 text-xs">
          <input
            type="text"
            readOnly
            value={profileUrl}
            className="flex-1 px-2 py-1 bg-transparent text-[#EADBB8] font-mono text-[11px] outline-none truncate"
          />
          <button
            onClick={copyUrl}
            className="px-3 py-1.5 font-bold uppercase tracking-wider text-[#0A0B0E] bg-gradient-to-r from-[#F5E08E] to-[#D4AF37] rounded-sm cursor-pointer whitespace-nowrap text-[11px]"
          >
            {isBn ? 'কপি লিংক' : 'Copy URL'}
          </button>
        </div>

        {/* Share buttons */}
        <div className="mt-5 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-center gap-4 text-xs font-mono text-[#D4AF37]">
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFF4D0] transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Executive Profile: ' + profile.name)}&url=${encodeURIComponent(profileUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFF4D0] transition-colors"
          >
            X / Twitter
          </a>
          <span>·</span>
          <a
            href={`mailto:?subject=${encodeURIComponent(profile.name + ' - Executive Profile')}&body=${encodeURIComponent(profileUrl)}`}
            className="hover:text-[#FFF4D0] transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </div>
  );
};


// =================== PROJECT DETAIL MODAL ===================
interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  language: Language;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  language,
}) => {
  if (!project) return null;
  const isBn = language === 'bn';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#111219] border border-[#D4AF37]/40 rounded-xl shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#9E8D6E] hover:text-[#FFF4D0] text-xl p-1 z-10 cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full rounded-lg overflow-hidden border border-[#D4AF37]/25 mb-6">
          <img
            src={project.image}
            alt={isBn ? project.titleBn : project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111219] via-[#111219]/30 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span className="px-3 py-1 bg-[#090A0E]/85 border border-[#D4AF37]/40 text-xs font-mono uppercase tracking-wider text-[#F7E79B] rounded-sm">
              {isBn ? project.categoryLabelBn : project.categoryLabel} · {project.year}
            </span>
          </div>
        </div>

        {/* Project Header */}
        <div className="pb-4 border-b border-[#D4AF37]/20">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] mb-1">
            <span>CLIENT: {project.client}</span>
            <span>·</span>
            <span>YEAR: {project.year}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#FFF4D0]">
            {isBn ? project.titleBn : project.title}
          </h2>

          <p className="mt-2 text-sm text-[#C8B89F] leading-relaxed">
            {isBn ? project.summaryBn : project.summary}
          </p>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-xs sm:text-sm">
          <div className="p-4 rounded-lg bg-[#141520] border border-[#D4AF37]/20">
            <h4 className="font-display font-bold text-[#F7E79B] mb-2 text-xs uppercase tracking-wider">
              {isBn ? 'আর্কিটেকচারাল চ্যালেঞ্জ' : 'Architectural Challenge'}
            </h4>
            <p className="text-[#A8987E] leading-relaxed text-xs">
              {isBn ? project.challengeBn : project.challenge}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#141520] border border-[#D4AF37]/20">
            <h4 className="font-display font-bold text-[#F7E79B] mb-2 text-xs uppercase tracking-wider">
              {isBn ? 'ডিজাইন ও প্রযুক্তিগত সমাধান' : 'Strategic Solution'}
            </h4>
            <p className="text-[#A8987E] leading-relaxed text-xs">
              {isBn ? project.solutionBn : project.solution}
            </p>
          </div>
        </div>

        {/* Quantified Results */}
        <div className="p-4 rounded-lg bg-[#0E0F15] border border-[#D4AF37]/30 mb-6">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#D4AF37] mb-3">
            {isBn ? 'পরিমাপযোগ্য ফলাফল ও সাফল্য' : 'Quantified Architectural Outcomes'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(isBn ? project.resultsBn : project.results).map((res, idx) => (
              <div key={idx} className="p-2.5 rounded bg-[#161722] border border-[#D4AF37]/15 text-xs text-[#E8DCC4] flex items-center gap-2">
                <span className="text-[#D4AF37] font-bold">✦</span>
                <span>{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-[#D4AF37]/20 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            {project.tags.map((tag, tIdx) => (
              <span key={tIdx} className="px-2.5 py-1 bg-[#1A1B24] border border-[#D4AF37]/20 rounded-sm font-mono text-[#C4B496] text-[11px]">
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#0A0B0E] bg-gradient-to-r from-[#F5E08E] to-[#D4AF37] rounded-sm cursor-pointer"
          >
            {isBn ? 'বন্ধ করুন' : 'Close View'}
          </button>
        </div>

      </div>
    </div>
  );
};
