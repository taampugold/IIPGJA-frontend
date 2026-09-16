import { goldTestingSteps } from "../../data/goldCalculator";
import PageContainer from "../layout/PageContainer";

const GoldTestingSteps = () => {
  return (
    <section id="how-it-works" className="bg-[#faf9f6] py-12 sm:py-20">
      <PageContainer>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">
            How Gold Purity Testing Works
          </h2>

          <p className="mx-auto mt-5 max-w-5xl text-xl leading-8 text-gray-600">
            Follow these five simple steps to estimate the purity of your gold
            using the Density Method.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {goldTestingSteps.map((step) => (
            <div
              key={step.id}
              className="group relative rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:border-[#b8903d] hover:shadow-xl"
            >
              {/* Number */}
              <div className="absolute -top-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#b8903d] text-sm font-bold text-white shadow-lg">
                {step.id}
              </div>

              <div className="mt-7">
                <h3 className="text-lg font-bold leading-5 text-gray-900">
                  {step.title}
                </h3>

                {Array.isArray(step.description) ? (
                  <ul className="mt-3 list-disc space-y-1 pl-4 text-base leading-5 text-gray-600">
                    {step.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-base leading-5 text-gray-600">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Information */}
        {/* <div className="mt-20 rounded-3xl bg-[#081c24] p-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Accurate Results Start with Accurate Measurements
          </h3>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-gray-300">
            Ensure that the weighing scale is calibrated correctly and the
            sample is completely immersed without touching the container.
            Following the proper procedure will provide more reliable density
            calculations.
          </p>
        </div> */}
      </PageContainer>
    </section>
  );
};

export default GoldTestingSteps;