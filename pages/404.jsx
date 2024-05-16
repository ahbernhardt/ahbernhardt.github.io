import { useRef, useEffect } from "react";
import Footer from "/components/Footer";
import { Section } from "/components/Section";
import { Background } from "@tsparticles/engine";

export default function Home() {
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress) => {
    const width = window.innerWidth * 0.7;
    path.current.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`,
    );
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <main className="flex h-auto w-full flex-col justify-center text-center"
    >
      {/* <div className="relative h-[100vh]" style={{ background: "var(--bg)", color: "var(--color)" }}> */}
        <div className="err404">404</div>
        <div class="cloak_wrapper">
          <div class="cloak_container">
            <div class="cloak"></div>
          </div>
        </div>
      {/* </div> */}
      
      <div className="mx-auto my-auto flex w-full flex-col gap-12 mb-6 sm:mb-12">
        <p> Uh oh! Looks like you got lost!</p>
        <div className="line">
          <div
            className="box"
            onMouseEnter={() => {
              manageMouseEnter();
            }}
            onMouseMove={(e) => {
              manageMouseMove(e);
            }}
            onMouseLeave={() => {
              manageMouseLeave();
            }}
          />
          <svg>
            <path ref={path} />
          </svg>
        </div>

        <a
          href="/"
          className="z-1 mx-auto w-fit rounded-full border-[1px] border-white px-16  py-2 hover:bg-white hover:text-offBlack"
        >
          back home
        </a>
      </div>
      <Section>
        <Footer />
      </Section>
    </main>
  );
}
