import { Canvas } from "@react-three/fiber";
import { useState, useRef, useEffect, useCallback } from "react";
import { useScroll, useSpring } from "framer-motion";
import React from "react";
import GalleryCard from "./GalleryCard";
import { getListCards, prepareCameraConfig } from "./helpers";

const GalleryWidget = (props: any) => {
  const ref = useRef(null);

  const [cameraConfig, setSetCameraConfig] = useState(prepareCameraConfig(null));

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scrollInSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });

  const updateCamera = useCallback((scrollY: number) => {
    setSetCameraConfig(prepareCameraConfig(scrollY));
  }, []);

  useEffect(() => {
    const unsubscribeScrollInSpring = scrollInSpring.onChange(updateCamera);
    return () => unsubscribeScrollInSpring();
  }, []);

  return (
    <>
      <section className="gallery-section fader fader-40 fader-top fader-bottom" ref={ref}>
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
    </>
  );
};

export default GalleryWidget;
