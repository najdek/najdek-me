"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SyntheticEvent, useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;
    let scrollPercent = Math.round(target.scrollTop / window.innerHeight * 100);
    setScrollPos(scrollPercent);
  }

  const arrowBtn = useRef(null);

  const handleArrowClick = () => {
    arrowBtn.current.scrollIntoView({ behavior: "smooth" });

  }


  return (
    <main>
      <div onScroll={handleScroll} className={`${scrollPos < 90 ? "snap-y" : "snap-none"} snap-mandatory overflow-y-scroll h-screen flex-grow z-0 bg-gradient-to-t from-sky-600 to-sky-400`}>
        <section className="flex justify-between flex-col h-full pb-[calc(100vh-100dvh)] relative snap-always snap-center">
          <div className="absolute z-1 bottom-0 left-0 w-full min-h-[50vh] bg-top bg-cover" style={{ backgroundImage: `url('/waves-02.svg')` }}>
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

          <div className={`flex justify-between z-10 mx-auto mb-10 container px-10 ${scrollPos > 85 ? "invisible" : "visible"}`}>
            <a href="https://github.com/najdek" className="flex flex-row items-center"><FontAwesomeIcon icon={faGithub} /><span className="mx-2">najdek</span></a>
            <a href="mailto:mateusz@najdek.me" className="flex flex-row items-center"><FontAwesomeIcon icon={faEnvelope} /><span className="mx-2">mateusz@najdek.me</span></a>
          </div>
        </section>
        <section className="flex justify-between flex-col snap-always snap-start min-h-screen relative bg-gradient-to-b from-sky-100 to-sky-300">
          <div className={`fixed z-10 top-0 left-0 w-full rounded-b-2xl backdrop-blur-md bg-opacity-50 bg-sky-100 ${scrollPos > 85 ? "visible" : "invisible"}`}>
            <div className={`flex justify-between z-10 h-16 mx-auto container px-10`}>
              <a href="https://github.com/najdek" className="flex flex-row items-center"><FontAwesomeIcon icon={faGithub} /><span className="mx-2">najdek</span></a>
              <a href="mailto:mateusz@najdek.me" className="flex flex-row items-center"><FontAwesomeIcon icon={faEnvelope} /><span className="mx-2">mateusz@najdek.me</span></a>
            </div>
          </div>
          <div className="flex flex-col mx-auto mt-16 min-h-screen">

            <div className="flex flex-col mx-auto text-center relative">
              <div className="text-3xl text-gray-900">About Me</div>
              <div className="text-l mt-4 text-gray-900 bg-sky-50 p-6 rounded-lg drop-shadow-md max-w-sm sm:max-w-2xl">Since childhood, I've been fascinated by technology and programming. It's a passion that's stuck with me through the years and continues to drive me forward. With a natural curiosity and a love for problem-solving, I'm always eager to explore new developments in the tech world and apply my skills to create innovative solutions.</div>
            </div>

            <div className="flex flex-col mx-auto text-center relative mt-16">
              <h1 className="text-3xl text-gray-900">Skills</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-6 container">

                <div className="bg-sky-50 py-2 px-4 rounded-lg drop-shadow-md max-w-lg m-2">
                  <span className="font-semibold">Frontend Development:</span> Proficient in HTML, CSS, and JavaScript, with experience in modern frameworks such as React/Next.js.
                  Skilled in crafting responsive and visually appealing web interfaces.
                </div>


                <div className="bg-sky-50 p-6 rounded-lg drop-shadow-md max-w-lg m-2">
                  descriptiontdrtrd
                </div>
                <div className="bg-sky-50 p-6 rounded-lg drop-shadow-md max-w-lg m-2">
                  descriptiontdrtrd
                </div>
                <div className="bg-sky-50 p-6 rounded-lg drop-shadow-md max-w-lg m-2">
                  descriptiontdrtrd
                </div>
                <div className="bg-sky-50 p-6 rounded-lg drop-shadow-md max-w-lg m-2">
                  descriptiontdrtrd
                </div>


              </div>

            </div>


            <div className="container grid grid-cols-1 md:grid-cols-2 p-6">


              <div className="bg-sky-50 p-6 rounded-lg drop-shadow-md m-2">
                <div className="text-xl mb-2">
                  About Me
                </div>
                <div className="text-l leading-relaxed">
                  Since childhood, I've been fascinated by technology and programming.
                  It's a passion that's stuck with me through the years and continues to drive me forward.
                  With a natural curiosity and a love for problem-solving, I'm always eager to explore new developments in the tech world and apply my skills to create innovative solutions.
                </div>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg drop-shadow-md m-2 leading-relaxed">
                <div className="text-xl mb-2">
                  Skills
                </div>
                <div className="text-l">
                  <span className="font-semibold">Frontend Development:</span> Proficient in HTML, CSS, and JavaScript, with experience in modern frameworks such as React/Next.js.
                  Skilled in crafting responsive and visually appealing web interfaces.
                  <br />
                  <span className="font-semibold">PHP:</span> Familiar with PHP for backend development, capable of implementing basic functionalities and integrating with frontend technologies.
                  <br />
                  <span className="font-semibold">MySQL:</span> Experience with MySQL for database management in web development projects, with a basic understanding of database design and querying.
                  <br />
                  <span className="font-semibold">VB.NET:</span> Familiarity with VB.NET for developing Windows applications, primarily utilized in my business project for graphic design management.
                  <br />
                  <span className="font-semibold">Git:</span> Over 10 years of experience using Git. Initially used GitHub for storing device repositories for custom Android ROM compilation. Now storing majority of my code on it.
                  <br />
                  <span className="font-semibold">REST API:</span> Utilized Allegro's REST API to manage orders and automate processes in my business.
                  <br />
                  <span className="font-semibold">Docker:</span> Got familiar with Docker by hosting various services on my home media server, although haven't used it in development yet.
                  <br />
                </div>
              </div>

            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
