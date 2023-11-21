"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo3.svg"
        alt="Logo"
        width={150}
        height={120}
        className="dark:hidden"
      />
      <Image
        src="/dark.svg"
        alt="Logo"
        width={150}
        height={120}
        className="hidden dark:block"
      />
    </Link>
  );
};

export default Logo;
