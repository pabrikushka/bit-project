import { useState, useCallback } from "react";
import { useSpring, config, animated } from "@react-spring/three";
import React from "react";
import { CardData } from "./types";
import { hoverCard } from "./helpers";
import { useNavigate  } from "react-router-dom";


interface GalleryCardtProps {
  cardData: CardData
}

const GalleryCard = (props: GalleryCardtProps) => {
  const {
    cardData
  } = props;

  const [hovered, setHovered] = useState(false);

  const navigate  = useNavigate();

  const currentCard = hovered? hoverCard(cardData): cardData;

  const { position, rotation, opacity } = useSpring({
    position: currentCard.position,
    rotation: currentCard.rotation,
    opacity: hovered ? 1 : 0.5,
    config: config.wobbly,
  });

  const onClick = (e: any) => {
    navigate("/art")
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

