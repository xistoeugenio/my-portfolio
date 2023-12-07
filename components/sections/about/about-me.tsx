import { AccordionContainer } from "./components/accordion-container";
import { Card } from "./components/card";

import darkNextjs from "@/public/dark-nextjs.png";
import nextjs from "@/public/nextjs.png";
import darkNodejs from "@/public/dark-nodejs.png";
import nodejs from "@/public/nodejs.png";
import darkPrisma from "@/public/dark-prisma.png";
import prisma from "@/public/prisma.png";

export const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-full h-screen flex  items-center justify-center "
    >
      <div className="w-full max-w-[1100px] h-screen flex flex-col items-start justify-center gap-4">
        <h3>How I can help you</h3>
        <div className="w-full h-[70%] flex gap-6 items-center justify-center ">
          <div className="w-[60%] h-full bg-white dark:bg-[#1D1C1D] py-6 flex flex-col justify-between rounded-[20px]">
            <div className="px-14">
              <h3 className="text-[19px] mb-2 text-2xl">
                Design that{" "}
                <span className="text-[#8689DA] dark:text-red-500">scales</span>
              </h3>
              <p className="text-neutral-400 text-[15px]">
                Buildinng systems not just for now but, that scale and adapt.
              </p>
            </div>
            <div className="h-48 pl-6 flex gap-6 mb-44 overflow-x-scroll relative">
              <Card name="Next.js" darkImage={darkNextjs} image={nextjs} />
              <Card name="Node.js" darkImage={darkNodejs} image={nodejs} />
              <Card name="Prisma" darkImage={darkPrisma} image={prisma} />
              <Card name="Next.js" darkImage={darkNextjs} image={nextjs} />
              <Card name="Node.js" darkImage={darkNodejs} image={nodejs} />
              <Card name="Prisma" darkImage={darkPrisma} image={prisma} />
            </div>
          </div>
          <div className="flex-1 h-full flex flex-col gap-6">
            <AccordionContainer />
            <div className="bg-white dark:bg-[#1D1C1D] flex-1 gap-2 rounded-[20px] relative overflow-hidden">
              <div className="absolute border-2 rotate-45 flex gap-10 overflow-hidden">
                <div className="border-2 w-52 h-52 rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
