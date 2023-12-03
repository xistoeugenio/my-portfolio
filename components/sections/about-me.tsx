import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

const AcordionContent = [
  {
    id: "1",
    title: "Is it accessible?",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    id: "2",
    title: "Is it accessible?",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    id: "3",
    title: "Is it accessible?",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
];

export const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-full h-screen flex  items-center justify-center "
    >
      <div className="w-full max-w-[1100px] h-screen flex gap-6 items-center justify-center ">
        <div className="w-[60%] h-[70%] bg-[#1D1C1D] rounded-[20px]">there</div>
        <div className="flex-1 h-[70%] flex flex-col gap-6">
          <div className="bg-[#1D1C1D] flex-1 rounded-[20px] p-6">
            <div className="h-[35%]">
              <h3 className="text-[19px] mb-2">
                <span className="text-red-500">Never lag</span> because of
                design
              </h3>
              <p className="text-neutral-400 text-[15px]">
                Zooming ahead with rapid design and shipping.
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full h-[65%] flex flex-col justify-between relative"
            >
              {AcordionContent.map((item) => (
                <div key={item.id} className="flex  gap-8">
                    <Check
                      size="12px"
                      className="bg-white rounded-full "
                    />
                  <AccordionItem
                    value={item.id}
                    className="bg-white dark:bg-[#1D1C1D] flex-1 rounded-2xl border-2"
                  >
                    <AccordionTrigger className="p-2 text-sm ">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-400">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
          <div className="bg-[#1D1C1D] flex-1 rounded-[20px]">other </div>
        </div>
      </div>
    </div>
  );
};
