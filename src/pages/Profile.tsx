import { FormEvent, useEffect, useRef, useState, type ChangeEvent } from "react";
import { HiTrash, HiEye, HiEyeOff } from "react-icons/hi";
import PortalShell from "../components/portal/PortalShell";
import { useAuth } from "../context/AuthContext";
import { ApiError } from "../lib/api";

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

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const photoInputRef = useRef<HTMLInputElement>(null);

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
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (!user) return;
    setForm({
      fullName: user.fullName || "",
      email: user.email || "",
      mobile: user.mobile || "",
      aadhaarNumber: user.aadhaarNumber || "",
      tenthMarksheetRegNo: user.tenthMarksheetRegNo || "",
      tenthResult: user.tenthResult || "",
      homeAddress: user.homeAddress || "",
      username: user.username || "",
      password: "",
      confirmPassword: "",
    });
    setPhotoPreview(user.photo || "");
  }, [user]);

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
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid photo image");
      return;
    }
    setError("");
    if (photoPreview && photoPreview.startsWith("blob:")) {
      URL.revokeObjectURL(photoPreview);
    }
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handlePhotoDelete = () => {
    if (photoPreview && photoPreview.startsWith("blob:")) {
      URL.revokeObjectURL(photoPreview);
    }
    setPhoto(null);
    setPhotoPreview("");
    if (photoInputRef.current) photoInputRef.current.value = "";
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.aadhaarNumber && form.aadhaarNumber.length !== 12) {
      setError("Aadhaar number must be 12 digits");
      return;
    }

    if (form.mobile.length !== 10) {
      setError("Mobile number must be 10 digits");
      return;
    }

    if (form.password || form.confirmPassword) {
      if (form.password !== form.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      if (form.password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }
    }

    setSubmitting(true);

    try {
      const photoData = photo ? await fileToDataUrl(photo) : undefined;
      const payload: Record<string, unknown> = {
        fullName: form.fullName,
        email: form.email,
        mobile: form.mobile,
        aadhaarNumber: form.aadhaarNumber,
        tenthMarksheetRegNo: form.tenthMarksheetRegNo,
        tenthResult: form.tenthResult,
        homeAddress: form.homeAddress,
        username: form.username,
      };
      if (photoData) payload.photo = photoData;
      if (!photoPreview && !photo) payload.photo = "";
      if (form.password) payload.password = form.password;

      await updateProfile(payload);
      setForm((prev) => ({ ...prev, password: "", confirmPassword: "" }));
      setPhoto(null);
      setSuccess("Profile updated successfully.");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Could not update profile");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PortalShell title="Update Profile">
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-8 sm:py-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Your details</h2>
          <p className="mt-2 text-sm text-slate-500">
            These are the same details collected at registration. Update them
            whenever you need to.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            {error && (
              <p className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}
            {success && (
              <p className="mb-5 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
                {success}
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
                  inputMode="numeric"
                  value={form.aadhaarNumber}
                  onChange={handleAadhaarChange}
                  placeholder="Aadhaar Number"
                  className={inputClass}
                />
                <input
                  name="tenthMarksheetRegNo"
                  value={form.tenthMarksheetRegNo}
                  onChange={handleChange}
                  placeholder="10th Marksheet Register Number"
                  className={inputClass}
                />
                <select
                  name="tenthResult"
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
                  rows={3}
                  value={form.homeAddress}
                  onChange={handleChange}
                  placeholder="Home Address"
                  className={`${inputClass} resize-none sm:col-span-2`}
                />
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="New password (optional)"
                    className={`${inputClass} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((open) => !open)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                  >
                    {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                  </button>
                </div>
                <div className="relative">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
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
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                  >
                    {showConfirmPassword ? (
                      <HiEyeOff size={20} />
                    ) : (
                      <HiEye size={20} />
                    )}
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-xl bg-[#b8903d] py-4 font-semibold text-white disabled:opacity-60 sm:col-span-2"
                >
                  {submitting ? "Saving..." : "Update Profile"}
                </button>
              </div>

              <aside>
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
                        alt="Profile photo"
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
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="mt-3 w-full text-sm text-slate-600 file:mr-3 file:rounded-xl file:border-0 file:bg-[#fff8e8] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#b8903d]"
                />
              </aside>
            </div>
          </form>
        </div>
      </main>
    </PortalShell>
  );
};

export default Profile;
