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

interface ParallaxProps {
    children: string,
    baseVelocity: number,
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 100,
        stiffness: 200
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div className="rt-line">
            <motion.div className="rt-line-content" style={{ x }}>
                <span className="rt-line-text h1">{children} </span>
                <span className="rt-line-text h1">{children} </span>
                <span className="rt-line-text h1">{children} </span>
                <span className="rt-line-text h1">{children} </span>
            </motion.div>
        </div>
    );
}




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

    const scale = useTransform(linesVelocity, [0, 100], [1, 300]);
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