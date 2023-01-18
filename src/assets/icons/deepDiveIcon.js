import React from "react"
import { motion } from "framer-motion";


const DeepDiveIcon = () => {

    return (
        <svg className="icon deep-dive" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 29 29" enableBackground="new 0 0 29 29" >
            <path id="frame" fill="currentColor" d="M9.9,24.5H2.8c-1.2,0-2.2-1-2.2-2.2V2.8c0-1.2,1-2.2,2.2-2.2h19.5c1.2,0,2.2,1,2.2,2.2v7.4
	c0,0.4-0.3,0.8-0.8,0.8S23,10.6,23,10.2V2.8C23,2.3,22.7,2,22.2,2H2.8C2.3,2,2,2.3,2,2.8v19.5C2,22.7,2.3,23,2.8,23h7.1
	c0.4,0,0.8,0.3,0.8,0.8S10.3,24.5,9.9,24.5z"/>
            <g id="lines">
                <motion.path fill="currentColor" d="M19.2,8h-12C6.8,8,6.5,7.7,6.5,7.2s0.3-0.8,0.8-0.8h12c0.4,0,0.8,0.3,0.8,0.8S19.7,8,19.2,8z"
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
                />
                <motion.path fill="currentColor" d="M12.5,12.5H7.2c-0.4,0-0.8-0.3-0.8-0.8S6.8,11,7.2,11h5.2c0.4,0,0.8,0.3,0.8,0.8S12.9,12.5,12.5,12.5z"
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
                />
            </g>
            <path id="circle" fill="currentColor" d="M20.2,28.5c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S24.8,28.5,20.2,28.5z
	 M20.2,13.5c-3.7,0-6.8,3-6.8,6.8s3,6.8,6.8,6.8s6.8-3,6.8-6.8S24,13.5,20.2,13.5z"/>
            <motion.path id="plus" fill="currentColor" d="M24,19.5h-3v-3c0-0.4-0.3-0.8-0.8-0.8s-0.8,0.3-0.8,0.8v3h-3c-0.4,0-0.8,0.3-0.8,0.8
	s0.3,0.8,0.8,0.8h3v3c0,0.4,0.3,0.8,0.8,0.8S21,24.4,21,24v-3h3c0.4,0,0.8-0.3,0.8-0.8S24.4,19.5,24,19.5z"
                initial={{
                    rotate: 0,
                    opacity: 1,
                }}
                animate={{
                    rotate: 180,
                    opacity: 1,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay: .5
                }}
            />
        </svg>
    )

}



export default DeepDiveIcon;