import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import PageContainer from "../layout/PageContainer";

const CareerCTA = () => {
  return (
    <section className="bg-white py-24">

      <PageContainer>

        <div className="rounded-[32px] bg-slate-900 px-8 py-16 text-center md:px-16">

          <span className="font-semibold uppercase tracking-[4px] text-yellow-400">
            Your Future Starts Here
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Ready to Build Your Career?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Start your journey today and gain the skills needed to succeed in
            the jewellery, diamond, and gemstone industry.
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
              Register Now
            </Link>

          </div>

        </div>

      </PageContainer>

    </section>
  );
};

export default CareerCTA;