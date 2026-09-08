import { motion } from "framer-motion";
import {
  FaAward,
  FaBalanceScale,
  FaBullhorn,
  FaCoins,
  FaChartLine,
} from "react-icons/fa";
import PageContainer from "../layout/PageContainer";

const benefits = [
  {
    icon: FaAward,
    title: "Employment Qualification",
    text: (
      <>
        The{" "}
        <strong className="font-semibold text-slate-900">
          &ldquo;Diploma in Jewel Appraiser&rdquo;
        </strong>{" "}
        and{" "}
        <strong className="font-semibold text-slate-900">
          &ldquo;Diploma in Gem Appraiser&rdquo;
        </strong>{" "}
        certificates can be used as a qualification for employment, as an
        additional qualification, or as a preferential qualification. This helps
        create better-qualified company employees and professional gold and
        jewellery appraisers, and supports stronger workplace management.
      </>
    ),
  },
  {
    icon: FaBalanceScale,
    title: "Industry Regulation",
    text: (
      <>
        Hallmark centres, pawn brokers, jewellery manufacturers, and jewellery
        shops can be regulated and brought under a controlled system. Legal
        violations and environmental impact can also be reduced under the{" "}
        <strong className="font-semibold text-slate-900">
          Swachh Bharat Mission
        </strong>
        .
      </>
    ),
  },
  {
    icon: FaBullhorn,
    title: "Consumer Awareness",
    text: (
      <>
        Awareness can be raised about the billions of rupees lost by consumers
        through the sale of substandard gold jewellery that government systems
        alone cannot fully control.
      </>
    ),
  },
  {
    icon: FaCoins,
    title:"PM's sovereign gold bond & Savings Awareness",
    text: (
      <>
        Public awareness can be increased about small savings schemes offered by
        jewellery shops that are prone to fraud, while encouraging investment in
        the{" "}
        <strong className="font-semibold text-slate-900">
          Prime Minister&apos;s Gold Bond Scheme
        </strong>
        . This can reduce gold imports and save several thousand crores of
        rupees in foreign exchange.
      </>
    ),
  },
  {
    icon: FaChartLine,
    title: "Employment & Economic Progress",
    text: (
      <>
        Skill development can also create employment, increase government
        revenue, and contribute to the country&apos;s economic progress.
      </>
    ),
  },
];

const AboutCertificateBenefits = () => {
  return (
    <section className="bg-[#faf9f6] py-20 md:py-24">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-[#b8903d]">
            Certificate Benefits
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
            IIPGJA Skill Development
            <span className="mt-2 block text-[#b8903d]">
              Eligibility Test Certificate Benefits
            </span>
          </h2>
        </motion.div>

        <div className="mt-12 space-y-5">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:gap-6 md:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b8903d] text-xl text-white">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-8 text-slate-700">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
};

export default AboutCertificateBenefits;
