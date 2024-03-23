import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavbarContent() {
    return (
        <div className={`flex justify-between z-10 h-16 mx-auto container px-10`}>
            <a href="https://github.com/najdek" className="flex flex-row items-center"><FontAwesomeIcon className="h-4" icon={faGithub} /><span className="mx-2">najdek</span></a>
            <a href="mailto:mateusz@najdek.me" className="flex flex-row items-center"><FontAwesomeIcon className="h-4" icon={faEnvelope} /><span className="mx-2">mateusz@najdek.me</span></a>
        </div>
    )
}

export function NavbarFixed(props: any) {
    return (
        <div className={`fixed z-10 top-0 left-0 w-full rounded-b-2xl backdrop-blur-md bg-opacity-50 bg-sky-100 ${(props.navbarHomeTop < 0 || props.navbarHomeTop == undefined) ? "visible" : "invisible"}`}>
        <NavbarContent />
      </div>
    )
}

export function NavbarHome(props: any) {
 return (
    <div ref={props.passRef} className={`z-10 ${props.navbarHomeTop < 0 ? "invisible" : "visible"} mb-12`}>
    <NavbarContent />
  </div>
 )
}