import { useState, useCallback } from "react";
import { useSpring, config, animated } from "@react-spring/three";
import React from "react";
import { CardData } from "./types";
import { hoverCard } from "./helpers";
import { useNavigate  } from "react-router-dom";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import useImperativeQuery from "../../services/graphql/useImperativeQuery";
import { GET_ART } from "../../services/graphql/artQuery";
import { artItemToIArtPiece } from "../art/helpers";


interface GalleryCardtProps {
  cardData: CardData;
artId: string;
  artImage: string;
  setAnimationImage: any;
}

const GalleryCard = (props: GalleryCardtProps) => {
  const {
    cardData,
    setAnimationImage,
    artId
  } = props;

  // TODO discuss how better to work with pictures
  const texture = useLoader(TextureLoader, props.artImage)

  const [hovered, setHovered] = useState(false);

  const navigate  = useNavigate();

  const callQuery = useImperativeQuery(GET_ART, {
    variables: {
      id: artId,
    },
    errorPolicy: "all"
  });

  const currentCard = hovered? hoverCard(cardData): cardData;

  const { position, rotation, opacity } = useSpring({
    position: currentCard.position,
    rotation: currentCard.rotation,
    opacity: hovered ? 1 : 0.5,
    config: config.wobbly,
  });

const onClick = async (e: any) => {
    const artQuery = await callQuery();
    const initialArt = artItemToIArtPiece(artQuery.data.arts);

    // cache image for next page
    if(initialArt.mainImage){
      const img = new Image();
      img.src = initialArt.mainImage.url;
      setAnimationImage(initialArt.mainImage.url);
      await img.decode();
    }
    navigate(`/art/${artId}`, { state: initialArt });
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

