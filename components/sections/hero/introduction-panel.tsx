import { Button } from "@/components/ui/button";

export const IntroductionPanel = () => {
  return (
    <div className="w-full h-full md:w-[45%] flex flex-col justify-around z-10">
      <h1 className="text-[34px] lg:text-[40px] xl:text-[54px] font-bold leading-tight">
        Let's Work Together to Bring Your Digital Visions to Life.
      </h1>
      <p className="mr-16 my-4 lg:my-6 xl:my-8">
        A visionary creative, crafting captivating wonders through art and
        design. Adept at turning imagination into extraordinary reality.
      </p>
      <div className="flex gap-6">
        <Button className="w-[140px] rounded-full bg-[#8689DA] text-xs">
          Lets talk
        </Button>
        <Button
          variant="outline"
          className="w-[140px] rounded-full border-[1px] border-black text-xs"
        >
          Start Project
        </Button>
      </div>
      <div className="flex gap-14 my-10 lg:my-14 xl:my-20">
        <div className="w-[84px] ">
          <h2 className="font-bold text-[32px] lg:text-[40px]">15+</h2>
          <p className="text-neutral-500 text-sm lg:text-base">years experience</p>
        </div>
        <div className="w-[82px] ">
          <h2 className="font-bold text-[32px] lg:text-[40px]">26K</h2>
          <p className="text-neutral-500 text-sm lg:text-base">projects success</p>
        </div>
        <div className="w-[82px] ">
          <h2 className="font-bold text-[32px] lg:text-[40px]">98%</h2>
          <p className="text-neutral-500 text-sm lg:text-base">satisfied rate</p>
        </div>
      </div>
    </div>
  );
};
