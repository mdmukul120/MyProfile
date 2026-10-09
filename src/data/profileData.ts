import { UserProfile, Project, Experience, Award, Testimonial } from '../types/profile';

// Generated luxury assets
export const IMAGES = {
  avatar: '/src/assets/images/profile_avatar_executive_1791504456982.jpg',
  banner: '/src/assets/images/profile_luxury_banner_1791504469251.jpg',
  fintech: '/src/assets/images/portfolio_fintech_luxury_1791504478934.jpg',
  horlogerie: '/src/assets/images/portfolio_horlogerie_gold_1791504490533.jpg',
  architecture: '/src/assets/images/portfolio_villa_architecture_1791504500953.jpg',
};

export const INITIAL_PROFILE: UserProfile = {
  name: 'Md. Mukul Ahmed',
  nameBn: 'মো. মুকুল আহমেদ',
  moniker: 'Aura Mukul',
  title: 'Principal Product Architect & Creative Director',
  titleBn: 'প্রিন্সিপাল প্রোডাক্ট আর্কিটেক্ট ও চিফ ক্রিয়েটিভ ডিরেক্টর',
  tagline: 'Bridging avant-garde aesthetic elegance with scalable high-performance architecture.',
  taglineBn: 'লাক্সারি নান্দনিকতা ও উচ্চক্ষমতাসম্পন্ন আর্কিটেকচারের অনন্য যুগলবন্দী।',
  bio: 'A visionary designer & full-stack architect with over 12 years of experience crafting ultra-premium digital ecosystems, luxury brand identities, and high-stakes enterprise applications. Honored across global design platforms for fusing dark opulent craftsmanship with flawless technical rigor.',
  bioBn: '১২ বছরেরও বেশি অভিজ্ঞতা সম্পন্ন একজন দূরদর্শী ডিজাইনার ও ফুল-স্ট্যাক সিস্টেম আর্কিটেক্ট। তিনি বৈশ্বিক শীর্ষ ব্র্যান্ড, ফিনটেক ও লাক্সারি ইন্ডাস্ট্রির জন্য হাই-এন্ড ডিজিটাল পণ্য, ব্র্যান্ড সিস্টেম এবং নির্ভরযোগ্য প্রযুক্তি অবকাঠামো নির্মাণ করেন।',
  philosophy: '"True luxury is not excess; it is absolute intention. Every pixel, bezier curve, and latency millisecond must exist in profound harmony with purpose."',
  philosophyBn: '"প্রকৃত লাক্সারি কখনো অতিরিক্ত আতিশয্য নয়; এটি হলো নিখুঁত উদ্দেশ্য ও ভারসাম্যের প্রতিফলন। প্রতিটি পিক্সেল, বেজিয়ার কার্ভ এবং মিলিসেকেন্ড কার্যকারিতার সাথে একাত্ম হওয়া প্রয়োজন।"',
  avatarUrl: IMAGES.avatar,
  bannerUrl: IMAGES.banner,
  location: 'Dhaka, Bangladesh & Zurich, Switzerland',
  locationBn: 'ঢাকা, বাংলাদেশ এবং জুরিখ, সুইজারল্যান্ড',
  availability: 'Available for Select Advisory & Architectural Engagements',
  availabilityBn: 'নির্বাচিত এক্সিকিউটিভ ও আর্কিটেকচারাল প্রজেক্টের জন্য উন্মুক্ত',
  yearsExperience: 12,
  completedProjects: 148,
  clientSatisfaction: 99.6,
  awardsCount: 16,
  email: 'mdmukulahmed00@gmail.com',
  phone: '+880 1700-000000',
  socials: {
    linkedin: 'https://linkedin.com/in/mukul-ahmed',
    github: 'https://github.com/mukul-ahmed',
    dribbble: 'https://dribbble.com/mukul-ahmed',
    twitter: 'https://x.com/mukul_arch',
    behance: 'https://behance.net/mukul-ahmed',
  },
  skills: [
    {
      name: 'Design Systems & UI Engineering',
      nameBn: 'ডিজাইন সিস্টেমস ও ইউআই ইঞ্জিনিয়ারিং',
      level: 98,
      focus: 'Multi-brand atomic design tokens & cross-platform cohesion',
      focusBn: 'মাল্টি-ব্র্যান্ড অ্যাটমিক ডিজাইন টোকেন ও সমন্বয়',
    },
    {
      name: 'Full-Stack Architecture & Cloud',
      nameBn: 'ফুল-স্ট্যাক আর্কিটেকচার ও ক্লাউড',
      level: 94,
      focus: 'Zero-latency distributed microservices & Next-gen React',
      focusBn: 'জিরো-লেটেন্সি ডিস্ট্রিবিউটেড মাইক্রোসার্ভিস ও রিঅ্যাক্ট',
    },
    {
      name: 'Luxury Brand Identity & Art Direction',
      nameBn: 'লাক্সারি ব্র্যান্ড পরিচিতি ও আর্ট ডিরেকশন',
      level: 96,
      focus: 'Haute typography, gold foil print & dark digital aesthetics',
      focusBn: 'নান্দনিক টাইপোগ্রাফি ও ডার্ক ডিজিটাল ভিজ্যুয়াল ল্যাঙ্গুয়েজ',
    },
    {
      name: 'Micro-Interactions & Motion Choreography',
      nameBn: 'মাইক্রো-ইন্টারঅ্যাকশন ও মোশন করিওগ্রাফি',
      level: 92,
      focus: 'Fluid cubic-bezier tactile dynamics & 60fps WebGL/SVG',
      focusBn: 'ফ্লুইড কিউবিক-বেজিয়ার ডায়নামিক্স ও ৬০fps এসভিজি রেন্ডারিং',
    },
    {
      name: 'Fintech Security & High-Stakes UX',
      nameBn: 'ফিনটেক সিকিউরিটি ও হাই-স্টেক্স ইউএক্স',
      level: 95,
      focus: 'Tier-1 financial transaction clarity & biometric workflows',
      focusBn: 'টায়ার-১ আর্থিক লেনদেন স্বচ্ছতা ও বায়োমেট্রিক ফ্লো',
    },
    {
      name: '3D Spatial Modeling & Product Showcases',
      nameBn: 'থ্রি-ডি স্প্যাশিয়াল মডেলিং ও প্রডাক্ট ডিসপ্লে',
      level: 89,
      focus: 'Photorealistic PBR materials & interactive web viewports',
      focusBn: 'ফটোরিয়ালিস্টিক পিবিআর টেক্সচার ও থ্রি-ডি ভিউপোর্ট',
    },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'aurum-wealth',
    title: 'Aurum Wealth — Private Banking Terminal',
    titleBn: 'অরাম ওয়েলথ — প্রাইভেট ব্যাংকিং টার্মিনাল',
    category: 'fintech',
    categoryLabel: 'Fintech & Wealth',
    categoryLabelBn: 'ফিনটেক ও সম্পদ ব্যবস্থাপনা',
    client: 'Geneva Private Bancorp',
    year: '2025',
    image: IMAGES.fintech,
    summary: 'A next-generation wealth intelligence dashboard built for ultra-high-net-worth investors, featuring gold-accented analytics, real-time algorithmic yields, and biometric vault encryption.',
    summaryBn: 'আল্ট্রা-হাই-নেট-ওয়ার্থ বিনিয়োগকারীদের জন্য নির্মিত পরবর্তী প্রজন্মের ওয়েলথ টার্মিনাল ড্যাশবোর্ড। এতে রয়েছে রিয়েল-টাইম ফলন অ্যালগরিদম ও গোল্ডেন ইন্টারফেস।',
    challenge: 'Designing high-density financial data without visual clutter while preserving private banking confidentiality standards and sub-100ms market feed responsiveness.',
    challengeBn: 'বিপুল পরিমাণ আর্থিক ডেটা জটিলতা ছাড়াই সহজবোধ্যভাবে উপস্থাপন করা এবং সাব-১০০ মিলিসেকেন্ড রেসপন্সিভনেস নিশ্চিত করা।',
    solution: 'Engineered an obsidian-and-gold design system with custom SVG sparklines, zero-layout-shift micro-tables, and hardware-accelerated charting.',
    solutionBn: 'ডার্ক অবসিডিয়ান এবং গোল্ডেন থিমে কাস্টম এসভিজি চার্ট ও হার্ডওয়্যার-অ্যাক্সিলারেটেড ইন্টারফেস সিস্টেম তৈরি করা হয়।',
    results: [
      '+320% Institutional Trader Retention',
      '$4.85B Active Assets Administered',
      'Red Dot Award 2025 Winner'
    ],
    resultsBn: [
      '+৩২০% ট্রেডার রিটেনশন বৃদ্ধি',
      '$৪.৮৫ বিলিয়ন সক্রিয় পোর্টফোলিও পরিচালনা',
      'রেড ডট অ্যাওয়ার্ড ২০২৫ বিজয়ী'
    ],
    tags: ['React 19', 'Tailwind CSS', 'SVG Data Viz', 'Biometrics', 'Fintech UX'],
    featured: true,
  },
  {
    id: 'chronos-tourbillon',
    title: 'Chronos 18K — Haute Horlogerie Digital Showcase',
    titleBn: 'ক্রোনস ১৮কে — হউট হরোলজি ডিজিটাল শোকেস',
    category: 'horlogerie',
    categoryLabel: 'Haute Horlogerie',
    categoryLabelBn: 'লাক্সারি মেকানিক্যাল ওয়াচ',
    client: 'Manufacture Horlogère Suisse',
    year: '2024',
    image: IMAGES.horlogerie,
    summary: 'An immersive digital atelier showcasing an ultra-rare 18-karat rose gold flying tourbillon timepiece with interactive gear escapement exploration and boutique reservation ledger.',
    summaryBn: '১৮-ক্যারেট রোজ গোল্ড মেকানিক্যাল ট্যুরবিলিয়ন ঘড়ির ডিজিটাল অলিভার শোকেস। প্রতিটি সূক্ষ্ম গিয়ার ও যন্ত্রাংশের বিস্তারিত ত্রিমাত্রিক ইন্টারঅ্যাকশন।',
    challenge: 'Translating centuries of Swiss hand-finishing craftsmanship into an effortless digital touch experience without losing the weight and tactile gravity of gold.',
    challengeBn: 'সুইস ঘড়ি কারিগরদের শতবর্ষের ঐতিহ্যকে ডিজিটাল ইন্টারফেসে অক্ষুণ্ণ রাখা এবং বাস্তব স্বর্ণের টেক্সচার ও আলো ফুটিয়ে তোলা।',
    solution: 'Designed bespoke vector escapement SVGs, fluid gold-sheen transitions, and an exclusive invitation-only concierge reservation flow.',
    solutionBn: 'কাস্টম ভেক্টর ড্রয়িং, ফ্লুইড গোল্ডেন ট্রানজিশন এবং এক্সক্লুসিভ বুকিং কনসিয়ার্জ সিস্টেম ডেভেলপ করা হয়েছে।',
    results: [
      '100% Limited Edition Allocation within 48 Hours',
      'Average Dwell Time of 6m 42s',
      'A\' Design Platinum Accolade'
    ],
    resultsBn: [
      '৪৮ ঘণ্টার মধ্যে সকল লিমিটেড এডিশন রিজার্ভেশন সম্পন্ন',
      'গড় ব্রাউজিং সময় ৬ মিনিট ৪২ সেকেন্ড',
      'এ\' ডিজাইন প্ল্যাটিনাম সম্মাননা'
    ],
    tags: ['WebGL', 'Luxury Motion', 'Micro-Interactions', 'Concierge API'],
    featured: true,
  },
  {
    id: 'basalt-villa',
    title: 'Solstice Basalt & Gold — Architectural Monograph',
    titleBn: 'সলস্টিস ব্যাসল্ট অ্যান্ড গোল্ড — আর্কিটেকচারাল মনোগ্রাফ',
    category: 'architecture',
    categoryLabel: 'Luxury Architecture',
    categoryLabelBn: 'লাক্সারি স্থাপত্য ও রিয়েল এস্টেট',
    client: 'Aegean Private Residences',
    year: '2024',
    image: IMAGES.architecture,
    summary: 'A minimalist architectural editorial and digital residency portal for a cliffside basalt retreat illuminated by warm recessed amber channels over infinity sea horizons.',
    summaryBn: 'একটি সমুদ্র সৈকতের খাড়া পাহাড়ের আধুনিক ব্যাসল্ট পাথর ও অ্যাম্বার আলোর আর্কিটেকচারাল মনোগ্রাফ এবং এক্সক্লুসিভ ক্লায়েন্ট পোর্টাল।',
    challenge: 'Showcasing the harmonious tension between rough dark volcanic basalt and warm architectural golden illumination in a seamless digital monograph.',
    challengeBn: 'কালো আগ্নেয় শিলা ও উষ্ণ স্বর্ণালী আলোর বৈসাদৃশ্যকে স্ক্রিনে বাস্তবসম্মতভাবে উপস্থাপন করা।',
    solution: 'Crafted an editorial layout with split typography, full-bleed imagery scrims, solar position simulation, and private floorplan inspection tools.',
    solutionBn: 'মনোগ্রাফ স্টাইল স্প্লিট লেআউট, সূর্যের অবস্থানের আলো অনুকরণ ও আর্কিটেকচারাল ফ্লোরপ্ল্যান ভিউয়ার।',
    results: [
      '12 Private Villas Commissioned',
      'Architectural Digest Featured Project',
      '99.8% Client Approval Index'
    ],
    resultsBn: [
      '১২টি এক্সক্লুসিভ ভিলা সফলভাবে বুকিং',
      'আর্কিটেকচারাল ডাইজেস্টে বিশেষভাবে প্রকাশিত',
      '৯৯.৮% ক্লায়েন্ট সন্তুষ্টি সূচক'
    ],
    tags: ['Architectural Design', 'Tailwind CSS', 'Responsive Grid', 'Editorial UI'],
    featured: true,
  },
  {
    id: 'obsidian-system',
    title: 'Monolith UI — Obsidian & Gold Design Token Engine',
    titleBn: 'মনোলিথ ইউআই — অবসিডিয়ান ও গোল্ডেন ডিজাইন ইঞ্জিন',
    category: 'systems',
    categoryLabel: 'Brand Systems',
    categoryLabelBn: 'ব্র্যান্ড সিস্টেম ও টোকেন',
    client: 'Open Source Luxury Standards',
    year: '2025',
    image: IMAGES.banner,
    summary: 'An enterprise-grade component architecture and dark golden design token library powering ultra-luxury web applications with zero dependencies and sub-5ms rendering speed.',
    summaryBn: 'একটি এন্টারপ্রাইজ-গ্রেড ডার্ক গোল্ডেন ডিজাইন টোকেন ও কম্পোনেন্ট লাইব্রেরি, যা উচ্চমানের লাক্সারি ওয়েব অ্যাপ্লিকেশনে ব্যবহৃত হয়।',
    challenge: 'Ensuring rigorous accessibility (WCAG AAA) on dark gold backgrounds while preventing color clashing and maintaining high contrast ratios.',
    challengeBn: 'ডার্ক গোল্ডেন থিমে অ্যাক্সেসিবিলিটি কন্ট্রাস্ট ঠিক রাখা এবং কোড পারফরম্যান্স ধরে রাখা।',
    solution: 'Established a calibrated 60-30-10 palette with mathematical gold ratios, strict focus indicators, and comprehensive SVG icon sprites.',
    solutionBn: 'গাণিতিক গোল্ডেন রেশিও এবং শক্তিশালী ফোকাস স্টেট সমৃদ্ধ টোকেন সিস্টেম প্রস্তুত করা হয়।',
    results: [
      'Over 28,000 GitHub Stars',
      'Adopted by 40+ Luxury Enterprises',
      'Zero Layout Shift (0.00 CLS)'
    ],
    resultsBn: [
      '২৮,০০০+ স্টার ও কমিউনিটি প্রশংসা',
      '৪০+ লাক্সারি ব্র্যান্ড কর্তৃক গৃহীত',
      'জিরো লেআউট শিফট স্কোর'
    ],
    tags: ['Design Systems', 'TypeScript', 'WCAG AAA', 'Tailwind', 'SVG Sprites'],
    featured: false,
  },
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'exp-1',
    period: '2022 — Present',
    role: 'Chief Design Architect & Strategic Partner',
    roleBn: 'চিফ ডিজাইন আর্কিটেক্ট ও স্ট্র্যাটেজিক পার্টনার',
    company: 'Aura Studio & Architecture Lab (Zurich / Dhaka)',
    location: 'Global / Hybrid',
    description: 'Leading high-level digital architecture, spatial UI engineering, and luxury design systems for Swiss private banks, luxury manufacturers, and visionary scale-ups.',
    descriptionBn: 'সুইস প্রাইভেট ব্যাংক, লাক্সারি পণ্য নির্মাতা এবং গ্লোবাল ক্লায়েন্টদের জন্য হাই-লেভেল ডিজিটাল আর্কিটেকচার ও ডিজাইন সিস্টেম পরিচালনা।',
    highlights: [
      'Spearheaded 40+ high-profile digital transformations across Europe and Asia',
      'Built and maintained distributed multi-brand design token frameworks',
      'Advised C-suite leadership on technology ergonomics and brand elevation'
    ],
    highlightsBn: [
      'ইউরোপ ও এশিয়ার ৪০টিরও বেশি শীর্ষ প্রকল্পের রূপান্তরে নেতৃত্ব',
      'মাল্টি-ব্র্যান্ড ডিজাইন টোকেন ফ্রেমওয়ার্ক আর্কিটেকচার তৈরি',
      'প্রতিষ্ঠানের শীর্ষ নেতৃত্বকে ডিজাইন ও প্রযুক্তিগত পরামর্শ প্রদান'
    ]
  },
  {
    id: 'exp-2',
    period: '2019 — 2022',
    role: 'Principal Product Designer & Front-End Lead',
    roleBn: 'প্রিন্সিপাল প্রোডাক্ট ডিজাইনার ও ফ্রন্ট-এন্ড লিড',
    company: 'Basel Fintech Systems AG',
    location: 'Basel, Switzerland',
    description: 'Directed the core platform experience for institutional algorithmic trading platforms, managing a 14-person multidisciplinary engineering and design unit.',
    descriptionBn: 'ইনস্টিটিউশনাল ট্রেডিং প্ল্যাটফর্মের কোর প্রোডাক্ট এক্সপেরিয়েন্স ডিজাইন এবং ১৪ জনের ইঞ্জিনিয়ারিং ও ডিজাইন টিমের নেতৃত্ব।',
    highlights: [
      'Reduced user task-latency by 44% with custom keyboard-navigable trading views',
      'Designed and engineered the enterprise dark golden executive mode',
      'Architected micro-frontend React integration pipeline'
    ],
    highlightsBn: [
      'ট্রেডিং ইউজার লেটেন্সি ৪৪% হ্রাস করা',
      'এন্টারপ্রাইজ ডার্ক গোল্ডেন মোড ডিজাইন ও বাস্তবায়ন',
      'মাইক্রো-ফ্রন্টএন্ড রিঅ্যাক্ট পাইপলাইন আর্কিটেক্ট করা'
    ]
  },
  {
    id: 'exp-3',
    period: '2015 — 2019',
    role: 'Senior Creative Technologist',
    roleBn: 'সিনিয়র ক্রিয়েটিভ টেকনোলজিস্ট',
    company: 'Apex Digital Atelier',
    location: 'Dhaka / Singapore',
    description: 'Pioneered interactive editorial experiences, interactive SVG visualizations, and high-impact brand identities for international clients.',
    descriptionBn: 'আন্তর্জাতিক ক্লায়েন্টদের জন্য ইন্টারঅ্যাক্টিভ এসভিজি ভিজ্যুয়ালাইজেশন ও প্রিমিয়াম ব্র্যান্ড আইডেন্টিটি নির্মাণ।',
    highlights: [
      'Delivered 65+ bespoke digital projects with award-winning creative direction',
      'Mentored 20+ junior frontend engineers and UI designers'
    ],
    highlightsBn: [
      '৬৫টিরও বেশি সফল ডিজিটাল প্রজেক্ট সম্পন্ন',
      '২০+ জুনিয়র ইঞ্জিনিয়ার ও ডিজাইনারদের মেন্টরিং'
    ]
  }
];

