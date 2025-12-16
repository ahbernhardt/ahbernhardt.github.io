"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// const colors = ["#AEAB91", "#FD7801", "#FEB347",   "#263958"];
const colors = ["#aeab91", "#feb347", "#25221f", "#fd7801"];
export default function GradientCursor({ isActive }) {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const circles = useRef([]);
  const size = isActive ? 280 : 20;
  const delay = isActive ? 0.008 : 0.002;

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.15),
      y: lerp(y, mouse.current.y, 0.15),
    };

    moveCircles(delayedMouse.current.x, delayedMouse.current.y);

    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircles = (x, y) => {
    if (circles.current.length < 1) return;
    circles.current.forEach((circle, i) => {
      gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 });
    });
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.cancelAnimationFrame(rafId.current);
    };
  }, [isActive]);

  return (
    <div className="relative h-fit">
      {[...Array(4)].map((_, i) => {
        return (
          <div
            style={{
              backgroundColor: colors[i],
              width: size,
              height: size,
              filter: `blur(${isActive ? 20 : 2}px)`,
              transition: `transform ${(4 - i) * delay}s linear, height 0.4s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
            }}
            className="fixed top-0 left-0 rounded-full mix-blend-difference"
            key={i}
            ref={(ref) => (circles.current[i] = ref)}
          />
        );
      })}
    </div>
  );
}
