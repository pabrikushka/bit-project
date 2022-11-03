import * as React from 'react';
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
// import useMouse from "@react-hook/mouse-position";
import hero from '../images/hero.jpg';


// function useParallax(value: MotionValue<number>, distance: number) {
//     return useTransform(value, [0, 1], [-distance, distance]);
// }

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end center", "center start"]
    });
    const scrollVelocity = useSpring(scrollYProgress, {
        damping: 120,
        stiffness: 400
    });
    const y = useTransform(scrollVelocity, [0, 1], [0, -300]);


    const [mousePos, setMousePos] = useState({});
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX / window.innerWidth * 100, y: event.clientY / window.innerHeight * 100 });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    



    return (
        <header className='hero-header' ref={ref}>
            <div className='info'>
                ({mousePos.x}, {mousePos.y})
            </div>
            <motion.div
                style={{
                    y: y,
                }}
            >
                <motion.img
                    src={hero}
                    alt="Hero"
                    className="hero-img"
                    style={{
                        translateX: mousePos.x,
                    }}
                />
            </motion.div>

        </header>
    )
}

export default Hero;