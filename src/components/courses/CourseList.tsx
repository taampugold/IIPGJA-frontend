import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

import CourseCard from "../../components/courses/CourseCard";
import PageContainer from "../layout/PageContainer";
import { courses } from "../../data/courses";

const CourseList = () => {
  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main className="bg-slate-50">
      <section className="relative w-full overflow-hidden bg-slate-900 py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-yellow-500/20 blur-3xl" />

        <PageContainer fullWidth className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-semibold uppercase tracking-[4px] text-yellow-400">
              IIPGJA Assessment
            </span>

            <h1 className="mt-5 text-3xl font-bold sm:text-4xl md:text-6xl">
              Take Your
              <span className="block text-yellow-400">Eligibility Test</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We conduct professional eligibility tests for jewellery and gem
              appraisal streams. Tests are currently in progress and not yet
              open for registration.
            </p>
          </motion.div>
        </PageContainer>
      </section>

      <section className="py-20">
        <PageContainer>
          <div className="mb-12">
            <div className="relative mx-auto w-full max-w-md">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search eligibility tests..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-5 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
              />
            </div>
          </div>

          <div className="mb-10">
            <span className="font-semibold uppercase tracking-[4px] text-yellow-600">
              Our Tests
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Explore Eligibility Tests
            </h2>

            <p className="mt-4 text-slate-600">
              {filteredCourses.length}{" "}
              {filteredCourses.length === 1 ? "test" : "tests"} available
            </p>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-white py-20 text-center">
              <h3 className="text-2xl font-bold text-slate-900">
                No tests found
              </h3>

              <p className="mt-3 text-slate-500">
                Try changing your search.
              </p>
            </div>
          )}
        </PageContainer>
      </section>
    </main>
  );
};

export default CourseList;
