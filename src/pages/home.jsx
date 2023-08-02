import * as React from 'react';
import Hero from '../components/hero';
import RunningText from '../components/runningText.jsx';
import Book from '../components/book.tsx';
import Overview from '../components/overview.tsx';
import GalleryWidget from '../components/gallery/GalleryWidget';
import Exhibition from '../components/exhibition';
import TransitAnimator from '../shared/TransitAnimator';
import useScrollOnTop from '../shared/useScrollOnTop';
import HeroTest from '../components/heroTest';
import { motion } from 'framer-motion';
import RenderIfVisible from 'react-render-if-visible';

const VISIBLE_OFFSET = 700;

const Home = () => {
  const [animationImage, setAnimationImage] = React.useState(null);
  useScrollOnTop();
  return (
    <>
      <motion.main
        className='overflow-hidden'
        initial={{
          opacity: 0,
          y: '4rem',
        }}
        animate={{
          y: '0rem',
          opacity: 1,
        }}
        exit={{
          y: '-4rem',
          opacity: 0,
        }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}>
        <HeroTest />
        {/* <Hero /> */}
        <RenderIfVisible visibleOffset={VISIBLE_OFFSET}>
          <RunningText />
        </RenderIfVisible>

        <RenderIfVisible visibleOffset={VISIBLE_OFFSET}>
          <Overview
            title={'The history of bitcoin'}
            text={
              'They say a picture tells a thousand words — BIT goes further. Each artwork is accompanied with stories and facts uncovered by our team of historians and wrapped in an immersive soundtrack by world-class musicians and DJs.'
            }
            buttonText={'Explore the Artworks'}
            buttonLink='/history'
          />
        </RenderIfVisible>

        <RenderIfVisible visibleOffset={VISIBLE_OFFSET}>
          <GalleryWidget setAnimationImage={setAnimationImage} />
        </RenderIfVisible>

        <RenderIfVisible visibleOffset={VISIBLE_OFFSET}>
          <Overview
            title={'The ultimate btc collection'}
            text={
              'Experience a multi-sensory journey through 128 uniquly enhanced Bitcoin artworks by leading creatives from the Smashtoshi Collective. Combined with AR, AI, customisable materials and print finishes BIT is unique in the world of luxury publications.'
            }
            buttonText={'Buy BIT'}
            externalLink='https://smashtoshi.myshopify.com/'
          />
        </RenderIfVisible>

        <RenderIfVisible visibleOffset={VISIBLE_OFFSET}>
          <Book />
        </RenderIfVisible>

        {/* <Overview
                title={"Experience the exhibition"}
                text={"Kicking off the world tour at legendary W1 Curates in the heart of London. Experience a multi-sensory journey through 128 uniquly enhanced bitcoin artworks by leading creatives from the Smashtoshi Collective. "}
                buttonText={"Book Your Tickets"}
            /> */}
        {/* <Exhibition/> */}
      </motion.main>
      <TransitAnimator image={animationImage} />
    </>
  );
};

export default Home;