export const AWARDS_DATA: Award[] = [
  {
    id: 'award-1',
    title: 'Red Dot: Best of the Best 2025',
    titleBn: 'রেড ডট: বেস্ট অফ দ্য বেস্ট ২০২৫',
    issuer: 'Red Dot Design Award, Germany',
    issuerBn: 'রেড ডট ডিজাইন অ্যাওয়ার্ড, জার্মানি',
    year: '2025',
    tier: 'Supreme Distinction',
    description: 'Awarded for revolutionary visual ergonomics and dark luxury interface architecture in high-net-worth private wealth software.',
    descriptionBn: 'উচ্চমানের প্রাইভেট ওয়েলথ সফটওয়্যারে বৈপ্লবিক ভিজ্যুয়াল আর্কিটেকচার ও ডার্ক লাক্সারি ইন্টারফেসের জন্য প্রদানকৃত।',
    credentialId: 'RD-2025-AU7892'
  },
  {
    id: 'award-2',
    title: 'A\' Design Platinum Award',
    titleBn: 'এ\' ডিজাইন প্ল্যাটিনাম অ্যাওয়ার্ড',
    issuer: 'International Design Academy, Italy',
    issuerBn: 'ইন্টারন্যাশনাল ডিজাইন একাডেমি, ইতালি',
    year: '2024',
    tier: 'Platinum Winner',
    description: 'Recognized in Interface & Interaction Design category for Chronos 18K digital haute horlogerie atelier.',
    descriptionBn: 'ইন্টারফেস ও ইন্টারঅ্যাকশন ক্যাটাগরিতে হউট হরোলজি ডিজিটাল আটলিয়ারের জন্য প্ল্যাটিনাম সম্মাননা।',
    credentialId: 'AD-2024-PL4401'
  },
  {
    id: 'award-3',
    title: 'Webby Executive Honoree',
    titleBn: 'ওয়েবি এক্সিকিউটিভ অনারি',
    issuer: 'The Webby Awards, New York',
    issuerBn: 'দ্য ওয়েবি অ্যাওয়ার্ডস, নিউ ইয়র্ক',
    year: '2024',
    tier: 'Financial Services Excellence',
    description: 'Selected as top 1% global best website for ultra-luxury financial applications and responsive web performance.',
    descriptionBn: 'লাক্সারি ফাইন্যান্সিয়াল অ্যাপ্লিকেশন ও রেসপন্সিভ পারফরম্যান্সে বিশ্বের শীর্ষ ১% প্রকল্পের স্বীকৃতি।',
    credentialId: 'WB-2024-EX9102'
  },
  {
    id: 'award-4',
    title: 'Luxury Institute Design Fellow',
    titleBn: 'লাক্সারি ইনস্টিটিউট ডিজাইন ফেলো',
    issuer: 'Global Luxury Council',
    issuerBn: 'গ্লোবাল লাক্সারি কাউন্সিল',
    year: '2023',
    tier: 'Honorary Fellowship',
    description: 'Conferred for advancing digital craftsmanship, sustainable luxury aesthetics, and responsive digital typography.',
    descriptionBn: 'ডিজিটাল কারুকাজ, টেকসই লাক্সারি নান্দনিকতা এবং রেসপন্সিভ টাইপোগ্রাফির বিশেষ অবদানের জন্য প্রদত্ত।',
    credentialId: 'LIF-2023-9981'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Mukul’s grasp of high-end visual elegance and enterprise technical rigor is unparalleled. He transformed our banking terminal from a traditional utility into an exquisite instrument of wealth.',
    quoteBn: 'মুকুল আহমেদের প্রিমিয়াম ভিজ্যুয়াল নান্দনিকতা এবং এন্টারপ্রাইজ প্রযুক্তির বোঝাপড়া অতুলনীয়। তিনি আমাদের ব্যাংকিং টার্মিনালকে অনন্য উচ্চতায় পৌঁছে দিয়েছেন।',
    author: 'Henri de Chamonix',
    role: 'Managing Director & Partner',
    roleBn: 'ম্যানেজিং ডিরেক্টর ও পার্টনার',
    company: 'Geneva Private Bancorp',
    rating: 5,
  },
  {
    id: 'test-2',
    quote: 'In our 140 years of fine watchmaking, we have rarely met a digital architect who understands the visceral weight of gold and mechanical precision as deeply as Mukul does.',
    quoteBn: 'আমাদের ১৪০ বছরের ঘড়ি তৈরির ইতিহাসে আমরা এমন কোনো ডিজিটাল আর্কিটেক্টের সাক্ষাৎ পাইনি যিনি স্বর্ণের ওজন এবং মেকানিক্যাল নিখুঁততাকে এত গভীরভাবে বোঝেন।',
    author: 'Beatrix von Linden',
    role: 'Head of Global Brand Heritage',
    roleBn: 'হেড অফ গ্লোবাল ব্র্যান্ড হেরিটেজ',
    company: 'Manufacture Horlogère Suisse',
    rating: 5,
  },
  {
    id: 'test-3',
    quote: 'A master of light, dark obsidian, and golden rhythm. Mukul designed our architecture monograph with immaculate spatial harmony and sub-second load times.',
    quoteBn: 'আলো, অন্ধকার অবসিডিয়ান এবং গোল্ডেন ছন্দের একজন জাদুকর। আমাদের আর্কিটেকচার প্রজেক্টের প্রতিটি স্ক্রিন তিনি জীবন্ত করে তুলেছেন।',
    author: 'Dimitris Voulgaris',
    role: 'Principal Architect',
    roleBn: 'প্রিন্সিপাল আর্কিটেক্ট',
    company: 'Aegean Private Residences',
    rating: 5,
  }
];
