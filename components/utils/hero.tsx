import Image from "next/image";
import { Button } from "../ui/button";
import OngoiningProjects from "./ongoingProject";

export default function Hero() {
  return (
    <section className="">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="300" r="88" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <Image
        src="/logo3.svg"
        alt="Logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-3xl font-semibold uppercase text-blue-700 tracking-wide">
          Coming soon!
        </p>
      </div>
      <OngoiningProjects />
    </section>
  );
}
