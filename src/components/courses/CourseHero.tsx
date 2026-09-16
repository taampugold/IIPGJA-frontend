import type { Course } from "../../types/Course";
import PageContainer from "../layout/PageContainer";

interface Props {
  course: Course;
}

const CourseHero = ({ course }: Props) => {
  return (
    <section className="w-full bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c] py-12 sm:py-20">
      <PageContainer
        fullWidth
        className="grid items-center gap-8 py-8 sm:gap-12 lg:grid-cols-2"
      >
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#b8903d] px-4 py-2 text-sm font-semibold text-white">
              Eligibility Test
            </span>
            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
              In Progress
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {course.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            {course.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
            <span>{course.duration}</span>
            <span className="text-gray-500">|</span>
            <span>{course.mode}</span>
          </div>

          <p className="mt-10 max-w-xl rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-sm leading-6 text-gray-300">
            This eligibility test is currently in progress and is not open for
            registration. You can still review the syllabus and study material
            below.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={course.image}
            alt={course.title}
            className="max-h-72 w-auto max-w-full object-contain drop-shadow-2xl sm:max-h-[28rem]"
          />
        </div>
      </PageContainer>
    </section>
  );
};

export default CourseHero;
