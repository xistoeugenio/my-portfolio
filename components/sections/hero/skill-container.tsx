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
      <div className="w-11 h-11 bg-[#6EF3D4] flex items-center justify-center rounded-full absolute -left-4 -top-4   ">
        <Icon className="w-10 h-10 p-[8px]" />
      </div>
      <p className="bg-white font-semibold text-sm px-8 py-4 rounded-full">
        {text}
      </p>
    </div>
  );
};
