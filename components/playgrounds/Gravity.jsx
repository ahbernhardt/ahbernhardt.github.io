import { animate, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
export default function Gravity() {
  return (
    <div classNameName="h-full w-full">
      <motion.div
      style={{
        width: 50,
        height: 50,
        background: "white",
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      // spring transition
      animate={{
        // y: [0,360],
        // transition: {
        //   duration: 2,
        //   type: "spring",
        //   bounce: 0.2,
        // },
        y: [0, -70],
        x: [0, 0],
        transition: {
          duration: 0.4,
          ease: ["easeOut"],
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
    /> 
    </div>
  );
}

//{/* <motion.div
//       initial={"hidden"}
//       variants={ballVariants}
//       animate={moveX ? "jumpSide" : "jump"}
//       whileInView={"show"}
//       style={{
//         position: "absolute",
//         background: "#bf4d00",
//         height: "30px",
//         width: "30px",
//         borderRadius: "50%",
//         originX: 0.5,
//         originY: 0.5,
//       }}
//     /> */}
// <motion.div
//       style={{
//         width: 50,
//         height: 50,
//         background: "white",
//         borderRadius: 50,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//       // spring transition
//       animate={{
//         y: 360,
//         transition: {
//           duration: 2,
//           type: "spring",
//           bounce: 0.2,
//         },
//       }}
//     >
//       Spring
//     </motion.div> */}