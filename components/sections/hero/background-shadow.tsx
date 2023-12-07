import Image from "next/image";
import manImage from '@/public/man.png'
import { SkillContainer } from "./skill-container";
import { GemIcon, Hourglass, HourglassIcon, RocketIcon } from "lucide-react";

export const BackgroundShadow = () => {
  return (
    <div className="w-[700px] h-[700px] -bottom-12 -right-2 absolute ">
      <div className="w-full h-full flex-1 flex items-center justify-center relative">
        <div className="w-[350px] h-[350px] bg-[#BDD3FA] rounded-full shadow-[0_0_110px_200px_#BDD3FA] absolute z-0"></div>
        <Image
          className=" z-10 mb-24"
          src={manImage}
          alt='man img'
          style={{
            width: "auto",
            height: "100%",
          }}
        />
        <div className="w-[90%] h-[90%] rounded-full -bottom-6 border-[1px] flex items-end justify-center absolute">
          <div className="w-[90%] h-[90%] rounded-full border-[1px]" />
        </div>
        <SkillContainer className="right-[100px] bottom-[500px]" Icon={RocketIcon} text="Proactive" />
        <SkillContainer className="right-0 bottom-[350px]" Icon={GemIcon} text="Quality Focused" />
        <SkillContainer className="right-[70px] bottom-[200px]" Icon={HourglassIcon} text="Time Managment" />
      </div>
    </div>
  );
};
