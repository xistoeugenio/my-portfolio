"use client"

import { Navbar } from "@/components/navbar";
import { ContactMe } from "@/components/sections/contactMe";

export default function Home() {

  return (
    <>
    <Navbar/>
      <div className="bg-slate-500 w-full h-full snap-y snap-mandatory overflow-y-scroll">
        <div className="w-full h-full snap-start bg-neutral-700 flex items-center justify-center">
          <div className="text-white">home</div>
        </div>
        <div className="w-full h-full snap-start bg-black flex items-center justify-center">
          <div className="text-white">about</div>
        </div>
        <div className="w-full h-full snap-start bg-neutral-700  flex items-center justify-center">
          <div className="text-white">projects</div>
        </div>
        <ContactMe />
      </div>
    </>
  );
}
