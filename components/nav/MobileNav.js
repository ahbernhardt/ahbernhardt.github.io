import React from 'react'
import { Link } from "react-scroll";
import Image from "next/legacy/image";
import { useOnInView } from "../../utils/useOnInView";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faClose);

// import { fadeInDownFast } from "/components/constants/AnimationVariants";

const MobileNav = ({ navItems, handleMobileMenu}) => {
    // animation refs & controls
    const fadeInDownFast = {
        show: { opacity: 1, y: 0, transition: { type: "easeIn", duration: 0.5 } },
        hidden: { opacity: 0, y: -30 },
    };
    const { ref: navRef, controls: navControls } = useOnInView();

    return (
        <motion.nav
            ref={navRef}
            className="fixed z-50 flex h-screen w-screen
            relative text-center flex flex-col place-items-center
          before:absolute before:aspect-square before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:aspect-square after:w-[240px] after:translate-x-1/4 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px
          items-center justify-center bg-black p-12 text-3xl font-extrabold uppercase italic tracking-wider text-abFrost"
            initial="hidden"
            variants={fadeInDownFast}
            animate={navControls}
        >
            <a
                href={"https://ahbernhardt.github.io"}
                target={"_blank"}
                rel={"noreferrer"}
            >
                <div className={`p-2 absolute top-2 left-2 w-[3rem] h-[3rem] hover:scale-90 transition-all duration-300`}>
                    <Image
                        src={"/favicon/logo.svg"}
                        alt="AB Logo"
                        layout={"responsive"} width={20} height={20}
                    />
                </div>
            </a>
            <button
                className="absolute top-2 right-4 p-2 text-abFrost"
                onClick={handleMobileMenu}
            >
                <FontAwesomeIcon icon={faClose} className="w-5" />
            </button>
            <ul className="show mx-auto my-auto flex max-w-6xl flex-col items-center justify-around sm:hidden">
                {navItems.map((item) => (
                    <li
                        key={item.name}
                        className={`cursor-pointer py-[12px] uppercase text-abFrost`}
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

export default MobileNav;