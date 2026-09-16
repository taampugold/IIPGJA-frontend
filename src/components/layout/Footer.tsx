import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Logo from "./Logo";
import { pageWidthClass } from "./PageContainer";

const Footer = () => {
  const menu = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Books", link: "/books" },
    { title: "Courses & Eligibility Test", link: "/courses" },
    { title: "Gold Testing", link: "/gold-calculator" },
    { title: "Services", link: "/services" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Top Footer */}

      <div className={`${pageWidthClass} grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4`}>

        {/* Logo & About */}

        <div>
          <Link to="/" className="mb-4 inline-block">
            <Logo className="h-16 w-auto object-contain sm:h-20" />
          </Link>

          <p className="text-sm leading-7 text-gray-300">
            Indian Institute of Precious Gem & Jewellery
            Appraiser provides industry-focused online diploma programs
            designed by experts to build successful careers.
          </p>

          {/* Social Media */}

          <div className="mt-6 flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-500 p-3 text-slate-900 transition hover:bg-yellow-600"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-500 p-3 text-slate-900 transition hover:bg-yellow-600"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-500 p-3 text-slate-900 transition hover:bg-yellow-600"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-500 p-3 text-slate-900 transition hover:bg-yellow-600"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Courses */}

        <div>
          <h3 className="mb-6 text-xl font-bold">
            Courses
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <Link
                to="/courses"
                className="transition hover:text-yellow-400"
              >
               Diploma in Jewellery Appraiser
              </Link>
            </li>

            <li>
              <Link
                to="/courses"
                className="transition hover:text-yellow-400"
              >
                Diploma in Gem Appraiser
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-yellow-400"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="mb-6 text-xl font-bold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            {menu.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.link}
                  className="transition hover:text-yellow-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="mb-6 text-xl font-bold">
            Contact Us
          </h3>

          <div className="space-y-5 text-gray-300">

            <a
              href="tel:+918489299150"
              className="flex gap-4 transition hover:text-yellow-400"
            >
              <FaPhoneAlt className="mt-1 shrink-0 text-yellow-500" />

              <span>
                +91 8489299150
              </span>
            </a>

            <a
              href="mailto:iipgja.org@gmail.com"
              className="flex gap-4 transition hover:text-yellow-400"
            >
              <FaEnvelope className="mt-1 shrink-0 text-yellow-500" />

              <span>
              iipgja.org@gmail.com
              </span>
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-700">
        <div className={`${pageWidthClass} flex flex-col items-center justify-between gap-4 py-6 text-sm text-gray-400 md:flex-row`}>

          <p>
            © {new Date().getFullYear()} IIPGJA. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/privacy-policy"
              className="transition hover:text-yellow-400"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-yellow-400"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/refund-policy"
              className="transition hover:text-yellow-400"
            >
              Refund Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;