import Image from "next/legacy/image";

const Logo = () => {
  return (
    <div className="font-neueHaas fixed top-0 z-10 mx-auto w-11/12 font-thin lg:px-[0.5em]">
      <div className="sticky top-0 mx-auto flex w-full justify-between px-3 py-2 sm:px-6">
        <a
          className="group relative flex w-1/3 flex-row duration-300 ease-in-out group-hover:text-white"
          href="https://anhbernhardt.com"
          target={"_blank"}
          rel={"noreferrer"}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="my-auto w-[30px] bg-cover object-center sm:w-[24px] lg:w-[32px]">
            <Image
              src={"/favicon/logo.svg"}
              alt="AB Logo"
              layout="responsive"
              width={20}
              height={20}
            />
          </div>
          <div className="relative my-auto ml-2 w-auto">
            <div className="-translate-x-8 transform opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
              <p className="text-[10px] font-medium text-white uppercase">
                - (YOU ARE ALREADY HERE)
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Logo;
