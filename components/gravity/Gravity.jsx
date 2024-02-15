import { animate, motion } from "framer-motion";
import { useState, useEffect } from "react";
import gsap from "gsap";

const ballVariants = {
  jump: {
    y: [0, -70],
    x: [0, 0],
    transition: {
      duration: 0.4,
      ease: ["easeOut"],

      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Dot = ({ x, y, r, g, b, imageX, imageY }) => {
  const draw = (c) => {
    c.beginPath();
    c.arc(x, y, 2, 0, 2 * Math.PI, false);
    c.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
    c.fill();
  };
};

export default function Gravity(dot) {

    
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const img = document.querySelector("img");
    function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomColor(colors) {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function distance(x1, y1, x2, y2) {
      const xDist = x2 - x1;
      const yDist = y2 - y1;

      return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    }

    const radius = 300;
    let isImage = true;

    const rand = Math.random() * Math.PI * 2;

    let x = Math.sin(rand) * radius + canvas.width / 2;
    let y = Math.cos(rand) * radius + canvas.height / 2;

    if (isImage) {
      x = dot.imageX;
      y = dot.imageY;
    }

    gsap.to(dot, {
      duration: 1.75 + Math.random(),
      x,
      y,
      ease: "cubic.inOut",
      onComplete: () => {
        animateDot(dot, canvas);
      },
    });

    addEventListener("load", (e) => {
      c.drawImage(img, 0, 0);
      const imageData = c.getImageData(
        0,
        0,
        img.naturalWidth,
        img.naturalHeight,
      ).data;

      const dots = [];
      const pixels = [];

      for (let i = 0; i < imageData.length; i += 4) {
        if (imageData[i] === 0) continue;

        const x = (i / 4) % img.naturalWidth;
        const y = Math.floor(Math.floor(i / img.naturalWidth) / 4);

        if (x % 5 === 0 && y % 5 === 0) {
          pixels.push({
            x: x,
            y: y,
            r: imageData[i],
            g: imageData[i + 1],
            b: imageData[i + 2],
          });
        }
      }

      pixels.forEach((pixel, i) => {
        const imageX = pixel.x + canvas.width / 2 - img.naturalWidth / 2;
        const imageY = pixel.y + canvas.height / 2 - img.naturalHeight / 2;

        const rand = Math.random() * Math.PI * 2;
        const x = Math.sin(rand) * radius + canvas.width / 2;
        const y = Math.cos(rand) * radius + canvas.height / 2;

        dots.push(new Dot(x, y, pixel.r, pixel.g, pixel.b, imageX, imageY));

        animateDot(dots[i], canvas);
      });

      function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);

        dots.forEach((dot) => {
          dot.draw(c);
          // dot.x++
        });
      }

      animate();
    });
    return
  });
  return (
    <div className="h-full w-full">
      <canvas className="h-full w-full" />
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
