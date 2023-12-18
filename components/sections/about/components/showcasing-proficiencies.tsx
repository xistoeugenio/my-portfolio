import { Card } from "./card";

import darkNextjs from "@/public/dark-nextjs.png";
import nextjs from "@/public/nextjs.png";
import darkNodejs from "@/public/dark-nodejs.png";
import nodejs from "@/public/nodejs.png";
import darkPrisma from "@/public/dark-prisma.png";
import prisma from "@/public/prisma.png";

export const ShowcasingProficiencies = () => {
  return (
    <div className="w-[55%] h-full bg-white dark:bg-[#1D1C1D] py-6 flex flex-col justify-between rounded-[20px] relative overflow-hidden">
      {/*This div is two squares in the background */}
      <div className="w-[50%] h-[50%] rotate-12 top-[30%] absolute border-[2px] rounded-sm border-neutral-200 dark:border-neutral-800">
        <div className="w-full h-full top-[55%] left-[75%] absolute border-[2px] rounded-sm  border-inherit"></div>
      </div>
      <div className="px-14">
        <h3 className="text-[19px] mb-4 text-2xl">
          A{" "}
          <span className="text-[#8689DA] dark:text-red-500 font-[600]">
            Showcase
          </span>{" "}
          of Proficiency in Web Technologies
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400 text-[16px] leading-relaxed">
          Explore the tech behind my web development journey—responsive design
          meets server-side magic. Dive into the tools shaping interactive,
          innovative digital experiences.
        </p>
      </div>
      <div className="h-48 pl-6 flex gap-6 mb- overflow-x-scroll relative">
        <Card name="Next.js" darkImage={darkNextjs} image={nextjs} />
        <Card name="Node.js" darkImage={darkNodejs} image={nodejs} />
        <Card name="Prisma" darkImage={darkPrisma} image={prisma} />
        <Card name="Next.js" darkImage={darkNextjs} image={nextjs} />
        <Card name="Node.js" darkImage={darkNodejs} image={nodejs} />
        <Card name="Prisma" darkImage={darkPrisma} image={prisma} />
      </div>
      <span />
    </div>
  );
};
