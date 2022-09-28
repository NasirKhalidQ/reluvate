import React from "react";

export const Button = ({ handleClick, children }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-black w-64 p-2 mt-16 text-white rounded-sm hover:text-redFa transition-all ease-in-out duration-300"
    >
      {children}
    </button>
  );
};
