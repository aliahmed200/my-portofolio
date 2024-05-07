import React from "react";
import cart from "../../Assets/grocery-cart.png";
import cv from "../../Assets/cv (3).png";
import note from "../../Assets/notepad.png";
import programer from "../../Assets/programing.png";
import noteApp from "../../Assets/note-app.png";
import freshApp from "../../Assets/fresh-app.png";
import portoApp from "../../Assets/porto-app.png";
import cvApp from "../../Assets/cv-app.png";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Fresh Cart",
      description: [
        "Created a cool online shop using React.js",
        "Connected it smoothly to Api using Axios.",
        "Made sure all the info entered is correct and safe",
        "Used Formik to make signing up and buying stuff easy",
        "Designed a simple cart page so you can see what you’re buying",
        "Made the website work smoothly, like it’s all on one page (SPA)",
      ],
      image: freshApp,
      vercel: "",
      github: "https://github.com/aliahmed200/E-commerce",
    },
    {
      id: 2,
      name: "Note App",
      description: [
        "Made a Note Website using React.js for easy interaction",
        "Used Axios to connect with other websites smoothly",
        "Made sure the forms work well using Yup",
        "Used Formik to make login and sign up easy",
        "Let users add, delete, and change notes easily",
        "Implemented a Single Page Application (SPA).",
      ],
      image: noteApp,
      vercel: "",
      github: "https://github.com/aliahmed200/note-app",
    },
    {
      id: 3,
      name: "JobJunction",
      description: [
        "Designed and developed a cv builder System using react and Tailwind CSS",
        "Users can select their preferred template.",
        "input their information, and generate a professional CV in PDF format.",
        "It’s an easy-to-use tool for creating personalized resumes effortlessly",
      ],
      image: cvApp,
      vercel: "https://cv-builder-newversion.vercel.app/",
      github: "https://github.com/aliahmed200/cv-builder",
    },
    {
      id: 4,
      name: "My Portofolio",
      description: [
        "Developed an engaging Portofolio using React.js and Tailwind CSS.",
        "Implemented dark mode and light mode themes for enhanced user experience.",
        "Utilized React-Router for seamless navigation, ensuring a (spa) architecture.",
        "Integrated simple animations to enhance the interactivity of the website.",
      ],
      image: portoApp,
      vercel: "https://my-portofolio-one-pearl.vercel.app/",
      github: "https://github.com/aliahmed200/my-portofolio",
    },
  ];
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects</title>
      </Helmet>
      <div className="lg:my-24">
        <h3 className="font-bold text-4xl mb-8">My Projects</h3>
        <p className="font-normal md:text-lg max-w-[750px] text-gray-400 mb-8 dark:text-zinc-800 tracking-wide nb-6">
          Many of them are open-source, so if you see something that piques your
          interest, check out the code and contribute if you have ideas on how
          it can be improved.
        </p>
        <div className="flex flex-wrap gap-6 ">
          <div
            onClick={() => {
              navigate(`/projectsDetails/${1}`, {
                state: { project: projects[0] },
              });
            }}
            className="flex gap-x-10 items-center px-4 w-96 h-28 cursor-pointer rounded-lg bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition"
          >
            <img
              src={cart}
              className="w-20 h-20 bg-zinc-900 p-2 rounded-md"
              alt=""
            />
            <div>
              <p className="font-bold tracking-wider">Fresh Cart</p>
              <p className="font-light tracking-wide">
                E-commerce Web Application
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              navigate(`/projectsDetails/${2}`, {
                state: { project: projects[1] },
              });
            }}
            className="flex gap-x-10 items-center px-4 w-96 h-28 cursor-pointer rounded-lg bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition"
          >
            <img
              src={note}
              className="w-20 h-20 bg-zinc-900 p-2 rounded-md"
              alt=""
            />
            <div>
              <p className="font-bold tracking-wider">Note App</p>
              <p className="font-light tracking-wide">Note Web Application</p>
            </div>
          </div>
          <div
            onClick={() => {
              navigate(`/projectsDetails/${3}`, {
                state: { project: projects[2] },
              });
            }}
            className="flex gap-x-10 items-center px-4 w-96 h-28 cursor-pointer rounded-lg bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition"
          >
            <img
              src={cv}
              className="w-20 h-20 bg-zinc-900 p-2 rounded-md"
              alt=""
            />
            <div>
              <p className="font-bold tracking-wider">JobJunction</p>
              <p className="font-light tracking-wide">
                Cv Builder Web Application
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              navigate(`/projectsDetails/${4}`, {
                state: { project: projects[3] },
              });
            }}
            className="flex gap-x-10 items-center px-4 w-96 h-28 cursor-pointer rounded-lg bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition"
          >
            <img
              src={programer}
              className="w-20 h-20 bg-zinc-900 p-2 rounded-md"
              alt=""
            />
            <div>
              <p className="font-bold tracking-wider">My Portofolio</p>
              <p className="font-light tracking-wide">
                Portofolio Web Application
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
