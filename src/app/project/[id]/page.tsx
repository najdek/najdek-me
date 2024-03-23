"use client";
import { NavbarFixed } from "@/components/navbar";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = params.id;

  return (
    <div>
      <NavbarFixed />
      <section className="flex justify-between flex-col min-h-screen relative bg-gradient-to-b from-sky-100 to-sky-300">
        <div className="flex flex-col mx-auto mt-16 min-h-screen">
          <Link href="../#projects">{`<- Go Back`}</Link>
          {projectId}
        </div>
      </section>
    </div>
  )
}