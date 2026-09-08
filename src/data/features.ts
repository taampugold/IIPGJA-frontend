import {
  FaUserTie,
  FaLaptopHouse,
  FaCertificate,
  FaBalanceScale,
  FaBookOpen,
  FaHeadset,
} from "react-icons/fa";

import { Feature } from "../types/Feature";

export const features: Feature[] = [
  {
    id: 1,
    title: "Appraisal Expertise",
    description:
      "Industry standards for jewellery, gem, and precious-metal appraisal.",
    icon: FaUserTie,
  },
  {
    id: 2,
    title: "Online Eligibility Tests",
    description:
      "Jewellery and gem appraiser tests you can take online, anytime.",
    icon: FaLaptopHouse,
  },
  {
    id: 3,
    title: "Eligibility Certificate",
    description:
      "IIPGJA certificate issued when you successfully qualify.",
    icon: FaCertificate,
  },
  {
    id: 4,
    title: "Gold & Metal Testing",
    description:
      "Tools for purity, density, and appraisal-related calculations.",
    icon: FaBalanceScale,
  },
  {
    id: 5,
    title: "Specialist Books",
    description:
      "Professional books on goldsmithing, gemology, and hallmarking.",
    icon: FaBookOpen,
  },
  {
    id: 6,
    title: "Guided Support",
    description:
      "Clear help with tests, fees, registration, and next steps.",
    icon: FaHeadset,
  },
];
