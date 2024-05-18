import styles from './about.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
// import Rounded from '../../common/RoundedButton';

export default function index() {
    const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
    const description = useRef(null);
    const isInView = useInView(description)

    const slideUp = {
        initial: {
            y: "100%"
        },
        open: (i) => ({
            y: "0%",
            transition: {duration: 0.5, delay: 0.01 * i}
        }),
        closed: {
            y: "100%",
            transition: {duration: 0.5}
        }
    }
    
    const opacity = {
        initial: {
            opacity: 0
        },
        open: {
            opacity: 1,
            transition: {duration: 0.5}
        },
        closed: {
            opacity: 0,
            transition: {duration: 0.5}
        }
    }
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p>
                {/* <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div> */}
            </div>
        </div>
    )
}