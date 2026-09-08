import { Link } from "react-router-dom";
import type { Course } from "../../types/Course";

interface PaymentCardProps {
  course: Course;
}

const PaymentCard = ({ course }: PaymentCardProps) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
      <img
        src={course.image}
        alt={course.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">
          Eligibility Test Fee
        </span>

        <div className="mt-5">
          <p className="text-sm text-gray-500">Test fee</p>

          <div className="mt-2 flex items-center gap-3">
            <h2 className="text-4xl font-bold text-[#b8903d]">{course.price}</h2>
          </div>

          <p className="mt-2 text-sm text-gray-500">
            {course.duration} · {course.mode}
          </p>
        </div>

        <Link
          to={`/register?test=${course.id}`}
          className="mt-8 block w-full rounded-xl bg-[#b8903d] py-4 text-center text-lg font-semibold text-white transition hover:bg-[#9d7830]"
        >
          Register for Test
        </Link>

        <Link
          to={`/login?test=${course.id}`}
          className="mt-4 block w-full rounded-xl border-2 border-[#b8903d] py-4 text-center font-semibold text-[#b8903d] transition hover:bg-[#b8903d] hover:text-white"
        >
          Login
        </Link>

        <div className="mt-8 border-t pt-6">
          <h3 className="mb-5 text-lg font-semibold">This Test Includes</h3>

          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span>Online eligibility test</span>
              <span>Yes</span>
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
              <span>Included</span>
            </div>

            <div className="flex justify-between">
              <span>Language</span>
              <span>English / Tamil</span>
            </div>

            <div className="flex justify-between">
              <span>Support</span>
              <span>Available</span>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-[#faf7ef] p-5">
          <h3 className="font-semibold text-gray-900">Secure Payments</h3>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-white p-3 text-center shadow">
              Cards
            </div>
            <div className="rounded-lg bg-white p-3 text-center shadow">UPI</div>
            <div className="rounded-lg bg-white p-3 text-center shadow">
              Net Banking
            </div>
            <div className="rounded-lg bg-white p-3 text-center shadow">
              EMI
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-4">
          <h3 className="font-semibold text-green-700">
            Login or register to take the test
          </h3>

          <p className="mt-2 text-sm text-green-600">
            After login you will enter the student portal to view details and
            pay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
