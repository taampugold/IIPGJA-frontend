import { FormEvent, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { apiRequest, ApiError } from "../../lib/api";
import { useAuth, type AuthUser } from "../../context/AuthContext";
import PageLayout from "../../components/layout/PageLayout";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { setSession } = useAuth();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!token) {
      setError("Invalid or missing reset token");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setSubmitting(true);

    try {
      const data = await apiRequest<{
        message: string;
        token: string;
        user: AuthUser;
      }>(`/api/auth/reset-password/${token}`, {
        method: "POST",
        body: { password, confirmPassword },
      });

      setSession(data.token, data.user);
      navigate("/");
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : "Could not reset password"
      );
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
            <h1 className="mt-4 text-3xl font-bold text-gray-900">
              Reset Password
            </h1>
            <p className="mt-3 text-gray-500">
              Choose a new password for your account.
            </p>
          </div>

          {!token ? (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              This reset link is invalid. Please request a new one from{" "}
              <Link to="/forgot-password" className="font-semibold underline">
                Forgot Password
              </Link>
              .
            </p>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              {error && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </p>
              )}

              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New password"
                className="w-full rounded-xl border p-4 outline-none focus:border-[#b8903d]"
              />

              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full rounded-xl border p-4 outline-none focus:border-[#b8903d]"
              />

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-[#b8903d] py-4 font-semibold text-white disabled:opacity-60"
              >
                {submitting ? "Updating..." : "Update Password"}
              </button>
            </form>
          )}

          <div className="mt-8 text-center">
            <Link to="/login" className="font-semibold text-[#b8903d]">
              Back to Login
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResetPassword;
