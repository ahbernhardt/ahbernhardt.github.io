import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useOnInView } from "/utils/useOnInView";
// animation variants
import { afterLoading } from "../constants/animationVariants";

import Loading from "./loading";
import Navigation from "./nav";
import Footer from "./footer";
import OG from "/public/projects/statement/images/TW22-Statement-Edition-OG.png";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { ref: pageRef, controls: pageControls } = useOnInView();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <motion.div
      ref={pageRef}
      className="w-full"
      initial="hidden"
      variants={afterLoading}
      animate={pageControls}
    >
      {/*<Seo />*/}
      <Seo image={OG} />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </motion.div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
