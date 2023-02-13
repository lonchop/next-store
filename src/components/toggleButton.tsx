import React from "react";
import { useAppContext } from "@/context/stateWrapper";

export default function ToggleButton() {
  const { darkMode, toggleDarkMode } = useAppContext();

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h3
          className={`select-none text-[1.4rem] ${
            darkMode
              ? "text-white transition-all duration-300 ease-in-out "
              : "text-black transition-all duration-300 ease-in-out "
          }`}
        >
          {darkMode ? "Dark" : "Light"}
        </h3>
        {/* <input
          type="checkbox"
          className="h-5 w-9 appearance-none rounded-full bg-gray-300 shadow-inner transition-all duration-300 before:ml-0.5 before:inline-block before:h-4 before:w-4 before:rounded-full before:bg-blue-500 checked:bg-blue-300 checked:before:translate-x-full focus:outline-none"
        /> */}
        <input
          type="checkbox"
          className={`
          h-[20px] w-[40px] cursor-pointer appearance-none rounded-full bg-gray-300 shadow-inner transition-all duration-300 before:mt-[1px] before:inline-block before:h-[18px] before:w-[18px] before:rounded-full before:bg-primary-2
          ${
            darkMode
              ? "bg-blue-300 before:ml-[4px] before:translate-x-full"
              : "  "
          }`}
          onClick={toggleDarkMode}
        />
      </div>
    </>
  );
}
