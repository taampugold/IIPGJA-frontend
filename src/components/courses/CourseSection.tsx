import { courses } from "../../data/courses";
import PageContainer from "../layout/PageContainer";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <PageContainer>
        <div className="mb-16 text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-600">
            Featured Tests
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Professional Eligibility Tests
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            IIPGJA conducts eligibility tests for jewellery and gem appraisal
            streams. View test details, fees, and register or log in to take
            your assessment.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
};

export default CourseSection;
