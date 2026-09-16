import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const HeroContent = () => {
  return (
    <div className="max-w-3xl text-white">
      <span className="mb-4 inline-block max-w-full rounded-full bg-yellow-400 px-3 py-2 text-xs font-semibold leading-snug text-slate-900 sm:px-4 sm:text-sm">
        Indian Institute of Precious Gem & Jewellery Appraisers
      </span>

      <h1 className="mb-6 text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
        Become a Certified
        <span className="mt-1 block text-yellow-400">
          Jewellery Appraiser & Gem Appraiser
        </span>
      </h1>

      <p className="mb-10 max-w-2xl text-lg leading-8 text-gray-200">
        Master precious gold, silver, and platinum metals through metal technology,
        designing, assaying, appraising, and business management — along with
        gemology, gemstone and diamond appearance, grading, and appraising.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
        <Link
          to="/login"
          className="group flex w-full items-center justify-center gap-3 rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4"
        >
          Apply Now
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <button
          type="button"
          className="group flex w-full items-center justify-center gap-3 rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-900 sm:w-auto sm:px-8 sm:py-4"
        >
          <FaDownload className="transition-transform duration-300 group-hover:-translate-y-1" />
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
