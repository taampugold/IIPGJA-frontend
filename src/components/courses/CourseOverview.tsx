import type { Course } from "../../types/Course";

interface Props {
  course: Course;
}

const testCoverage = [
  "Core concepts of jewellery and gem appraisal relevant to this stream.",
  "Industry standards, purity, and quality evaluation basics.",
  "Practical scenario-based questions for professional readiness.",
  "Clear eligibility outcome after successful completion.",
  "Online assessment you can take after login or registration.",
  "Recognized eligibility certificate upon qualifying.",
];

const whoShouldTake = [
  "Aspiring jewellery / gem appraisers",
  "Industry professionals seeking eligibility validation",
  "Candidates preparing for appraisal roles",
  "Learners who want an official IIPGJA assessment",
];

const CourseOverview = ({ course }: Props) => {
  return (
    <div className="space-y-16">
      <section className="rounded-2xl bg-white p-5 shadow-md sm:p-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          About This Eligibility Test
        </h2>

        <p className="leading-8 text-gray-600">{course.description}</p>

        <p className="mt-6 leading-8 text-gray-600">
          IIPGJA does not teach this as a diploma course. This is a formal
          eligibility test to assess your readiness in{" "}
          {course.category.toLowerCase()}. The online test is currently in
          progress and is not open yet. Review the syllabus and books while
          you wait.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-700">
          <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-800">
            In Progress
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold">
            {course.duration}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold">
            {course.mode}
          </span>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-5 shadow-md sm:p-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:mb-8 sm:text-3xl">
          What This Test Covers
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {testCoverage.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-xl border border-gray-100 p-5 transition hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b8903d] text-lg font-bold text-white">
                ✓
              </div>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white p-5 shadow-md sm:p-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:mb-8 sm:text-3xl">
          Who Should Take This Test
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {whoShouldTake.map((item) => (
            <div
              key={item}
              className="rounded-xl border-l-4 border-[#b8903d] bg-gray-50 p-5"
            >
              <p className="font-medium text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseOverview;
