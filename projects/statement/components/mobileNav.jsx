import React from "react";

const MobileNav = () => {
  const navList = [
    { text: "The Statement", link: "#statement" },
    { text: "The Details", link: "#details" },
    { text: "The Merch", link: "#merch" },
    { text: "The Games", link: "#games" },
    { text: "The Look", link: "#look" },
  ];

  return (
    <div
      className={`fixed flex h-1/2 w-screen flex-col bg-black p-4 text-wolvesFrost`}
      style={{zIndex: "5"}}
    >
      <div className="show mx-auto my-auto flex max-w-6xl flex-col justify-around gap-y-4 text-left font-bold uppercase xl:hidden">
        {navList.map((each,i) => {
          <a key={i} href={each.link}>
            {each.text}
          </a>
        })}
      </div>
    </div>
  );
};

export default MobileNav;