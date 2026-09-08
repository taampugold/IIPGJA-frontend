import { FormEvent, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { apiRequest, ApiError } from "../../lib/api";
import { useAuth, type AuthUser } from "../../context/AuthContext";
import PageLayout from "../../components/layout/PageLayout";

interface VerifyResponse {
  message: string;
  token: string;
  user: AuthUser;
  testId?: string | null;
}

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { setSession } = useAuth();
  const [searchParams] = useSearchParams();

  const [email, setEmail] = useState(() => searchParams.get("email") || "");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(() =>
    searchParams.get("registered") === "1"
      ? "Account created. Enter the verification code sent to your email."
      : ""
  );
  const [submitting, setSubmitting] = useState(false);
  const [resending, setResending] = useState(false);

  const testId = searchParams.get("test");
  const loginLink = testId ? `/login?test=${testId}` : "/login";

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSubmitting(true);

    try {
      const data = await apiRequest<VerifyResponse>("/api/auth/verify-email", {
        method: "POST",
        body: {
          email,
          code: code.trim(),
          testId: testId || null,
        },
      });

      setSession(data.token, data.user);

      if (testId) {
        navigate(`/app?test=${testId}`, { replace: true });
      } else {
        navigate("/app", { replace: true });
      }
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : "Verification failed"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleResend = async () => {
    if (!email.trim()) {
      setError("Enter your email to resend the code");
      return;
    }

    setError("");
    setSuccess("");
    setResending(true);

    try {
      const data = await apiRequest<{ message: string }>(
        "/api/auth/resend-verification",
        {
          method: "POST",
          body: { email },
        }
      );
      setSuccess(data.message);
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : "Could not resend code"
      );
    } finally {
      setResending(false);
    }
  };

  return (
    <PageLayout>

      <section className="min-h-screen bg-[#faf9f6] py-20">
        <div className="mx-auto max-w-md rounded-3xl bg-white p-10 shadow-xl">
          <div className="mb-8 text-center">
            <img
              src="/images/IIPGJA-logo.png"
              alt="IIPGJA"
              className="mx-auto h-24 w-auto object-contain"
            />
            <h1 className="mt-4 text-3xl font-bold text-gray-900">
              Verify Email
            </h1>
            <p className="mt-3 text-gray-500">
              Enter the 6-digit code sent to your email. It expires in 15
              minutes.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleVerify}>
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

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full rounded-xl border p-4 outline-none focus:border-[#b8903d]"
            />

            <input
              type="text"
              required
              inputMode="numeric"
              autoComplete="one-time-code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Verification code"
              className="w-full rounded-xl border p-4 tracking-[0.3em] outline-none focus:border-[#b8903d]"
            />

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-[#b8903d] py-4 font-semibold text-white disabled:opacity-60"
            >
              {submitting ? "Verifying..." : "Verify Email"}
            </button>
          </form>

          <button
            type="button"
            onClick={handleResend}
            disabled={resending}
            className="mt-4 w-full text-center text-sm font-semibold text-[#b8903d] disabled:opacity-60"
          >
            {resending ? "Sending..." : "Resend verification code"}
          </button>

          <div className="mt-8 text-center">
            <Link to={loginLink} className="font-semibold text-[#b8903d]">
              Back to Login
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VerifyEmail;
