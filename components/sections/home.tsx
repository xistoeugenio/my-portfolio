import Image from "next/image";
import { Button } from "../ui/button";
import { BackgroundShadow } from "./hero/background-shadow";

export const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-full bg-white flex items-end justify-center overflow-hidden"
    >
      <div className="w-full flex items-end border-x-2 pt-10 max-w-[1100px] h-[calc(100%-80px)] relative">
        <div className=" w-[45%] flex flex-col justify-around z-10">
          <h1 className="text-[55px] font-bold leading-tight mb-10">
            Lets Work together to Create Wonders with Us
          </h1>
          <p className="mr-16 mb-10">
            A visionary creative, crafting captivating wonders through art and
            design. Adept at turning imagination into extraordinary reality.
          </p>
          <div className="mb-28 flex gap-6">
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
          <div className="flex gap-14 mb-24">
            <div className="w-[84px] ">
              <h2 className="font-bold text-[40px]">15+</h2>
              <p className="text-neutral-500">years experience</p>
            </div>
            <div className="w-[82px] ">
              <h2 className="font-bold text-[40px]">26K</h2>
              <p className="text-neutral-500">projects success</p>
            </div>
            <div className="w-[82px] ">
              <h2 className="font-bold text-[40px]">98%</h2>
              <p className="text-neutral-500">satisfied rate</p>
            </div>
          </div>
        </div>
        <BackgroundShadow/>
      </div>
    </div>
  );
};
