import React, { useRef } from "react";
import { useInView } from "framer-motion";

export function Section({ children, ...props }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
  
    return (
      <section ref={ref} {...props}>
        <span
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="z-1 m-auto"
        >
          {children}
        </span>
      </section>
    );
  }