import { useState, type ReactNode } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { HiGlobeAlt, HiUserCircle } from "react-icons/hi";
import { courses } from "../../data/courses";
import { useAuth } from "../../context/AuthContext";
import { useExamCart } from "../../context/ExamCartContext";

interface PortalShellProps {
  children: ReactNode;
  title?: string;
}

const PortalShell = ({ children, title }: PortalShellProps) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { items, hasExam, clearCart } = useExamCart();
  const [searchParams] = useSearchParams();
  const [mobileNav, setMobileNav] = useState(false);

  if (!user) return null;

  const firstName = user.fullName.split(" ")[0];
  const selectedId = Number(searchParams.get("test")) || courses[0]?.id;

  const handleLogout = () => {
    clearCart();
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-white text-slate-800">
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-200 bg-[#faf9f6] transition lg:static lg:translate-x-0 ${
          mobileNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-5">
          <img
            src="/images/IIPGJA-logo.png"
            alt="IIPGJA"
            className="h-12 w-auto object-contain"
          />
          <div>
            <p className="text-sm font-bold text-slate-900">IIPGJA Portal</p>
            <p className="text-[11px] text-slate-500">Student exam console</p>
          </div>
        </div>

        <div className="border-b border-slate-200 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Signed in
          </p>
          <p className="mt-1 truncate font-semibold text-slate-900">
            {user.fullName}
          </p>
          <p className="truncate text-xs text-slate-500">{user.email}</p>
          <p className="truncate text-xs text-slate-500">{user.mobile}</p>
        </div>

        <nav className="space-y-1 border-b border-slate-200 px-3 py-3">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-white"
          >
            <HiGlobeAlt size={20} className="text-[#b8903d]" />
            Website
          </Link>
          <NavLink
            to="/app/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                isActive
                  ? "border border-[#b8903d] bg-white text-slate-900 shadow-sm"
                  : "text-slate-700 hover:bg-white"
              }`
            }
          >
            <HiUserCircle size={20} className="text-[#b8903d]" />
            Profile
          </NavLink>
        </nav>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Eligibility tests
          </p>
          <div className="space-y-2">
            {courses.map((course) => {
              const active = course.id === selectedId;
              const inCart = hasExam(course.id);
              return (
                <button
                  key={course.id}
                  type="button"
                  onClick={() => {
                    navigate(`/app?test=${course.id}`);
                    setMobileNav(false);
                  }}
                  className={`flex h-[76px] w-full items-center gap-3 rounded-xl px-3 text-left transition ${
                    active
                      ? "border border-[#b8903d] bg-white shadow-sm"
                      : "border border-transparent hover:bg-white"
                  }`}
                >
                  <img
                    src={course.image}
                    alt=""
                    className="h-14 w-14 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm font-semibold leading-snug text-slate-800">
                      {course.title}
                    </p>
                    <div className="mt-1 flex items-center justify-between gap-2">
                      <p className="text-xs font-bold text-[#b8903d]">
                        {course.price}
                      </p>
                      {inCart && (
                        <span className="shrink-0 text-[10px] font-semibold text-green-600">
                          In cart
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="border-t border-slate-200 p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full rounded-xl border border-slate-300 bg-white py-3 text-sm font-semibold text-slate-700 transition hover:border-[#b8903d] hover:text-[#b8903d]"
          >
            Logout
          </button>
        </div>
      </aside>

      {mobileNav && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setMobileNav(false)}
        />
      )}

      <div className="flex min-h-screen min-w-0 flex-1 flex-col bg-white">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm lg:hidden"
              onClick={() => setMobileNav(true)}
            >
              Menu
            </button>
            <div className="min-w-0">
              <p className="text-xs text-slate-500">Welcome back</p>
              <h1 className="truncate text-base font-bold text-slate-900 sm:text-lg">
                {title || `${firstName} — Eligibility Test Portal`}
              </h1>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              to="/"
              aria-label="Website"
              title="Website"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-[#b8903d] hover:text-[#b8903d]"
            >
              <HiGlobeAlt size={22} />
            </Link>
            <Link
              to="/app/profile"
              aria-label="Profile"
              title="Profile"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-[#b8903d] hover:text-[#b8903d]"
            >
              <HiUserCircle size={22} />
            </Link>
            <span className="hidden rounded-full border border-slate-200 bg-[#faf9f6] px-3 py-1 text-xs font-medium text-slate-600 sm:inline">
              Cart: {items.length} test{items.length === 1 ? "" : "s"}
            </span>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg bg-[#b8903d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#9a7730]"
            >
              Logout
            </button>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
};

export default PortalShell;
