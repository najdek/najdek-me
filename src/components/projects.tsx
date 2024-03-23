import { projectList } from "@/app/projects";
import Link from "next/link";

function Project(props: any) {

    return (
        <Link href={`./project/${props.id}`} scroll={true} className="bg-sky-50 py-2 px-4 rounded-lg drop-shadow-md max-w-sm m-2">
            <div className="font-semibold">{props.name}</div>
            <div className="bg-blue-200 h-48">image</div>
            <div className="">{props.desc}</div>
        </Link>
    )
}

export function AllProjects() {
    var out: any = [];
    projectList.forEach((element, i) => {
        out.push(
            <Project key={`"project-${i}`} id={element.id} name={element.name} desc={element.desc} />
        );
    });
    return (
        <div id="projects" className="flex flex-col mx-auto text-center relative mt-16">
            <h1 className="text-3xl text-gray-900">Projects</h1>
            <div className="flex flex-wrap justify-center mt-4 container">
                {out}
            </div>
        </div>
    )
}