import { TbHexagonLetterA } from "react-icons/tb";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useContext, useState } from "react";
import { NavContext } from "../../context/navContext";
import { Link } from "react-router-dom";
export default function Nav() {
  const { nav } = useContext(NavContext);
  const [isShow, setIsShow] = useState(false);
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
  };
  return (
    <nav className="flex justify-between items-center flex-wrap gap-y-3 ">
      {/* logo */}
      <Link to={""}>
        <TbHexagonLetterA size={25} className="text-white dark:text-zinc-800" />
      </Link>
      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
        className="p-2  focus:ring-2 rounded focus:ring-zinc-600 hover:bg-zinc-400 hover:text-zinc-800 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* sections */}
      <div className={`${isShow && "hidden"} w-full lg:block lg:w-auto`}>
        <ul className="lg:space-x-8 flex flex-col bg-zinc-400 mb-3 text-md p-4 font-light rounded-lg lg:flex-row lg:bg-transparent">
          <Link
            className={`px-3 py-2 z-10 hover:bg-gray-700 cursor-pointer active:scale-75 rounded `}
            to={""}
          >
            Home
          </Link>
          <Link
            className={`px-3 py-2 z-10 hover:bg-gray-700 cursor-pointer active:scale-75 rounded`}
            to={"about"}
          >
            About
          </Link>
          <Link
            className={`px-3 py-2 z-10 hover:bg-gray-700 cursor-pointer active:scale-75 rounded`}
            to={"skills"}
          >
            Skills
          </Link>
          <Link
            className={`px-3 py-2 z-10 hover:bg-gray-700 cursor-pointer active:scale-75 rounded ${
              nav ? "lg:text-black lg:hover:bg-gray-300 dark:text-white" : ""
            }`}
            to={"projects"}
          >
            Projects
          </Link>
          <Link
            className={`px-3 py-2 z-10 hover:bg-gray-700 cursor-pointer active:scale-75 rounded ${
              nav ? "lg:text-black lg:hover:bg-gray-300 dark:text-white" : ""
            }`}
            to={"contactme"}
          >
            Contact Me
          </Link>
        </ul>
      </div>

      {/* theme button */}
      <div className="z-10 fixed bottom-4 right-4 lg:static">
        <div
          onClick={toggleDarkMode}
          className={`h-10 w-10 cursor-pointer flex-center rounded-full shadow-sm lg:shadow-xl ${
            nav
              ? "bg-zinc-800 dark:bg-white lg:bg-transparent lg:text-zinc-800 dark:lg:text-white dark:lg:bg-transparent"
              : "bg-black dark:bg-white"
          } `}
        >
          <BiMoon size={25} className="hidden dark:block" />
          <BiSun size={25} className="dark:hidden" />
        </div>
      </div>
    </nav>
  );
}
