import { projectList } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

function Project(props: any) {
    return (
        <Link href={`./project/${props.id}`} className="group dire bg-sky-50 hover:bg-sky-100 transition ease-linear py-2 px-4 rounded-lg drop-shadow-md m-2 w-[256px]">
            <div className="font-semibold">{props.name}</div>
            <div className="text-sm">{props.shortDesc}</div>
            <div className="bg-blue-200 h-48 mt-2 relative rounded-lg overflow-hidden"><Image className="absolute h-full w-full object-cover group-hover:scale-105 transition ease-linear" src={props.coverImg} width={260} height={260} alt={`Picture of ${props.name}`}></Image></div>
        </Link>
    )
}

export function AllProjects() {
    var out: any = [];
    projectList.forEach((element, i) => {
        out.push(
            <Project key={`"project-${i}`} id={element.id} name={element.name} shortDesc={element.shortDesc} coverImg={element.images[0]} />
        );
    });
    return (
        <div className="flex flex-col mx-auto text-center relative mt-16">
            <h1 className="text-3xl text-gray-900">Projects</h1>
            <div className="flex flex-wrap justify-center mt-4 container">
                {out}
            </div>
        </div>
    )
}