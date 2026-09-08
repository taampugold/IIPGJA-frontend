import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { services } from "../../data/services";
import PageContainer from "../layout/PageContainer";

const ServicesGrid = () => {
  return (
    <section id="services-list" className="bg-[#faf9f6] py-20">
      <PageContainer>
        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-[4px] text-[#b8903d]">
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Our Core Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Six focused services designed for jewellery customers,
            professionals, and learners.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`flex flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${
                index === services.length - 1 && services.length % 3 === 2
                  ? "md:col-span-2 xl:col-span-1"
                  : ""
              }`}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff8e8] text-lg font-bold text-[#b8903d]">
                {String(service.id).padStart(2, "0")}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-slate-800">
                {service.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-gray-600">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span className="mt-1 text-[#b8903d]">✓</span>
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                to={service.link}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-[#b8903d] transition hover:gap-3"
              >
                {service.linkLabel}
                <FaArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};

export default ServicesGrid;
