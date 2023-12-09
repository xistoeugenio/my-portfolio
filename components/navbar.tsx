import { ModeToggle } from "./mode-toggle";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="fixed z-30 w-full h-[12%] min-h-[80px] flex items-center justify-center bg-white dark:bg-slate-300/30 backdrop-blur-[10px] ">
      <div className="w-full max-w-[1280px] mx-9 flex justify-between items-center">
        <span className=" dark:text-blue-950 font-semibold">Xisto.</span>
        <div className="flex gap-12">
          <Link
            className="p-2 rounded-md"
            activeClass="bg-neutral-200"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            containerId="containerElement"
            scrolling="100px"
          >
            Home
          </Link>

          <Link
            className="p-2 rounded-md"
            activeClass="bg-neutral-200"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            containerId="containerElement"
          >
            About
          </Link>

          <Link
            className="p-2 rounded-md"
            activeClass="bg-neutral-200"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            containerId="containerElement"
          >
            Projects
          </Link>

          <Link
            className="p-2 rounded-md"
            activeClass="bg-neutral-200"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            containerId="containerElement"
          >
            Contact Me
          </Link>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};
