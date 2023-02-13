import Link from "next/link";
import React from "react";

export interface Menu {
  name: string;
  path: string;
}

const menues: Menu[] = [
  {
    name: "i18next",
    path: "/i18next",
  },
];

///menu layout
export default function Header() {
  return (
    <>
      <div className=" w-full  min-h-[60px] bg-black text-white flex items-center">
        <ul className="flex justify-start items-center gap-3 px-3 ">
          { menues? ( menues.map((menu, idx)=> {
            return <Link className="hover:opacity-60" key={idx} href={menu.path}>{menu.name}</Link>
          })): null}
        </ul>
      </div>
    </>
  );
}
