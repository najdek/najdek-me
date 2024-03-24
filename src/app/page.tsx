"use client";
import { AboutMe } from "@/components/aboutme";
import { NavbarFixed, NavbarHome } from "@/components/navbar";
import { AllProjects } from "@/components/projects";
import { AllSkills } from "@/components/skills";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);
  const [navbarHomeTop, setNavbarHomeTop] = useState(0);
  const navbarHome = useRef<null | HTMLDivElement>(null);
  const arrowBtn = useRef<null | HTMLDivElement>(null);
  const bottomSection = useRef<null | HTMLDivElement>(null);

  const handleScroll = () => {
    let scrollPercent = Math.round(window.scrollY / window.innerHeight * 100);
    setScrollPos(scrollPercent);
    if (navbarHome.current) {
      setNavbarHomeTop(navbarHome.current.getBoundingClientRect().top)
    }
  }

  const handleArrowClick = () => {
    if (bottomSection.current) {
      bottomSection.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <main>
      <div className={`h-screen flex-grow z-0 bg-gradient-to-t from-sky-600 to-sky-400`}>
        <section className="flex justify-between flex-col supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] relative">
          <div className="absolute z-1 -bottom-1 left-0 w-full min-h-[50vh] bg-top bg-cover" style={{ backgroundImage: `url('/waves-02.svg')` }}>
          </div>
          <div ref={arrowBtn} className={`absolute z-1 bottom-36 sm:bottom-24 lg:bottom-16 left-1/2 -translate-x-1/2 p-8 cursor-pointer ${scrollPos > 5 ? "fadeout-animation pointer-events-none" : "fadein-animation"}`} onClick={handleArrowClick}>
            <div className="bounce-animation">
              <div className={`rotate-90 text-4xl text-sky-600`}>{'->'}</div>
            </div>
          </div>
          <div className="flex flex-col mx-auto text-center pt-[30vh] relative">
            <h1 className="text-3xl md:text-5xl text-white">Mateusz Najdek</h1>
            <h2 className="text-l md:text-2xl mt-4 text-gray-100">Web developer</h2>
          </div>
          <NavbarHome passRef={navbarHome} navbarHomeTop={navbarHomeTop} />
        </section>
        <section ref={bottomSection} className="flex justify-between flex-col min-h-screen relative bg-gradient-to-b from-sky-100 to-sky-300 pb-16">
          <NavbarFixed navbarHomeTop={navbarHomeTop} />
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
