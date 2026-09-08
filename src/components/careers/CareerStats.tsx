import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaBuilding,
  FaChartLine,
} from "react-icons/fa";
import PageContainer from "../layout/PageContainer";

const stats = [
  {
    icon: FaGraduationCap,
    value: "500+",
    label: "Students Trained",
  },
  {
    icon: FaBriefcase,
    value: "90%",
    label: "Career Assistance",
  },
  {
    icon: FaBuilding,
    value: "50+",
    label: "Industry Connections",
  },
  {
    icon: FaChartLine,
    value: "100%",
    label: "Industry-Focused Learning",
  },
];

const CareerStats = () => {
  return (
    <section className="bg-white py-20">

      <PageContainer>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center"
              >

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-xl text-yellow-600">

                  <Icon />

                </div>

                <h3 className="mt-5 text-3xl font-bold text-slate-900">
                  {stat.value}
                </h3>

                <p className="mt-2 text-slate-600">
                  {stat.label}
                </p>

              </motion.div>
            );

          })}

        </div>

      </PageContainer>

    </section>
  );
};

export default CareerStats;