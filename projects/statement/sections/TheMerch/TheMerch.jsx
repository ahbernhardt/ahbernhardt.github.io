import React from "react";
import Fade from "react-reveal/Fade";
import MerchGallery from "/projects/statement/components/merch";
import SectionHeader from "/projects/statement/components/sectionHeader";

const TheMerch = () => {
  return (
    <section
      id="merch"
      className="text-wolvesWhite bg-RetailPaper flex flex-col relative bg-right pb-32
        before:border-transparent before:block before:absolute before:h-[30%] before:top-0 before:w-full before:bg-FromTopToBottom
        after:border-transparent after:block after:absolute after:h-[15%] after:bottom-0 after:w-full after:bg-FromBottomToTop
        "
    >
      <Fade duration={1200}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 my-4 md:my-16 md:px-16 lg:px-8 xl:px-16 ">
          <div className="flex flex-col px-6 sm:px-16 md:px-0 uppercase">
            <SectionHeader sectionTitle={"Merch"} />
            <div className="mt-6 md:text-xl lg:mt-12 lg:text-3xl xl:text-4xl font-medium">
              Sign up for the jersey preorder notification AND EXPLORE THE
              LATEST COLLECTION
            </div>
            <div className="mt-8 flex flex-row space-x-6 text-xs text-bold md:whitespace-nowrap md:text-xl lg:text-lg xl:text-xl">
              <a
                href="https://timberwolvesteamstore.com/collections/22-23-timberwolves-statement-collection?utm_source=TW.WEB&utm_medium=TW.WEB.STATEMENT&utm_campaign=2022-23+TW+STATEMENT+COLLECTION"
                target="_blank"
                rel="noreferrer"
                className="relative inline-block group"
              >
                <span className="relative z-10 block px-8 md:px-10 lg:px-6 xl:px-16 py-2 overflow-hidden font-medium text-wolvesShadow transition-colors duration-300 ease-out border-2 border-wolvesAurora group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-8 md:px-12 lg:px-16 py-2 bg-wolvesWhite" />
                  <span className="absolute left-0 w-96 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-wolvesAurora group-hover:-rotate-180 ease" />
                  <span className="relative">SHOP The Collection</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-10 md:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-wolvesAurora group-hover:mb-0 group-hover:mr-0" />
              </a>

              <a
                href="https://timberwolvesteamstore.com/pages/timberwolves-statement-edition-jersey-presale-registration"
                target="_blank"
                rel="noreferrer"
                className="relative inline-block group"
              >
                <span className="relative z-10 block px-8 md:px-12 py-2 overflow-hidden font-medium text-wolvesShadow transition-colors duration-300 ease-out border-2 border-wolvesAurora group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-8 md:px-16 py-2 bg-wolvesWhite" />
                  <span className="absolute left-0 w-[21rem] h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-wolvesAurora group-hover:-rotate-180 ease" />
                  <span className="relative">Get Notified</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-10 md:h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-wolvesAurora group-hover:mb-0 group-hover:mr-0" />
              </a>
            </div>
          </div>
          <MerchGallery />
        </div>
      </Fade>
    </section>
  );
};

export default TheMerch;
