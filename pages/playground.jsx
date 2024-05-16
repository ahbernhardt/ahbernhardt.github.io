import React from "react"
// import { Boxes } from "/components/ui/background-boxes"
// import { cn } from "@/lib/utils";
import {useScroll, useTransform } from "framer-motion";
import {GoogleGeminiEffect} from "/components/playgrounds/gemini-effect"
// import CapsuleBox from '/components/capsuleBox/CapsuleBox';
// const images = [
//     "https://duruthemes.com/demo/html/fd/images/slider/01.jpg",
//     "https://duruthemes.com/demo/html/fd/images/slider/02.jpg",
//     "https://duruthemes.com/demo/html/fd/images/slider/03.jpg",
// ];

export default function Playground(){
//     return(
//         <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
//             <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
//             <Boxes />
//             <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
//                 Tailwind is Awesome
//             </h1>
//             <p className="text-center mt-2 text-neutral-300 relative z-20">
//                 Framer motion is the best animation library ngl
//             </p>
//         </div>
//     )
// }

const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
 
  return (
    <div
      className="h-[400vh] bg-black w-full rounded-md relative pt-20 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
      {/* <div className="absolute bottom-8 mx-auto w-full max-w-[1422px]">
          <GravityContact />
        </div> */}
    </div>
  );
}