import React from "react";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col gap-y-16 justify-center place-items-center w-screen h-screen">
      <div className="flex gap-x-4">
        <h1 className="text-4xl mt-4">Page Not Found</h1>
        <img
          width={50}
          src="https://www.pngkit.com/png/detail/56-565987_pikachu-pokemon-and-sad-image-pikachu-crying.png"
          alt="sad pikachu"
        />
      </div>
      <div className="flex gap-x-4">
        <h1>Return to Home</h1>
        <NavLink to="/catch-pokemon">
          <button className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <svg
              class="w-6 h-6 text-redFa rotate-180"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </NavLink>
      </div>
    </div>
  );
};
