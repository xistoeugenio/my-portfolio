import { AccordionContainer } from "./components/accordion-container";

import { ShowcasingProficiencies } from "./components/showcasing-proficiencies";

export const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-full h-auto bg-white flex  items-center justify-center px-10"
    >
      <div className="w-full max-w-[1280px] h-full flex justify-center mt-[13vh] pb-10 border-b-4 border-neutral-600  ">
        <div className="w-full max-w-[1280px] h-auto flex gap-12 items-center justify-center aspect-[8/5] ">
          <ShowcasingProficiencies/>
          <div className="flex-1 h-full flex flex-col gap-6">
            <AccordionContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
