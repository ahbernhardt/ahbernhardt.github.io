import React from "react";
import { Link } from "react-scroll";
import Image from "next/legacy/image";
import { useOnInView } from "/Users/anhbernhardt/Desktop/ahbernhardt.github.io/utils/useOnInView";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faClose);

const Mobile = ({ navItems, handleMobileMenu }) => {
  // animation refs & controls
  const fadeInDownFast = {
    show: { opacity: 1, y: 0, transition: { type: "easeIn", duration: 0.5 } },
    hidden: { opacity: 0, y: -30 },
  };
  const { ref: navRef, controls: navControls } = useOnInView();

  return (
    <motion.nav
      ref={navRef}
      className="before:bg-gradient-radial after:bg-gradient-conic before:lg:h-[360px text-frost relative z-50 flex h-screen w-full flex-col place-items-center items-center justify-center bg-black p-12 text-center text-3xl font-extrabold tracking-wider uppercase italic before:absolute before:aspect-square before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:aspect-square after:w-[240px] after:translate-x-1/4 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40"
      initial="hidden"
      variants={fadeInDownFast}
      animate={navControls}
    >
      <a
        href={"https://ahbernhardt.github.io"}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <div
          className={`absolute top-2 left-2 h-[3rem] w-[3rem] p-2 transition-all duration-300 hover:scale-90`}
        >
          <Image
            src={"/favicon/logo.svg"}
            alt="AB Logo"
            layout={"responsive"}
            width={20}
            height={20}
          />
        </div>
      </a>
      <button
        className="text-abFrost absolute top-2 right-4 p-2"
        onClick={handleMobileMenu}
      >
        <FontAwesomeIcon icon={faClose} className="w-5" />
      </button>
      <ul className="show mx-auto my-auto flex max-w-6xl flex-col items-center justify-around sm:hidden">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`text-abFrost cursor-pointer py-[12px] uppercase`}
          >
            <Link to={item.link} onClick={handleMobileMenu}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Mobile;
