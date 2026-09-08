import { Testimonial } from "../../types/Testimonial";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

interface Props {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
      <FaQuoteLeft className="mb-4 text-4xl text-yellow-500" />

      <p className="mb-6 leading-7 text-gray-600">
        "{testimonial.review}"
      </p>

      <div className="mb-6 flex">
        {[...Array(testimonial.rating)].map((_, index) => (
          <FaStar
            key={index}
            className="mr-1 text-yellow-500"
          />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-bold text-slate-900">
            {testimonial.name}
          </h3>

          <p className="text-sm text-gray-500">
            {testimonial.role}
          </p>

          <p className="mt-1 text-xs font-semibold text-yellow-600">
            {testimonial.course} • {testimonial.year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;