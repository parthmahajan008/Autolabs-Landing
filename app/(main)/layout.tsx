import Navbar from "./_components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Autolabs",
  description: "Empowering the next generation of developers.",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/logo-dark.svg",
      href: "/logo-dark.svg",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/logo-light.svg",
      href: "/logo-light.svg",
    },
  ],
  keywords: "Home",
};
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pl-[10px] pt-[90px]">{children}</main>
    </div>
  );
};
export default HomeLayout;
