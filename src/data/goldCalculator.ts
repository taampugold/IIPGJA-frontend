export interface PurityRange {
  minDensity: number;
  maxDensity: number;
  karat: string;
  touch: string;
  purity: string;
  status: string;
  color: string;
}

export interface CalculatorFeature {
  id: number;
  title: string;
  description: string;
}

export interface GoldTestingStep {
  id: number;
  title: string;
  description: string | string[];
}

export const calculatorHero = {
  title: "TAMPU GOLD PURITY TESTING",
  subtitle:
    "Calculate the approximate purity of gold using the Density Method. Enter the weight in air and water to estimate the Purity Percentage (Carat, Touch).",
};

export const calculatorFormula = {
  title: "Density Formula",
  formula: "Density = Weight in Air ÷ (Weight in Air − Weight in Water)",
};

export const purityTable: PurityRange[] = [
  {
    minDensity: 19.2,
    maxDensity: 19.5,
    karat: "24K",
    touch: "999",
    purity: "99.9%",
    status: "Pure Gold",
    color: "green",
  },
  {
    minDensity: 17.7,
    maxDensity: 19.19,
    karat: "22K",
    touch: "916",
    purity: "91.6%",
    status: "916 Gold",
    color: "emerald",
  },
  {
    minDensity: 16.5,
    maxDensity: 17.69,
    karat: "21K",
    touch: "875",
    purity: "87.5%",
    status: "875 Gold",
    color: "blue",
  },
  {
    minDensity: 15.3,
    maxDensity: 16.49,
    karat: "18K",
    touch: "750",
    purity: "75%",
    status: "750 Gold",
    color: "yellow",
  },
  {
    minDensity: 13,
    maxDensity: 15.29,
    karat: "14K",
    touch: "585",
    purity: "58.5%",
    status: "585 Gold",
    color: "orange",
  },
  {
    minDensity: 0,
    maxDensity: 12.99,
    karat: "Below Standard",
    touch: "-",
    purity: "-",
    status: "Not Gold / Heavy Alloy",
    color: "red",
  },
];

export const calculatorFeatures: CalculatorFeature[] = [
  {
    id: 1,
    title: "Instant Calculation",
    description:
      "Get immediate density and purity estimates after entering the measurements.",
  },
  {
    id: 2,
    title: "Professional Formula",
    description:
      "Uses the standard density calculation method widely used in the jewellery industry.",
  },
  {
    id: 3,
    title: "Educational Tool",
    description:
      "Suitable for students, jewellers, appraisers and training institutes.",
  },
];

export const calculatorDisclaimer = `
The Gold Density Calculator provides an approximate purity estimation based on density.
Results may vary depending on alloy composition, stones, cavities,
manufacturing process and measurement accuracy.
Always verify valuable jewellery using certified testing methods.
`;

export const goldTestingSteps: GoldTestingStep[] = [
  {
    id: 1,
    title: "Difference in Gold Quality in Electronic Scale Weight",
    description: [
      "0.0000 - Scale accuracy is 100%",
      "0.000 - Scale accuracy is 99.5%",
      "0.00 - Scale accuracy is 99%",
    ],
  },
  {
    id: 2,
    title: "Measure Air Weight",
    description:
      "Measure the gold sample weight in air using a calibrated electronic weighing scale.",
  },
  {
    id: 3,
    title: "Measure Water Weight",
    description:
      "Measure the apparent weight of the same gold sample while immersed in purified water.",
  },
  {
    id: 4,
    title: "Enter Gold Alloy Colour Value",
    description:
      "Enter the observed gold alloy colour value (eg.Yellow, White, Brown).",
  },
  {
    id: 5,
    title: "Get Gold Purity",
    description:
      "The calculator estimates the approximate gold purity (Touch / Karat) instantly.",
  },
];