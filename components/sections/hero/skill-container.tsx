import { cn } from "@/lib/utils";
import { DiamondIcon, GemIcon, LucideIcon } from "lucide-react";

interface SkillContainerProps
  extends React.ButtonHTMLAttributes<HTMLParagraphElement> {
  Icon: LucideIcon;
  text: string;
}
export const SkillContainer = ({
  Icon,
  text,
  className,
}: SkillContainerProps) => {
  return (
    <div className={cn(" absolute z-20 ", className)}>
      <div className="w-8 lg:w-11 h-8 lg:h-11 bg-[#6EF3D4] flex items-center justify-center rounded-full absolute -left-3 lg:-left-4 -top-3 lg:-top-4   ">
        <Icon className="w-10 h-10 p-[6px] lg:p-[8px]" />
      </div>
      <p className="bg-white font-semibold text-sm px-6 lg:px-8 py-2 lg:py-4 rounded-full">
        {text}
      </p>
    </div>
  );
};
