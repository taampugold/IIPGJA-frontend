import { motion } from "framer-motion";
import PageContainer from "../layout/PageContainer";

const AboutSkillsIndia = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="font-semibold uppercase tracking-[4px] text-[#b8903d]">
          Aptitude Assessment
          </span>

          <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
          Skills India
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-10 space-y-6 rounded-3xl border border-slate-200 bg-[#faf9f6] p-8 leading-8 text-slate-700 shadow-sm md:mt-12 md:p-12"
        >
          <p>
            The government&apos;s policy is{" "}
            <strong className="font-semibold text-slate-900">
              &ldquo;maximum efficiency through minimum manpower&rdquo;
            </strong>
            . Accordingly, standards have been set for the performance of
            government employees based on their skills. Integrated financial
            management is the backbone of any sector, not just the military.
          </p>

          <blockquote className="rounded-2xl border-l-4 border-[#b8903d] bg-white p-6 md:p-8">
            <p className="text-lg font-medium leading-8 text-slate-800">
              &ldquo;Maximum efficiency through minimum manpower.&rdquo;
            </p>
            <footer className="mt-4 text-sm font-semibold text-[#9c7b31]">
              — Rajnath Singh, Union Minister of Defence
            </footer>
          </blockquote>
        </motion.div>
      </PageContainer>
    </section>
  );
};

export default AboutSkillsIndia;
