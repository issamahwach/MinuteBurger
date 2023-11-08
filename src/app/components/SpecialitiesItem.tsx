import React from "react";

function SpecialitiesItem({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center gap-2">
      <svg
        className="w-5 h-5 text-yellow-400 flex-shrink-0"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 12.75l6 6 9-13.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="uppercase flex-shrink-0">{title}</span>
    </div>
  );
}

export default SpecialitiesItem;
