import React from "react";
import Contact from "./Contact";
export default function Contactt() {
  return (
    <div className="max-w-[1540px] mx-auto ">
      <div className="bg-[url(/contact.svg)] h-[466px] w-full bg-center bg-cover bg-no-repeat flex items-center justify-start text-white px-30">
        <h1 className="font-bold lg:flex hidden">Biz bilan bog`laning</h1>
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
