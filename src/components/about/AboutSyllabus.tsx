import { motion } from "framer-motion";
import PageContainer from "../layout/PageContainer";

const AboutSyllabus = () => {
  return (
    <section className="bg-[#faf9f6] py-20 md:py-24">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-[#b8903d]">
            Syllabus & Examination
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
            New Syllabus for the Gold and Jewellery Appraiser
            <br />
            and Gem Appraiser
            <span className="mt-2 block text-[#b8903d]">
              Skill Development Eligibility Examination
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
            Considering the importance of gold and jewellery appraisers, skill
            development education and a qualification examination were organised
            for the first time in India in{" "}
            <strong className="font-semibold text-slate-900">2016</strong>.{" "}
            <strong className="font-semibold text-slate-900">
              Annamalai University Distance Education and Taampu School of
              Jewellery Appraising Management
            </strong>{" "}
            jointly organised the course, covering complete details of gold,
            silver, platinum, grades, alloy metals, quality assessment methods,
            jewellery techniques, moulding, polishing, enamel techniques,
            quality awareness and money economy, Prime Minister Shri
            Modi&apos;s gold bond schemes, gold investment schemes, the BIS Act,
            the Environment Act, the Pawnbrokers Act, the State Bank Act, the
            RBI Act, the Banking Regulation Act, the Consumer Act, and the
            Weights and Measures Act. The curriculum was established, and a
            one-year Skill Development Programme leading to certificates in{" "}
            <strong className="font-semibold text-slate-900">
              &ldquo;Diploma in Jewel Assay&rdquo;
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-slate-900">
              &ldquo;Diploma in Gem Assay&rdquo;
            </strong>{" "}
            (
            <strong className="font-semibold text-slate-900">2016–2019</strong>)
            was introduced and awarded.{" "}
            <span className="group relative inline">
              <em className="cursor-pointer font-bold text-[#b8903d] underline decoration-dotted underline-offset-4 transition hover:text-[#9c7b31]">
                (Syllabus prospectus)
              </em>
              <span
                className="invisible pointer-events-none fixed right-4 top-[10.5rem] z-40 grid w-[min(calc(100vw-2rem),36rem)] grid-cols-2 items-start gap-2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100"
                role="tooltip"
              >
                <img
                  src="/images/annamalai/1.jpeg"
                  alt="Annamalai University syllabus prospectus"
                  className="block h-[min(calc(100vh-12.5rem),26rem)] w-full object-cover object-top"
                />
                <img
                  src="/images/annamalai/2.png"
                  alt="Annamalai University syllabus prospectus"
                  className="block h-[min(calc(100vh-12.5rem),26rem)] w-full object-cover object-top"
                />
              </span>
            </span>
          </p>

          <div className="rounded-2xl border-l-4 border-[#b8903d] bg-[#fff8e8] p-6 md:p-8">
            <p>
              Today, these curricula have been updated to meet current needs.
              With the aim of developing high-quality gold, silver, and platinum
              jewellery appraisers, gem appraisers, entrepreneurs eligible for
              self-employment, and professionals eligible for employment as gold
              and jewellery appraisers and gem appraisers in various fields, the{" "}
              <strong className="font-semibold text-slate-900">
                Indian Institute of Precious Gem and Jewellery Appraiser
                (IIPGJA)
              </strong>{" "}
              <em className="text-slate-600">
                (formerly Taampu School of Jewellery Appraising Management)
              </em>{" "}
              Online Skill Development Eligibility Test —{" "}
              <strong className="font-semibold text-slate-900">
                &ldquo;Diploma in Jewel Appraiser&rdquo;
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-slate-900">
                &ldquo;Diploma in Gem Appraiser&rdquo;
              </strong>{" "}
              — has been introduced for the first time in India in{" "}
              <strong className="font-semibold text-[#9c7b31]">2026</strong>.
            </p>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
};

export default AboutSyllabus;
