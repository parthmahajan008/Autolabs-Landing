import React from "react";
import Logo from "./logo";
import NavbarRoutes from "@/components/utils/navbar-routes";

const Navbar = () => {
  return (
    <div className="p-4 h-full flex items-center bg-white shadow-sm">
      <Logo />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
