import React from "react";
import ImageCarousel from "./ImageCarousel";
import SectionHeader from "/projects/statement/components/lookSectionHeader";

const TheLook = () => {
  return (
    <section
      id="look"
      className="flex flex-col relative bg-TreeStatement2 bg-cover
      before:border-transparent before:block before:absolute before:h-1/4 before:-top-[1px] before:w-full before:bg-FromTopToBottom
      after:border-transparent after:block after:absolute after:h-[15%] after:bottom-0 after:w-full after:bg-FromBottomToTop
      "
    >
      {/*<div className="grid grid-cols-1 gap-x-6 gap-y-6 my-4 md:my-16 md:px-16">*/}
      {/*  <div className="flex flex-col px-6 sm:px-16 md:px-0 uppercase">*/}
      <SectionHeader sectionTitle={"Look"} />
      <ImageCarousel />
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  );
};

export default TheLook;
