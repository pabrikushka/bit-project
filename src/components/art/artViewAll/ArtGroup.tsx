import React, { useEffect, useState } from 'react';
import ArtItem from './ArtItem';
import { Container, Row } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_WHOLE_HISTORY } from '../../../services/graphql/historyQuery';
import { NavLink, useParams } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ArrowMore from '../../../assets/icons/arrowMore';

type Props = {
  setAnimationImage: any;
};

const ArtGroup = (props: Props) => {
  const { artId } = useParams(); // current item ID from query
  const { setAnimationImage } = props;

  // all items
  const { data: queryData } = useQuery(GET_WHOLE_HISTORY, {
    errorPolicy: 'all',
  });
  const items = queryData?.artsCollection?.items || [];

  const getNextItems = () => {
    const index = items.findIndex((item) => item.sys.id === artId);

    if (index === -1) {
      return []; // Item with the given ID not found
    }

    const itemsCount = items.length;
    const nextIndex = (index + 1) % itemsCount;
    const secondNextIndex = (index + 2) % itemsCount;

    if (index === itemsCount - 2) {
      return [items[nextIndex], items[0]]; // last and first items
    } else if (index === itemsCount - 1) {
      return [items[0], items[1]]; // first two items
    } else {
      return [items[nextIndex], items[secondNextIndex]]; //next two items
    }
  };

  // Cursor
  const [animateCursor, setAnimateCursor] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const xPositionV = useMotionValue(0);
  const yPositionV = useMotionValue(0);
  const xPositionS = useSpring(xPositionV, {mass: 0.2,});
  const yPositionS = useSpring(yPositionV, {mass: 0.2,});

  const documentMiddleX = document.documentElement.clientWidth / 2;

  const mouseMove = (e) => {
    xPositionV.set(e.clientX);
    yPositionV.set(e.clientY);
    setAnimateCursor(e.clientX > documentMiddleX);
  };

  const mouseEnter = () => {
    setIsHovered(true);
  };
  const mouseOut = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientX > documentMiddleX) {
        setAnimateCursor(true);
      } else {
        setAnimateCursor(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [documentMiddleX]);

  return (
    <Container className='px-xl-5'>
      <section className='art-section-mini pt-5 my-5'>
        <div className='d-flex align-items-end justify-content-between'>
          <h2 className='mb-0  fw-light'>More</h2>
          <NavLink to='/history' className='nav-link m-0 mb-1 p-0 text-uppercase'>
            VIew all
          </NavLink>
        </div>
        <motion.div onMouseMove={mouseMove} onMouseEnter={mouseEnter} onMouseLeave={mouseOut}>
          <Row className='g-0 art-section-mini-row'>
            <AnimatePresence>
              {/* cursor */}
              {isHovered && (
                <motion.div
                  className='cursor-holder d-none d-md-block'
                  initial={{scale: 0.1, opacity: 0,}}
                  style={{ x: xPositionS, y: yPositionS, rotate: animateCursor ? 180 : 0 }} 
                  animate={animateCursor ? 'rotated' : 'default'}
                  transition={{type: "spring", duration: 1, mass: 0.5, stiffness: 120, }}
                  exit={{scale: 0.1, opacity: 0,}}
                  variants={{
                    default: { rotate: 0, scale: 1, opacity: 1 },
                    rotated: { rotate: 180, scale: 1, opacity: 1 },
                  }}>
                  <ArrowMore />
                </motion.div>
              )}
            </AnimatePresence>
            {items &&
              getNextItems().map((item) => (
                <ArtItem itemData={item} key={item.sys.id} setAnimationImage={setAnimationImage} />
              ))}
          </Row>
        </motion.div>
      </section>
    </Container>
  );
};

export default ArtGroup;
