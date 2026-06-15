export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  imageUrl: string;
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface Program {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamic identify Lucide Icons
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  avatarUrl: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  features: string[];
  isPopular: boolean;
  tagline: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'workout' | 'equipment' | 'interior' | 'transformation';
  imageUrl: string;
}

export interface GymStat {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export interface ContactInfo {
  phones: string[];
  address: string;
  mapsEmbedUrl: string;
  whatsAppNum: string;
  whatsAppText: string;
}
