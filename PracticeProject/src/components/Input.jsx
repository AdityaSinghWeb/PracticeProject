import React, { forwardRef } from "react";

function Input({ title, textarea, ...props }, ref) {
  const className =
    "w-full py-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-stone-500 font-bold uppercase text-sm">
        {title}
      </label>
      {textarea ? (
        <textarea ref={ref} className={className} {...props} />
      ) : (
        <input ref={ref} className={className} {...props} />
      )}
    </p>
  );
};

export default forwardRef(Input);
