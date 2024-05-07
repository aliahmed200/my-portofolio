import { CgEditBlackPoint } from "react-icons/cg";
import { RxVercelLogo } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ProjectDetails() {
  const location = useLocation();
  const { project } = location.state;
  const { id, name, description, image, vercel, github } = project;

  console.log(id);
  return (
    <div className="lg:flex gap-10 my-20 lg:items-start">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Prject Details</title>
      </Helmet>
      <div className="flex-1 mb-8">
        <p className="font-bold text-4xl mb-8">{name}</p>
        <ul className="mb-8">
          {description.map((d, i) => {
            return (
              <li
                key={i}
                className=" flex items-center gap-x-1 font-normal md:text-lg max-w-[750px] text-gray-400  dark:text-zinc-800 tracking-wide"
              >
                <CgEditBlackPoint className="dark:text-black text-white" /> {d}
              </li>
            );
          })}
        </ul>
        <div className="flex gap-x-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-6 rounded-lg bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition"
          >
            <AiFillGithub />
          </a>
          {vercel === "" ? (
            ""
          ) : (
            <a
              href={vercel}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-6 rounded-lg bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition"
            >
              <RxVercelLogo />
            </a>
          )}
        </div>
      </div>
      <img
        className="rounded-lg flex-1 lg:w-[700px] lg:h-[400px]"
        src={image}
        alt="project name"
      />
    </div>
  );
}
