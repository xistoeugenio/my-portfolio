import { AccordionContainer } from "./components/accordion-container";

export const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-full h-screen flex  items-center justify-center "
    >
      <div className="w-full max-w-[1100px] h-screen flex flex-col items-start justify-center gap-4">
        <h3>How I can help you</h3>
        <div className="w-full h-[70%] flex gap-6 items-center justify-center ">
          <div className="w-[60%] h-full bg-white dark:bg-[#1D1C1D] px-14 py-6 flex flex-col justify-between rounded-[20px]">
            <div className="">
              <h3 className="text-[19px] mb-2 text-2xl">
                Design that{" "}
                <span className="text-[#8689DA] dark:text-red-500">scales</span>
              </h3>
              <p className="text-neutral-400 text-[15px]">
                Buildinng systems not just for now but, that scale and adapt. 
              </p>
            </div>
            <div className="bg-slate-600 h-72">Video</div>
          </div>
          <div className="flex-1 h-full flex flex-col gap-6">
            <AccordionContainer />
            <div className="bg-white dark:bg-[#1D1C1D] flex-1 rounded-[20px]">
              other{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
