import React from "react"
import { motion } from "framer-motion";


const AudioOnIcon = () => {
    return (
        <svg className="icon audio-on" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 30 30" enableBackground="new 0 0 30 30" >
            <g>
                <motion.path
                    initial={{
                        opacity: 1
                    }}
                    animate={{
                        opacity: 0
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1,
                        delay: 0
                    }}
                    fill="#FFFFFF" d="M22,19.9l-1.1-1.1c0.9-0.9,1.4-2.1,1.4-3.4c0-1.3-0.5-2.5-1.4-3.4l1.1-1.1c1.2,1.2,1.9,2.8,1.9,4.5
		S23.2,18.7,22,19.9z"/>
            </g>
            <g>
                <motion.path
                    initial={{
                        opacity: 1
                    }}
                    animate={{
                        opacity: 0
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1,
                        delay: .2
                    }}
                    fill="#FFFFFF" d="M24.9,22.8l-1.1-1.1c1.7-1.7,2.7-4,2.7-6.4s-0.9-4.7-2.7-6.4l1.1-1.1c2,2,3.1,4.6,3.1,7.5
		C28,18.2,26.9,20.8,24.9,22.8z"/>
            </g>
            <path fill="#FFFFFF" d="M19.4,5.3c-0.2-0.1-0.5-0.1-0.8,0l-8.8,5.9H5c-0.4,0-0.8,0.3-0.8,0.8v6c0,0.4,0.3,0.8,0.8,0.8h4.8l8.8,5.9
	c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.2,0,0.4-0.1c0.2-0.1,0.4-0.4,0.4-0.7V6C19.8,5.7,19.6,5.5,19.4,5.3z M5.8,12.8h3.5v4.5H5.8V12.8z
	 M18.2,22.6l-7.5-5v-5.2l7.5-5V22.6z"/>
        </svg>

    )

}



export default AudioOnIcon;