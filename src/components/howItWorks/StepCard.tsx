import { motion } from "framer-motion";
import { Step } from "../../types/Step";

interface Props {
  step: Step;
  reverse?: boolean;
}

const StepCard = ({ step, reverse }: Props) => {
  return (
    <div
      className={`relative flex flex-col items-center gap-10 lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Left */}
      <div className="w-full lg:w-5/12">
        <div className="rounded-2xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <h3 className="mb-4 text-2xl font-bold text-slate-900">
            {step.title}
          </h3>

          <p className="leading-7 text-gray-600">
            {step.description}
          </p>
        </div>
      </div>

      {/* Circle */}
      <div className="relative z-20 hidden lg:flex w-2/12 justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 12,
          }}
          className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-white bg-yellow-500 text-2xl font-bold text-white shadow-2xl"
        >
          {step.id}
        </motion.div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-5/12" />
    </div>
  );
};

export default StepCard;