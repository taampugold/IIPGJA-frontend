import { motion } from "framer-motion";
import {
  FaAward,
  FaBalanceScale,
  FaCoins,
  FaCopy,
  FaLandmark,
  FaReceipt,
  FaShieldAlt,
  FaFileAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import PageContainer from "../layout/PageContainer";

const sections: {
  icon: IconType;
  title: string;
  paragraphs?: string[];
  list?: string[];
  afterList?: string;
}[] = [
  {
    icon: FaBalanceScale,
    title: "Comparison of Testing Methods",
    paragraphs: [
      "These three approaches assess gold purity in different ways:",
    ],
    list: [
      "An XRF instrument can determine the purity of gold and gold jewellery only to a limited micron depth from the surface. It cannot completely identify or account for materials such as enamel, stones, antique-colour materials, pearl beads or strings, synthetic materials used in internal designs, and other metals incorporated within the jewellery (particles jewellery).",
      "A gold jewellery appraiser physically examines the jewellery, identifies and assesses enamel, stones, antique-colour materials, pearl beads or strings, synthetic materials, and other metals incorporated in the jewellery, makes the necessary deductions for such non-gold components, and then determines the gold purity based on the net gold weight.",
      "Tampu's Gold Purity Testing uses density-based testing to calculate the overall composition of the jewellery, including all materials incorporated into it, and determines the approximate gold purity based on the calculated net gold content.",
    ],
    afterList:
      "Therefore, among these three methods, Tampu's Gold Purity Density Testing can be considered a simple and non-destructive method for obtaining an approximate assessment of gold purity.",
  },
  {
    icon: FaAward,
    title: "Certificate Benefits",
    list: [
      "The Tampu's Gold Purity Testing Digital Photographic Certificate provides a record of the assessed quality and purity of gold and gold jewellery.",
      "The jewellery appraiser can compare the result shown in the certificate with the purity determined through physical appraisal.",
      "If any discrepancy is identified, the appraiser can make the necessary adjustment to the purity assessment before granting the gold loan.",
    ],
  },
  {
    icon: FaLandmark,
    title: "Official and Institutional Use",
    paragraphs: [
      "Tampu's Gold Purity Testing Digital Certificate may also be used, subject to the applicable rules and acceptance of the concerned authorities, as a photographic and digital supporting document for determining and recording the quality and estimated value of gold and gold jewellery for purposes such as Income Tax, Customs, HR&CE, and other official or institutional requirements.",
    ],
  },
  {
    icon: FaFileAlt,
    title: "Customer Record and Acknowledgement",
    list: [
      "The certificate can be provided to the customer as a digital jewellery record and acknowledgement document.",
      "It can be used as supporting documentation relating to the jewellery, subject to applicable legal and institutional requirements.",
    ],
  },
  {
    icon: FaCoins,
    title: "Use in Gold Loans",
    list: [
      "When used in gold loans provided by banks, financial institutions, and pawnshops, the certificate can provide an additional verification record.",
      "It can encourage the jewellery appraiser to perform the appraisal with greater care and responsibility.",
    ],
  },
  {
    icon: FaCopy,
    title: "Dual Document Security",
    paragraphs: [
      "For greater security in gold jewellery lending, it is beneficial for banks and lending institutions to maintain two separate documents:",
    ],
    list: [
      "Tampu's Gold Purity Testing Digital Photographic Certificate",
      "The Physical Gold Jewellery Appraisal Certificate prepared by the jewellery appraiser",
      "One Digital Photographic Certificate may be maintained as supporting evidence for the gold loan.",
      "Another copy may be provided to the customer as an acknowledgement or receipt document.",
    ],
    afterList:
      "Maintaining these two documents can provide an additional level of verification and security to banks and lending institutions when granting gold jewellery loans.",
  },
  {
    icon: FaShieldAlt,
    title: "Fraud Prevention and Inspection",
    list: [
      "The certificate can function as a digital document for surprise inspections.",
      "It can support verification procedures intended to help prevent fraud in gold jewellery loans.",
    ],
  },
  {
    icon: FaReceipt,
    title: "Customer Asset Receipt",
    list: [
      "Tampu's Gold Purity Testing Digital Certificate may be used as an acknowledgement document or asset receipt for an individual or customer in connection with the gold or gold jewellery tested.",
    ],
  },
];

const GoldTestingBenefits = () => {
  return (
    <section className="bg-[#faf9f6] py-20 md:py-24">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="font-semibold uppercase tracking-[4px] text-[#b8903d]">
            Tampu&apos;s Gold Purity Testing
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
            Benefits of Tampu&apos;s Gold Purity Testing
          </h2>

          <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
            <p className="text-2xl font-bold leading-tight text-[#b8903d] sm:text-3xl md:text-4xl lg:text-5xl">
              Digital Photographic Certificate
            </p>
            <a
              href="#gold-testing-calculator"
              className="btn-gold-flash relative inline-flex w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#b8903d] px-6 py-3 text-lg font-semibold text-white transition hover:bg-[#9c7b31] sm:w-auto sm:px-8 sm:py-4 sm:text-xl md:text-2xl"
            >
              <span className="relative z-10">Go to Gold Testing</span>
            </a>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isWide = index === 0 || index === 5;

            return (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className={`overflow-hidden rounded-xl border-[3px] border-[#c8a34d] bg-[#fffdf7] shadow-md ${
                  isWide ? "md:col-span-2" : ""
                }`}
              >
                <header className="flex items-center gap-3 bg-[#6a511e] px-5 py-3 text-white">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#b8903d] text-lg">
                    <Icon />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#f3c96b]">
                      Digital Photographic Certificate
                    </p>
                    <h3 className="text-lg font-bold leading-tight md:text-xl">
                      {section.title}
                    </h3>
                  </div>
                </header>

                <div className="space-y-4 p-5 leading-7 text-slate-700 md:p-6">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="space-y-2">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8903d]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.afterList && <p>{section.afterList}</p>}
                </div>

                <footer className="border-t border-[#c8a34d]/40 bg-[#fff8e8] px-5 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-[#9c7b31]">
                  Tampu&apos;s Gold Purity Testing
                </footer>
              </motion.article>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
};

export default GoldTestingBenefits;
