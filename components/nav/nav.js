import React from 'react'
import { Link } from "react-scroll";
import Image from "next/legacy/image";
import { useState } from "react";
import { motion } from "framer-motion";
import MobileNav from "./mobileNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faBars);

const Nav = ({ navItems,  active, setActive }) => {
    const [showMobile, setShowMobile] = useState(false);
    const handleMobileMenu = () => {
        setShowMobile(!showMobile);
    };

    return (
            <motion.nav
                className="top-0 sticky z-front flex w-full items-center py-2 px-4 border-b-[1px] overflow-hidden"
                initial={"hidden"}
            >
                <a className="w-1/2 flex flex-row relative duration-300 ease-in-out group-hover:text-white group"
                   href="https://ahbernhardt.github.io/"
                   target={"_blank"}
                   rel={"noreferrer"}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <div className="w-[20px] object-center bg-cover my-auto">
                        <Image
                            src={"/favicon/logo.svg"}
                            alt="AB Logo"
                            layout="responsive"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className="relative w-auto my-auto ml-2">
                        <div className="transition-all transform -translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                            <p className="text-[10px] text-white uppercase">
                                - (YOU ARE ALREADY HERE)
                            </p>
                        </div>
                    </div>
                </a>

                <ul className="hidden sm:w-1/2 sm:flex-row sm:show sm:flex">
                        {navItems.map((item) => (
                        <Link
                            onClick={() => setActive(item.name)}
                            key={item.name}
                            className="relative px-4 py-1 text-white transition-all hover:no-underline"
                            activeClass="active"
                            delay={0}
                            to={item.link}
                            spy
                            ignoreCancelEvents
                            // smooth
                        >
                            <li className="cursor-pointer text-xl font-extrabold uppercase italic no-underline hover:no-underline xl:text-2xl">
                                {active === item.name && (
                                    <motion.div
                                        layoutId="pill"
                                        style={{ borderRadius: 9999 }}
                                        className="absolute inset-0 bg-abLake"
                                        transition={{ duration: 0.6, type: "spring" }}
                                    ></motion.div>
                                )}
                                <span
                                    className={`${
                                        active === item.name ? "" : "hover:text-abOrange"
                                    } relative z-10`}
                                >
                              {item.name}
                            </span>
                            </li>
                        </Link>
                        ))}
                </ul>
                <button
                    className="absolute top-0 flex flex-row p-6 text-white sm:hidden"
                    onClick={handleMobileMenu}
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        className="flex w-6 items-center justify-center"
                    />
                </button>
                {showMobile && (
                    <MobileNav
                        navItems={navItems}
                        handleMobileMenu={handleMobileMenu}
                    />
                )}
            </motion.nav>
    );
};
export default Nav;