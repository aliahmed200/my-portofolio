import { RxVercelLogo } from "react-icons/rx";
import { DiReact } from "react-icons/di";
import React from "react";

export default function Footer() {
  return (
    <div className="lg:flex justify justify-between border-t-2 mt-10 py-20 b-color ">
      <div className="flex items-center">
        <p className="font-normal text-lg">Built With :</p>
        <p className="font-light text-lg px-1">react</p>
        <DiReact />
        <p className="font-light text-lg px-1">vercel</p>
        <RxVercelLogo />
      </div>
      <div className="font-semibold text-md">
        Copyright © Ali Ahmed 2024 All rights Reserved
      </div>
    </div>
  );
}
