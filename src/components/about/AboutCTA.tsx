import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageContainer from "../layout/PageContainer";

const AboutCTA = () => {
  return (
    <section className="bg-slate-50 py-24">
      <PageContainer>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-white p-10 text-center shadow-xl md:p-16"
        >
          {/* Decorative Element */}

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-100 blur-3xl" />

          <div className="relative z-10">

            <span className="font-semibold uppercase tracking-[4px] text-yellow-600">
              Begin Your Journey
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Ready to Take the Next Step?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
              Explore our eligibility tests and take the next step towards a
              successful career in jewellery and gem appraisal.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/courses"
                className="group flex items-center gap-3 rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-400"
              >
                Explore Tests
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border-2 border-slate-300 px-8 py-4 font-semibold text-slate-800 transition hover:border-yellow-500 hover:bg-yellow-50"
              >
                Contact Us
              </Link>

            </div>

          </div>
        </motion.div>

      </PageContainer>
    </section>
  );
};

export default AboutCTA;