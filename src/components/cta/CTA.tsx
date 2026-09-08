import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import PageContainer from "../layout/PageContainer";

const features = [
  "Online Eligibility Tests",
  "Appraisal Expertise",
  "Specialist Books",
  "Gold Testing Tools",
];

const stats = [
  { value: "2", label: "Eligibility Tests" },
  { value: "100%", label: "Online Assessment" },
  { value: "IIPGJA", label: "Certified Result" },
  { value: "24/7", label: "Test Access Window" },
];

const CTA = () => {
  return (
    <section className="bg-[#faf9f6] py-20 md:py-24">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-[#b8903d]/20 bg-white px-8 py-12 shadow-xl md:px-16 md:py-16"
        >
          <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#b8903d]/10 blur-3xl" />
          <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[#b8903d]/10 blur-3xl" />

          <div className="relative z-10 text-center">
            <span className="inline-block rounded-full bg-[#b8903d]/15 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#9c7b31]">
              Eligibility Tests Open
            </span>

            <h2 className="mt-8 text-3xl font-bold text-slate-900 md:text-5xl">
              Ready To Qualify As A
              <span className="mt-2 block text-[#b8903d]">
                Jewellery Or Gem Appraiser?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Take IIPGJA eligibility tests online, access specialist books and
              gold testing tools, and earn your eligibility certificate when you
              qualify — built for precious metals, gemology, and jewellery
              appraisal professionals.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-[#faf9f6] px-5 py-3"
                >
                  <FaCheckCircle className="text-[#b8903d]" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-5">
              <Link
                to="/login"
                className="group flex items-center gap-3 rounded-xl bg-[#b8903d] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#9c7b31]"
              >
                Apply Now
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="group flex items-center gap-3 rounded-xl border-2 border-slate-300 px-8 py-4 font-semibold text-slate-800 transition-all duration-300 hover:border-[#b8903d] hover:bg-[#b8903d]/10 hover:text-[#9c7b31]"
              >
                <FaPhoneAlt className="transition-transform duration-300 group-hover:rotate-12" />
                Contact for Enquiry
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-slate-100 pt-10 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-2xl font-bold text-[#b8903d] md:text-3xl">
                    {stat.value}
                  </h3>
                  <p className="mt-2 text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
};

export default CTA;
