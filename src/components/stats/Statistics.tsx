import {
  FaUserGraduate,
  FaBookOpen,
  FaAward,
  FaBuilding,
} from "react-icons/fa";
import PageContainer from "../layout/PageContainer";

const stats = [
  {
    icon: <FaUserGraduate size={34} />,
    value: "15,000+",
    label: "Students Trained",
  },
  {
    icon: <FaBookOpen size={34} />,
    value: "25+",
    label: "Professional Courses",
  },
  {
    icon: <FaAward size={34} />,
    value: "20+",
    label: "Years Experience",
  },
  {
    icon: <FaBuilding size={34} />,
    value: "500+",
    label: "Placement Partners",
  },
];

const Statistics = () => {
  return (
    <section className="relative z-20 -mt-10 pb-12 sm:-mt-16 sm:pb-20 lg:-mt-20">
      <PageContainer>
        <div className="grid gap-4 rounded-2xl bg-white p-4 shadow-2xl sm:gap-6 sm:p-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border p-6 text-center transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center text-yellow-500">
                {item.icon}
              </div>

              <h3 className="mb-2 text-3xl font-bold text-slate-900">
                {item.value}
              </h3>

              <p className="text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};

export default Statistics;