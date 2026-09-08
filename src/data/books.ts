export type BookLanguage = "Tamil" | "English";
export type BookFormatType = "Printed Book" | "e-Book";
export type BookStockStatus = "In stock" | "Out of stock";

export interface BookFormat {
  type: BookFormatType;
  price: number;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  description: string;
  about: string[];
  image: string;
  rating: number;
  reviewCount: number;
  stock: BookStockStatus;
  languages: BookLanguage[];
  formats: BookFormat[];
}

export const books: Book[] = [
  {
    id: 1,
    title:
      "Professional Gold Smithing Jewellery Technology and Appraisal & Pledge Banking",
    author: "TAMPU R. Vijayaraghavan",
    category: "Tampu publication",
    description:
      "Classical and modern goldsmithing technical book covering jewellery technology, appraisal, and pledge banking.",
    about: [
      "This technical handbook explains classical and modern goldsmithing methods used in the jewellery industry. It covers jewellery technology, design-related craft practices, and professional appraisal approaches for gold ornaments.",
      "Readers also learn pledge banking concepts connected to gold valuation, helping jewellers, appraisers, and banking professionals apply accurate assessment methods in real workplace situations.",
      "Prepared by TAMPU R. Vijayaraghavan, the book is useful for eligibility test preparation, workshop learning, and day-to-day professional reference.",
    ],
    image: "/images/books/1.png",
    rating: 4.9,
    reviewCount: 112,
    stock: "In stock",
    languages: ["Tamil", "English"],
    formats: [
      { type: "Printed Book", price: 4000 },
      { type: "e-Book", price: 3000},
    ],
  },
  {
    id: 2,
    title: "Gemologic — Gemstone Assessing & Testing",
    author: "TAMPU R. Vijayaraghavan",
    category: "Tampu publication",
    description:
      "Guide to gemstone assessing and testing, covering identification, evaluation, and practical gemology methods.",
    about: [
      "Gemologic introduces the fundamentals of gemstone assessing and testing for learners who want a clear understanding of gem identification and evaluation.",
      "The book explains practical gemology methods used to examine stones, understand quality indicators, and support professional appraisal decisions.",
      "It is especially helpful for gem appraisers, jewellery professionals, and students preparing for IIPGJA gem-related eligibility assessments.",
    ],
    image: "/images/books/2.png",
    rating: 4.8,
    reviewCount: 64,
    stock: "In stock",
    languages: ["Tamil", "English"],
    formats: [
      { type: "Printed Book", price: 2000},
      { type: "e-Book", price: 1500 },
    ],
  },
  {
    id: 3,
    title: "தமிழ் பெருவெழுத்துகள் — Tamil Script & Number Reforms",
    author: "TAMPU R. Vijayaraghavan",
    category: "Tampu publication",
    description:
      "Reference on Tamil script form grammar and reformed Tamil number systems, prepared by TAMPU R. Vijayaraghavan.",
    about: [
      "This publication presents Tamil script form grammar and proposed reforms to Tamil character shapes and number systems.",
      "It includes clear tables and examples that help readers understand reformed letter forms, phonetic mappings, and numerical naming patterns.",
      "Ideal for language learners, researchers, and readers interested in Tamil orthography and educational reform materials from TAMPU publications.",
    ],
    image: "/images/books/3.png",
    rating: 4.5,
    reviewCount: 28,
    stock: "In stock",
    languages: ["Tamil"],
    formats: [
      { type: "Printed Book", price: 400 },
      { type: "e-Book", price: 300 },
    ],
  },
  {
    id: 4,
    title: "Purity Gold Standards",
    author: "TAMPU R. Vijayaraghavan",
    category: "Tampu publication",
    description:
      "Reference on purity gold standards including 10 Mattru, 24 Carat, 16 Anna, Chukkam, 96 Zolotnik, and 99.9 Gold.",
    about: [
      "Purity Gold Standards explains traditional and modern gold purity systems used across jewellery trade and appraisal work.",
      "It covers standards such as 10 Mattru Gold, 24 Carat Gold, 16 Anna Gold, Chukkam Gold, 96 Zolotnik Gold, and 99.9 Gold, with supporting historical and technical context.",
      "This book is a practical reference for goldsmiths, hallmarking professionals, appraisers, and anyone who needs clarity on gold purity measurement.",
    ],
    image: "/images/books/4.png",
    rating: 4.8,
    reviewCount: 80,
    stock: "In stock",
    languages: ["Tamil", "English"],
    formats: [
      { type: "Printed Book", price: 400 },
      { type: "e-Book", price: 300 },
    ],
  },
  {
    id: 5,
    title: "தங்கம் தங்கம் தான்!",
    author: "R. Vijayaraghavan (TAMPU)",
    category: "Tampu publication",
    description:
      "Practical guide on gold, platinum, silver, and jewellery — covering purity, industry practices, and appraisal guidance.",
    about: [
      "தங்கம் தங்கம் தான்! is a practical Tamil guide focused on gold and jewellery knowledge for everyday industry understanding.",
      "It discusses purity concepts, jewellery practices, and appraisal-related guidance connected to gold, platinum, and silver items.",
      "Written by R. Vijayaraghavan (TAMPU), this book is suitable for jewellers, learners, and readers who want clear Tamil explanations of precious metal concepts.",
    ],
    image: "/images/books/5.png",
    rating: 4.6,
    reviewCount: 55,
    stock: "In stock",
    languages: ["Tamil"],
    formats: [
      { type: "Printed Book", price: 200 }
    ],
  },
  {
    id: 6,
    title:
      "Professional of Goldsmithing and Jewellery Assaying & Banking",
    author: "R. Vijayaraghavan",
    category: "Tampu publication",
    description:
      "Professional handbook on goldsmithing, jewellery assaying, and banking practices for appraisers, jewellers, and pledge banking professionals.",
    about: [
      "This professional handbook covers goldsmithing practices together with jewellery assaying and banking-related valuation methods.",
      "It supports appraisers, jewellers, and pledge banking professionals who need reliable guidance for assessing gold and jewellery in commercial settings.",
      "Use it as a workplace reference or study companion for building stronger practical skills in assaying and gold-related banking operations.",
    ],
    image: "/images/books/6.png",
    rating: 4.8,
    reviewCount: 73,
    stock: "In stock",
    languages: ["Tamil", "English"],
    formats: [
      { type: "Printed Book", price: 2000 },
      { type: "e-Book", price: 1500},
    ],
  },
  {
    id: 7,
    title: "Gold Encyclopaedia (தங்கம் தங்கம் தான்!)",
    author: "R. Vijayaraghavan (TAMPU)",
    category: "Tampu publication",
    description:
      "Comprehensive encyclopaedia on gold purity, jewellery industry practices, platinum, silver, and navaratna gemstones.",
    about: [
      "Gold Encyclopaedia (தங்கம் தங்கம் தான்!) is a comprehensive reference on gold purity, jewellery industry practices, and related precious materials.",
      "It covers topics connected to platinum, silver, and navaratna gemstones, helping readers understand quality, industry usage, and appraisal-related knowledge.",
      "This encyclopaedia-style publication is ideal for serious learners, jewellery professionals, and readers seeking a broad TAMPU reference on gold and jewellery.",
    ],
    image: "/images/books/7.png",
    rating: 4.7,
    reviewCount: 41,
    stock: "In stock",
    languages: ["Tamil", "English"],
    formats: [
      { type: "Printed Book", price: 500},
     
    ],
  },
];
