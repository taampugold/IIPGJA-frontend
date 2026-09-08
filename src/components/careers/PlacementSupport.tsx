import { motion } from "framer-motion";
import {
  FaUserTie,
  FaFileAlt,
  FaComments,
  FaHandshake,
} from "react-icons/fa";
import PageContainer from "../layout/PageContainer";

const supportItems = [
  {
    icon: FaUserTie,
    title: "Career Guidance",
    description:
      "Understand career options and identify the right path based on your interests and skills.",
  },

  {
    icon: FaFileAlt,
    title: "Resume Support",
    description:
      "Get guidance to create a professional resume that highlights your industry knowledge.",
  },

  {
    icon: FaComments,
    title: "Interview Preparation",
    description:
      "Prepare for interviews with practical guidance and industry-focused preparation.",
  },

  {
    icon: FaHandshake,
    title: "Industry Connections",
    description:
      "Connect with opportunities across the jewellery and gemstone ecosystem.",
  },
];

const PlacementSupport = () => {
  return (
    <section className="bg-slate-50 py-24">

      <PageContainer>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[4px] text-yellow-600">
            Career Support
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            We Help You Move Forward
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From learning to career development, we support you throughout your
            professional journey.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {supportItems.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                className="rounded-2xl bg-white p-8 text-center shadow-lg"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-2xl text-yellow-600">

                  <Icon />

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

              </motion.div>
            );

          })}

        </div>

      </PageContainer>

    </section>
  );
};

export default PlacementSupport;