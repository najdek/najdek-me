import { aboutMe } from "@/data/aboutme"

export function AboutMe() {
    return (
        <div className="flex flex-col mx-auto px-4 text-center relative">
            <div className="text-3xl text-gray-900 dark:dark:text-gray-200">About Me</div>
            <div className="text-md mt-6 text-gray-900 bg-sky-50 dark:bg-cyan-950 dark:text-gray-300 p-6 rounded-lg drop-shadow-md max-w-sm sm:max-w-2xl">{aboutMe.text}</div>
        </div>
    )
}