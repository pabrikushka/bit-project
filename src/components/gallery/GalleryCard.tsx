import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { useState, useRef, useCallback } from "react";
import { useSpring, config, animated, a } from "@react-spring/three";
import { motion, useScroll, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import React from "react";

const GalleryCard = (props: any) => {
  // const {

  // } = props;
  const [hovered, setHovered] = useState(false);

  const { position, rotation, opacity } = useSpring({
    position: hovered ? [props.position[0], props.position[1] + 0.1, props.position[2] + 0.2] : props.position,
    rotation: props.hovered ? [-0.1, 0, 0] : props.rotation,
    opacity: props.hovered ? 1 : 0.5,
    config: config.wobbly,
  });

  const onClick = (e: any) => {
    alert("onClick");
  };
  const onHover = useCallback((e: any, value: boolean) => {
    setHovered(value);
  }, []);

  return (
    <>
    {/* @ts-ignore: https://github.com/pmndrs/react-spring/issues/1515 */}
    <animated.mesh position={position} castShadow onClick={onClick} onPointerOver={(e) => onHover(e, true)} onPointerOut={(e) => onHover(e, false)}>
      <planeGeometry args={[2, 1]} />
      {/* @ts-ignore: https://github.com/pmndrs/react-spring/issues/1515 */}
      <animated.meshStandardMaterial color="blue" transparent opacity={opacity} attach="material" />
    </animated.mesh>
    </>
  );
};

export default GalleryCard;
