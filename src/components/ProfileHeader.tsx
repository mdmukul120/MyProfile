import React from 'react';
import { UserProfile, Language } from '../types/profile';
import { GoldVerifiedBadge } from './GoldIcons';

interface ProfileHeaderProps {
  profile: UserProfile;
  language: Language;
  onOpenEdit: () => void;
  onOpenShare: () => void;
  onOpenContact: () => void;
  onDownloadCV: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profile,
  language,
  onOpenEdit,
  onOpenShare,
  onOpenContact,
  onDownloadCV,
}) => {
  const isBn = language === 'bn';

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0B0F] border-b border-[#D4AF37]/20">
      {/* Ambient background gold glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18),transparent_70%)] pointer-events-none" />

      {/* Luxury Cinematic Banner with Scrim Gradient */}
      <div className="relative h-56 sm:h-72 lg:h-80 w-full overflow-hidden bg-[#0C0D12]">
        <img
          src={profile.bannerUrl}
          alt="Luxury Architecture & Liquid Gold Backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-110 opacity-90 transition-transform duration-1000 hover:scale-105"
        />
        {/* Measured dark golden scrim overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0F] via-[#0A0B0F]/65 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.22),transparent_50%)]" />

        {/* Decorative Luxury Geometric SVG Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Top-Right Badge: Executive Status */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#090A0E]/85 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#E5C158] shadow-[0_0_8px_#D4AF37]" />
          <span className="text-[11px] font-mono tracking-wider uppercase text-[#EADBB8]">
            {isBn ? 'সক্রিয় ক্লায়েন্ট কনসালটেন্সি' : 'OPEN FOR ARCHITECTURAL ENGAGEMENT'}
          </span>
        </div>
      </div>

      {/* Main Profile Info Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="relative -mt-20 sm:-mt-24 lg:-mt-28 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-8">
          
          {/* Avatar and Identity Lockup */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-8">
            {/* Avatar with Double Gold Bezel */}
            <div className="relative group shrink-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl p-1 bg-gradient-to-b from-[#FFF2B2] via-[#D4AF37] to-[#785410] shadow-[0_0_35px_rgba(212,175,55,0.28)]">
                <div className="w-full h-full rounded-[10px] overflow-hidden bg-[#121319] border border-[#0A0B0F]">
                  <img
                    src={profile.avatarUrl}
                    alt={isBn ? profile.nameBn : profile.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Verified Executive Shield anchored bottom right */}
              <div className="absolute -bottom-2 -right-2 p-1 bg-[#090A0E] rounded-full shadow-xl">
                <GoldVerifiedBadge size={28} tooltip={isBn ? 'যাচাইকৃত চিফ আর্কিটেক্ট' : 'Verified Principal Architect'} />
              </div>
            </div>

            {/* Name, Title, and Unboxed Metadata */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-wide gold-gradient-text">
                  {isBn ? profile.nameBn : profile.name}
                </h1>
                <span className="px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/35 rounded-sm bg-[#1A1813]/60">
                  {profile.moniker}
                </span>
              </div>

              <p className="mt-1 text-base sm:text-lg font-medium text-[#D8C9AA] leading-snug">
                {isBn ? profile.titleBn : profile.title}
              </p>

              {/* Zero-Pill Unboxed Clean Metadata with '·' separator */}
              <div className="mt-2.5 flex items-center flex-wrap gap-2 text-xs text-[#A8987E]">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {isBn ? profile.locationBn : profile.location}
                </span>
                <span aria-hidden="true" className="text-[#685A42]">·</span>
                <span>{profile.yearsExperience}+ {isBn ? 'বছরের অভিজ্ঞতা' : 'Years Experience'}</span>
                <span aria-hidden="true" className="text-[#685A42]">·</span>
                <span>{profile.completedProjects} {isBn ? 'সফল প্রজেক্ট' : 'Completed Works'}</span>
                <span aria-hidden="true" className="text-[#685A42]">·</span>
                <span className="text-[#E5CA75]">{profile.awardsCount} {isBn ? 'আন্তর্জাতিক স্বীকৃতি' : 'Global Accolades'}</span>
              </div>

              {/* Tagline */}
              <p className="mt-2 text-xs sm:text-sm text-[#8F816B] max-w-2xl italic">
                {isBn ? profile.taglineBn : profile.tagline}
              </p>
            </div>
          </div>

          {/* Action Buttons Hub */}
          <div className="flex items-center flex-wrap gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
            {/* Primary CTA: Hire/Retain */}
            <button
              onClick={onOpenContact}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A0B0E] bg-gradient-to-r from-[#F5E08E] via-[#D4AF37] to-[#B38728] hover:from-[#FFF0A8] hover:to-[#C69230] rounded-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_28px_rgba(212,175,55,0.5)] cursor-pointer active:scale-95 whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>{isBn ? 'প্রজেক্ট আলোচনা' : 'Commission Project'}</span>
            </button>

            {/* Secondary CTA: Download CV / vCard */}
            <button
              onClick={onDownloadCV}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#E8DCC4] bg-[#14151C] hover:bg-[#1C1E28] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 rounded-sm transition-all cursor-pointer active:scale-95 whitespace-nowrap"
            >
              <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{isBn ? 'সিভি ডাউনলোড' : 'Download CV'}</span>
            </button>

            {/* Share Profile Modal Trigger */}
            <button
              onClick={onOpenShare}
              className="p-2.5 text-[#D4AF37] bg-[#14151C] hover:bg-[#1C1E28] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 rounded-sm transition-all cursor-pointer active:scale-95"
              title={isBn ? 'প্রোফাইল শেয়ার করুন' : 'Share Profile'}
              aria-label="Share Profile"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>

            {/* Live Profile Editor Trigger */}
            <button
              onClick={onOpenEdit}
              className="p-2.5 text-[#D4AF37] bg-[#14151C] hover:bg-[#1C1E28] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 rounded-sm transition-all cursor-pointer active:scale-95"
              title={isBn ? 'প্রোফাইল এডিট করুন' : 'Edit Profile'}
              aria-label="Edit Profile"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>

        </div>

        {/* Social Accounts Strip */}
        <div className="mt-6 pt-5 border-t border-[#D4AF37]/15 flex items-center justify-between flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-4 text-[#A8987E]">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#7A6C56]">
              {isBn ? 'কানেক্ট:' : 'CONNECT:'}
            </span>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4B496] hover:text-[#FFF2B2] transition-colors flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
            </a>
            <span className="text-[#4A4232]">/</span>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4B496] hover:text-[#FFF2B2] transition-colors flex items-center gap-1.5"
            >
              <span>GitHub</span>
            </a>
            <span className="text-[#4A4232]">/</span>
            <a
              href={profile.socials.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4B496] hover:text-[#FFF2B2] transition-colors flex items-center gap-1.5"
            >
              <span>Dribbble</span>
            </a>
            <span className="text-[#4A4232]">/</span>
            <a
              href={profile.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4B496] hover:text-[#FFF2B2] transition-colors flex items-center gap-1.5"
            >
              <span>X (Twitter)</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-[#A8987E] font-mono text-xs">
            <span className="text-[#D4AF37]">✉</span>
            <a href={`mailto:${profile.email}`} className="hover:text-[#FFF4D0] transition-colors">
              {profile.email}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
