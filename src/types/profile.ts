export type Language = 'bn' | 'en';

export interface Project {
  id: string;
  title: string;
  titleBn: string;
  category: 'fintech' | 'horlogerie' | 'architecture' | 'systems';
  categoryLabel: string;
  categoryLabelBn: string;
  client: string;
  year: string;
  image: string;
  summary: string;
  summaryBn: string;
  challenge: string;
  challengeBn: string;
  solution: string;
  solutionBn: string;
  results: string[];
  resultsBn: string[];
  tags: string[];
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  roleBn: string;
  company: string;
  location: string;
  description: string;
  descriptionBn: string;
  highlights: string[];
  highlightsBn: string[];
}

export interface Award {
  id: string;
  title: string;
  titleBn: string;
  issuer: string;
  issuerBn: string;
  year: string;
  tier: string;
  description: string;
  descriptionBn: string;
  credentialId: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  quoteBn: string;
  author: string;
  role: string;
  roleBn: string;
  company: string;
  avatar?: string;
  rating: number;
}

export interface SkillCategory {
  name: string;
  nameBn: string;
  level: number; // 0 - 100
  focus: string;
  focusBn: string;
}

export interface UserProfile {
  name: string;
  nameBn: string;
  moniker: string;
  title: string;
  titleBn: string;
  tagline: string;
  taglineBn: string;
  bio: string;
  bioBn: string;
  philosophy: string;
  philosophyBn: string;
  avatarUrl: string;
  bannerUrl: string;
  location: string;
  locationBn: string;
  availability: string;
  availabilityBn: string;
  yearsExperience: number;
  completedProjects: number;
  clientSatisfaction: number;
  awardsCount: number;
  email: string;
  phone: string;
  socials: {
    linkedin: string;
    github: string;
    dribbble: string;
    twitter: string;
    behance: string;
  };
  skills: SkillCategory[];
}
