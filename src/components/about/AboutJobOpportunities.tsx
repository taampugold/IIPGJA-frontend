import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaUniversity,
  FaLandmark,
  FaBalanceScale,
  FaStore,
  FaHandshake,
  FaCoins,
  FaCertificate,
  FaUserTie,
} from "react-icons/fa";
import PageContainer from "../layout/PageContainer";

const opportunities = [
  {
    icon: FaUserTie,
    title: "Self-Employment",
    description: "Independent Gold & Jewellery Appraiser practice",
  },
  {
    icon: FaBalanceScale,
    title: "Income Tax",
    description: "Appraisal support roles in tax-related valuation",
  },
  {
    icon: FaLandmark,
    title: "Customs and Central Excise",
    description: "Gold and jewellery assessment in customs and central excise departments",
  },
  {
    icon: FaCertificate,
    title: "HR & CE Department",
    description:
      "Hindu Religious & Charitable Endowments — temple jewellery valuation",
  },
  {
    icon: FaUniversity,
    title: "Banks and Co-operative Banks",
    description: "Gold loan appraisal and collateral assessment in banks and co-operative banks",
  },
  {
    icon: FaCoins,
    title: "Hallmark Centres",
    description: "Purity testing and hallmarking-related appraisal work",
  },
  {
    icon: FaStore,
    title: "Jewellery Shops",
    description: "In-store appraisal, buying, and quality evaluation",
  },
  {
    icon: FaBriefcase,
    title: "Pawn Brokers",
    description: "Gold pledge valuation and recovery assessment",
  },
  {
    icon: FaCoins,
    title: "Gold Financial Institutions",
    description: "Appraisal roles in gold finance and investment firms",
  },
];

const AboutJobOpportunities = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-[#b8903d]">
            Career Pathways
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            Job Opportunities
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Self-employment opportunities for gold appraisers, along with
            employment across government departments, banks, hallmark centres,
            jewellery shops, pawn brokers, and gold financial institutions.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group rounded-2xl border border-slate-200 bg-[#faf9f6] p-6 transition duration-300 hover:border-[#b8903d]/50 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b8903d] text-lg text-white transition group-hover:bg-[#9c7b31]">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
};

export default AboutJobOpportunities;
