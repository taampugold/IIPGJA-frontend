import { motion } from "framer-motion";
import PageContainer from "../layout/PageContainer";

const sectors = [
  "Jewellery Manufacturing",
  "Diamond Industry",
  "Gemstone Industry",
  "Jewellery Retail",
  "Precious Metals",
  "Jewellery Appraisal",
  "Banks & Financial Institutions",
  "Independent Business",
];

const IndustrySectors = () => {
  return (
    <section className="bg-white py-24">

      <PageContainer>

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Content */}

          <div>

            <span className="font-semibold uppercase tracking-[4px] text-yellow-600">
              Industry Opportunities
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Work Across a Wide Range of Industry Sectors
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The jewellery industry offers diverse career opportunities across
              manufacturing, retail, appraisal, design, gemstones, diamonds,
              and business management.
            </p>

          </div>

          {/* Sectors */}

          <div className="grid gap-4 sm:grid-cols-2">

            {sectors.map((sector, index) => (

              <motion.div
                key={sector}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="rounded-xl border border-slate-100 bg-slate-50 p-5 font-semibold text-slate-700 transition hover:border-yellow-400 hover:bg-yellow-50"
              >

                <span className="mr-3 text-yellow-500">
                  ✦
                </span>

                {sector}

              </motion.div>

            ))}

          </div>

        </div>

      </PageContainer>

    </section>
  );
};

export default IndustrySectors;