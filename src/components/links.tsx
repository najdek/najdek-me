import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ProjectDescLink(props:any) {
    const type = props.type || "page";
    const url = props.url;

    if (!url) {
        return;
    }

    var name = url;
    var icon: any;

    if (type == "github") {
        name = name.split("github.com/")[1];
        icon = faGithub;
    } else if (type == "page") {
        name = name.split("https://")[1];
        icon = faGlobe;
    }


    return (
        <a href={props.url} className="flex flex-row items-center max-w-max mt-2 p-2 rounded-lg drop-shadow-md bg-sky-100 hover:bg-blue-100"><FontAwesomeIcon className="h-4" icon={icon} /><span className="mx-2">{name}</span></a>
    )

}