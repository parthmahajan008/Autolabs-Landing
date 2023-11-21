"use client";
import Link from "next/link";
import { Button } from "../ui/button";
const NavbarRoutes = () => {
  return (
    <div className="flex ml-auto mr-4 gap-x-2">
      <Link href="/blog">
        <Button size="lg" variant="link">
          Blog
        </Button>
      </Link>
      <Link href="/about-us">
        <Button size="lg" variant="link">
          About Us
        </Button>
      </Link>
    </div>
  );
};

export default NavbarRoutes;
