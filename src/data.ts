import { Trainer, Program, Testimonial, PricingPlan, GalleryItem, GymStat, ContactInfo } from './types';

export const GYM_NAME = "VICTORY GUTS GYM";

export const CONTACT_DETAILS: ContactInfo = {
  phones: [
    "+91 9052141510",
    "+91 9290923456"
  ],
  address: "GJF6+HC5, Opp: KBN College, Back Side Srinivasa Mahal Theater, Kothapeta, Vijayawada, Andhra Pradesh 520001",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2443098524953!2d80.61111167527638!3d16.512213727448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff4de470195%3A0xd6ded0b0fb600eb!2sK.B.N.%20College!5e0!3m2!1sen!2sin!4v1718431800000!5m2!1sen!2sin",
  whatsAppNum: "919052141510",
  whatsAppText: "Hello Victory Guts Gym! I'm interested in joining the gym. Please share membership details."
};

export const STATISTICS: GymStat[] = [
  {
    id: "stat-1",
    value: "100+",
    numericValue: 100,
    suffix: "+",
    label: "Members Trained"
  },
  {
    id: "stat-2",
    value: "4.6★",
    numericValue: 4.6,
    suffix: "★",
    label: "Customer Rating"
  },
  {
    id: "stat-3",
    value: "33+",
    numericValue: 33,
    suffix: "+",
    label: "Google Reviews"
  },
  {
    id: "stat-4",
    value: "100%",
    numericValue: 100,
    suffix: "%",
    label: "Commitment to Fitness"
  }
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: "prog-1",
    title: "Weight Loss Training",
    description: "Shed fat quickly with customized high-intensity programming, functional training, and smart nutrition guidelines.",
    iconName: "Flame",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "prog-2",
    title: "Muscle Building",
    description: "Hypertrophy-focused training templates designed to pack on high-quality lean mass, optimize recovery, and build power.",
    iconName: "Dumbbell",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "prog-3",
    title: "Strength Training",
    description: "Master the fundamental compounds—Squat, Bench Press, and Deadlift. Build serious real-world raw strength and power.",
    iconName: "Zap",
    imageUrl: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "prog-4",
    title: "Personal Training",
    description: "One-on-one personal guidance with master coaches. Custom workouts, physical assessments, and absolute accountability.",
    iconName: "Users",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "prog-5",
    title: "Cardio Fitness",
    description: "Boost your cardiorespiratory capacity, endurance, and heart health using our top-of-the-line cardiovascular equipment.",
    iconName: "Activity",
    imageUrl: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "prog-6",
    title: "Body Transformation",
    description: "Our premium comprehensive program that combines diet, weight training, cardio, and mindset to fully rebuild your physique.",
    iconName: "Award",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop"
  }
];

export const TRAINERS_DATA: Trainer[] = [
  {
    id: "trainer-1",
    name: "Vikram Rathore",
    specialization: "Head Strength Coach & Transformation Expert",
    experience: "8+ Years Experience",
    imageUrl: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop",
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com"
    }
  },
  {
    id: "trainer-2",
    name: "Aisha Sharma",
    specialization: "Certified Personal Trainer & High-Intensity Coach",
    experience: "6+ Years Experience",
    imageUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "trainer-3",
    name: "Rahul Reddy",
    specialization: "Hypertrophy Coach & Sports Nutritionist",
    experience: "5+ Years Experience",
    imageUrl: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=600&auto=format&fit=crop",
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com"
    }
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Free Weights & Heavy Lifting Section",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1637666062717-1c6bcab4a486?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-2",
    title: "High-Intensity Functional Training Area",
    category: "workout",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-3",
    title: "Durable Power Cage Setup",
    category: "interior",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-4",
    title: "Physical Transformation & Posing Practice",
    category: "transformation",
    imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-5",
    title: "Heavy Barbell Compound Squats",
    category: "workout",
    imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-6",
    title: "Premium Cardio and Dynamic Bikes Area",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800&auto=format&fit=crop"
  }
];

export const MEMBERSHIP_PLANS_DATA: PricingPlan[] = [
  {
    id: "plan-1",
    name: "Basic Plan",
    price: "₹1,200",
    billingPeriod: "Month",
    tagline: "Perfect for starting your active journey",
    isPopular: false,
    features: [
      "Access to all standard cardio & lifting areas",
      "Full locker room, shower & parking access",
      "Complimentary customized workout chart",
      "General trainer team consultation",
      "Access 6 days a week (6:00 AM - 10:00 PM)"
    ]
  },
  {
    id: "plan-2",
    name: "Standard Plan",
    price: "₹2,500",
    billingPeriod: "3 Months",
    tagline: "Best value for dedicated fitness athletes",
    isPopular: true,
    features: [
      "Everything in the Basic Plan included",
      "3-month streak training tracker chart",
      "Bi-weekly body fat level assessment",
      "Personalized macro nutrition consultation",
      "1 special guest pass per month",
      "Advanced group session workouts"
    ]
  },
  {
    id: "plan-3",
    name: "Premium Plan",
    price: "₹8,000",
    billingPeriod: "Year",
    tagline: "Ultimate lifestyle and body transformation program",
    isPopular: false,
    features: [
      "Unlimited premium access for 1 full year",
      "Priority expert trainer appointment coachings",
      "Comprehensive fitness body composition reports",
      "Custom highly-detailed diet planning",
      "Free Victory Guts Gym custom brand Tee",
      "Free locker reservations & unlimited towels",
      "Unrestricted VIP recovery lounge access"
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Kiran Kumar",
    role: "Local Athlete (Lost 15kg in 5 Months)",
    review: "Victory Guts Gym completely transformed my life. The trainers here don't just hand you a routine; they teach you how to exercise with perfect form. The equipment is supreme, and the atmosphere keeps me highly motivated every single day!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-2",
    name: "Priyanka N.",
    role: "IT Professional (Strength Training)",
    review: "As a working professional, I struggled to maintain consistency. The supportive community and custom workout programs at Victory Guts Gym gave me the discipline I needed. My stamina, strength, and confidence have doubled!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-3",
    name: "Ravi Teja",
    role: "Powerlifting Practitioner (Increased deadlift by 60kg)",
    review: "If you want real results, this is the prime spot in Vijayawada. Back Side Srinivasa Mahal Theater is incredibly convenient, and the heavylifting section with calibrated high-quality loaded plates is absolutely world-class.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop"
  }
];
