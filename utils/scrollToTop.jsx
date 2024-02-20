import { useEffect } from "react";

const scrollToTop = ({ location }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return null;
};

export default scrollToTop;