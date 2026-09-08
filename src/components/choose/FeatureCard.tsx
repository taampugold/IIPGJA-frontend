import { motion } from "framer-motion";
import { Feature } from "../../types/Feature";

interface Props {
  feature: Feature;
  index?: number;
}

const FeatureCard = ({ feature, index = 0 }: Props) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group rounded-2xl border border-slate-200 bg-[#faf9f6] p-6 transition duration-300 hover:border-[#b8903d]/50 hover:bg-white hover:shadow-lg md:p-7"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b8903d] text-lg text-white transition group-hover:bg-[#9c7b31]">
        <Icon />
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">
        {feature.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
