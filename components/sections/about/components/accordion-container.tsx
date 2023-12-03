import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

export const AccordionContainer = () => {
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
  return (
    <div className="bg-white dark:bg-[#1D1C1D] flex-1 rounded-[20px] p-6">
      <div className="h-[35%]">
        <h3 className="text-[19px] mb-2 text-2xl">
          <span className="text-[#8689DA] dark:text-red-500">Never lag</span>{" "}
          because of design
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
              className="bg-black dark:bg-white rounded-full "
            />
            <AccordionItem
              value={item.id}
              className="bg-white dark:bg-[#1D1C1D] flex-1 rounded-2xl border-2"
            >
              <AccordionTrigger className="p-2 text-base ">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-700 dark:text-neutral-400">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
};
