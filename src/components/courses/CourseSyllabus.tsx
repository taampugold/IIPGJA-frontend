import { useState } from "react";
import type { Course } from "../../types/Course";

interface Props {
  course: Course;
}

const CourseSyllabus = ({ course }: Props) => {
  const syllabus = course.syllabus;
  const [openPart, setOpenPart] = useState<number | null>(1);

  if (!syllabus?.length) return null;

  const unitCount = syllabus.reduce((sum, part) => sum + part.units.length, 0);

  return (
    <section className="rounded-2xl bg-white p-8 shadow-md">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Test Syllabus</h2>
        <p className="mt-2 text-gray-500">
          {syllabus.length} Parts • {unitCount} Units
        </p>
      </div>

      <div className="space-y-4">
        {syllabus.map((part) => (
          <div
            key={part.id}
            className="overflow-hidden rounded-xl border border-gray-200"
          >
            <button
              type="button"
              onClick={() =>
                setOpenPart(openPart === part.id ? null : part.id)
              }
              className="flex w-full items-center justify-between bg-gray-50 px-6 py-5 text-left transition hover:bg-gray-100"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Part ({part.id}) {part.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Units {part.units[0]?.number}–
                  {part.units[part.units.length - 1]?.number}
                </p>
              </div>
              <span className="text-2xl text-[#b8903d]">
                {openPart === part.id ? "−" : "+"}
              </span>
            </button>

            {openPart === part.id && (
              <ol className="divide-y bg-white">
                {part.units.map((unit) => (
                  <li
                    key={unit.number}
                    className="flex gap-4 px-6 py-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f6edd8] text-sm font-semibold text-[#b8903d]">
                      {unit.number}
                    </span>
                    <p className="pt-1 leading-7 text-gray-700">{unit.title}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSyllabus;
