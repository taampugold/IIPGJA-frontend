import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const HeroContent = () => {
  return (
    <div className="max-w-3xl text-white">
      <span className="mb-4 inline-block rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-900">
        Indian Institute of Precious Gem & Jewellery Appraisers
      </span>

      <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
        Become a Certified
        <span className="block text-yellow-400">
          Jewellery Appraiser <br/>Gem Appraiser
        </span>
      </h1>

      <p className="mb-10 max-w-2xl text-lg leading-8 text-gray-200">
        Master precious gold, silver, and platinum metals through metal technology,
        designing, assaying, appraising, and business management — along with
        gemology, gemstone and diamond appearance, grading, and appraising.
      </p>

      <div className="flex flex-wrap gap-5">
        <Link
          to="/login"
          className="group flex items-center gap-3 rounded-lg bg-yellow-500 px-8 py-4 font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-xl"
        >
          Apply Now
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <button
          type="button"
          className="group flex items-center gap-3 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-900"
        >
          <FaDownload className="transition-transform duration-300 group-hover:-translate-y-1" />
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
