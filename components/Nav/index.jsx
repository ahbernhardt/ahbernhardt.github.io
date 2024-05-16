import React from 'react'
import {Link} from "react-scroll";
import Image from "next/legacy/image";

const Nav = () => {
    return (
        <div className={`sticky top-0 w-full z-front font-neueHaas font-thin mx-auto`}>
            <nav className="w-full top-0 sticky flex py-2 border-b-[1px] mx-auto px-3 sm:px-8 justify-between">
                <a className="w-1/4 flex flex-row relative duration-300 ease-in-out group-hover:text-white group"
                   href="https://ahbernhardt.github.io/"
                   target={"_blank"}
                   rel={"noreferrer"}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <div className="w-[30px] sm:w-[24px] object-center bg-cover my-auto">
                        <Image
                            src={"/favicon/logo.svg"}
                            alt="AB Logo"
                            layout="responsive"
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className="relative w-auto my-auto ml-2">
                        <div
                            className="transition-all transform -translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                            <p className="text-[10px] text-white uppercase">
                                - (YOU ARE ALREADY HERE)
                            </p>
                        </div>
                    </div>
                </a>

                <p className="hidden sm:show sm:w-1/2 h-full sm:flex justify-center text-xs text-center align-center uppercase leading-none my-auto">
                    Portfolio 24'
                </p>

                <ul className="w-1/4 h-full flex flex-row self-end justify-end text-xs my-auto gap-6">
                    <Link
                        className="relative text-white transition-all cursor-pointer uppercase no-underline hover:no-underline"
                        delay={0} to={"about"} spy smooth ignoreCancelEvents
                    >
                        about
                    </Link>
                    <Link
                        className="relative text-white transition-all cursor-pointer uppercase no-underline hover:no-underline"
                        delay={0} to={"projects"} spy smooth ignoreCancelEvents
                    >
                        projects
                    </Link>
                    <Link
                        className="relative text-white transition-all cursor-pointer uppercase no-underline hover:no-underline"
                        delay={0} to={"contact"}
                        spy smooth ignoreCancelEvents
                    >
                        contact
                    </Link>
                </ul>
            </nav>
        </div>
    );
};
export default Nav;