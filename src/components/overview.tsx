import * as React from 'react';
import { motion, Variants } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Overview(props: any) {
    const sectionVariants: Variants = {
        offscreen: {
            y: 100,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .8,
                type: "tween",
                ease: "easeOut"
            }
        }
    };


    return (
        <motion.section
            className='overview-section py-3 py-xl-5 mt-xl-5'
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
        >
            <Container className="pt-5 mt-xl-5">
                <Row>
                    <Col xs={12} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} xxl={{ span: 6, offset: 3 }} className="text-center position-relative">
                        <motion.div className='mb-4 overflow-hidden'>
                            <motion.h2
                                className='text-uppercase fw-400 text-gradient'
                                variants={sectionVariants}
                            >
                                {props.title}
                            </motion.h2>
                        </motion.div>
                        <motion.div className='mb-0 pt-2 overflow-hidden'>
                            <motion.p
                                variants={sectionVariants}
                            >
                                {props.text}

                            </motion.p>
                        </motion.div>
                        <motion.div className='overflow-hidden py-5'>
                            <motion.div
                                variants={sectionVariants}
                            >
                                {props.buttonLink && (
                                    <Link className="btn btn-primary bit-btn" to={props.buttonLink}>
                                        {props.buttonText}
                                    </Link>
                                )}

                                {props.externalLink && (
                                    <a className="btn btn-primary bit-btn" href={props.externalLink}>
                                        {props.buttonText}
                                    </a>
                                )}
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </motion.section>
    )
}

export default Overview;