import Image from "next/image";
import manImage from "@/public/man.png";
import { SkillContainer } from "./skill-container";
import { GemIcon, Hourglass, HourglassIcon, RocketIcon } from "lucide-react";

export const BackgroundShadow = () => {
  return (
    <div className=" w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[670px] xl:h-[670px] -bottom-12 -right-2 absolute hidden md:block">
      <div className="w-full h-full flex-1 flex items-center justify-center relative">
        <div className="w-[350px] h-[350px] bg-[#BDD3FA] rounded-full shadow-[0_0_70px_110px_#BDD3FA] lg:3 xl:shadow-[0_0_110px_180px_#BDD3FA] absolute z-0"></div>
        <Image
          className=" z-10 mb-24"
          src={manImage}
          alt="man img"
          style={{
            width: "auto",
            height: "100%",
          }}
        />
        <div className="w-[90%] h-[90%] rounded-full -bottom-6 border-[1px] flex items-end justify-center absolute">
          <div className="w-[90%] h-[90%] rounded-full border-[1px]" />
        </div>
        <SkillContainer
          className="right-[80px] lg:right-[100px] bottom-[420px] lg:bottom-[500px]"
          Icon={RocketIcon}
          text="Proactive"
        />
        <SkillContainer
          className="right-0 bottom-[280px] lg:bottom-[350px]"
          Icon={GemIcon}
          text="Quality Focused"
        />
        <SkillContainer
          className="right-[40px] lg:right-[70px] bottom-[140px] lg:bottom-[200px]"
          Icon={HourglassIcon}
          text="Time Managment"
        />
      </div>
    </div>
  );
};
