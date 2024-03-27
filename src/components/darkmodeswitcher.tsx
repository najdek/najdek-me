import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";



function isDefaultDark() {
    if (typeof window !== 'undefined') {
        if (document.documentElement.classList.contains("dark")) {
            return true;
        }
    }
}

export function DarkModeSwitcher() {

    const [darkMode, setDarkMode] = useState(isDefaultDark());

    const handleDarkSwitchClick = () => {
        if (darkMode) {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        } else {
            setDarkMode(true);
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        }
    }

    return (
        <div className="absolute z-1 left-4 top-4 sm:left-8 sm:top-8 p-3 cursor-pointer text-white hover:text-gray-300" onClick={handleDarkSwitchClick}>
            <FontAwesomeIcon className="text-xl sm:text-2xl md:text-3xl" icon={darkMode ? faMoon : faSun} />
        </div>
    )
}