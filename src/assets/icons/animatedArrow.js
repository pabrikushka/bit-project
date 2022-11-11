import React from "react"
import { motion } from "framer-motion";


const AnimatedArrow = () => {

    return (
        <svg className="cta-arrow icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 48 25" enable-background="new 0 0 48 25">
            <motion.path
                fill="currentColor"
                d="M32,11.9L20.3,0.2l-0.9,0.9l10.6,10.6H0.3V13h29.6L19.3,23.6l0.9,0.9L32,12.8c0.1-0.1,0.2-0.3,0.2-0.5S32.1,12,32,11.9z"
                initial={{
                    opacity: 1
                }}
                animate={{
                    opacity: .8
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                    delay: .2
                }}
            />
            <motion.path
                fill="currentColor"
                d="M28.1,24.5l-0.9-0.9l11.2-11.2L27.1,1.1l0.9-0.9l11.7,11.7c0.1,0.1,0.2,0.3,0.2,0.5	s-0.1,0.3-0.2,0.5L28.1,24.5z"
                initial={{
                    opacity: .5
                }}
                animate={{
                    opacity: .25
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                    delay: .4
                }}
            />
            <motion.path
                fill="currentColor"
                d="M35.9,24.5L35,23.6l11.2-11.2L35,1.1l0.9-0.9l11.7,11.7c0.1,0.1,0.2,0.3,0.2,0.5 s-0.1,0.3-0.2,0.5L35.9,24.5z"
                initial={{
                    opacity: .25
                }}
                animate={{
                    opacity: .1
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                    delay: .6
                }}
            />
        </svg>
    )

}



export default AnimatedArrow;