import { skillList } from "@/app/skills";
function Skill(props:any) {

    return (
        <div className="bg-sky-50 py-2 px-4 rounded-lg drop-shadow-md max-w-lg sm:max-w-xs m-2">
        <span className="font-semibold">{props.name}</span><br/>{props.desc}</div>
    )
}

export function AllSkills() {
        var out: any = [];
        skillList.forEach(element => {
            out.push(
                <Skill name={element.name} desc={element.desc} />
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