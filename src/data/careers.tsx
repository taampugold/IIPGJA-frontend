export interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  skills: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: "Gemology Faculty",
    department: "Academic",
    location: "Chennai / Remote",
    type: "Full Time",
    experience: "3+ Years Experience",
    description:
      "We are looking for an experienced gemology professional to train and mentor students through practical and theoretical learning.",
    skills: [
      "Gemology",
      "Gemstone Identification",
      "Teaching",
      "Industry Experience",
    ],
  },

  {
    id: 2,
    title: "Jewellery Design Faculty",
    department: "Academic",
    location: "Chennai / Remote",
    type: "Full Time",
    experience: "3+ Years Experience",
    description:
      "Join our academic team and help students build strong foundations in jewellery design and the jewellery industry.",
    skills: [
      "Jewellery Design",
      "CAD",
      "Design Principles",
      "Teaching",
    ],
  },

  {
    id: 3,
    title: "Admissions Counsellor",
    department: "Admissions",
    location: "Chennai",
    type: "Full Time",
    experience: "1+ Years Experience",
    description:
      "Help aspiring students choose the right jewellery education programs and guide them throughout the admission process.",
    skills: [
      "Communication",
      "Student Counselling",
      "Sales",
      "Customer Relationship",
    ],
  },

  {
    id: 4,
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Remote",
    type: "Full Time",
    experience: "2+ Years Experience",
    description:
      "Create and execute digital marketing strategies to grow the IIPGJA brand and reach aspiring jewellery professionals.",
    skills: [
      "Digital Marketing",
      "Social Media",
      "SEO",
      "Content Marketing",
    ],
  },
];