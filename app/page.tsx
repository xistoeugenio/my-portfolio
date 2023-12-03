"use client";

import { Navbar } from "@/components/navbar";
import { AboutMe } from "@/components/sections/about-me";
import { ContactMe } from "@/components/sections/contact-me";
import { Home } from "@/components/sections/home";
import { Projects } from "@/components/sections/projects";

import { Element } from "react-scroll";

export default function Page() {
  return (
    <>
      <Navbar />
      <Element
        name="test7"
        className="element"
        id="containerElement"
        style={{
          height: "100%",
          overflow: "scroll",
        }}
      >
        <Home />
        <div className="bg-slate-300 dark:bg-[#141214] h-[200%]">
          <AboutMe />
          <Projects />
        </div>
        <ContactMe />
      </Element>
    </>
  );
}
