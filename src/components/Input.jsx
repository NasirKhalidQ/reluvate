import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return (
    <input
      className="px-3 py-2 w-64 rounded-sm focus:outline-black border-2 border-black"
      ref={ref}
      type={props.type}
    />
  );
});
