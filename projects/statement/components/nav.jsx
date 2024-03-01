import React, { useState } from "react";
import MobileNav from "./mobileNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faClose } from "@fortawesome/free-solid-svg-icons";
import scrollToTop from "/utils/scrollToTop";


const Navigation = () => {
  const [showMobile, setShowMobile] = useState(false);

  const handleMobileMenu = () => {
    setShowMobile(!showMobile)
  }

  const navList = [
    { text: "The Statement", link: "#statement" },
    { text: "The Details", link: "#details" },
    { text: "The Merch", link: "#merch" },
    { text: "The Games", link: "#games" },
    { text: "The Look", link: "#look" },
  ];

  return (
    <>
    <div className="fixed sticky top-0 z-5 flex w-screen bg-black justify-between border-b-[1px] border-wolvesFrost/20 bg-wolvesMidnight px-4 py-4 text-wolvesFrost drop-shadow-xl lg:px-8"
      style={{zIndex: "4"}}
      >
        <a
          href="https://www-qa.nba.com/timberwolves/community"
          className="flex flex-col h-8 max-h-[60px] p-4 w-fit items-center hover:no-underline sm:mr-2 lg:h-10 xl:h-12 3xl:h-14"
          style={{maxWidth: "48px", padding: "6px"}}
          >
            <img
              src="https://cdn.wolveslynx.com/timberwolves/logo/Wolves_Primary_White.png"
              alt="Timberwolves Logo"
              // className="w-12 object-contain"
            />
        </a>
        <div
          className="xl:visible my-auto flex hidden h-full w-fit justify-center gap-4 text-center text-[.64rem]
        uppercase sm:text-[.82rem] sm:font-bold xl:flex xl:gap-6 3xl:gap-8 3xl:text-[1rem]"
        >
           {navList.map((each, i) => {
          <a key={i} href={each.link} className="text-offWhite text-base hover:no-underline">
            {each.text}
          </a>;
        })}
      </div>

      <button
          className={`show flex aspect-square w-5 flex-row items-center justify-center xl:hidden`}
          onClick={handleMobileMenu}
        >
          {showMobile ? (
            <FontAwesomeIcon
              icon={faClose}
              className="m-auto aspect-square w-6"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBarsStaggered}
              className="m-auto aspect-square w-6"
            />
          )}
        </button>
      </div>
      {/* eslint-disable-next-line react/no-children-prop */}
      {showMobile && <MobileNav handleMobileMenu={handleMobileMenu} />}
    </>
  );
};

export default Navigation;