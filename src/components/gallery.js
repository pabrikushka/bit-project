import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { useState, useRef } from "react";
import { useSpring, config, animated } from "@react-spring/three";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";

const Card = (props) => {
    const { position, rotation, opacity } = useSpring({
        position:
            props.item === 1
                ? props.hovered
                    ? [-1.2, 0, 3]
                    : props.position
                : props.item === 2
                    ? props.hovered
                        ? [0, 0, 3]
                        : props.position
                    : props.hovered
                        ? [1.2, 0, 3]
                        : props.position,
        rotation: props.hovered ? [-0.1, 0, 0] : props.rotation,
        opacity: props.hovered ? 1 : 0.5,
        config: config.wobbly
    });

    return (
        <animated.mesh position={position} castShadow>
            <planeGeometry args={[2, 1]} doubleSide={true} />
            <animated.meshStandardMaterial
                color="blue"
                transparent
                opacity={opacity}
                attach="material"
            />
        </animated.mesh>
    );
};



export default function Gallery() {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "center start"]
    });
    const cameraX = useTransform(scrollYProgress, [0, 100], [0, 0.05]);
    const cameraConfig = {
        position: [0, 1, 0],
        rotation: [0.2, 0, 0]
    }

    return (
        <section className="gallery-section mb-5 pb-5" ref={ref}>
            <Canvas className="canvas">
                <ambientLight />
                <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
                {/* <OrbitControls /> */}
                <perspectiveCamera {...cameraConfig}>
                    <group>
                        <Card
                            position={[-10, 0, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-7.5, 0, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-5, 0, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-2.5, 0, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[0, 0, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[2.5, 0, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[5, 0, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[7.5, 0, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[10, 0, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />


                        <Card
                            position={[-10, -1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-7.5, -1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-5, -1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-2.5, -1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[0, -1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[2.5, -1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[5, -1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[7.5, -1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[10, -1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />


                        <Card
                            position={[-10, -3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-7.5, -3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-5, -3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-2.5, -3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[0, -3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[2.5, -3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[5, -3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[7.5, -3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[10, -3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />



                        <Card
                            position={[-10, -4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-7.5, -4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-5, -4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-2.5, -4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[0, -4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[2.5, -4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[5, -4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[7.5, -4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[10, -4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />


















                        <Card
                            position={[-10, 1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-7.5, 1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-5, 1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-2.5, 1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[0, 1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[2.5, 1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[5, 1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[7.5, 1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[10, 1.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />


                        <Card
                            position={[-10, 3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-7.5, 3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-5, 3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-2.5, 3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[0, 3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[2.5, 3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[5, 3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[7.5, 3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[10, 3, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />



                        <Card
                            position={[-10, 4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-7.5, 4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-5, 4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[-2.5, 4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[0, 4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[2.5, 4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[5, 4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[7.5, 4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                        <Card
                            position={[10, 4.5, 3]}
                            rotation={[0, 0, 0]}
                            item={1}
                            hovered={hovered}
                        />
                    </group>

                </perspectiveCamera>
            </Canvas>
        </section>
    );
}
