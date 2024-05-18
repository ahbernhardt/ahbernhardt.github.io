import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer id="contact" className="w-full text-white">
    <div className="mx-auto flex w-full justify-between px-[12px] py-2 font-neueHaas tracking-[0.5px] sm:px-[24px]">
      <div className="align-center my-auto flex w-fit gap-4 sm:gap-6 sm:pl-[1.2rem]">
        <a
          href="https://codepen.io/ahbernhardt"
          target="_blank"
          rel="nopreferrer noreopened"
        >
          <FontAwesomeIcon
            icon={faCodepen}
            className="aspect-square w-4 sm:w-6 lg:w-8"
          />
        </a>
        <a
          href="https://github.com/ahbernhardt"
          target="_blank"
          rel="nopreferrer noreopened"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="aspect-square w-4 sm:w-6 lg:w-8"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/anhbernhardt/"
          target="_blank"
          rel="nopreferrer noreopened"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="aspect-square w-4 sm:w-6 lg:w-8"
          />
        </a>
      </div>
      <div className="my-auto flex w-fit flex-col gap-2 text-right text-base font-medium sm:text-lg">
        <p className="leading-none opacity-75">© Anh Bernhardt</p>
        <p className="text-xs font-thin leading-none opacity-40 sm:text-base">
          Creative Web Developer
        </p>
      </div>
    </div>
  </footer>
);
export default Footer;
