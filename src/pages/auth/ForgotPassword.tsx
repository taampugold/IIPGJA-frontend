import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import PageLayout from "../../components/layout/PageLayout";
import { apiRequest, ApiError } from "../../lib/api";

const ForgotPassword = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSubmitting(true);

    try {
      const data = await apiRequest<{ message: string }>(
        "/api/auth/forgot-password",
        {
          method: "POST",
          body: { emailOrUsername },
        }
      );
      setSuccess(data.message);
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : "Could not send reset email"
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
              Forgot Password?
            </h1>

            <p className="mt-3 leading-7 text-gray-500">
              Enter your registered email address or username. We'll send you a
              password reset link.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}

            {success && (
              <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
                {success}
              </p>
            )}

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Email / Username
              </label>

              <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-[#b8903d]">
                <FaEnvelope className="text-gray-400" />

                <input
                  type="text"
                  required
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  placeholder="Enter your email or username"
                  className="w-full bg-transparent px-3 py-4 outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-[#b8903d] py-4 font-semibold text-white transition hover:bg-[#9b7b31] disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <div className="mt-8 border-t pt-6 text-center">
            <p className="text-gray-600">Remember your password?</p>

            <Link
              to="/login"
              className="mt-3 inline-block font-semibold text-[#b8903d] hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ForgotPassword;
