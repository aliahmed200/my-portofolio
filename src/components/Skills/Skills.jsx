import React from "react";
import html from "../../Assets/html-5.png";
import css from "../../Assets/css-3.png";
import bootstrap from "../../Assets/bootstrap.png";
import tailwind from "../../Assets/icons8-tailwind-css-48.png";
import js from "../../Assets/js.png";
import react from "../../Assets/icons8-react-native-48.png";
import redux from "../../Assets/icons8-redux-48.png";
import axios from "../../Assets/axios_.png";
import git from "../../Assets/icons8-git-48.png";
import npm from "../../Assets/icons8-npm-48.png";
import vercel from "../../Assets/vercel.256x225.png";
import github from "../../Assets/social.png";
import lottie from "../../Assets/download.png";
import reacticons from "../../Assets/react-icons.svg";
import vscode from "../../Assets/download (1).png";
import postman from "../../Assets/download (2).png";
import figma from "../../Assets/download (3).png";
import chrome from "../../Assets/chrome.jpeg";
import { Helmet } from "react-helmet";

export default function Skills() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skills</title>
      </Helmet>
      <div className="">
        <div className="lg:my-10 my-8">
          <h3 className=" font-bold text-4xl mb-8 inline-block">Skills</h3>
          <p className="font-normal md:text-lg max-w-[750px] text-gray-400 mb-8 dark:text-zinc-800 tracking-wide nb-6">
            I use this Skills in most of my projects.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img src={html} className="w-20 h-20 p-2 rounded-md" alt="Html" />
              <p className="font-light tracking-wide">Html</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img src={css} className="w-20 h-20 p-2 rounded-md" alt="Css" />
              <p className="font-light tracking-wide">Css</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img
                src={js}
                className="w-20 h-20 p-2 rounded-md"
                alt="Java Script"
              />
              <p className="font-light tracking-wide">Java Script</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent  border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img
                src={tailwind}
                className="w-20 h-20 p-2 rounded-md"
                alt="TilWind"
              />
              <p className="font-light tracking-wide">TailWind</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img
                src={bootstrap}
                className="w-20 h-20 p-2 rounded-md"
                alt="BootStrap"
              />
              <p className="font-light tracking-wide">BootStrap</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img
                src={react}
                className="w-20 h-20 p-2 rounded-md"
                alt="React"
              />
              <p className="font-light tracking-wide">React</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img
                src={redux}
                className="w-20 h-20 p-2 rounded-md"
                alt="Redux"
              />
              <p className="font-light tracking-wide">Redux</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img src={git} className="w-20 h-20 p-2 rounded-md" alt="Git" />
              <p className="font-light tracking-wide">Git</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img
                src={axios}
                className="w-20 h-20 p-2 rounded-md"
                alt="Axois"
              />
              <p className="font-light tracking-wide">Axios</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img src={npm} className="w-20 h-20 p-2 rounded-md" alt="npm" />
              <p className="font-light tracking-wide">npm</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img
                src={vercel}
                className="w-20 h-20 p-2 rounded-md"
                alt="Vercel"
              />
              <p className="font-light tracking-wide">Vercel</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img
                src={github}
                className="w-20 h-20 p-2 rounded-md"
                alt="git hub"
              />
              <p className="font-light tracking-wide">git hub</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img
                src={lottie}
                className="w-20 h-20 p-2 rounded-md"
                alt="lottie"
              />
              <p className="font-light tracking-wide">Lottie</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img
                src={reacticons}
                className="w-20 h-20 p-2 rounded-md"
                alt="react-icons"
              />
              <p className="font-light tracking-wide">React-Icons</p>
            </div>
          </div>
        </div>
        <div className="lg:my-10">
          <h3 className=" font-bold text-4xl mb-8 inline-block">Tools</h3>
          <p className="font-normal md:text-lg max-w-[750px] text-gray-400 mb-8 dark:text-zinc-800 tracking-wide nb-6">
            I use this tool in most of my projects.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img
                src={vscode}
                className="w-20 h-20 p-2 rounded-md"
                alt="vscode"
              />
              <p className="font-light tracking-wide">Vscode</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img
                src={chrome}
                className="w-20 h-20 p-2 rounded-md"
                alt="google chrome"
              />
              <p className="font-light tracking-wide">Chrome</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img
                src={postman}
                className="w-20 h-20 p-2 rounded-md"
                alt="Postman"
              />
              <p className="font-light tracking-wide">Postman</p>
            </div>
            <div className="flex flex-col justify-center gap-x-10 items-center px-4 w-32 h-32 rounded-lg bg-transparent dark:bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition">
              <img
                src={figma}
                className="w-20 h-20 p-2 rounded-md"
                alt="figma"
              />
              <p className="font-light tracking-wide">Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
