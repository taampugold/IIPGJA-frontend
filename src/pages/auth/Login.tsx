import { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import PageLayout from "../../components/layout/PageLayout";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { courses } from "../../data/courses";
import { useAuth } from "../../context/AuthContext";
import { ApiError } from "../../lib/api";

interface LoginLocationState {
  registered?: boolean;
  email?: string;
  message?: string;
}

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [searchParams] = useSearchParams();
  const testId = searchParams.get("test");
  const test = courses.find((c) => String(c.id) === testId);

  const locationState = (location.state as LoginLocationState | null) || null;

  const [emailOrUsername, setEmailOrUsername] = useState(
    () => locationState?.email || ""
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success] = useState(() =>
    locationState?.registered
      ? locationState.message ||
        "Account created successfully. Please log in."
      : ""
  );
  const [submitting, setSubmitting] = useState(false);

  const registerLink = testId ? `/register?test=${testId}` : "/register";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await login({
        emailOrUsername,
        password,
        testId: testId || null,
      });

      if (testId) {
        navigate(`/app?test=${testId}`);
      } else {
        navigate("/app");
      }
    } catch (err) {
      if (
        err instanceof ApiError &&
        err.status === 403 &&
        err.data.requiresEmailVerification
      ) {
        const params = new URLSearchParams();
        const email =
          (err.data.email as string) ||
          (emailOrUsername.includes("@") ? emailOrUsername : "");
        if (email) params.set("email", email);
        if (testId) params.set("test", testId);
        navigate(`/verify-email?${params.toString()}`);
        return;
      }
      setError(err instanceof ApiError ? err.message : "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <section className="min-h-screen bg-[#faf9f6] px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-md rounded-3xl bg-white p-6 shadow-xl sm:p-10">
          <div className="mb-8 text-center">
            <img
              src="/images/IIPGJA-logo.png"
              alt="IIPGJA"
              className="mx-auto h-24 w-auto object-contain"
            />

            <h1 className="mt-4 text-3xl font-bold">Welcome Back</h1>

            <p className="mt-2 text-gray-500">
              {test
                ? "Login to take your eligibility test."
                : "Login to access your account."}
            </p>

            {test && (
              <p className="mt-4 rounded-xl bg-[#fff8e8] px-4 py-3 text-sm font-medium text-slate-700">
                You are logging in for:{" "}
                <span className="font-semibold text-[#b8903d]">
                  {test.title}
                </span>
                <span className="mt-1 block text-amber-700">
                  Status: In Progress — this test is not open yet.
                </span>
              </p>
            )}
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {success && (
              <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
                {success}
              </p>
            )}

            {error && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}

            <div>
              <label className="mb-2 block font-medium">
                Email / Username
              </label>

              <div className="flex items-center rounded-xl border px-4">
                <FaEnvelope className="text-gray-400" />
                <input
                  type="text"
                  required
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  placeholder="Enter email or username"
                  className="w-full bg-transparent px-3 py-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium">Password</label>

              <div className="flex items-center rounded-xl border px-4">
                <FaLock className="text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full bg-transparent px-3 py-4 outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-[#b8903d]"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-[#b8903d] py-4 font-semibold text-white transition hover:bg-[#9a7730] disabled:opacity-60"
            >
              {submitting
                ? "Signing in..."
                : test
                  ? "Login & Continue to Test"
                  : "Login"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">Don't have an account?</p>

            <Link
              to={registerLink}
              className="mt-3 inline-block font-semibold text-[#b8903d]"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Login;
