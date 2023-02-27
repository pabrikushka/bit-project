import { useState, useCallback } from "react";
import { useSpring, config, animated } from "@react-spring/three";
import React from "react";
import { CardData } from "./types";
import { hoverCard } from "./helpers";
import { useNavigate  } from "react-router-dom";
import honeybadger from '../../assets/images/honeybadger.jpg';
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";


interface GalleryCardtProps {
  cardData: CardData
}

const GalleryCard = (props: GalleryCardtProps) => {
  const {
    cardData
  } = props;

  // TODO discuss how better to work with pictures
  const texture = useLoader(TextureLoader, honeybadger)

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
    // TODO make it not hard coded
    navigate("/art/6dl0Hjk34l6rcWjSYCw9n6")
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
      <animated.meshBasicMaterial transparent opacity={opacity} attach="material"  map={texture}/>
    </animated.mesh>
    </>
  );
};

export default GalleryCard;

