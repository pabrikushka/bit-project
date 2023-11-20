import React from "react";
import { useRef } from "react";
import { motion, Variants, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import ParallaxText from "../parallaxText";
import TransitAnimator from "../../shared/TransitAnimator";
import useScrollOnTop from "../../shared/useScrollOnTop";
import Mona from '../../assets/videos/Collective-Animation.mp4';

const CollectiveWidget = (props: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "center start"],
  });
  const linesVelocity = useSpring(scrollYProgress, {
    damping: 120,
    stiffness: 400,
  });

  const blobVelocity = useSpring(scrollYProgress, {
    damping: 140,
    stiffness: 200,
  });

  const scale = useTransform(linesVelocity, [0, 1], [2, 2.8]);

  const sectionVariants: Variants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  useScrollOnTop();

  return (
    <>


      <motion.main className="overflow-hidden position-relative"
        initial={{
          opacity: 0,
          y: "4rem",
        }}
        animate={{
          y: "0rem",
          opacity: 1,
        }}
        exit={{
          y: "-4rem",
          opacity: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <motion.video
          className="collective-video"
          src={Mona}
          loop
          muted
          autoPlay={true}
        >

        </motion.video>
        <motion.header className="collective-header position-relative pt-md-5 mt-5 pb-5" ref={ref}>
          <h1 className="visually-hidden">Smashtoshi Collective</h1>
          <div className="hero-running-text">
            <motion.div
              style={{
                scale: scale,
              }}
              className="rt-lines"
            >
              <ParallaxText baseVelocity={-1}>
                Smashtoshi <span className="circle"></span>
              </ParallaxText>
              <ParallaxText baseVelocity={1}>
                Collective <span className="circle"></span>
              </ParallaxText>
            </motion.div>
          </div>
        </motion.header>
        <motion.section className="collective-overview position-relative py-5 mt-5" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.4 }}>
          <Container className="px-xl-5 pt-5">
            <Row className="mt-5 pt-5">
              <Col xs={12} lg={{ span: 8, offset: 2 }} xxl={{ span: 6, offset: 3 }}>
                <div className="mb-5 overflow-hidden">
                  <motion.h2 >
                    Smashtoshi is a collective of over 200 artists, creators and disruptors with a passion for the game-changing technology brought
                    about by Bitcoin that burns brighter than the fiery depths of Mt. Gox.
                  </motion.h2>
                </div>
                <div className="overflow-hidden">
                  <motion.div variants={sectionVariants}>
                    <motion.p className="lead">
                      We are committed to spreading the history of Bitcoin through art and education and events. We are the rebels of the art world,
                      the outsiders. Our mission is to inspire, educate, and disrupt the status quo. So join us, fellow Bitcoin enthusiasts, as we
                      create a new paradigm and shake the foundations of the traditional art world. The revolution is here, and we are leading the
                      charge.
                    </motion.p>
                    <motion.p className="lead">
                      We are delighted to share our first project with the world. History of Bitcoin, over two years in the making, is a is pioneering
                      new way of charting the pivotal moments in Bitcoin history from the Cypherpunks manifesto to its post-Financial Crisis genesis
                      in 2009 and beyond we are creating the definitive and iconic origin story of Bitcoin that will go down in history.
                    </motion.p>
                    <motion.p className="lead">
                      To hear about Smashtoshi's future projects and events before anyone else subscribe to our mailing list and follow this journey.
                    </motion.p>
                  </motion.div>
                </div>
              </Col>
            </Row>
          </Container>
        </motion.section>

      </motion.main>
      <TransitAnimator image={null} />
    </>
  );
};

export default CollectiveWidget;
