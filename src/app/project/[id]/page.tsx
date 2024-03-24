"use client";
import { projectList } from "@/app/projects";
import { Gallery } from "@/components/gallery";
import { ProjectDescLink } from "@/components/links";
import { NavbarFixed } from "@/components/navbar";
import { useRouter } from "next/navigation";


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
      <section className="flex justify-between flex-col min-h-screen relative bg-gradient-to-b from-sky-100 to-sky-300 pb-16">
        <div className="mx-auto mt-20 container">
          <div onClick={() => router.back()} className="bg-blue-300 hover:bg-sky-300 max-w-max mx-auto p-2 rounded-lg drop-shadow-sm cursor-pointer">
            <div className="text-l">{`<- Go Back`}</div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 grid-rows-[3rem_auto]">
              <div className="col-span-1 row-span-2 order-2 lg:order-1 justify-self-center lg:justify-self-end text-center p-4 rounded-lg drop-shadow-md bg-sky-50">
                <Gallery project={project} />
              </div>
              <div className="col-span-1 order-1 lg:order-2 p-2">
                <h1 className="text-3xl text-center">{project.name}</h1>
              </div>
              <div className="col-span-1 order-3 rounded-lg drop-shadow-md p-6 bg-sky-50">
                <div className="text-l whitespace-pre-line">{project.fullDesc}</div>
                <div className="mt-6">
                  <ProjectDescLink type="github" url={project.githubUrl} />
                  <ProjectDescLink type="page" url={project.pageUrl} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}