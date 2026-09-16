import { Course } from "../types/Course";
import { jewelleryAppraiserSyllabus } from "./jewelleryAppraiserSyllabus";
import { gemAppraiserSyllabus } from "./gemAppraiserSyllabus";

const sharedIncludes = [
  "Online eligibility test access",
  "Eligibility certificate on pass",
  "Detailed result report",
  "2 attempts included",
  "Email support during exam window",
];

const sharedEligibility = [
  "Minimum 18 years of age",
  "Valid government ID for verification",
  "Stable internet for online test",
  "Basic industry knowledge recommended",
];

const sharedNotes = [
  "Certificate is issued only after passing score.",
  "Second attempt must be taken within 30 days of first.",
  "Online test access will open when this eligibility test is published.",
];

export const courses: Course[] = [
  {
    id: 1,
    title: "Jewellery Appraiser Eligibility Test",
    category: "Jewellery Appraiser",
    description:
      "Assess your knowledge of jewellery appraisal fundamentals, design concepts, and professional evaluation standards through this eligibility test.",
    image: "/images/books/1.png",
    duration: "2 Hours",
    mode: "Online Test",
    level: "Beginner",
    rating: 4.9,
    students: "2.5K+",
    price: "₹35,000",
    popular: true,
    certificate: "IIPGJA Eligibility Certificate",
    specifications: [
      { label: "Category", value: "Jewellery Appraiser" },
      { label: "Level", value: "Beginner" },
      { label: "Mode", value: "Online Test" },
      { label: "Certificate", value: "Eligibility Certificate" },
      { label: "Validity", value: "1 Year" },
      { label: "Support", value: "Email & Phone" },
    ],
    exam: {
      questions: 80,
      duration: "2 Hours",
      passingScore: "60%",
      attempts: "2 attempts",
      language: "English / Tamil",
      format: "MCQ + Practical scenarios",
      result: "Instant score + certificate on pass",
      negativeMarking: "No negative marking",
      schedule: "Available 24×7 after payment",
    },
    priceDetails: {
      amount: 35000,
      mrp: 42000,
      currency: "INR",
      taxNote: "Inclusive of GST (18%)",
      registrationFee: 2000,
      examFee: 33000,
      includes: [...sharedIncludes],
    },
    topics: [
      "Part 1 — Gold is gold",
      "Part 2 — Precious Jewelry",
      "Part 3 — Gold and Jewelry Appraiser — Pledge Banking",
      "Part 4 — Commodity — Money — Banking",
    ],
    syllabus: jewelleryAppraiserSyllabus,
    bookIds: [1],
    eligibility: [...sharedEligibility],
    importantNotes: [...sharedNotes],
  },

  {
    id: 2,
    title: "Gem Appraiser Eligibility Test",
    category: "Gem Appraiser",
    description:
      "Evaluate your understanding of gemstone identification, grading, treatments, and professional gem testing through this eligibility test.",
    image: "/images/books/2.png",
    duration: "2 Hours",
    mode: "Online Test",
    level: "Intermediate",
    rating: 4.8,
    students: "1.8K+",
    price: "₹40,000",
    popular: true,
    certificate: "IIPGJA Eligibility Certificate",
    specifications: [
      { label: "Category", value: "Gem Appraiser" },
      { label: "Level", value: "Intermediate" },
      { label: "Mode", value: "Online Test" },
      { label: "Certificate", value: "Eligibility Certificate" },
      { label: "Validity", value: "1 Year" },
      { label: "Support", value: "Email & Phone" },
    ],
    exam: {
      questions: 80,
      duration: "2 Hours",
      passingScore: "60%",
      attempts: "2 attempts",
      language: "English / Tamil",
      format: "MCQ + Identification cases",
      result: "Instant score + certificate on pass",
      negativeMarking: "No negative marking",
      schedule: "Available 24×7 after payment",
    },
    priceDetails: {
      amount: 40000,
      mrp: 48000,
      currency: "INR",
      taxNote: "Inclusive of GST (18%)",
      registrationFee: 2000,
      examFee: 38000,
      includes: [...sharedIncludes],
    },
    topics: [
      "Natural, organic, and mineral gemstones",
      "Pearl, coral, and organic gem testing",
      "Diamond properties and 4C grading",
      "Moissanite, synthetics, and detection tools",
      "Stone cutting, polishing, and quality control",
    ],
    syllabus: gemAppraiserSyllabus,
    bookIds: [2],
    eligibility: [...sharedEligibility],
    importantNotes: [...sharedNotes],
  },

  // {
  //   id: 3,
  //   title: "Gem & Jewellery Appraiser Eligibility Test",
  //   category: "Gem & Jewellery Appraiser",
  //   description:
  //     "Test your knowledge of diamond 4Cs, grading techniques, certification, and jewellery appraisal practices for professional eligibility.",
  //   image: "/images/courses/Diamond-grading.webp",
  //   duration: "2 Hours",
  //   mode: "Online Test",
  //   level: "Intermediate",
  //   rating: 4.9,
  //   students: "1.2K+",
  //   price: "₹25,000",
  //   popular: true,
  //   certificate: "Eligibility Certificate",
  //   specifications: [
  //     { label: "Category", value: "Gem & Jewellery Appraiser" },
  //     { label: "Level", value: "Intermediate" },
  //     { label: "Mode", value: "Online Test" },
  //     { label: "Certificate", value: "Eligibility Certificate" },
  //     { label: "Validity", value: "1 Year" },
  //     { label: "Support", value: "Email & Phone" },
  //   ],
  //   exam: {
  //     questions: 80,
  //     duration: "2 Hours",
  //     passingScore: "60%",
  //     attempts: "2 attempts",
  //     language: "English / Tamil",
  //     format: "MCQ + Diamond grading cases",
  //     result: "Instant score + certificate on pass",
  //     negativeMarking: "No negative marking",
  //     schedule: "Available 24×7 after payment",
  //   },
  //   priceDetails: {
  //     amount: 25000,
  //     mrp: 32000,
  //     currency: "INR",
  //     taxNote: "Inclusive of GST (18%)",
  //     registrationFee: 2000,
  //     examFee: 23000,
  //     includes: [...sharedIncludes],
  //   },
  //   topics: [
  //     "Diamond 4Cs — cut, color, clarity, carat",
  //     "Jewellery appraisal workflow",
  //     "Combined gem and metal valuation",
  //     "Certification bodies and standards",
  //     "Market pricing and documentation",
  //     "Professional appraisal report writing",
  //   ],
  //   eligibility: [...sharedEligibility],
  //   importantNotes: [...sharedNotes],
  // },
];

export function formatInr(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
