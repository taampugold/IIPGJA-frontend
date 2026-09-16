import { Link } from "react-router-dom";
import type { Course } from "../../types/Course";
import { books } from "../../data/books";

interface Props {
  course: Course;
}

const CourseBooksMaterials = ({ course }: Props) => {
  const recommended = books.filter((book) =>
    course.bookIds.includes(book.id)
  );

  if (!recommended.length) return null;

  return (
    <section className="rounded-2xl bg-white p-5 shadow-md sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Books & Material
          </h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            Study from the TAMPU publication recommended for this{" "}
            {course.category.toLowerCase()} eligibility test.
          </p>
        </div>
        <Link
          to="/books"
          className="shrink-0 text-sm font-semibold text-[#b8903d] hover:underline"
        >
          View all books →
        </Link>
      </div>

      <div className="mt-8 space-y-6">
        {recommended.map((book) => (
          <div
            key={book.id}
            className="flex flex-col gap-5 overflow-hidden rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:p-5"
          >
            <Link
              to={`/books/${book.id}`}
              className="mx-auto flex h-56 w-40 shrink-0 items-center justify-center sm:mx-0"
            >
              <img
                src={book.image}
                alt={book.title}
                className="h-full w-auto max-w-full object-contain"
              />
            </Link>

            <div className="min-w-0 flex-1">
              <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                Recommended material
              </span>
              <h3 className="mt-3 text-xl font-bold leading-snug text-slate-800">
                {book.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                by <span className="font-semibold">{book.author}</span>
              </p>
              <p className="mt-3 line-clamp-3 text-gray-600">{book.description}</p>
              <p className="mt-3 text-sm text-slate-600">
                Available as{" "}
                {book.formats.map((format) => format.type).join(" · ")}
                {book.languages.length
                  ? ` · ${book.languages.join(" / ")}`
                  : ""}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to={`/books/${book.id}`}
                  className="rounded-xl bg-[#b8903d] px-5 py-3 text-sm font-semibold text-white hover:bg-[#9c7b31]"
                >
                  View this book
                </Link>
                <Link
                  to="/books"
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:border-[#b8903d] hover:text-[#b8903d]"
                >
                  Browse all books
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseBooksMaterials;
