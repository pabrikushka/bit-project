import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import ParallaxText from "../components/parallaxText"
import React from "react";


export default function RunningText() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "center start"]
    });
    const linesVelocity = useSpring(scrollYProgress, {
        damping: 120,
        stiffness: 400
    });

    const blobVelocity = useSpring(scrollYProgress, {
        damping: 140,
        stiffness: 400
    });

    const scale = useTransform(linesVelocity, [0, 1], [1, 3.5]);
    const blobScale = useTransform(linesVelocity, [0, 100], [1, 100]);
    const blobX = useTransform(blobVelocity, [0, 100], [0, -200]);
    
    const blobStyles = { 
        transform: `translateX(${blobX}rem)` 
    };

    return (
        <section className="rt-section" ref={ref}>
            <div className="rt-section-bg position-absolute w-100 h-100 top-0">
                <motion.div
                    className="rt-blob position-absolute"
                    style={{
                        scale: blobScale,
                    }}
                >
                    <motion.div className="blob w-100 h-100"></motion.div>
                </motion.div>
            </div>
            <motion.div
                className="rt-lines"
                style={{
                    scale: scale,
                }}
            >
                <ParallaxText baseVelocity={-1}>Explore <span className="circle"></span> Learn <span className="circle"></span> Create <span className="circle"></span></ParallaxText>
                <ParallaxText baseVelocity={1}>Customise <span className="circle"></span> Own <span className="circle"></span> Bitcoin <span className="circle"></span></ParallaxText>
            </motion.div>
        </section>
    );
}