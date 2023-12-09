import Image from "next/image";
import { Button } from "../ui/button";
import { BackgroundShadow } from "./hero/background-shadow";
import { IntroductionPanel } from "./hero/introduction-panel";

export const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-full bg-white  flex flex-col items-center justify-end overflow-y-hidden px-10"
    >
      <div className="w-full h-[calc(100%-80px)] max-h-[480px] lg:max-h-[610px] xl:max-h-[730px] flex items-end max-w-[1280px] mt-[12%] relative">
        <IntroductionPanel/>
        <BackgroundShadow/>
      </div>
    </div>
  );
};
