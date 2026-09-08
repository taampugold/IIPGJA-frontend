import { motion } from "framer-motion";
import { FaAward, FaBalanceScale, FaClipboardCheck } from "react-icons/fa";
import PageContainer from "../layout/PageContainer";

const AboutIntroduction = () => {
  return (
    <section className="bg-white py-24">
      <PageContainer>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-semibold uppercase tracking-[4px] text-[#b8903d]">
              Who We Are
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Qualifying Professionals Through
              <span className="block text-[#b8903d]">
                Appraisal Eligibility Tests
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              <strong className="font-semibold text-slate-900">
                The Indian Institute of Precious Gem & Jewellery Appraisers
                (IIPGJA)
              </strong>{" "}
              — formerly Taampu School of Jewellery Appraising Management —
              conducts Online Skill Development Eligibility Tests for Jewellery
              Appraisers and Gem Appraisers.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We support aspiring professionals with specialist books, gold
              testing tools, and clear appraisal guidance across precious
              metals, gemology, and jewellery evaluation — helping candidates
              qualify for self-employment and for roles in banks, hallmark
              centres, jewellery shops, pawn brokers, and related government
              sectors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 flex flex-col gap-5 lg:mt-16 lg:w-full lg:max-w-md lg:justify-self-end"
          >
            <div className="rounded-xl bg-[#faf9f6] p-5">
              <FaClipboardCheck className="text-3xl text-[#b8903d]" />
              <h3 className="mt-3 font-bold text-slate-900">Online</h3>
              <p className="mt-1 text-sm text-slate-600">Eligibility Tests</p>
            </div>

            <div className="rounded-xl bg-[#faf9f6] p-5">
              <FaAward className="text-3xl text-[#b8903d]" />
              <h3 className="mt-3 font-bold text-slate-900">IIPGJA</h3>
              <p className="mt-1 text-sm text-slate-600">
                Eligibility Certificate
              </p>
            </div>

            <div className="rounded-xl bg-[#faf9f6] p-5">
              <FaBalanceScale className="text-3xl text-[#b8903d]" />
              <h3 className="mt-3 font-bold text-slate-900">Gold</h3>
              <p className="mt-1 text-sm text-slate-600">Testing Tools</p>
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
};

export default AboutIntroduction;
