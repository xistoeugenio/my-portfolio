import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  {
    id: "4",
    title: "Is it accessible?",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    id: "5",
    title: "Is it accessible?",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
];

export const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="w-1/2 bg-black p-5">
        <Accordion type="single" collapsible className="w-full">
          {AcordionContent.map((item) => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
