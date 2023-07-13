import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import GalleryCard from './GalleryCard';
import { useQuery } from '@apollo/client';
import { getListCards, prepareCameraConfig } from './helpers';
import { GET_WHOLE_HISTORY } from '../../services/graphql/historyQuery';
import TransitAnimator from '../../shared/TransitAnimator';

const GalleryWidget = (props: any) => {
  const ref = useRef(null);

  const [cameraConfig, setSetCameraConfig] = useState(prepareCameraConfig(null));
  const [animationImage, setAnimationImage] = useState<string | null>(null);

  const { data: queryData } = useQuery(GET_WHOLE_HISTORY, {
    errorPolicy: 'all',
  });
  const artItems = queryData?.artsCollection?.items || [];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
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
      <motion.main
        className=""
        // initial={{
        //   opacity: 0,
        //   y: "4rem",
        // }}
        // animate={{
        //   y: "0rem",
        //   scale: 1,
        //   opacity: 1,
        // }}
        exit={{
          y: "-4rem",
          scale: 0.8,
          opacity: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          scale: {
            duration: 1,
          },
        }}>
        <section className='gallery-section fader fader-40 fader-top fader-bottom' ref={ref}>
          <Canvas className='canvas'>
            <ambientLight />
            <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
            <perspectiveCamera {...cameraConfig}>
              <group>
                {linkPositionToArt().map((card: any, index: number) => (
                  <GalleryCard
                    cardData={card}
                    key={`Card${index}`}
                    id={card.artId}
                    img={card.image}
                    setAnimationImage={setAnimationImage}
                  />
                ))}
              </group>
            </perspectiveCamera>
          </Canvas>
        </section>
      <TransitAnimator image={animationImage} />
      </motion.main>
    </>
  );
};

export default GalleryWidget;
