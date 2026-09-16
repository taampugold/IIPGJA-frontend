import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  FaBook,
  FaCertificate,
  FaClock,
  FaGraduationCap,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { courses } from "../data/courses";
import { useAuth } from "../context/AuthContext";
import PortalShell from "../components/portal/PortalShell";

function DetailCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-8">
      <h3 className="border-b border-slate-100 pb-4 text-lg font-bold text-slate-900">
        {title}
      </h3>
      <div className="mt-5">{children}</div>
    </section>
  );
}

const StudentPortal = () => {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();

  const initialId = Number(searchParams.get("test")) || courses[0]?.id;
  const [selectedId, setSelectedId] = useState(initialId);

  const selected = useMemo(
    () => courses.find((c) => c.id === selectedId) || courses[0],
    [selectedId]
  );

  useEffect(() => {
    const fromQuery = Number(searchParams.get("test"));
    if (fromQuery && courses.some((c) => c.id === fromQuery)) {
      setSelectedId(fromQuery);
    }
  }, [searchParams]);

  if (!user) return null;

  return (
    <PortalShell>
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-8 sm:py-8">

        {/* Hero */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-5">
            <div className="flex h-52 items-center justify-center bg-[#faf9f6] p-4 lg:col-span-2 lg:h-[280px]">
              <img
                src={selected.image}
                alt={selected.title}
                className="h-full w-auto max-w-full object-contain"
              />
            </div>
            <div className="flex min-h-[280px] flex-col justify-center p-6 sm:p-8 lg:col-span-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#fff8e8] px-3 py-1 text-xs font-semibold text-[#b8903d]">
                  {selected.category}
                </span>
                {selected.popular && (
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    Popular
                  </span>
                )}
              </div>
              <h2 className="mt-3 line-clamp-2 min-h-[4rem] text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                {selected.title}
              </h2>
              <p className="mt-3 line-clamp-3 min-h-[5.25rem] max-w-2xl leading-7 text-slate-600">
                {selected.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1.5">
                  <FaStar className="text-[#b8903d]" /> {selected.rating}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaUsers className="text-slate-400" /> {selected.students}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaClock className="text-slate-400" /> {selected.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaGraduationCap className="text-slate-400" />{" "}
                  {selected.level}
                </span>
              </div>

              <div className="mt-6">
                <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                  In Progress
                </span>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                  This eligibility test is not accessible yet. You can review
                  the details below until registration opens.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-start gap-8 xl:grid-cols-12">
          <div className="space-y-6 xl:col-span-8">
            {/* Quick stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: FaBook,
                  label: "Questions",
                  value: String(selected.exam.questions),
                },
                {
                  icon: FaClock,
                  label: "Duration",
                  value: selected.exam.duration,
                },
                {
                  icon: FaCertificate,
                  label: "Certificate",
                  value: selected.certificate || "Included",
                },
                {
                  icon: FaGraduationCap,
                  label: "Passing score",
                  value: selected.exam.passingScore,
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-[#faf9f6] p-4 text-center"
                >
                  <Icon className="mx-auto text-[#b8903d]" size={20} />
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <DetailCard title="Test Specifications">
              <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {selected.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-xl border border-slate-100 bg-[#faf9f6] px-4 py-3"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {spec.label}
                    </dt>
                    <dd className="mt-1 font-medium text-slate-900">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </DetailCard>

            <DetailCard title="Exam Details">
              <dl className="divide-y divide-slate-100">
                {[
                  ["Total questions", String(selected.exam.questions)],
                  ["Exam duration", selected.exam.duration],
                  ["Passing score", selected.exam.passingScore],
                  ["Attempts allowed", selected.exam.attempts],
                  ["Exam language", selected.exam.language],
                  ["Question format", selected.exam.format],
                  ["Negative marking", selected.exam.negativeMarking],
                  ["Result delivery", selected.exam.result],
                  ["Schedule", selected.exam.schedule],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-start justify-between gap-6 py-3 first:pt-0 last:pb-0"
                  >
                    <dt className="shrink-0 text-sm text-slate-500">
                      {label}
                    </dt>
                    <dd className="text-right text-sm font-medium text-slate-900">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </DetailCard>

            <DetailCard title="Syllabus & Topics Covered">
              <ul className="grid gap-3 sm:grid-cols-2">
                {selected.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-[#faf9f6] px-4 py-3 text-sm text-slate-700"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b8903d] text-xs font-bold text-white">
                      ✓
                    </span>
                    {topic}
                  </li>
                ))}
              </ul>
            </DetailCard>

            <DetailCard title="Eligibility Requirements">
              <ul className="space-y-3">
                {selected.eligibility.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-l-4 border-[#b8903d] bg-[#faf9f6] py-2 pl-4 text-sm text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </DetailCard>

            <DetailCard title="Important Notes">
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                {selected.importantNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </DetailCard>
          </div>

          <div className="xl:col-span-4">
            <section className="sticky top-20 rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-md">
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                In Progress
              </span>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                Test not accessible
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                This eligibility test is currently in progress. Registration,
                payment, and exam access are not available yet.
              </p>
              <Link
                to="/contact"
                className="mt-5 block w-full rounded-xl bg-[#b8903d] py-3 text-center text-sm font-semibold text-white hover:bg-[#9a7730]"
              >
                Contact us for updates
              </Link>
            </section>
          </div>
        </div>
      </main>
    </PortalShell>
  );
};

export default StudentPortal;
