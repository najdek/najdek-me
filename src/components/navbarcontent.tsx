import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavbarContent() {
    return (
        <div className={`flex justify-between z-10 h-16 mx-auto container px-10`}>
            <a href="https://github.com/najdek" className="flex flex-row items-center"><FontAwesomeIcon icon={faGithub} /><span className="mx-2">najdek</span></a>
            <a href="mailto:mateusz@najdek.me" className="flex flex-row items-center"><FontAwesomeIcon icon={faEnvelope} /><span className="mx-2">mateusz@najdek.me</span></a>
        </div>
    )
}