"use client";
import { projectList } from "@/data/projects";
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

  return (
    <div>
      <NavbarFixed />
      <section className="flex justify-between flex-col min-h-screen relative bg-gradient-to-b from-sky-100 to-sky-300 dark:from-gray-800 dark:to-gray-900 pb-16">
        <div className="mx-auto mt-20 container">
          <div onClick={() => router.back()} className="bg-blue-300 hover:bg-sky-300 dark:bg-cyan-900 dark:text-gray-100 dark:hover:bg-cyan-800 max-w-max mx-auto p-2 rounded-lg drop-shadow-sm cursor-pointer">
            <div className="text-md">{`<- Go Back`}</div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 grid-rows-[3rem_auto] mx-4">
              <div className="col-span-1 row-span-2 order-2 lg:order-1 justify-self-center lg:justify-self-end text-center p-4 rounded-lg drop-shadow-md bg-sky-50 dark:bg-cyan-950 dark:text-gray-300">
                <Gallery project={project} />
              </div>
              <div className="col-span-1 order-1 lg:order-2 p-2">
                <h1 className="text-3xl text-center dark:text-gray-200">{project.name}</h1>
              </div>
              <div className="col-span-1 order-3 rounded-lg drop-shadow-md p-6 bg-sky-50 dark:bg-cyan-950 dark:text-gray-300">
                <div className="text-md whitespace-pre-line">{project.fullDesc}</div>
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