import { Link } from "react-router-dom";
import type { Course } from "../../types/Course";

interface PaymentCardProps {
  course: Course;
}

const PaymentCard = ({ course }: PaymentCardProps) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
      <div className="hidden h-64 items-center justify-center bg-[#faf9f6] p-4 xl:flex">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-auto max-w-full object-contain"
        />
      </div>

      <div className="p-6">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
          In Progress
        </span>

        <div className="mt-5">
          <h2 className="text-2xl font-bold text-slate-900">
            Test not open yet
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            {course.duration} · {course.mode}
          </p>
          <p className="mt-4 leading-7 text-gray-600">
            This eligibility test is currently in progress and cannot be taken
            or paid for at this time. Check back soon, or contact us for
            updates.
          </p>
        </div>

        <button
          type="button"
          disabled
          className="mt-8 block w-full cursor-not-allowed rounded-xl bg-slate-200 py-4 text-center text-lg font-semibold text-slate-500"
        >
          In Progress
        </button>

        <Link
          to="/contact"
          className="mt-4 block w-full rounded-xl border-2 border-[#b8903d] py-4 text-center font-semibold text-[#b8903d] transition hover:bg-[#b8903d] hover:text-white"
        >
          Contact us
        </Link>

        <div className="mt-8 border-t pt-6">
          <h3 className="mb-5 text-lg font-semibold">This Test Includes</h3>

          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span>Online eligibility test</span>
              <span>Coming soon</span>
            </div>

            <div className="flex justify-between">
              <span>Duration</span>
              <span>{course.duration}</span>
            </div>

            <div className="flex justify-between">
              <span>Mode</span>
              <span>{course.mode}</span>
            </div>

            <div className="flex justify-between">
              <span>Eligibility certificate</span>
              <span>On pass</span>
            </div>

            <div className="flex justify-between">
              <span>Language</span>
              <span>English / Tamil</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
