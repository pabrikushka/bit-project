import * as React from 'react';

import { useRef, useEffect, useState } from "react";
import Mona from "../../assets/videos/mona.mp4"
import ParallaxText from "../../components/parallaxText"
import { motion, useScroll, useSpring, useTransform, useMotionValue, MotionValue } from "framer-motion";

const EventHero = () => {

    const x = useMotionValue(50)
    const y = useMotionValue(50)

    const mouseSpring = {
        damping: 120,
        stiffness: 400
    }

    const xVelocity = useSpring(x, mouseSpring);
    const yVelocity = useSpring(y, mouseSpring);

    const moveX = useTransform(xVelocity, [0, 100], ["5%", "-5%"])
    const moveY = useTransform(yVelocity, [0, 100], ["5%", "-5%"])

    function handleMouse(event) {
        x.set(event.clientX / window.innerWidth * 100)
        y.set(event.clientY / window.innerHeight * 100)
    }

    window.addEventListener('mousemove', handleMouse);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "center start"]
    });
    const { scrollYOpacity } = useScroll({
        target: ref,
        offset: ["start center", "start start"]
    });
    const linesVelocity = useSpring(scrollYProgress, {
        damping: 120,
        stiffness: 400
    });
    const scale = useTransform(linesVelocity, [0, 1], [1, 2.5]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <header className='hero events-header' ref={ref}>
            <div className='hero-bg-holder'>
                <motion.video
                    style={{
                        x: moveX,
                        y: moveY,
                        opacity: opacity
                    }}
                    className='hero-video' src={Mona} loop muted autoPlay="true"></motion.video>
                <div className='hero-running-text'>
                    <motion.div
                        style={{
                            scale: scale,
                        }}
                        className="rt-lines"
                    >
                        <ParallaxText baseVelocity={-1}>Events <span className="circle"></span> Tickets <span className="circle"></span> Exhibitions <span className="circle"></span></ParallaxText>
                        <ParallaxText baseVelocity={1}>By Smashtoshi <span className="circle"></span></ParallaxText>
                    </motion.div>
                </div>

            </div>
        </header>
    )
}

export default EventHero;