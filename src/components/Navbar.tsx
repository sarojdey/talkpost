import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <div className="absolute flex justify-between items-center z-30 border-b border-[#9999] w-full h-16 bg-card px-4">
      <Link href={"/home"}>
        <div className="h-full flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain shrink-0"
          />
          <h1 className="text-2xl font-semibold">TalkPost</h1>
        </div>
      </Link>

      <div className="flex justify-center items-center gap-3">
        <Button
          size={"sm"}
          variant={"outline"}
          className="bg-card border-[#9999]"
        >
          Sign In
        </Button>
        <p>or</p>
        <Button size={"sm"}>Sign Up</Button>
      </div>
    </div>
  );
}

export default Navbar;
