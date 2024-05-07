import React, { useContext, useEffect } from "react";
import homeAnimation from "../../Assets/Animation - 1714866948612.json";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import { NavContext } from "../../context/navContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
  const { setNav } = useContext(NavContext);
  useEffect(() => {
    setNav(true);

    return () => {
      setNav(false);
    };
  }, [setNav]);

  return (
    <div className="flex flex-col lg:flex-row-reverse items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <div className="flex-1 mb-3 dark:bg-none dark:bg-green-300 bg-gradient-to-br from-gray-50 via-gray-200 to-gray-300 lg:-mt-32 rounded-b-xl ">
        <Lottie
          className={"text-lg animate-transY"}
          animationData={homeAnimation}
        />
      </div>
      <div className="flex-1 lg:-mt-16">
        <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl">
          Ali Ahmed.
        </h1>
        <p className="font-semibold text-2xl mb-4">
          <Typewriter
            words={["Front End Developer"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
          />
        </p>
        <p className="font-light md:text-xl max-w-[620px] text-gray-400 mb-6 dark:text-zinc-800 tracking-widest">
          I’m a passionate Front End developer with experience developing Front
          End web applications with React.js I am strongly interested in
          learning new technologies and implementing them in my projects. I'm a
          self-motivated and hardworking individual who is always ready to learn
          new things and work in a team.
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
