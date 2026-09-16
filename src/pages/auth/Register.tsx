import { FormEvent, useRef, useState, type ChangeEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { HiTrash, HiEye, HiEyeOff } from "react-icons/hi";
import CaptchaField, {
  type CaptchaFieldHandle,
} from "../../components/auth/CaptchaField";
import PageLayout from "../../components/layout/PageLayout";
import { courses } from "../../data/courses";
import { apiRequest, ApiError } from "../../lib/api";

interface RegisterResponse {
  message: string;
  email: string;
  requiresEmailVerification?: boolean;
}

const inputClass =
  "w-full rounded-xl border p-4 outline-none focus:border-[#b8903d]";

function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Could not read photo"));
    reader.readAsDataURL(file);
  });
}

const Register = () => {
  const navigate = useNavigate();
  const captchaRef = useRef<CaptchaFieldHandle>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const testId = searchParams.get("test");
  const test = courses.find((c) => String(c.id) === testId);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    aadhaarNumber: "",
    tenthMarksheetRegNo: "",
    tenthResult: "",
    homeAddress: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const loginLink = testId ? `/login?test=${testId}` : "/login";

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAadhaarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 12);
    setForm((prev) => ({ ...prev, aadhaarNumber: digits }));
  };

  const handleMobileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setForm((prev) => ({ ...prev, mobile: digits }));
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPhoto(null);
      setPhotoPreview("");
      return;
    }
    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid photo image");
      return;
    }
    setError("");
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handlePhotoDelete = () => {
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    setPhoto(null);
    setPhotoPreview("");
    if (photoInputRef.current) photoInputRef.current.value = "";
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setCaptchaError("");

    if (!photo) {
      setError("Please upload your photo");
      return;
    }

    if (form.aadhaarNumber.length !== 12) {
      setError("Aadhaar number must be 12 digits");
      return;
    }

    if (form.mobile.length !== 10) {
      setError("Mobile number must be 10 digits");
      return;
    }

    if (!form.tenthResult) {
      setError("Please select 10th pass / fail status");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (!captchaRef.current?.validate()) {
      setCaptchaError("Incorrect captcha. Please try again.");
      return;
    }

    setSubmitting(true);

    try {
      const photoData = await fileToDataUrl(photo);
      const data = await apiRequest<RegisterResponse>("/api/auth/register", {
        method: "POST",
        body: {
          ...form,
          photo: photoData,
          testId: testId || null,
        },
      });

      const params = new URLSearchParams({
        email: data.email || form.email,
        registered: "1",
      });
      if (testId) params.set("test", testId);

      navigate(`/verify-email?${params.toString()}`, { replace: true });
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Registration failed");
      captchaRef.current?.refresh();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <section className="min-h-screen bg-[#faf9f6] py-12 md:py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8 md:p-10">
            <h1 className="mb-2 text-center text-3xl font-bold">
              Create Your Account
            </h1>

            <p className="mb-6 text-center text-gray-500">
              {test
                ? "Register to take your eligibility test."
                : "Create an account to get started."}
            </p>

            {test && (
              <p className="mb-8 rounded-xl bg-[#fff8e8] px-4 py-3 text-center text-sm font-medium text-slate-700">
                You are registering for:{" "}
                <span className="font-semibold text-[#b8903d]">
                  {test.title}
                </span>
                <span className="mt-1 block text-[#b8903d]">
                  Fee: {test.price}
                </span>
              </p>
            )}

            <form onSubmit={handleSubmit}>
              {error && (
                <p className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </p>
              )}

              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`${inputClass} sm:col-span-2`}
                  />

                  <input
                    name="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={inputClass}
                  />

                  <input
                    name="mobile"
                    required
                    type="tel"
                    inputMode="numeric"
                    value={form.mobile}
                    onChange={handleMobileChange}
                    placeholder="Mobile Number"
                    className={inputClass}
                  />

                  <input
                    name="aadhaarNumber"
                    required
                    inputMode="numeric"
                    value={form.aadhaarNumber}
                    onChange={handleAadhaarChange}
                    placeholder="Aadhaar Number"
                    className={inputClass}
                  />

                  <input
                    name="tenthMarksheetRegNo"
                    required
                    value={form.tenthMarksheetRegNo}
                    onChange={handleChange}
                    placeholder="10th Marksheet Register Number"
                    className={inputClass}
                  />

                  <select
                    name="tenthResult"
                    required
                    value={form.tenthResult}
                    onChange={handleChange}
                    className={`${inputClass} bg-white ${
                      form.tenthResult ? "text-slate-800" : "text-gray-400"
                    }`}
                  >
                    <option value="">10th Pass / Fail Status</option>
                    <option value="pass">Pass</option>
                    <option value="fail">Fail</option>
                  </select>

                  <input
                    name="username"
                    required
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className={inputClass}
                  />

                  <textarea
                    name="homeAddress"
                    required
                    rows={3}
                    value={form.homeAddress}
                    onChange={handleChange}
                    placeholder="Home Address"
                    className={`${inputClass} resize-none sm:col-span-2`}
                  />

                  <div className="relative">
                    <input
                      name="password"
                      required
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className={`${inputClass} pr-12`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((open) => !open)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-800"
                    >
                      {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      name="confirmPassword"
                      required
                      type={showConfirmPassword ? "text" : "password"}
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      className={`${inputClass} pr-12`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((open) => !open)}
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-800"
                    >
                      {showConfirmPassword ? (
                        <HiEyeOff size={20} />
                      ) : (
                        <HiEye size={20} />
                      )}
                    </button>
                  </div>

                  <div className="sm:col-span-2">
                    <CaptchaField
                      ref={captchaRef}
                      value={captchaValue}
                      onChange={(v) => {
                        setCaptchaValue(v);
                        setCaptchaError("");
                      }}
                      error={captchaError}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-xl bg-[#b8903d] py-4 font-semibold text-white disabled:opacity-60 sm:col-span-2"
                  >
                    {submitting ? "Registering..." : "Register"}
                  </button>
                </div>

                <aside className="order-first lg:order-none">
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-semibold text-slate-700">
                      Photo
                    </label>
                    {photoPreview && (
                      <button
                        type="button"
                        onClick={handlePhotoDelete}
                        aria-label="Delete photo"
                        className="text-slate-500 transition hover:text-slate-800"
                      >
                        <HiTrash size={18} />
                      </button>
                    )}
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#faf9f6]">
                    <div className="flex h-56 items-center justify-center sm:h-64 lg:h-72">
                      {photoPreview ? (
                        <img
                          src={photoPreview}
                          alt="Selected photo"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="px-4 text-center text-sm text-gray-400">
                          Upload your photo
                        </span>
                      )}
                    </div>
                  </div>
                  <input
                    ref={photoInputRef}
                    required
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="mt-3 w-full text-sm text-slate-600 file:mr-3 file:rounded-xl file:border-0 file:bg-[#fff8e8] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#b8903d]"
                  />
                </aside>
              </div>
            </form>

            <p className="mt-8 text-center text-gray-600">
              Already have an account?
            </p>

            <Link
              to={loginLink}
              className="mt-3 block text-center font-semibold text-[#b8903d]"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Register;
