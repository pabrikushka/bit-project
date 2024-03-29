import React from "react";
import { Canvas } from "@react-three/fiber";
import { useState, useRef, useEffect, useCallback } from "react";
import { useScroll, useSpring } from "framer-motion";
import GalleryCard from "./GalleryCard";
import { useQuery } from "@apollo/client";
import { getListCards, prepareCameraConfig } from "./helpers";
import { GET_WHOLE_HISTORY } from "../../services/graphql/historyQuery";

interface GalleryWidgetProps {
  setAnimationImage: any;
}

const GalleryWidget = (props: GalleryWidgetProps) => {
  const ref = useRef(null);
  const { setAnimationImage } = props;

const [cameraConfig, setSetCameraConfig] = useState(prepareCameraConfig(null));

  const { data: queryData } = useQuery(GET_WHOLE_HISTORY, {
    errorPolicy: "all",
  });
  const artItems = queryData?.artsCollection?.items || [];

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

  const linkPositionToArt = () => {
    if (artItems.length === 0) {
      return [];
    }

    const cardList = getListCards().map((item, index) => {
      const image = artItems[index % artItems.length].mainImage.url;
      const artId = artItems[index % artItems.length].sys.id;

      const cardItem = {
        ...item,
        image,
        artId,
      };

      return cardItem;
    });

    return cardList;
  };

  return (
    <>
<section
        className="gallery-section fader fader-40 fader-top fader-bottom"
        ref={ref}
      >
        <Canvas className="canvas">
          <ambientLight />
          <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
          <perspectiveCamera {...cameraConfig}>
            <group>
              {linkPositionToArt().map((card: any, index: number) => (
                <GalleryCard
                  cardData={card}
                  key={`Card${index}`}
                  artId={card.artId}
                  artImage={card.image}
                  setAnimationImage={setAnimationImage}
                />
              ))}
            </group>
          </perspectiveCamera>
        </Canvas>
      </section>
    </>
  );
};

export default GalleryWidget;
