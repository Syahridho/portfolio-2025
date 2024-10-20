import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import NavLink from "@/components/ui/NavLink";
const navs = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Project",
    href: "/project",
  },
  {
    title: "Certificate",
    href: "/certificate",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleHamburger = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed  top-0 left-0 w-full z-40 bg-white shadow-sm md:sticky md:h-screen md:w-96 md:pt-16 dark:bg-gray-900 dark:shadow-gray-700">
      <div className="container mx-auto px-4 relative">
        <div className="h-14 flex justify-between items-center md:justify-center md:h-auto md:mb-4 md:py-4 md:bg-slate-50 rounded-xl relative card-profile md:dark:bg-slate-800 md:before:shadow-rounded-light md:before:dark:!shadow-rounded-dark md:after:!shadow-rounded-light md:after:dark:!shadow-rounded-dark">
          <div className="flex items-center gap-2 md:flex-col">
            <h1 className="font-medium text-center">
              Syahridho Arjuna Syahputra
            </h1>
          </div>
          <button
            id="hamburger"
            aria-label="hamburger"
            className="p-2 hover:bg-slate-100 rounded md:hidden dark:hover:bg-slate-700"
            onClick={() => handleHamburger()}
          >
            {toggle ? (
              <FaXmark className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
        <div className={`${!toggle && "hidden"} md:block h-screen md:h-auto`}>
          <ul className="flex flex-col gap-1 py-4 border-y border-slate-200">
            {navs.map((nav, index) => (
              <li key={index}>
                <NavLink href={nav.href} title={nav.title} />
              </li>
            ))}
          </ul>
          <div className="py-8 md:py-6">
            <h1 className="text-center text-slate-500 dark:text-white">
              Social Media
            </h1>
            <ul className="flex justify-center items-center flex-wrap gap-2 py-4">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
