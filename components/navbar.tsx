import { ModeToggle } from "./mode-toggle";

export const Navbar = () => {
  return (
    <div className="fixed w-full border-white border-2">
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};
