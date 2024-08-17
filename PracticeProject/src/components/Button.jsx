import React from "react";

function Button({ children, ...props }) {
  return (
    <button className="px-4 py-2 text-xs bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 rounded-md md:text-base" {...props}>
      {children}
    </button>
  );
}

export default Button;
