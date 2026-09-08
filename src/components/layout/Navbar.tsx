import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const navLinkClass =
  "whitespace-nowrap rounded-lg border border-yellow-600 px-3.5 py-2 text-base font-semibold text-yellow-700 transition hover:bg-yellow-500 hover:text-white xl:px-5 xl:py-2.5 xl:text-lg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
    <>
      <nav className="flex h-28 w-full items-center px-4 py-2 sm:px-6 lg:h-32 lg:px-8">
        <Link
          to="/"
          className="flex h-full min-h-0 shrink-0 items-stretch bg-black"
        >
          <Logo className="h-full w-auto object-contain p-2" />
          <div className="flex flex-col justify-center pr-3 leading-tight sm:pr-4">
            <h1 className="text-xl font-bold text-[#f3c96b] sm:text-3xl lg:text-4xl">
              IIPGJA
            </h1>
            <p className="hidden max-w-[280px] text-xs leading-snug text-gray-300 sm:block lg:max-w-[320px] lg:text-lg">
              Indian Institute of Precious <br />
              Gem & Jewellery Appraisers
            </p>
          </div>
        </Link>

        <div className="hidden min-w-0 flex-1 justify-center lg:flex">
          <ul className="flex flex-wrap items-center justify-center gap-2 xl:gap-3">
            {menu.map((item) => (
              <li key={item.title}>
                <Link to={item.link} className={navLinkClass}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
          className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-300 text-slate-700 lg:hidden"
        >
          <HiMenuAlt3 size={22} />
        </button>
      </nav>

      <MobileMenu open={open} setOpen={setOpen} menu={menu} />
    </>
  );
};

export default Navbar;
