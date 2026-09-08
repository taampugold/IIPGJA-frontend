import { motion } from "framer-motion";
import { features } from "../../data/features";
import PageContainer from "../layout/PageContainer";
import FeatureCard from "./FeatureCard";

const WhyChoose = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
        >
          <span className="font-semibold uppercase tracking-[4px] text-[#b8903d]">
            Why Choose IIPGJA
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-[2.75rem]">
            Trusted Partner For
            <span className="mt-2 flex flex-col gap-2 text-[#b8903d] md:gap-3">
              <span>Jewellery Appraiser</span>
              <span>Gem Appraisal</span>
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Eligibility tests, gold testing tools, specialist books, and clear
            appraisal guidance — for precious metals, gemology, and jewellery
            evaluation.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
};

export default WhyChoose;
