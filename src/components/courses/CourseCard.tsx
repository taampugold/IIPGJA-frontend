import { Link } from "react-router-dom";
import { Course } from "../../types/Course";
import { FaClock, FaLaptop, FaStar, FaUsers } from "react-icons/fa";

interface Props {
  course: Course;
}

const CourseCard = ({ course }: Props) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex h-56 items-center justify-center bg-[#faf9f6] p-4">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-auto max-w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div>
          <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
            {course.certificate || "Eligibility Test"}
          </span>
        </div>

        <h3 className="mt-4 line-clamp-2 min-h-[4rem] text-2xl font-bold leading-tight text-slate-800">
          {course.title}
        </h3>

        <p className="mt-4 line-clamp-3 min-h-[5.25rem] leading-7 text-gray-600">
          {course.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaClock className="text-yellow-500" />
            {course.duration}
          </div>

          <div className="flex items-center gap-2">
            <FaLaptop className="text-yellow-500" />
            {course.mode}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span className="font-semibold text-slate-700">
                {course.rating}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-yellow-500" />
              <span className="text-slate-600">{course.students}</span>
            </div>
          </div>

          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
            In Progress
          </span>
        </div>

        <div className="mt-auto pt-8">
          <Link
            to={`/courses/${course.id}`}
            className="flex w-full items-center justify-center rounded-lg bg-[#b8903d] py-3 text-center font-semibold text-white transition hover:bg-[#9d7830]"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
