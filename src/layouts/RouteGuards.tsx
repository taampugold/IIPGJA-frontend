import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/** Public marketing site — logged-in users can still visit. */
export function WebsiteLayout() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#faf9f6] text-gray-500">
        Loading...
      </div>
    );
  }

  return <Outlet />;
}

/** Auth forms — already logged in → portal. */
export function GuestLayout() {
  const { user, loading } = useAuth();
  const [params] = useSearchParams();
  const test = params.get("test");

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#faf9f6] text-gray-500">
        Loading...
      </div>
    );
  }

  if (user) {
    return (
      <Navigate to={test ? `/app?test=${test}` : "/app"} replace />
    );
  }

  return <Outlet />;
}

/** Student portal — requires login. */
export function PortalLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-slate-500">
        Loading portal...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
