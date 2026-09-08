import { motion } from "framer-motion";
import {
  FaGem,
  FaPencilRuler,
  FaSearch,
  FaCertificate,
  FaStore,
  FaChartLine,
} from "react-icons/fa";
import PageContainer from "../layout/PageContainer";

const opportunities = [
  {
    icon: FaPencilRuler,
    title: "Jewellery Designer",
    description:
      "Create innovative jewellery designs for brands, manufacturers, and independent businesses.",
  },

  {
    icon: FaGem,
    title: "Gemologist",
    description:
      "Identify, evaluate, and assess gemstones across jewellery and gemological organizations.",
  },

  {
    icon: FaSearch,
    title: "Diamond Grader",
    description:
      "Work with diamonds and evaluate their quality based on industry grading standards.",
  },

  {
    icon: FaCertificate,
    title: "Jewellery Appraiser",
    description:
      "Evaluate jewellery and precious assets for valuation, insurance, and financial purposes.",
  },

  {
    icon: FaStore,
    title: "Jewellery Consultant",
    description:
      "Guide customers and businesses in selecting jewellery, gemstones, and precious products.",
  },

  {
    icon: FaChartLine,
    title: "Jewellery Business Manager",
    description:
      "Build a career in jewellery retail, sales, operations, and business management.",
  },
];

const CareerOpportunities = () => {
  return (
    <section className="bg-slate-50 py-24">

      <PageContainer>

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[4px] text-yellow-600">
            Career Paths
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Explore Your Career Opportunities
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our programs prepare you for a wide range of professional
            opportunities across the jewellery and gemstone industry.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {opportunities.map((opportunity, index) => {

            const Icon = opportunity.icon;

            return (
              <motion.div
                key={opportunity.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-2xl text-yellow-600 transition group-hover:bg-yellow-500 group-hover:text-white">

                  <Icon />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {opportunity.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {opportunity.description}
                </p>

              </motion.div>
            );

          })}

        </div>

      </PageContainer>

    </section>
  );
};

export default CareerOpportunities;