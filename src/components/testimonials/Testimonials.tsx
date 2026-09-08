import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { testimonials } from "../../data/testimonials";
import PageContainer from "../layout/PageContainer";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-yellow-600">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            What Our Students Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from students who have successfully completed our programs and
            built rewarding careers in the jewellery industry.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard testimonial={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </PageContainer>
    </section>
  );
};

export default Testimonials;