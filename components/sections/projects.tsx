import { Button } from "../ui/button";

export const Projects = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center gap-10 justify-center"
      id="projects"
    >
      <div className="w-[700px] h-[30%] flex items-center justify-center bg-white rounded-[20px] text-black">
        <div className=" w-full h-[75%] mx-14 flex ">
          <div className="border-r-2 w-1/2 flex flex-col gap-[10px]">
            <h2 className="font-bold text-lg text-red-400 mt-2">Our Compost</h2>
            <h4 className="font-[600] ">this was forth last year</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
              autem laboriosam cum sed eius quasi! Nam.
            </p>
            <Button variant="secondary" size="sm" className="w-fit text-xs ">
              View this
            </Button>
          </div>
          <div>right</div>
        </div>
      </div>
      <div className="w-[700px] h-[30%] flex items-center justify-center bg-white rounded-[20px] text-black">
        <div className=" w-full h-[75%] mx-14 flex ">
          <div className="border-r-2 w-1/2 flex flex-col gap-[10px]">
            <h2 className="font-bold text-lg text-red-400 mt-2">Our Compost</h2>
            <h4 className="font-[600] ">this was forth last year</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
              autem laboriosam cum sed eius quasi! Nam.
            </p>
            <Button variant="secondary" size="sm" className="w-fit text-xs">
              View this
            </Button>
          </div>
          <div>right</div>
        </div>
      </div>
    </div>
  );
};
