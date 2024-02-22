import React from "react";
import logo from "/public/projects/statement/images/statement-white.png";

const FooterLogo = () => (
  <div className="w-56 m-auto">
    <img src={logo} alt="Timberwolves Logo" className="center" />
  </div>
);


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-wolvesBlack sticky">
      <div className="flex flex-col items-center pt-6">
        <a
          href="https://www.nba.com/timberwolves/?tmd=1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-wolvesWhite"
        >
          <FooterLogo />
          <h6 className="my-4 uppercase font-futuraPT text-xs md:text-sm text-center">
            © {year} Minnesota Timberwolves. All Rights Reserved.
            Timberwolves.com
          </h6>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
