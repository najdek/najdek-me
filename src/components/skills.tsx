import { skillList } from "@/app/skills";
function Skill(props: any) {

    return (
        <div className="flex bg-sky-50 py-2 px-4 rounded-lg drop-shadow-md max-w-sm m-2 space-x-4">
            <div className="min-w-[30%] flex flex-col justify-center">
                <div className="bg-blue-200 w-full h-24">icon</div>
                <div className="font-semibold">{props.name}</div>
            </div>
            <div className="flex items-center">{props.desc}</div>
        </div>
    )
}

export function AllSkills() {
    var out: any = [];
    skillList.forEach((element, i) => {
        out.push(
            <Skill key={`"skill-${i}`} name={element.name} desc={element.desc} />
        );
    });
    return (
        <div className="flex flex-col mx-auto text-center relative mt-16">
            <h1 className="text-3xl text-gray-900">Skills</h1>
            <div className="flex flex-wrap justify-center mt-4 container">
                {out}
            </div>
        </div>
    )
}