import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-scroll";
import { useScrollTop } from "@/hooks/use-scroll-top";

interface navbarProps {
  scrolled: boolean;
}

const links = [
  {
    id: 1,
    link: "home",
    name: "Home",
  },
  {
    id: 2,
    link: "about",
    name: "About",
  },
  {
    id: 3,
    link: "projects",
    name: "Projects",
  },
  {
    id: 4,
    link: "contact",
    name: "Contact Me",
  },
];

export const Navbar = ({}: navbarProps) => {
  const scrolled = useScrollTop(10, "containerElement");
  return (
    <div
      className={cn(
        "fixed z-30 w-full h-[12%] min-h-[80px] flex items-center justify-center  dark:bg-slate-300/30 transition-all ease-in-out delay-100 box-content",
        scrolled && "bg-white border-b shadow-md xl:h-[10%]"
      )}
    >
      <div className="w-full max-w-[1280px] mx-9 flex justify-between items-center ">
        <span className=" dark:text-blue-950 font-semibold xl:text-xl cursor-pointer">Xisto.</span>
        <div className="flex gap-12">
          {links.map((item) => (
            <Link
              key={item.id}
              className="p-2 rounded-md hover:bg-neutral-100 cursor-pointer"
              activeClass="bg-neutral-200"
              to={item.link}
              spy={true}
              smooth={true}
              duration={600}
              containerId="containerElement"
              scrolling="100px"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};
