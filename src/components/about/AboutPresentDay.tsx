import { motion } from "framer-motion";
import PageContainer from "../layout/PageContainer";

const AboutPresentDay = () => {
  return (
    <section className="bg-[#faf9f6] py-20 md:py-24">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="font-semibold uppercase tracking-[4px] text-[#b8903d]">
            Industry Context
          </span>

          <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
            Present-Day
            <span className="mt-2 block text-[#b8903d]">
              Gold and Jewellery Appraisers
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-10 space-y-6 rounded-3xl border border-slate-200 bg-white p-8 leading-8 text-slate-700 shadow-sm md:mt-12 md:p-12"
        >
          <p>
            Prior to{" "}
            <strong className="font-semibold text-slate-900">2001</strong>,
            people working in the traditional gold industry were familiar with
            the quality of the jewellery they made and relied on in-house skills
            and experience. As a result, only those with industry experience
            were appointed as gold jewellery appraisers in various fields —
            usually without formal educational qualifications.
          </p>

          <p>
            After{" "}
            <strong className="font-semibold text-slate-900">2001</strong>,
            traditional practices in the gold industry changed completely.
            Today, <strong className="font-semibold text-slate-900">goldsmiths </strong> with limited experience work across more than{" "}
            <strong className="font-semibold text-slate-900">
              20 separate industry sectors
            </strong>
            . Various alloy metals are added to gold, and craftsmanship is often
            of poor quality. <strong className="font-semibold text-slate-900"> Goldsmiths and others who hold only ashort training
            certificate in gold and jewellery appraiser and lack professional skills are employed in many
            sectors, creating serious problems for management.</strong> 
          </p>
        </motion.div>
      </PageContainer>
    </section>
  );
};

export default AboutPresentDay;
