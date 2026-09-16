import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FaBook,
  FaCertificate,
  FaClock,
  FaGraduationCap,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { courses, formatInr } from "../data/courses";
import type { Course } from "../types/Course";
import { useAuth } from "../context/AuthContext";
import { useExamCart } from "../context/ExamCartContext";
import PortalShell from "../components/portal/PortalShell";

const paymentMethods = [
  { id: "upi", label: "UPI" },
  { id: "card", label: "Card" },
  { id: "netbanking", label: "Net Banking" },
] as const;

type PaymentMethod = (typeof paymentMethods)[number]["id"];

function DetailCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="border-b border-slate-100 pb-4 text-lg font-bold text-slate-900">
        {title}
      </h3>
      <div className="mt-5">{children}</div>
    </section>
  );
}

const StudentPortal = () => {
  const { user } = useAuth();
  const { items, subtotal, mrpTotal, addExam, removeExam, hasExam, clearCart } =
    useExamCart();
  const [searchParams] = useSearchParams();

  const initialId = Number(searchParams.get("test")) || courses[0]?.id;
  const [selectedId, setSelectedId] = useState(initialId);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");
  const [paying, setPaying] = useState(false);
  const [paidOrderId, setPaidOrderId] = useState("");

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

  const savings = mrpTotal - subtotal;
  const discount =
    selected.priceDetails.mrp - selected.priceDetails.amount;

  const handleAdd = (course: Course) => {
    addExam({
      courseId: course.id,
      title: course.title,
      category: course.category,
      image: course.image,
      price: course.priceDetails.amount,
      mrp: course.priceDetails.mrp,
    });
  };

  const handlePay = (e: FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    setPaying(true);
    const orderId = `EXAM-${Date.now().toString().slice(-8)}`;
    window.setTimeout(() => {
      setPaidOrderId(orderId);
      clearCart();
      setPaying(false);
    }, 800);
  };

  return (
    <PortalShell>
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-8 sm:py-8">
        {paidOrderId && (
          <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-green-800">
            Payment successful. Order ID:{" "}
            <span className="font-semibold">{paidOrderId}</span>. You will
            receive exam access details on {user.email}.
          </div>
        )}

        {/* Hero */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-5">
            <div className="h-52 overflow-hidden lg:col-span-2 lg:h-[280px]">
              <img
                src={selected.image}
                alt={selected.title}
                className="h-full w-full object-cover object-center"
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

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <p className="text-3xl font-bold text-[#b8903d]">
                  {selected.price}
                </p>
                <button
                  type="button"
                  onClick={() => handleAdd(selected)}
                  disabled={hasExam(selected.id)}
                  className="rounded-xl bg-[#b8903d] px-6 py-3 font-semibold text-white hover:bg-[#9a7730] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {hasExam(selected.id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-start gap-8 xl:grid-cols-12">
          {/* Left — details */}
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

            <DetailCard title="Price Breakdown">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Registration fee</span>
                  <span className="font-medium">
                    {formatInr(selected.priceDetails.registrationFee)}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Exam fee</span>
                  <span className="font-medium">
                    {formatInr(selected.priceDetails.examFee)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-slate-100 py-2">
                  <span className="text-slate-500">MRP</span>
                  <span className="text-slate-400 line-through">
                    {formatInr(selected.priceDetails.mrp)}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between py-2 text-green-600">
                    <span>Discount</span>
                    <span>-{formatInr(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between border-t border-slate-200 pt-3 text-lg font-bold">
                  <span>Total payable</span>
                  <span className="text-[#b8903d]">
                    {formatInr(selected.priceDetails.amount)}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  {selected.priceDetails.taxNote}
                </p>
              </div>

              <h4 className="mb-3 mt-6 text-sm font-semibold text-slate-800">
                Fee includes
              </h4>
              <ul className="space-y-2">
                {selected.priceDetails.includes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-slate-600"
                  >
                    <span className="text-[#b8903d]">✓</span>
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

          {/* Right — cart */}
          <div className="xl:col-span-4">
            <section className="sticky top-20 rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
              <h3 className="text-lg font-bold text-slate-900">
                Exam Cart & Payment
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                {items.length} test{items.length === 1 ? "" : "s"} selected
              </p>

              <div className="mt-5 max-h-64 space-y-3 overflow-y-auto">
                {items.length === 0 ? (
                  <p className="rounded-xl bg-[#faf9f6] px-4 py-8 text-center text-sm text-slate-500">
                    Select a test and click Add to Cart to proceed with
                    payment.
                  </p>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.courseId}
                      className="flex gap-3 rounded-xl border border-slate-100 bg-[#faf9f6] p-3"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="h-14 w-14 rounded-lg object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-2 text-sm font-semibold text-slate-800">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm font-bold text-[#b8903d]">
                          {formatInr(item.price)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeExam(item.courseId)}
                        className="text-xs font-semibold text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-sm">
                <div className="flex justify-between text-slate-500">
                  <span>MRP</span>
                  <span className="line-through">{formatInr(mrpTotal)}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Savings</span>
                    <span>-{formatInr(savings)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold text-slate-900">
                  <span>Total</span>
                  <span className="text-[#b8903d]">
                    {formatInr(subtotal)}
                  </span>
                </div>
              </div>

              <form className="mt-5 space-y-4" onSubmit={handlePay}>
                <div>
                  <p className="mb-2 text-sm font-semibold text-slate-700">
                    Payment method
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`rounded-xl border px-2 py-3 text-xs font-semibold transition ${
                          paymentMethod === method.id
                            ? "border-[#b8903d] bg-[#fff8e8] text-[#b8903d]"
                            : "border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {method.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-[#faf9f6] px-4 py-3 text-xs leading-5 text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-800">Name:</span>{" "}
                    {user.fullName}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">Email:</span>{" "}
                    {user.email}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">Mobile:</span>{" "}
                    {user.mobile}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={items.length === 0 || paying}
                  className="w-full rounded-xl bg-[#b8903d] py-4 font-semibold text-white transition hover:bg-[#9a7730] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {paying
                    ? "Processing..."
                    : items.length === 0
                      ? "Cart is empty"
                      : `Pay ${formatInr(subtotal)}`}
                </button>
              </form>

              <p className="mt-4 text-center text-[11px] text-slate-400">
                Secure payment · UPI · Cards · Net Banking
              </p>
            </section>
          </div>
        </div>
      </main>
    </PortalShell>
  );
};

export default StudentPortal;
