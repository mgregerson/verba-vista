import React from "react";
import LogoImage from "@logos/t.png";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";

export default function Logo() {
  return (
    <div className="mb-1 sm:mb-0">
      <Link href="/" className="overflow-hidden" prefetch={false}>
        <div className="flex items-center w-40 h-14">
          <AspectRatio
            ratio={16 / 9}
            className="flex items-center justify-center"
          >
            <Image
              priority
              src={LogoImage}
              alt="Logo"
              className="dark:filter dark:invert w-[60px] h-[50px]"
            ></Image>
          </AspectRatio>
        </div>
      </Link>
    </div>
  );
}
