const features = [
  {
    icon: "📋",
    title: "Official Assessment",
    description: "Formal IIPGJA eligibility test for your chosen stream.",
  },
  {
    icon: "🌐",
    title: "Online Test",
    description: "Online assessment will open when this test is published.",
  },
  {
    icon: "🎓",
    title: "Eligibility Certificate",
    description: "Receive a result report / eligibility certificate on qualifying.",
  },
  {
    icon: "⏱",
    title: "Timed Evaluation",
    description: "Structured test format designed for professional readiness.",
  },
  {
    icon: "💼",
    title: "Industry Relevance",
    description: "Aligned with jewellery and gem appraisal standards.",
  },
  {
    icon: "📱",
    title: "Any Device",
    description: "Access the test on mobile, tablet, or desktop.",
  },
];

const CourseFeatures = () => {
  return (
    <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Why Take This Eligibility Test?
      </h2>

      <div className="space-y-5">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex gap-4 rounded-xl border border-gray-100 p-4 transition hover:border-[#b8903d] hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6edd8] text-2xl">
              {feature.icon}
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFeatures;
