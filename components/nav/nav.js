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
        <>
            <motion.nav
                className="fixed z-20 flex w-full items-center justify-between px-4"
                initial={"hidden"}
            >
                <a
                    className="top-0 left-0 w-[3rem] py-4 transition-all duration-300 hover:scale-90"
                    href="https://ahbernhardt.github.io/"
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    <Image
                        src={"/favicon/logo.svg"}
                        alt="AB Logo"
                        layout="responsive"
                        width={20}
                        height={20}
                        // className="stroke-yellow-500"
                    />
                </a>
                <ul className="hidden max-w-6xl flex-row gap-0 px-2 sm:show sm:flex">
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
                    className="absolute top-0 right-0 flex flex-row p-6 text-white sm:hidden"
                    onClick={handleMobileMenu}
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        className="flex w-6 items-center justify-center"
                    />
                </button>
            </motion.nav>
            {/* eslint-disable-next-line react/no-children-prop */}
            {showMobile && (
                <MobileNav
                    navItems={navItems}
                    handleMobileMenu={handleMobileMenu}
                />
            )}
        </>
    );
};
export default Nav;