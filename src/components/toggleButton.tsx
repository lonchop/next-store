import React from "react";
import { useAppContext } from "@/components/stateWrapper";

export default function ToggleButton() {
  const { darkMode, toggleDarkMode } = useAppContext();

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h3
          className={`select-none text-[1.4rem] ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {darkMode ? "Dark" : "Light"}
        </h3>
        <input
          type="checkbox"
          className={`h-[20px] w-[40px] cursor-pointer appearance-none rounded-full bg-gray-200  transition-all duration-300 before:ml-0.5 before:inline-block before:h-[20px] before:w-[20px] before:rounded-full before:bg-black checked:bg-primary-1 checked:before:translate-x-full
          ${darkMode ? "text-white" : "text-black"}`}
          onClick={toggleDarkMode}
        />
      </div>
    </>
  );
}
