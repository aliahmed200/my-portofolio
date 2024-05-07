import Projects from "./components/Projects/Projects";
import NavContextProvider from "./context/navContext";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactMe from "./components/ContactMe/ContactMe";
import NotFound from "./components/NotFound/NotFound";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "projectsDetails/:id", element: <ProjectDetails /> },
      { path: "skills", element: <Skills /> },
      { path: "contactme", element: <ContactMe /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
    <NavContextProvider>
      <div className="background-project p-10 xl:px-24 text-white animate-faidIn dark:text-zinc-800 dark:bg-white">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </NavContextProvider>
  );
}

export default App;
