import { useState } from "react";
import { Link } from "react-router-dom";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Is this a taught course?",
    answer:
      "No. IIPGJA conducts an eligibility test only. We do not teach a diploma course on this page. You register or log in to take the assessment.",
  },
  {
    id: 2,
    question: "Who can take this eligibility test?",
    answer:
      "Anyone seeking professional eligibility validation in jewellery or gem appraisal can register. Requirements may vary by test stream.",
  },
  {
    id: 3,
    question: "How do I start the test?",
    answer:
      "Create an account (Register) or sign in (Login) from the test details page. After authentication you can proceed with the eligibility test.",
  },
  {
    id: 4,
    question: "Is the test conducted online?",
    answer:
      "Yes. The eligibility test is conducted as an online assessment that you can take after logging in.",
  },
  {
    id: 5,
    question: "Will I receive a certificate?",
    answer:
      "Yes. Candidates who successfully qualify receive an eligibility certificate / result report from IIPGJA.",
  },
  {
    id: 6,
    question: "What does the test fee cover?",
    answer:
      "The listed fee covers the eligibility assessment and the eligibility result / certificate for that test stream.",
  },
  {
    id: 7,
    question: "What payment methods are accepted?",
    answer:
      "You can pay using UPI, credit cards, debit cards, net banking, and other supported online payment methods after login or registration.",
  },
  {
    id: 8,
    question: "Can I take the test on my mobile phone?",
    answer:
      "Yes. The assessment platform works on mobile phones, tablets, laptops, and desktop computers.",
  },
];

const CourseFAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <section className="mt-20 rounded-3xl bg-white p-8 shadow-lg">
      <div className="mb-10 text-center">
        <span className="rounded-full bg-[#f6edd8] px-4 py-2 text-sm font-semibold text-[#b8903d]">
          FAQ
        </span>

        <h2 className="mt-5 text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-gray-600">
          Everything you need to know before taking the eligibility test.
        </p>
      </div>

      <div className="space-y-5">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="overflow-hidden rounded-2xl border border-gray-200 transition hover:border-[#b8903d]"
          >
            <button
              type="button"
              onClick={() => toggleFAQ(faq.id)}
              className="flex w-full items-center justify-between bg-white px-6 py-5 text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>

              <span className="text-3xl font-light text-[#b8903d]">
                {activeFAQ === faq.id ? "−" : "+"}
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                activeFAQ === faq.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t bg-[#faf9f6] px-6 py-5">
                  <p className="leading-8 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#b8903d] to-[#8a6b2d] p-8 text-center text-white">
        <h3 className="text-2xl font-bold">Still have questions?</h3>

        <p className="mt-3 text-white/90">
          Our team can help you choose the right eligibility test.
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-[#b8903d] transition hover:bg-gray-100"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default CourseFAQ;
