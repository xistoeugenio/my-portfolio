import Image, { StaticImageData } from "next/image";

interface CardProps {
  name: string;
  darkImage: StaticImageData;
  image: StaticImageData;
}

export const Card = ({ name, darkImage, image }: CardProps) => {
  return (
    <div className="w-36 min-w-[144px] h-full bg-neutral-200 dark:bg-[#201F20] border-neutral-300 dark:border-neutral-700 flex flex-col items-center rounded-xl border-2">
      <div className=" flex-1 flex items-center justify-center px-3">
        <Image
          className="block dark:hidden"
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <Image
          className="hidden dark:block"
          src={darkImage}
          alt={name}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10">{name}</p>
    </div>
  );
};
