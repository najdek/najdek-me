"use client";
import { projectList } from "@/app/projects";
import { NavbarFixed } from "@/components/navbar";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = params.id;
  const project = projectList.filter(item => {
    return item.id === projectId;
  })[0];

  const router = useRouter();

  /*
    {
      id: "project-1",
      name: "Project name 1",
      shortDesc: "Short description of project 1",
      fullDesc: "Longer description",
      pageUrl: "https://najdek.me/",
      githubUrl: "https://github.com/najdek",
      images: [
        "/testimg.png",
        "/testimg.png",
        "/testimg.png"
      ]
    },
  */

  return (
    <div>
      <NavbarFixed />
      <section className="flex justify-between flex-col min-h-screen relative bg-gradient-to-b from-sky-100 to-sky-300">
        <div className="mx-auto mt-20 min-h-screen container">
          <div className="">
            <div onClick={() => router.back()} className="cursor-pointer text-xl">{`<- Go Back`}</div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="col-span-1 row-span-2 order-2 lg:order-1 bg-red-500 justify-self-center lg:justify-self-end text-center">
                <div><Image className="inline" src={project.images[0]} width={640} height={480} alt={`Picture of ${project.name} #0`}></Image></div>
                <div className="grid grid-rows-1 grid-cols-5 gap-1 mt-1">
                  <div className="">
                  <Image src={project.images[1]} width={128} height={96} alt={`Picture of ${project.name} #1`}></Image>
                  </div>
                  <div>
                  <Image src={project.images[1]} width={128} height={96} alt={`Picture of ${project.name} #1`}></Image>
                  </div>
                  <div className="">
                  <Image src={project.images[1]} width={128} height={96} alt={`Picture of ${project.name} #1`}></Image>
                  </div>
                  <div>
                  <Image src={project.images[1]} width={128} height={96} alt={`Picture of ${project.name} #1`}></Image>
                  </div>                  <div className="">
                  <Image src={project.images[1]} width={128} height={96} alt={`Picture of ${project.name} #1`}></Image>
                  </div>
                  <div>
                  <Image src={project.images[1]} width={128} height={96} alt={`Picture of ${project.name} #1`}></Image>
                  </div>
                </div>
                
              </div>
              <div className="col-span-1 order-1 lg:order-2 auto-rows-min bg-blue-500">
                <h1 className="text-3xl">{project.name}</h1>
              </div>
              <div className="col-span-1 order-3 h-full auto-rows-min bg-green-500">
                <div className="text-l min-h-[256px] lg:min-h-[512px]">{project.fullDesc}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}