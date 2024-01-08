import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export const IntroductionPanel = () => {
  return (
    <div className="w-full h-full md:w-[45%] xl:w-[50%] flex flex-col justify-around z-10">
      <h1 className="text-[34px] lg:text-[40px] xl:text-[50px] font-bold leading-tight">
        Let's Work Together to Bring Your Digital Visions to Life.
      </h1>
      <p className="mr-16 xl:mr-10 my-4 lg:my-6 xl:my-8 text-[17px]">
        Hi, I'm Xisto – your tech ally in the world of full-stack web
        development. With a comprehensive skill set and a meticulous approach, I
        tackle projects with enthusiasm, ensuring each code line contributes to
        a seamless and enjoyable user experience.
      </p>
      <div className="flex gap-6">
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          duration={800}
          containerId="containerElement"
          scrolling="100px"
        >
          <Button className="w-[160px] text-lg rounded-full bg-[#8689DA]">
            Lets talk
          </Button>
        </ScrollLink>

        <Link href="https://github.com/xistoeugenio" target="_blank">
          <Button
            variant="outline"
            className="w-[160px] text-base gap-2 rounded-full border-2 border-neutral-600 "
          >
            <GithubIcon /> GitHub
          </Button>
        </Link>
      </div>
      <div className="flex gap-14 my-10 lg:my-14 xl:my-16">
        <div className="w-[84px] ">
          <h2 className="font-bold text-[32px] lg:text-[40px]">2</h2>
          <p className="text-neutral-500 text-sm lg:text-base">
            years experience
          </p>
        </div>
        <div className="w-[82px] ">
          <h2 className="font-bold text-[32px] lg:text-[40px]">15+</h2>
          <p className="text-neutral-500 text-sm lg:text-base">
            Proficient Technologies
          </p>
        </div>
        <div className="w-[82px] ">
          <h2 className="font-bold text-[32px] lg:text-[40px]">88%</h2>
          <p className="text-neutral-500 text-sm lg:text-base">
            projects success
          </p>
        </div>
      </div>
    </div>
  );
};
