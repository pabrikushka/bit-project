import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { useState, useRef } from "react";
import { useSpring, config, animated, a } from "@react-spring/three";
import { motion, useScroll, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import React from "react";
import GalleryCard from "./GalleryCard";
import { getListCards, prepareCameraConfig } from "./helpers";


const GalleryWidget = (props: any) => {
  const ref = useRef(null);

  const [cameraConfig, setSetCameraConfig] = useState(prepareCameraConfig(null));

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center start"],
  });
  // const cameraX = useTransform(scrollYProgress, [0, 100], [0, 0.05]);
  scrollYProgress.onChange((e) =>   setSetCameraConfig(prepareCameraConfig(e)))

  return (
    <section className="gallery-section mb-5 pb-5" ref={ref}>
      <Canvas className="canvas">
        <ambientLight />
        <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
        {/* <OrbitControls /> */}
        <perspectiveCamera {...cameraConfig}>
          <group>
            {getListCards().map((card: any, index: number) => (
              <GalleryCard cardData={card} key={`Card${index}`} />
            ))}
          </group>
        </perspectiveCamera>
      </Canvas>
    </section>
  );
};

export default GalleryWidget;
