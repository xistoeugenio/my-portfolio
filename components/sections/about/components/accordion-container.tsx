import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export const AccordionContainer = () => {
  const AcordionContent = [
    {
      id: "1",
      title: "How do I stand out among full-stack developers?",
      content:
        "Beyond my lines of code, I would say it's my logical reasoning and problem-solving mindset. This led to an intriguing story where I overcame the dubious tactics of an online casino, showcasing adaptability, strategic thinking, and a profit of over $500.",
    },
    {
      id: "2",
      title: "What captivates me in the world of web?",
      content:
        "The aspect of web development that truly excites me is the potential to connect with a wide audience on various devices. Consequently, in every project, I emphasize responsiveness to design user experiences that seamlessly span across different platforms.",
    },
    {
      id: "3",
      title: "How do I solve coding challenges efficiently?",
      content:
        "I tackle challenges by revisiting past projects for insights and diving into documentation. If needed, I leverage resources like ChatGPT and Google to tap into collective developer wisdom. This ensures an efficient and effective resolution to coding challenges.",
    },
  ];
  return (
    <div className=" flex-1 rounded-[20px] p-6 mt-16">
      <div className="h-auto mb-8">
        <h3 className="text-[24px] mb-8 text-2xl">
          The Art and Logic of{" "}
          <span className="text-[#8689DA] dark:text-red-500 font-[600]">
            Web Development
          </span>{" "}
        </h3>
        <p className="text-neutral-400 text-[16px] font-medium">
          Discover What Sets Me Apart and Drives My Web Development Passion.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full h-auto flex flex-col gap-10 relative"
      >
        <div className="w-[3px] h-full left-[5px] bg-neutral-300 dark:bg-neutral-700 absolute rounded-sm" />
        {AcordionContent.map((item) => (
          <div key={item.id} className="flex gap-8 z-10">
            <div
              className={cn(
                "w-[13px] h-[13px] bg-neutral-600 dark:bg-neutral-300 flex items-center justify-center rounded-full shadow-[0_0_0px_5px_white] dark:shadow-[0_0_0px_5px_#1D1C1D]",
                item.id === "1" && "mt-4",
                item.id === "2" && "self-center",
                item.id === "3" && "self-end mb-4"
              )}
            >
              <div className="w-[7px] h-[7px] bg-white dark:bg-[#1D1C1D] rounded-full " />
            </div>
            <AccordionItem
              value={item.id}
              className="bg-white dark:bg-[#1D1C1D] flex-1 rounded-2xl border-2"
            >
              <AccordionTrigger className="py-2 px-4 text-[18px] dark:text-neutral-300">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-700 dark:text-neutral-400 text-[16px] leading-normal p-2">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
};
