import { partners } from "../../data/partners";
import PageContainer from "../layout/PageContainer";

const Partners = () => {
  return (
    <section className="overflow-hidden bg-slate-50 py-20">
      <PageContainer>
        {/* Heading */}

        <div className="mb-12 text-center">
          <span className="font-semibold uppercase tracking-[4px] text-yellow-600">
            Placement Partners
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Trusted By Leading Jewellery Brands
          </h2>

          <p className="mt-4 text-gray-600">
            500+ Companies Recruit Our Students
          </p>
        </div>
      </PageContainer>

      {/* Moving Logos */}

      <div className="relative w-full overflow-hidden">

        <div className="animate-partner-slide flex w-max items-center gap-16">

          {/* First Set */}

          {partners.map((partner) => (
            <div
              key={`first-${partner.id}`}
              className="flex h-28 w-48 shrink-0 items-center justify-center px-6"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 max-w-[160px] object-contain opacity-80 transition duration-300 hover:scale-110 hover:opacity-100"
              />
            </div>
          ))}

          {/* Duplicate Set */}

          {partners.map((partner) => (
            <div
              key={`second-${partner.id}`}
              className="flex h-28 w-48 shrink-0 items-center justify-center px-6"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 max-w-[160px] object-contain opacity-80 transition duration-300 hover:scale-110 hover:opacity-100"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Partners;