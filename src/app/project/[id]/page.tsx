"use client";
import { NavbarFixed } from "@/components/navbar";
import { useRouter } from "next/navigation";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = params.id;
  const router = useRouter();

  return (
    <div>
      <NavbarFixed />
      <section className="flex justify-between flex-col min-h-screen relative bg-gradient-to-b from-sky-100 to-sky-300">
        <div className="flex flex-col mx-auto mt-16 min-h-screen">
          <div onClick={() => router.back()} className="cursor-pointer">{`<- Go Back`}</div>
          {projectId}
        </div>
      </section>
    </div>
  )
}