import React, { useRef } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';

export default function index({data, setSelectedProject}) {
  return (
    <div className="w-full h-full px-auto border-t-[1px] border-[#2d2d2d]">
        {
            data.map( (project, i) => {
                return <Title key={i} data={{...project, i}} setSelectedProject={setSelectedProject}/>
            })
        }
    </div>
  )
}

function Title({data, setSelectedProject}) {

    const { title, speed, i } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${25 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;
    
    return (
        <div ref={container} className="relative z-1 border-b-[1px] border-[#2d2d2d]">
            <div 
                className="inline-block pl-[12px] sm:pl-[24px]"
                onMouseOver={() => {setSelectedProject(i)}}
                onMouseLeave={() => {setSelectedProject(null)}}
            >
                <motion.p style={{clipPath: clip}} className="w-full inline-block relative m-0 text-[8vw] font-bold uppercase leading-[7.5vw] z-2" >
                    {title}
                </motion.p>
                <p className='block absolute top-0 text-[#1c1c1c] text-[8vw] font-bold uppercase leading-[7.5vw]'>
                    {title}
                </p>
            </div>
        </div>
    )
}