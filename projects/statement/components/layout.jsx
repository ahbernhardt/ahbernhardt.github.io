import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useOnInView } from "/utils/useOnInView";
// animation variants
import { afterLoading } from "../constants/animationVariants";

import Navigation from "./nav";
import Footer from "./footer";
import OG from "/public/projects/statement/images/TW22-Statement-Edition-OG.png";

const Layout = ({ children }) => {
  const { ref: pageRef, controls: pageControls } = useOnInView();

  return (
    <motion.div
      ref={pageRef}
      className="w-full bg-black z-1"
      initial="hidden"
      variants={afterLoading}
      animate={pageControls}
    >
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
