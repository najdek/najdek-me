import { aboutMe } from "@/app/aboutme"

export function AboutMe() {
    return (
        <div className="flex flex-col mx-auto text-center relative">
            <div className="text-3xl text-gray-900">About Me</div>
            <div className="text-l mt-4 text-gray-900 bg-sky-50 p-6 rounded-lg drop-shadow-md max-w-sm sm:max-w-2xl">{aboutMe.text}</div>
        </div>
    )
}