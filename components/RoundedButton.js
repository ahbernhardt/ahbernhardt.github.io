"use client"
import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from '@/utils/magnetic';

export default function RoundedButton({children, backgroundColor="#455CE9", ...attributes}) {
  
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect( () => {
    timeline.current = gsap.timeline({paused: true})
    timeline.current
    .to(circle.current, {top: "0%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
    .to(circle.current, {top: "-200%", width: "125%", duration: 0.26}, "exit")
  }, [])
  
  const manageMouseEnter = () => {
    if(timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }
  
  const manageMouseLeave = () => {
    timeoutId = setTimeout( () => {
      timeline.current.play();
    }, 300)
  }
  
  return (
      <Magnetic>
        <div className="rounded-full border-[1px] cursor-pointer relative flex items-center justify-center px-16 py-3"
             style={{overflow: "hidden"}}
             onMouseEnter={() => {manageMouseEnter()}}
             onMouseLeave={() => {manageMouseLeave()}} {...attributes}
        >
          {
            children
          }
          <div ref={circle} style={{backgroundColor}} className="w-full h-full absolute rounded-2xl top-[100%]"></div>
        </div>
      </Magnetic>
  )
}