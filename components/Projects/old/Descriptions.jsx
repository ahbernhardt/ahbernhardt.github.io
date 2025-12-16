import React from "react";

export default function Descriptions({ data, selectedProject }) {
  const crop = (string, maxLength) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className="pointer-events-none absolute top-0 z-[2] h-full w-full">
      {data.map((project, i) => {
        const { title, content } = project;
        return (
          <div
            key={i}
            className="bg-hexYellow flex items-center justify-between px-[1%] pb-[2px] transition-all duration-400 ease-in-out"
            style={{
              clipPath:
                selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%)",
            }}
          >
            <p className="text-hexBlack relative z-[1] m-0 text-[8vw] leading-[7.5vw] font-bold uppercase">
              {crop(title, 9)}
            </p>
            <p className="text-hexBlack w-2/5 text-[1vw] font-bold">
              {content}
            </p>
          </div>
        );
      })}
    </div>
  );
}
