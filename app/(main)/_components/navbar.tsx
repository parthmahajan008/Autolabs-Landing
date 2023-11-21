"use client";
import React from "react";
import Logo from "./logo";
import NavbarRoutes from "@/components/utils/navbar-routes";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  const scrolled = useScrollTop();
  console.log(scrolled);
  return (
    <div
      className={cn(
        "p-4 flex h-[80px] fixed inset-y-0 w-full z-50 items-center bg-white dark:bg-[#020817]",
        scrolled &&
          "border-b shadow-m border-blue-100 dark:border-slate-800 dark:bg-slate-800"
      )}
    >
      <Logo />
      <NavbarRoutes />
      <ModeToggle />
    </div>
  );
};

export default Navbar;
