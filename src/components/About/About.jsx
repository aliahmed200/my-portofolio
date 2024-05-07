import React, { useContext, useEffect } from "react";
import homeAnimation from "../../Assets/Animation - 1714866948612.json";
import Lottie from "lottie-react";
import { NavContext } from "../../context/navContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function About() {
  const { setNav } = useContext(NavContext);
  useEffect(() => {
    // This will run when the component mounts
    setNav(true);

    // Return a cleanup function to run when the component unmounts
    return () => {
      // Code to run when component unmounts
      setNav(false);
    };
  }, [setNav]);

  return (
    <div className="flex flex-col lg:flex-row-reverse items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <div className="flex-1  mb-3 dark:bg-none dark:bg-green-300 bg-gradient-to-br from-gray-50 via-gray-200 to-gray-300 lg:-mt-32 rounded-b-xl ">
        <Lottie className={"text-lg"} animationData={homeAnimation} />
      </div>
      <div className="flex-1 lg:-mt-16">
        <p className="font-extrabold text-5xl mb-6 md:text-7xl lg:text-8xl">
          Little Bit
          <br /> About Me
        </p>
        <p className="font-light md:text-xl max-w-[620px] text-gray-400 mb-6 dark:text-zinc-800 tracking-widest">
          Hello! I'm Ali, a front-end developer from Egypt. I love creating web
          applications with React, and I'm currently studying BackEnd. "I'm not
          sure if it's "front-end", "frontend", or "front end", but it doesn't
          really matter😅"
        </p>
        <Link
          to={"/contactme"}
          className="border border-white dark:border-zinc-800 rounded-lg py-2 px-4 hover:bg-gray-300 dark:hover:bg-white hover:text-zinc-800 active:scale-75 transition "
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
