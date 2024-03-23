"use client";
import { AboutMe } from "@/components/aboutme";
import { NavbarFixed, NavbarHome } from "@/components/navbar";
import { AllProjects } from "@/components/projects";
import { AllSkills } from "@/components/skills";
import { SyntheticEvent, useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;
    let scrollPercent = Math.round(target.scrollTop / window.innerHeight * 100);
    setScrollPos(scrollPercent);
  }

  const arrowBtn = useRef<null | HTMLDivElement>(null);

  const handleArrowClick = () => {
    if (arrowBtn.current) {
      arrowBtn.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main>
      <div onScroll={handleScroll} className={`${scrollPos < 90 ? "snap-y" : "snap-none"} snap-mandatory overflow-y-scroll h-screen flex-grow z-0 bg-gradient-to-t from-sky-600 to-sky-400`}>
        <section className="flex justify-between flex-col supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] relative snap-always snap-center">
          <div className="absolute z-1 -bottom-1 left-0 w-full min-h-[50vh] bg-top bg-cover" style={{ backgroundImage: `url('/waves-02.svg')` }}>
          </div>
          <div ref={arrowBtn} className="absolute z-1 bottom-36 sm:bottom-24 lg:bottom-16 left-1/2 -translate-x-1/2 p-8 cursor-pointer" onClick={handleArrowClick}>
            <div className="bounce-animation">
              <div className={`rotate-90 text-4xl text-sky-600 ${scrollPos > 5 ? "invisible" : "visible"}`}>{'->'}</div>
            </div>
          </div>
          <div className="flex flex-col mx-auto text-center pt-[30vh] relative">
            <h1 className="text-3xl md:text-5xl text-white">Mateusz Najdek</h1>
            <h2 className="text-l md:text-2xl mt-4 text-gray-100">Web developer</h2>
          </div>
          <NavbarHome scrollPos={scrollPos} />
        </section>
        <section className="flex justify-between flex-col snap-start min-h-screen relative bg-gradient-to-b from-sky-100 to-sky-300">
          <NavbarFixed scrollPos={scrollPos} />
          <div className="flex flex-col mx-auto mt-16 min-h-screen">
            <AboutMe />
            <AllSkills />
            <AllProjects />
          </div>
        </section>
      </div>
    </main>
  );
}
