import { motion } from "framer-motion";
import { steps } from "../../data/steps";
import PageContainer from "../layout/PageContainer";
import StepCard from "./StepCard";

const HowItWorks = () => {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-24">
      <PageContainer>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-20"
        >
          <span className="font-semibold uppercase tracking-[4px] text-yellow-600">
            Process
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            How It Works
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Start your jewellery education journey in just four simple steps.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-yellow-100 lg:block" />

          {/* Animated Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2 }}
            className="absolute left-1/2 top-0 hidden w-1 -translate-x-1/2 rounded-full bg-yellow-500 lg:block"
          />

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.25,
                }}
              >
                <StepCard
                  step={step}
                  reverse={index % 2 !== 0}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <button className="w-full rounded-full bg-yellow-500 px-10 py-4 text-lg font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-xl sm:w-auto">
            Start Your Journey
          </button>
        </motion.div>
      </PageContainer>
    </section>
  );
};

export default HowItWorks;