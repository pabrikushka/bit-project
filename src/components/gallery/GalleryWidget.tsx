import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValue, useVelocity, useAnimationFrame, useSpring } from "framer-motion";
import React from "react";
import GalleryCard from "./GalleryCard";
import { getListCards, prepareCameraConfig } from "./helpers";
import { useThrottle } from "react-use";


const GalleryWidget = (props: any) => {
  const ref = useRef(null);

  const [cameraConfig, setSetCameraConfig] = useState(prepareCameraConfig(null));

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center start"],
  });

  const scrollInSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const updateCamera = useCallback((e: number) => {
    setSetCameraConfig(prepareCameraConfig(e))
  }, []);


  useEffect(() => {
    const unsubscribeScrollInSpring = scrollInSpring.onChange(updateCamera)
    return () =>  unsubscribeScrollInSpring()
  }, []);

  return (
    <section className="gallery-section mb-5 pb-5" ref={ref}>
      <Canvas className="canvas">
        <ambientLight />
        <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
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
