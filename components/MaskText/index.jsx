import { useInView } from 'react-intersection-observer';
import {useRef} from "react"
import {motion} from "framer-motion"
const MaskText = ({words, ...props}) => {
  const body = useRef(null);
  const isInView = useInView(body, {once: false})
  
  const animation = {
    initial: {y: "100%", opacity: 0},
    enter: i => ({
        y: "0", 
        transition: {
            duration: 0.5, 
            ease: [0.33, 1, 0.68, 1],  
            delay: 0.25 * i,
        },
        opacity: 1,
    })
  }

  return(
    <div ref={body} className="flex" {...props} >
        {words.split("").map((letter, index) => (
            <motion.span 
                key={index}
                custom={index} variants={animation} 
                initial="initial" 
                animate={isInView ? "enter" : ""}
            >
                {letter}
            </motion.span>
        ))}
    </div>
  
    )
  
}
  
  
export default MaskText;