import React from "react";
import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface TransitAnimatorProps {
  image: string | null,
}

const TransitAnimator = (props: TransitAnimatorProps) => {

  const { image } = props;

  return (
    <>
      <motion.div
        className="animator-wrapper"
        initial={{
          y: "100%",
          scale: 2,
        }}
        exit={{
          y: "0%",
          scale: 1,
        }}
        transition={{
          duration: .6,
          ease: "easeOut",
          scale: {
            duration: 1
          }
        }}
      >
        <Container className='px-xl-5'>
          <Row>
            <Col xs={12}>
              <motion.div
                className="animator-holder"
              >
                {image ? <motion.img
                  className="animator-img"
                  src={image}
                /> : null}
                <motion.div
                  className="animator-curtains"
                >
                  <motion.div
                    className="animator-curtain"
                    exit={{
                      y: '-100%'
                    }}
                    transition={{
                      delay: .5,
                      duration: .3,
                      ease: "easeOut"
                    }}
                  >
                  </motion.div>
                  <motion.div
                    className="animator-curtain"
                    exit={{
                      y: '-100%'
                    }}
                    transition={{
                      delay: .3,
                      duration: .3,
                      ease: "easeOut"
                    }}
                  >
                  </motion.div>
                  <motion.div
                    className="animator-curtain"
                    exit={{
                      y: '-100%'
                    }}
                    transition={{
                      delay: .1,
                      duration: .3,
                      ease: "easeOut"
                    }}
                  >
                  </motion.div>
                  <motion.div
                    className="animator-curtain"
                    exit={{
                      y: '-100%'
                    }}
                    transition={{
                      delay: .3,
                      duration: .3,
                      ease: "easeOut"
                    }}
                  >
                  </motion.div>
                  <motion.div
                    className="animator-curtain"
                    exit={{
                      y: '-100%'
                    }}
                    transition={{
                      delay: .5,
                      duration: .3,
                      ease: "easeOut"
                    }}
                  >
                  </motion.div>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  )
};

export default TransitAnimator;
