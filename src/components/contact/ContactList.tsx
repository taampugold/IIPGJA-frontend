import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaClipboardList,
} from "react-icons/fa";
import { courses } from "../../data/courses";
import { apiRequest, ApiError } from "../../lib/api";
import PageContainer from "../layout/PageContainer";

interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  enquiryType: string;
  interest: string;
  contactMode: string;
  message: string;
}

const emptyForm: EnquiryFormData = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  enquiryType: "",
  interest: "",
  contactMode: "Phone",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-[#faf9f6] px-4 py-3 text-slate-800 outline-none transition focus:border-[#b8903d] focus:ring-2 focus:ring-[#b8903d]/20";

const ContactList = () => {
  const [formData, setFormData] = useState<EnquiryFormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "enquiryType" && value !== "Eligibility Test Enquiry") {
        next.interest = "";
      }
      return next;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);
    setSubmitting(true);

    try {
      await apiRequest<{ message?: string }>("/api/enquiries", {
        method: "POST",
        body: formData,
      });

      setSubmitted(true);
      setFormData(emptyForm);
      window.setTimeout(() => setSubmitted(false), 8000);
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : "Could not submit enquiry. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const showTestInterest = formData.enquiryType === "Eligibility Test Enquiry";

  return (
    <main className="bg-[#faf9f6]">
      <section className="relative w-full overflow-hidden bg-slate-900 py-20 text-white md:py-24">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

        <PageContainer fullWidth className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-semibold uppercase tracking-[4px] text-yellow-400">
              Enquiry Form
            </span>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              Submit Your <span className="text-yellow-400">Enquiry</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Share your details and our team will contact you about eligibility
              tests, courses, books, gold testing, or services.
            </p>
          </motion.div>
        </PageContainer>
      </section>

      <section className="py-16 md:py-20">
        <PageContainer>
          <div className="grid gap-10 lg:grid-cols-12">
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#b8903d]">
                  Contact Details
                </span>
                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                  Reach IIPGJA
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Fill the enquiry form and we will respond with course fees,
                  test schedules, and next steps.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff8e8] text-[#b8903d]">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Location</h3>
                      <p className="mt-1 text-sm text-slate-600">India</p>
                    </div>
                  </div>

                  <a href="tel:+918489299150" className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff8e8] text-[#b8903d]">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Phone</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        +91 8489299150
                      </p>
                    </div>
                  </a>

                  <a href="mailto:iipgja.contact@gmail.com" className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff8e8] text-[#b8903d]">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Email</h3>
                      <p className="mt-1 break-all text-sm text-slate-600">
                        iipgja.contact@gmail.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <FaClipboardList className="text-[#b8903d]" size={22} />
                  <h3 className="text-lg font-bold text-slate-900">
                    After you submit
                  </h3>
                </div>
                <ol className="mt-5 space-y-4 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#b8903d] text-xs font-bold text-white">
                      1
                    </span>
                    We review your enquiry details
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#b8903d] text-xs font-bold text-white">
                      2
                    </span>
                    Our team calls or emails you
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#b8903d] text-xs font-bold text-white">
                      3
                    </span>
                    You receive fee, schedule, and guidance
                  </li>
                </ol>
              </div>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg sm:p-8 md:p-10 lg:col-span-8"
            >
              <div className="mb-8 border-b border-slate-100 pb-6">
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  Enquiry Details
                </h2>
                <p className="mt-2 text-slate-600">
                  All fields marked with * are required. Please provide accurate
                  contact information.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-800">
                  Your enquiry has been submitted. Our team will contact you
                  shortly. Please check your email for a confirmation and test
                  details.
                </div>
              )}

              {error && (
                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-800">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                      Mobile Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="mb-2 block text-sm font-semibold text-slate-700">
                      City / Location *
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="enquiryType" className="mb-2 block text-sm font-semibold text-slate-700">
                      Enquiry Type *
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select enquiry type</option>
                      <option value="Eligibility Test Enquiry">
                        Eligibility Test Enquiry
                      </option>
                      <option value="Course Enquiry">Course Enquiry</option>
                      <option value="Books Enquiry">Books Enquiry</option>
                      <option value="Gold Testing Enquiry">
                        Gold Testing Enquiry
                      </option>
                      <option value="Services Enquiry">Services Enquiry</option>
                      <option value="Registration Support">
                        Registration Support
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contactMode" className="mb-2 block text-sm font-semibold text-slate-700">
                      Preferred Contact Mode *
                    </label>
                    <select
                      id="contactMode"
                      name="contactMode"
                      required
                      value={formData.contactMode}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="Phone">Phone Call</option>
                      <option value="Email">Email</option>
                      <option value="WhatsApp">WhatsApp</option>
                    </select>
                  </div>
                </div>

                {showTestInterest && (
                  <div>
                    <label htmlFor="interest" className="mb-2 block text-sm font-semibold text-slate-700">
                      Interested Eligibility Test
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a test (optional)</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.title}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                    Enquiry Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you want to know — test schedule, books, services, etc."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#b8903d] px-8 py-4 font-semibold text-white transition hover:bg-[#9a7730] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
                >
                  {submitting ? "Submitting..." : "Submit Enquiry"}
                  {!submitting && (
                    <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </PageContainer>
      </section>

      <section className="pb-20">
        <PageContainer>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <iframe
              title="IIPGJA Location"
              src="https://www.google.com/maps?q=Chennai,Tamil+Nadu,India&output=embed"
              className="h-[360px] w-full border-0"
              loading="lazy"
            />
          </div>
        </PageContainer>
      </section>
    </main>
  );
};

export default ContactList;
