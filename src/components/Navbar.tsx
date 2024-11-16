import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Feather } from "lucide-react";

function Navbar() {
  return (
    <div className="fixed flex justify-between items-center z-30 border-b w-full h-16 bg-card px-4">
      <Link href={"/home"}>
        <div className="h-full flex items-center gap-1">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-contain shrink-0"
          />
          <h1 className="text-2xl font-semibold">TalkPost</h1>
        </div>
      </Link>

      <div className="flex justify-center items-center gap-3">
        {true ? (
          <div className=" rounded-full p-2 text-white bg-primary hover:bg-primarydark">
            <Feather size={20} />
          </div>
        ) : (
          <>
            <Button
              size={"sm"}
              variant={"outline"}
              className="bg-card border-[#9999]"
            >
              Sign In
            </Button>
            <p>or</p>
            <Button size={"sm"}>Sign Up</Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
