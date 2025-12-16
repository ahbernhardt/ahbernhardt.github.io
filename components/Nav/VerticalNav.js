import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
const VerticalNav = ({
  navItems,
  setActiveSection,
  activeSection,
  onNavigate,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const viewportCenter = window.innerHeight / 2;

      let closestSection = navItems[0].id;
      let closestDistance = Infinity;

      navItems.forEach((item) => {
        if (item.ref.current) {
          const rect = item.ref.current.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = item.id;
          }
        }
      });

      setActiveSection(closestSection);
    };

    // Throttle for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    // handleScroll(); // Initial check
    // Delay initial check to ensure refs are mounted
    setTimeout(() => handleScroll(), 100);

    return () => window.removeEventListener("scroll", throttledScroll);
  }, [navItems, setActiveSection]);

  const isActiveSectionAtTop = useMemo(() => {
    if (!activeSection) return false;

    const activeItem = navItems.find((item) => item.id === activeSection);
    if (!activeItem?.ref?.current || !navRef.current) return false;

    const rect = activeItem.ref.current.getBoundingClientRect();
    const navTop = navRef.current.getBoundingClientRect();

    return rect.top < navTop.top;
  }, [activeSection, navItems, scrollY]);

  return (
    <nav ref={navRef} className="z-50 hidden -translate-y-1/3 lg:flex">
      <ul className="flex flex-col gap-6">
        {navItems.map((item) => (
          <li key={item.id} className="relative">
            <button
              onClick={() => onNavigate(item.ref)}
              className="group flex items-center"
            >
              <motion.div
                className={`${activeSection === item.id ? "bg-hexBeige w-20" : "bg-hexBrown w-8 transition-all duration-300 ease-in-out group-hover:w-20"} h-0.5`}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />

              {/* Label */}
              <motion.div
                className={`ml-4 text-base font-medium whitespace-nowrap ${
                  activeSection === item.id ? "text-hexBeige" : "text-hexBrown"
                }`}
                animate={{
                  x:
                    activeSection === item.id && isActiveSectionAtTop ? 0 : -10,
                }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.label}
              </motion.div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default VerticalNav;
