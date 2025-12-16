"use client";
import React, { useState, useRef, useEffect, useMemo, forwardRef } from "react";
import { motion, useInView } from "framer-motion";

// COMPONENTS
import SmoothScroll from "@/components/SmoothScroll";
import Background from "@/components/Background";
import SEO from "@/components/seo";
import Logo from "@/components/Logo";
import MainWrapper from "@/components/MainWrapper";
import MaskText from "@/components/MaskText";
import VerticalNav from "@/components/Nav/VerticalNav";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import GradientCursor from "@/components/GradientCursor";

const LeftSide = ({
  setMouseHover,
  navItems,
  activeSection,
  setActiveSection,
  onNavigate,
  fonts,
}) => {
  return (
    <section className="flex h-full w-full flex-col pb-36 lg:fixed lg:h-[85%] lg:w-1/3 lg:items-start lg:justify-between lg:pb-0 2xl:h-[82%]">
      <div className="flex flex-col gap-y-2 leading-none lg:gap-y-3">
        <p className={` ${fonts.accent} text-base leading-none md:text-lg`}>
          Hi or Xin Chào, my name is
        </p>
        <MaskText
          words="Anh Bernhardt"
          className={`z-1 text-left text-4xl leading-none font-extrabold tracking-normal text-white sm:text-5xl lg:text-6xl`}
          style={{ fontSize: "clamp(2.5rem, 1.5rem + 2.5vw, 5.75rem)" }}
          onMouseOver={() => {
            setMouseHover(true);
          }}
          onMouseLeave={() => {
            setMouseHover(false);
          }}
        />
        <p
          className="text-hexBeige font-light tracking-wide opacity-85"
          style={{ fontSize: "clamp(1rem, 0.825rem + 0.9vw, 2em)" }}
        >
          Front End Engineer
        </p>
        <p className="text-hexSage/80 my-6 w-5/6 text-sm font-normal text-balance sm:w-2/3 md:text-lg lg:w-5/6">
          I bring design concepts to life as accessible, pixel-perfect web
          experiences.
        </p>

        <div className="relative left-0 my-4 hidden h-4 w-2/3 items-start justify-start place-self-start lg:flex">
          <div className="via-hexSage absolute inset-x-0 top-0 h-[5px] w-full bg-gradient-to-r from-transparent to-transparent blur-sm" />
          <div className="via-hexSage absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
          <div className="via-hexYellow absolute inset-x-20 top-0 h-[5px] w-full bg-gradient-to-r from-transparent to-transparent blur-sm" />
          <div className="via-hexYellow absolute inset-x-20 top-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
        </div>
      </div>

      <VerticalNav
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onNavigate={onNavigate}
      />
      <Socials setMouseHover={setMouseHover} />
    </section>
  );
};

// Section Component
const Section = forwardRef(({ id, children }, ref) => {
  return (
    <section
      ref={ref}
      data-section={id}
      className={`flex h-full items-center justify-center`}
    >
      {children}
    </section>
  );
});
const About = ({ fonts, setMouseHover }) => {
  const description = useRef(null);
  const isInView = useInView(description);
  const opacity = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div
      ref={description}
      className="mx-auto flex h-full w-full flex-col justify-center gap-y-4 sm:gap-y-8 lg:pt-24"
    >
      <p
        className={`${fonts.accent} text-base leading-none font-bold md:text-lg lg:hidden`}
      >
        ABOUT
      </p>

      <motion.p
        variants={opacity}
        animate={isInView ? "open" : "closed"}
        className={`${fonts.base} text-balance lg:text-xl`}
      >
        I build{" "}
        <a
          href="https://www.hashtagsports.com/awards/shortlist-2024/minnesota-timberwolves-city-edition-unveil"
          className={`${fonts.anchor}`}
          onMouseOver={() => {
            setMouseHover(true);
          }}
          onMouseLeave={() => {
            setMouseHover(false);
          }}
        >
          award-nominated
        </a>{" "}
        digital experiences for the Minnesota Timberwolves & Lynx, taking
        projects from concept to deployment. I create high-energy marketing
        pages that pump up fans and polished React UIs that make browsing and
        buying feel natural—always focusing on where design meets function.
      </motion.p>
      <motion.p
        variants={opacity}
        animate={isInView ? "open" : "closed"}
        className={`${fonts.base} text-balance lg:text-xl`}
      >
        I thrive at the intersection of design and development, crafting
        experiences that are both visually striking and meticulously built for
        performance and usability. My passion for design, code, and interaction
        puts me in a unique position to bridge both worlds.
      </motion.p>
    </div>
  );
};

