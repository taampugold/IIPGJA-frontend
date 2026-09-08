import { useState } from "react";

interface Lesson {
  title: string;
  duration: string;
}

interface Module {
  id: number;
  title: string;
  duration: string;
  lessons: Lesson[];
}

const modules: Module[] = [
  {
    id: 1,
    title: "Introduction to Jewellery Assay",
    duration: "2 Hours",
    lessons: [
      {
        title: "Introduction to Jewellery Industry",
        duration: "20 mins",
      },
      {
        title: "Importance of Assaying",
        duration: "30 mins",
      },
      {
        title: "Career Opportunities",
        duration: "25 mins",
      },
    ],
  },
  {
    id: 2,
    title: "Gold & Silver Testing",
    duration: "5 Hours",
    lessons: [
      {
        title: "Gold Purity Testing",
        duration: "45 mins",
      },
      {
        title: "Silver Testing",
        duration: "40 mins",
      },
      {
        title: "Chemical Testing",
        duration: "60 mins",
      },
    ],
  },
  {
    id: 3,
    title: "Hallmarking Standards",
    duration: "4 Hours",
    lessons: [
      {
        title: "BIS Hallmarking",
        duration: "45 mins",
      },
      {
        title: "Certification Process",
        duration: "40 mins",
      },
      {
        title: "Documentation",
        duration: "35 mins",
      },
    ],
  },
  {
    id: 4,
    title: "Practical Demonstration",
    duration: "6 Hours",
    lessons: [
      {
        title: "Equipment Handling",
        duration: "1 Hour",
      },
      {
        title: "Testing Procedure",
        duration: "2 Hours",
      },
      {
        title: "Final Assessment",
        duration: "2 Hours",
      },
    ],
  },
];

const CourseCurriculum = () => {
  const [openModule, setOpenModule] = useState<number | null>(1);

  return (
    <section className="mt-16 rounded-2xl bg-white p-8 shadow-md">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Course Curriculum
          </h2>

          <p className="mt-2 text-gray-500">
            4 Modules • 12 Lessons • 17+ Hours
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {modules.map((module) => (
          <div
            key={module.id}
            className="overflow-hidden rounded-xl border border-gray-200"
          >
            <button
              onClick={() =>
                setOpenModule(
                  openModule === module.id ? null : module.id
                )
              }
              className="flex w-full items-center justify-between bg-gray-50 px-6 py-5 text-left transition hover:bg-gray-100"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Module {module.id}: {module.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {module.lessons.length} Lessons • {module.duration}
                </p>
              </div>

              <span className="text-2xl text-[#b8903d]">
                {openModule === module.id ? "−" : "+"}
              </span>
            </button>

            {openModule === module.id && (
              <div className="divide-y bg-white">
                {module.lessons.map((lesson, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-6 py-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6edd8] font-semibold text-[#b8903d]">
                        ▶
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-800">
                          {lesson.title}
                        </h4>

                        <p className="text-sm text-gray-500">
                          Video Lesson
                        </p>
                      </div>
                    </div>

                    <span className="text-sm text-gray-500">
                      {lesson.duration}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCurriculum;
