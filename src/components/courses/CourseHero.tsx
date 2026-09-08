import { Link } from "react-router-dom";
import type { Course } from "../../types/Course";
import PageContainer from "../layout/PageContainer";

interface Props {
  course: Course;
}

const CourseHero = ({ course }: Props) => {
  return (
    <section className="w-full bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c] py-20">
      <PageContainer
        fullWidth
        className="grid items-center gap-12 lg:grid-cols-2"
      >
        <div>
          <span className="rounded-full bg-[#b8903d] px-4 py-2 text-sm font-semibold text-white">
            Eligibility Test
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            {course.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            {course.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
            <span>{course.duration}</span>
            <span className="text-gray-500">|</span>
            <span>{course.mode}</span>
            <span className="text-gray-500">|</span>
            <span className="font-semibold text-[#d4af37]">{course.price}</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to={`/register?test=${course.id}`}
              className="rounded-xl bg-[#b8903d] px-8 py-4 font-semibold text-white hover:bg-[#9c7b31]"
            >
              Register for Test
            </Link>

            <Link
              to={`/login?test=${course.id}`}
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-black"
            >
              Login
            </Link>
          </div>
        </div>

        <div>
          <img
            src={course.image}
            alt={course.title}
            className="h-[450px] w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </PageContainer>
    </section>
  );
};

export default CourseHero;