const Work = ({ fonts, setMouseHover }) => {
  return (
    <div className="mx-auto flex h-full w-full flex-col justify-center gap-y-4 sm:gap-y-8 lg:pt-24">
      <p
        className={`${fonts.accent} text-base leading-none font-bold uppercase md:text-lg lg:hidden`}
      >
        Project
      </p>
      <div className="m-auto flex h-full w-full flex-col justify-center sm:gap-y-8">
        <Projects fonts={fonts} setMouseHover={setMouseHover} />
      </div>
    </div>
  );
};

export default function Home() {
  const site = {
    title: "Home",
    author: "Anh Bernhardt",
    description: "Welcome to my portfolio",
    url: "https://anhbernhardt.com",
  };

  const [mouseHover, setMouseHover] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const navItems = [
    { id: "about", label: "About", ref: aboutRef },
    { id: "work", label: "Work", ref: workRef },
    { id: "contact", label: "Contact", ref: contactRef },
  ];

  const fonts = {
    accent: "text-hexYellow text-sm font-ivyora sm:text-base lg:text-lg",
    primaryHeading:
      "whitespace-nowrap text-hexBeige font-bold leading-tight !font-ivyora",
    secondaryHeading: "text-hexBrown font-bold leading-tight",
    base: "text-hexSage text-sm sm:text-base font-sans lg:text-lg",
    anchor: "text-hexYellow",
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      const intersectingEntries = entries.filter(
        (entry) => entry.isIntersecting,
      );

      if (intersectingEntries.length > 0) {
        const closest = intersectingEntries.reduce((prev, current) => {
          const prevDistance = Math.abs(
            prev.boundingClientRect.top +
              prev.boundingClientRect.height / 2 -
              window.innerHeight / 2,
          );
          const currentDistance = Math.abs(
            current.boundingClientRect.top +
              current.boundingClientRect.height / 2 -
              window.innerHeight / 2,
          );
          return currentDistance < prevDistance ? current : prev;
        });

        const sectionId = closest.target.getAttribute("data-section");
        setActiveSection(sectionId);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navItems.forEach((item) => {
      if (item.ref.current) {
        observer.observe(item.ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SmoothScroll>
      <Background />

      <SEO site={site} />
      <Logo />

      <MainWrapper className="mx-auto flex w-11/12 px-3 py-24 lg:w-full lg:flex-row lg:justify-between lg:px-[5em]">
        <LeftSide
          setMouseHover={setMouseHover}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onNavigate={scrollToSection}
          navItems={navItems}
          fonts={fonts}
        />

        <div className="flex h-full w-full flex-col gap-y-20 lg:ml-auto lg:w-[58%] lg:gap-y-48 lg:self-end lg:pt-36">
          <Section ref={aboutRef} id="about">
            <About fonts={fonts} setMouseHover={setMouseHover} />
          </Section>
          <Section ref={workRef} id="work">
            <Work fonts={fonts} setMouseHover={setMouseHover} />
          </Section>
          <Section ref={contactRef} id="contact">
            <Contact />
          </Section>
          <div className="flex w-fit flex-col gap-y-2 self-end">
            <div className="flex w-fit justify-center self-end">
              <div className="bg-hexNight -mr-1 aspect-square w-6 rounded-full" />
              <div className="bg-hexBlack -mr-1 aspect-square w-6 rounded-full" />
              <div className="bg-hexBrown -mr-1 aspect-square w-6 rounded-full" />
              <div className="bg-hexSage -mr-1 aspect-square w-6 rounded-full" />
              <div className="bg-hexBeige -mr-1 aspect-square w-6 rounded-full" />
              <div className="bg-hexYellow -mr-1 aspect-square w-6 rounded-full" />
              <div className="bg-hexOrange aspect-square w-6 rounded-full" />
              {/* <div className="bg-hexBlue aspect-square w-6 rounded-full" /> */}
            </div>
            <span className="text-right text-[10px] font-bold">
              Projects copy credit -{" "}
              <a
                href="https://bradtramel.com/"
                target="_blank"
                rel="nopreferrer noreopened"
                className="text-hexYellow/60 hover:text-hexYellow"
              >
                Brad Tramel
              </a>
            </span>
          </div>
        </div>
      </MainWrapper>
      <GradientCursor isActive={mouseHover} />
    </SmoothScroll>
  );
}
