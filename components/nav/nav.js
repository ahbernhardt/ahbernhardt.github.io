import React from 'react'
import {Link} from "react-scroll";
import Image from "next/legacy/image";

const Nav = () => {
    return (
        <div className="!sticky top-0 !z-10">
            <nav className="w-full top-0 sticky flex py-2 border-b-[1px] mx-auto"
            >
                <a className="w-1/3 flex flex-row relative duration-300 ease-in-out group-hover:text-white group"
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
                        <div
                            className="transition-all transform -translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                            <p className="text-[10px] text-white uppercase">
                                - (YOU ARE ALREADY HERE)
                            </p>
                        </div>
                    </div>
                </a>

                <ul className="w-2/3 flex flex-row self-end justify-end">
                    <Link
                        className="relative text-white transition-all cursor-pointer text-base uppercase no-underline hover:no-underline"
                        delay={0} to={"about"} spy smooth ignoreCancelEvents
                    >
                        about
                    </Link>
                    <Link
                        className="relative text-white transition-all cursor-pointer text-base uppercase no-underline hover:no-underline"
                        delay={0} to={"work"}
                        spy smooth ignoreCancelEvents
                    >
                        {" "} -work
                    </Link>
                </ul>
            </nav>
        </div>

    );
};
export default Nav;