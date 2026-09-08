export interface ServiceItem {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  points: string[];
  link: string;
  linkLabel: string;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "NDM Loyal Jewellery",
    shortTitle: "NDM Loyal",
    description:
      "Trusted jewellery solutions under the NDM Loyal brand — quality pieces and reliable service for customers who value craftsmanship and purity.",
    points: [
      "Quality jewellery collections",
      "Trusted brand experience",
      "Customer-focused service",
    ],
    link: "/contact",
    linkLabel: "Enquire Now",
  },
  {
    id: 2,
    title: "Teaching Courses",
    shortTitle: "Courses",
    description:
      "Professional training and eligibility assessments for jewellery and gem appraisal streams, designed for learners and industry aspirants.",
    points: [
      "Eligibility tests & guidance",
      "Industry-focused learning support",
      "Certification-oriented pathways",
    ],
    link: "/courses",
    linkLabel: "View Courses",
  },
  // {
  //   id: 3,
  //   title: "Jewellery Sales",
  //   shortTitle: "Sales",
  //   description:
  //     "End-to-end jewellery sales support — helping customers choose the right pieces with transparent advice on quality, design, and value.",
  //   points: [
  //     "Retail jewellery sales",
  //     "Expert product guidance",
  //     "Transparent purchase support",
  //   ],
  //   link: "/contact",
  //   linkLabel: "Contact Sales",
  // },
  {
    id: 3,
    title: "Jewellery Equipments",
    shortTitle: "Equipments",
    description:
      "Supply of jewellery tools and equipment for workshops, stores, and professionals — from testing aids to essential jewellery-making tools.",
    points: [
      "Workshop & store equipment",
      "Testing and appraisal tools",
      "Reliable product sourcing",
    ],
    link: "/contact",
    linkLabel: "Get Equipment Quote",
  },
  {
    id: 4,
    title: "Gold Testing",
    shortTitle: "Gold Testing",
    description:
      "Professional gold purity testing and assessment support to verify karat, quality, and confidence before buying, selling, or pledging.",
    points: [
      "Gold purity testing",
      "Clear test reports",
      "Trusted evaluation process",
    ],
    link: "/gold-calculator",
    linkLabel: "Try Gold Testing",
  },
  {
    id: 5,
    title: "Employment Exchange",
    shortTitle: "Employment Exchange",
    description:
      "A job-matching platform for jewellery and gem appraisal professionals — connecting qualified candidates with employers across shops, banks, hallmark centres, and related sectors.",
    points: [
      "Job listings for appraisers and jewellery professionals",
      "Employer and candidate matching",
      "Support for self-employment and industry placements",
    ],
    link: "/contact",
    linkLabel: "Enquire Now",
  },
  {
    id: 6,
    title: "Software Solutions",
    shortTitle: "Software",
    description:
      "Software solutions for all — custom and ready-to-use digital tools for businesses, professionals, and organisations across every sector.",
    points: [
      "Custom software for any business need",
      "Ready-to-use tools for operations and records",
      "Support for shops, offices, and professionals",
    ],
    link: "/contact",
    linkLabel: "Request a Demo",
  },

];
