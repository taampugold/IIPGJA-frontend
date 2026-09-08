import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import PageContainer from "../layout/PageContainer";

const CareersHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 py-24 text-white md:py-32">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-500/20 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

      <PageContainer fullWidth className="relative z-10">

        <div className="mx-auto max-w-4xl text-center">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <span className="font-semibold uppercase tracking-[4px] text-yellow-400">
              Career Opportunities
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">

              Build Your Future in the

              <span className="block text-yellow-400">
                Jewellery Industry
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Gain the knowledge, skills, and industry recognition needed to
              build a successful career in jewellery, diamonds, gemstones,
              and precious metals.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                to="/courses"
                className="group flex items-center gap-3 rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-400"
              >
                Explore Courses

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/register"
                className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Start Your Journey
              </Link>

            </div>

          </motion.div>

        </div>

      </PageContainer>

    </section>
  );
};

export default CareersHero;