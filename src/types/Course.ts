export interface CourseExamDetails {
  questions: number;
  duration: string;
  passingScore: string;
  attempts: string;
  language: string;
  format: string;
  result: string;
  negativeMarking: string;
  schedule: string;
}

export interface CourseSpecification {
  label: string;
  value: string;
}

export interface CoursePriceDetails {
  amount: number;
  mrp: number;
  currency: string;
  taxNote: string;
  includes: string[];
  registrationFee: number;
  examFee: number;
}

export interface SyllabusUnit {
  number: number;
  title: string;
}

export interface SyllabusPart {
  id: number;
  title: string;
  units: SyllabusUnit[];
}

export interface Course {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  duration: string;
  mode: string;
  level: string;
  rating: number;
  students: string;
  price: string;
  popular?: boolean;
  certificate?: string;
  specifications: CourseSpecification[];
  exam: CourseExamDetails;
  priceDetails: CoursePriceDetails;
  topics: string[];
  eligibility: string[];
  importantNotes: string[];
  syllabus?: SyllabusPart[];
}
