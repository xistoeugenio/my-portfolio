import { AccordionContainer } from "./components/accordion-container";
import { Card } from "./components/card";

import darkNextjs from "@/public/dark-nextjs.png";
import nextjs from "@/public/nextjs.png";
import darkNodejs from "@/public/dark-nodejs.png";
import nodejs from "@/public/nodejs.png";
import darkPrisma from "@/public/dark-prisma.png";
import prisma from "@/public/prisma.png";
import { ShowcasingProficiencies } from "./components/showcasing-proficiencies";

export const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-full h-auto flex  items-center justify-center px-10"
    >
      <div className="w-full max-w-[1280px] h-full flex flex-col items-start justify-center gap-4 mt-[12vh] pb-10 border-b-4 border-neutral-600  px-10">
        <h3>How I can help you</h3>
        <div className="w-full h-auto flex gap-6 items-center justify-center aspect-[3/2]">
          <ShowcasingProficiencies/>
          <div className="flex-1 h-full flex flex-col gap-6">
            <AccordionContainer />
            <div className="bg-white dark:bg-[#1D1C1D] flex-1 gap-2 rounded-[20px] relative overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
