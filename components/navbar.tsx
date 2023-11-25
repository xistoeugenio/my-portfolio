import { ModeToggle } from "./mode-toggle";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="fixed w-full p-4 flex justify-between items-center dark:bg-slate-300/30 backdrop-blur-[6px] ">
      <span className=" dark:text-blue-950">Xisto</span>
      <div className="flex gap-6">
        <Link
          activeClass="border-b-4 border-blue-400"
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
          activeClass="border-b-4 border-blue-400"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          containerId="containerElement"
        >
          About
        </Link>

        <Link
          activeClass="border-b-4 border-blue-400"
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          containerId="containerElement"
        >
          Projects
        </Link>

        <Link
          activeClass="border-b-4 border-blue-400"
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
  );
};
