import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { useState, useRef } from "react";
import { useSpring, config, animated, a } from "@react-spring/three";
import ListCards from "./data/listCards.json";
import { motion, useScroll, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import React from "react";
import GalleryCard from "./GalleryCard";

const getListCards = () => {

    return [...ListCards]
};

const GalleryWidget = (props: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center start"],
  });
  const cameraX = useTransform(scrollYProgress, [0, 100], [0, 0.05]);
  const cameraConfig: any = {
    position: [0, 1, 0],
    rotation: [0.2, 0, 0],
  };

 console.log(getListCards());

  return (
    <section className="gallery-section mb-5 pb-5" ref={ref}>
      <Canvas className="canvas">
        <ambientLight />
        <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
        {/* <OrbitControls /> */}
        <perspectiveCamera {...cameraConfig}>
          <group>
            {getListCards().map((card: any, index: number) => (
              <GalleryCard {...card} key={`Card${index}`} />
            ))}
          </group>
        </perspectiveCamera>
      </Canvas>
    </section>
  );
};

export default GalleryWidget;
