import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
    <footer id="contact" className="w-full text-white">
          <div className="z-10 mx-auto flex w-full justify-between px-[12px] py-2 font-neueHaas tracking-[0.5px] sm:px-[24px]">
            <div className="flex w-fit gap-4 sm:gap-6 align-center my-auto sm:pl-[1.2rem]">
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
            <div className="my-auto w-fit flex flex-col gap-2 text-base sm:text-lg font-medium text-right">
              <p className="leading-none opacity-75">© Anh Bernhardt</p>
              <p className="font-thin leading-none text-xs sm:text-base opacity-40">Creative Web Developer</p>
            </div>
          </div>
        </footer>
)
export default Footer;