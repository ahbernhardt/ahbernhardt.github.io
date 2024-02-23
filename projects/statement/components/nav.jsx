import React, { useState } from "react";
import MobileNav from "./mobileNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import scrollToTop from "/utils/scrollToTop";
const Navigation = () => {
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  const [showNav, setShowNav] = useState(false);

  const navList = [
    { text: "The Statement", link: "#statement" },
    { text: "The Details", link: "#details" },
    { text: "The Merch", link: "#merch" },
    { text: "The Games", link: "#games" },
    { text: "The Look", link: "#look" },
  ];

  return (
    <div className="top-0 h-12 w-full items-center bg-yellow-500">
      {showNav ? (
        <MobileNav showNav={showNav} setShowNav={setShowNav} />
      ) : (
        <div className="flex h-fit w-full flex-row justify-between border-[1px]">
          <div className="flex aspect-square h-8 bg-cover">
              <a
              onClick={scrollToTop}
              className="flex aspect-square w-8 bg-cover"
            >
              <img
                src="https://ahbernhardt.github.io/projects/statement/images/wolves-white.png"
                alt="Timberwolves Logo"
                className="aspect-square object-contain"
              />
            </a>
          </div>

          <div className="flex w-full items-center justify-end gap-x-4 text-white border-2 border-red-500">
            {navList.map((each, i) => {
              <a key={i} href={each.link} className="text-white">
                {each.text}
              </a>;
            })}
          </div>
          <a className="show md:hidden" onClick={() => setShowNav(!showNav)}>
            <FontAwesomeIcon icon={faHamburger} />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navigation;
