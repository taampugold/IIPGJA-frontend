import { Link, useParams } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import PageContainer from "../components/layout/PageContainer";
import { courses } from "../data/courses";
import CourseHero from "../components/courses/CourseHero";
import CourseOverview from "../components/courses/CourseOverview";
import CourseFAQ from "../components/courses/CourseFAQ";
import CourseSidebar from "../components/courses/CourseSidebar";

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courses.find((item) => item.id.toString() === courseId);

  if (!course) {
    return (
      <PageLayout>
        <div className="flex min-h-[60vh] items-center justify-center bg-[#faf9f6]">
          <PageContainer className="text-center">
            <div className="rounded-2xl bg-white p-10 shadow-xl">
              <h1 className="mb-4 text-4xl font-bold text-gray-900">
                Test Not Found
              </h1>
              <p className="mb-8 text-gray-600">
                The eligibility test you're looking for doesn't exist or has
                been removed.
              </p>
              <Link
                to="/courses"
                className="rounded-xl bg-[#b8903d] px-8 py-4 font-semibold text-white transition hover:bg-[#9c7b31]"
              >
                Back to Tests
              </Link>
            </div>
          </PageContainer>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <CourseHero course={course} />

      <section className="bg-[#faf9f6] py-20">
        <PageContainer>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-16 lg:col-span-2">
              <CourseOverview course={course} />
              <CourseFAQ />
            </div>
            <div>
              <CourseSidebar course={course} />
            </div>
          </div>
        </PageContainer>
      </section>
    </PageLayout>
  );
};

export default CourseDetails;
