import * as React from 'react';
import { useState, useRef, useEffect } from "react";
// import HistoryNav from '../components/historyNav.tsx';
import { useMeasure } from 'react-use'
import { Link } from "react-router-dom";
import { motion, useAnimation, usePresence, Data } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dummy from '../assets/images/dummy.jpg';
import dummy2 from '../assets/images/dummy2.jpg';
import honeybadger from '../assets/images/honeybadger.jpg';
import AnimatedArrow from '../assets/icons/animatedArrow';
import useWindowParams from '../shared/useWindowParams';




const History = () => {
    let detailsMotion = {};
    let ctaMotion = {};
    let artHolderMotion = {};
    let fadeOut = {};
    let centerArt = {};
    let resetArt = {};
    let hideBorder = {}

    const { isMobile } = useWindowParams();


    if (!isMobile) {
        detailsMotion = {
            rest: {
                opacity: 0,
                y: 10,
                transition: {
                    duration: .15,
                    type: "tween",
                    ease: "easeIn",
                    delay: .05,
                }
            },
            hover: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.3,
                    type: "tween",
                    ease: "easeOut"
                }
            }
        };
        ctaMotion = {
            rest: {
                opacity: 0,
                y: 10,
                transition: {
                    duration: .15,
                    type: "tween",
                    ease: "easeIn",
                }
            },
            hover: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: .3,
                    type: "tween",
                    ease: "easeOut",
                    delay: .1,
                }
            }
        };
        artHolderMotion = {
            rest: {
                opacity: 0,
                scale: 1,
                transition: {
                    duration: 0,
                    type: "tween",
                    ease: "easeIn",
                }
            },
            hover: {
                opacity: 1,
                scale: 1.2,
                transition: {
                    duration: .3,
                    type: "tween",
                    ease: "easeOut",
                    delay: .1,
                }
            }
        };
        fadeOut = {
            opacity: 0,
            transition: {
                duration: .3,
                type: "tween",
                ease: "easeInOut"
            }
        }
        centerArt = {
            right: '50%',
            translateX: "50%",
            transition: {
                duration: .3,
                type: "tween",
                ease: "easeInOut"
            }
        }

        resetArt = {
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            transition: {
                duration: .3,
                type: "tween",
                ease: "easeInOut"
            }
        }

        hideBorder = {
            borderColor: "transparent",
            transition: {
                duration: .3,
                type: "tween",
                ease: "easeInOut"
            }
        }



    }

    // const imgAnimation = useAnimation();
    const artHolderAnimation = useAnimation()
    const artImgAnimation = useAnimation()

    const handleMouseMove = e => {
        const { clientX, clientY } = e
        const localX = clientX - window.innerWidth / 2
        const localY = clientY - window.innerHeight / 2
        const globalX = clientX
        const glovalY = clientY
        const offsetFactor1 = 15
        const offsetFactor2 = 10
        if (!isMobile) {
            artHolderAnimation.start({
                x: localX / 10,
                y: localY / offsetFactor1,
                rotate: -localX / 300,
            })
            artImgAnimation.start({
                x: localX / offsetFactor2,
                y: localY / offsetFactor2
            })
        }
    }


    const ArtLink = React.forwardRef((props, ref, event) => (
        <Link
            to={'/art'}
            ref={ref}
            // onMouseMove={e => handleMouseMove(e)}
            className='art-card'
        >
            {props.children}
        </Link>
    ));

    const MotionArtLink = motion(ArtLink, { forwardMotionProps: true });
    const [show, setShow] = useState(true);
    const [ref, { width, height }] = useMeasure();


    return (
        <main className=''>
            <Container className='px-xl-5'>
                <Row>
                    <Col xs={12} className="history-wrapper">
                        <div className="history-holder overflow-hidden">
                            <section id='15' className='history-section'>
                                <motion.header exit={fadeOut} className="title-block section-title pb-xl-3">
                                    <h2 className='h1'>2015</h2>
                                </motion.header>
                                <div className="history-row">
                                    <MotionArtLink initial="rest" whileHover="hover" whileFocus="hover" animate="rest" exit={hideBorder}>
                                        <motion.div className='art-card-content row py-3 py-md-4'>
                                            <Col xs={12} lg={{ span: 3, order: 2 }} xl>
                                                <motion.div exit={fadeOut} className="art-details d-flex align-items-end justify-content-between d-sm-block mb-4 ms-lg-4 ms-xl-5">
                                                    <h4 className='h3 font-aeonik text-light-70'>March 25, 2014</h4>
                                                    <h5 className='font-aeonik small text-light-70'>1BTC:$438.89</h5>
                                                </motion.div>
                                            </Col>
                                            <motion.div exit={centerArt} className='art-wrapper col-xs-12 col-lg-4 order-md-3 col-xl-5'>
                                                <motion.div exit={resetArt} className='art-holder' animate={artHolderAnimation} >
                                                    <motion.div exit={resetArt} className="art-frame" variants={artHolderMotion}>
                                                        <motion.img exit={resetArt} src={honeybadger} alt="Dummy" className="art-img" animate={artImgAnimation} />
                                                    </motion.div>
                                                </motion.div>
                                            </motion.div>
                                            <Col xs={12} lg={{ span: 5, order: 1 }} xl={4}>
                                                <motion.div
                                                    exit={fadeOut}
                                                    className="art-card-main mt-4 mt-md-0 d-md-flex flex-column h-100"
                                                >
                                                    <h3 className='mb-md-3 text-light-100'>IRS declares bitcoin be taxed as property</h3>
                                                    <motion.div variants={detailsMotion}>
                                                        <p className='text-light-70'>It’s official, bitcoin is not a currency. The Internal Revenue Service ruled in May 2014 that the Bitcoin and its rivals will be treated as property, not cash, for tax purposes.</p>
                                                    </motion.div>
                                                    <motion.div
                                                        variants={ctaMotion}
                                                        className="cta-arrow-holder mt-md-auto"
                                                    >
                                                        <AnimatedArrow />
                                                        Learn More
                                                    </motion.div>
                                                </motion.div>
                                            </Col>
                                        </motion.div>

                                    </MotionArtLink>
                                    <MotionArtLink initial="rest" whileHover="hover" whileFocus="hover" animate="rest" exit={hideBorder}>
                                        <motion.div className='art-card-content row py-3 py-md-4'>
                                            <Col xs={12} lg={{ span: 3, order: 2 }} xl>
                                                <motion.div exit={fadeOut} className="art-details d-flex align-items-end justify-content-between d-sm-block mb-4 ms-lg-4 ms-xl-5">
                                                    <h4 className='h3 font-aeonik text-light-70'>March 25, 2014</h4>
                                                    <h5 className='font-aeonik small text-light-70'>1BTC:$438.89</h5>
                                                </motion.div>
                                            </Col>
                                            <motion.div exit={centerArt} className='art-wrapper col-xs-12 col-lg-4 order-md-3 col-xl-5'>
                                                <motion.div exit={resetArt} className='art-holder' animate={artHolderAnimation} >
                                                    <motion.div exit={resetArt} className="art-frame" variants={artHolderMotion}>
                                                        <motion.img exit={resetArt} src={dummy2} alt="Dummy" className="art-img" animate={artImgAnimation} />
                                                    </motion.div>
                                                </motion.div>
                                            </motion.div>
                                            <Col xs={12} lg={{ span: 5, order: 1 }} xl={4}>
                                                <motion.div
                                                    exit={fadeOut}
                                                    className="art-card-main mt-4 mt-md-0 d-md-flex flex-column h-100"
                                                >
                                                    <h3 className='mb-md-3 text-light-100'>IRS declares bitcoin be taxed as property</h3>
                                                    <motion.div variants={detailsMotion}>
                                                        <p className='text-light-70'>It’s official, bitcoin is not a currency. The Internal Revenue Service ruled in May 2014 that the Bitcoin and its rivals will be treated as property, not cash, for tax purposes.</p>
                                                    </motion.div>
                                                    <motion.div
                                                        variants={ctaMotion}
                                                        className="cta-arrow-holder mt-md-auto"
                                                    >
                                                        <AnimatedArrow />
                                                        Learn More
                                                    </motion.div>
                                                </motion.div>
                                            </Col>
                                        </motion.div>

                                    </MotionArtLink>
                                </div>
                            </section>
                            <section id='16' className='history-section'>
                                <motion.header exit={fadeOut} className="title-block section-title pb-xl-3">
                                    <h2 className='h1'>2016</h2>
                                </motion.header>
                                <div className="history-row">
                                    <MotionArtLink initial="rest" whileHover="hover" whileFocus="hover" animate="rest" exit={hideBorder}>
                                        <motion.div className='art-card-content row py-3 py-md-4'>
                                            <Col xs={12} lg={{ span: 3, order: 2 }} xl>
                                                <motion.div exit={fadeOut} className="art-details d-flex align-items-end justify-content-between d-sm-block mb-4 ms-lg-4 ms-xl-5">
                                                    <h4 className='h3 font-aeonik text-light-70'>March 25, 2014</h4>
                                                    <h5 className='font-aeonik small text-light-70'>1BTC:$438.89</h5>
                                                </motion.div>
                                            </Col>
                                            <motion.div exit={centerArt} className='art-wrapper col-xs-12 col-lg-4 order-md-3 col-xl-5'>
                                                <motion.div exit={resetArt} className='art-holder' animate={artHolderAnimation} >
                                                    <motion.div exit={resetArt} className="art-frame" variants={artHolderMotion}>
                                                        <motion.img exit={resetArt} src={honeybadger} alt="Dummy" className="art-img" animate={artImgAnimation} />
                                                    </motion.div>
                                                </motion.div>
                                            </motion.div>
                                            <Col xs={12} lg={{ span: 5, order: 1 }} xl={4}>
                                                <motion.div
                                                    exit={fadeOut}
                                                    className="art-card-main mt-4 mt-md-0 d-md-flex flex-column h-100"
                                                >
                                                    <h3 className='mb-md-3 text-light-100'>IRS declares bitcoin be taxed as property</h3>
                                                    <motion.div variants={detailsMotion}>
                                                        <p className='text-light-70'>It’s official, bitcoin is not a currency. The Internal Revenue Service ruled in May 2014 that the Bitcoin and its rivals will be treated as property, not cash, for tax purposes.</p>
                                                    </motion.div>
                                                    <motion.div
                                                        variants={ctaMotion}
                                                        className="cta-arrow-holder mt-md-auto"
                                                    >
                                                        <AnimatedArrow />
                                                        Learn More
                                                    </motion.div>
                                                </motion.div>
                                            </Col>
                                        </motion.div>

                                    </MotionArtLink>
                                    <MotionArtLink initial="rest" whileHover="hover" whileFocus="hover" animate="rest" exit={hideBorder}>
                                        <motion.div className='art-card-content row py-3 py-md-4'>
                                            <Col xs={12} lg={{ span: 3, order: 2 }} xl>
                                                <motion.div exit={fadeOut} className="art-details d-flex align-items-end justify-content-between d-sm-block mb-4 ms-lg-4 ms-xl-5">
                                                    <h4 className='h3 font-aeonik text-light-70'>March 25, 2014</h4>
                                                    <h5 className='font-aeonik small text-light-70'>1BTC:$438.89</h5>
                                                </motion.div>
                                            </Col>
                                            <motion.div exit={centerArt} className='art-wrapper col-xs-12 col-lg-4 order-md-3 col-xl-5'>
                                                <motion.div exit={resetArt} className='art-holder' animate={artHolderAnimation} >
                                                    <motion.div exit={resetArt} className="art-frame" variants={artHolderMotion}>
                                                        <motion.img exit={resetArt} src={dummy2} alt="Dummy" className="art-img" animate={artImgAnimation} />
                                                    </motion.div>
                                                </motion.div>
                                            </motion.div>
                                            <Col xs={12} lg={{ span: 5, order: 1 }} xl={4}>
                                                <motion.div
                                                    exit={fadeOut}
                                                    className="art-card-main mt-4 mt-md-0 d-md-flex flex-column h-100"
                                                >
                                                    <h3 className='mb-md-3 text-light-100'>IRS declares bitcoin be taxed as property</h3>
                                                    <motion.div variants={detailsMotion}>
                                                        <p className='text-light-70'>It’s official, bitcoin is not a currency. The Internal Revenue Service ruled in May 2014 that the Bitcoin and its rivals will be treated as property, not cash, for tax purposes.</p>
                                                    </motion.div>
                                                    <motion.div
                                                        variants={ctaMotion}
                                                        className="cta-arrow-holder mt-md-auto"
                                                    >
                                                        <AnimatedArrow />
                                                        Learn More
                                                    </motion.div>
                                                </motion.div>
                                            </Col>
                                        </motion.div>

                                    </MotionArtLink>
                                </div>
                            </section>
                            <section id='17' className='history-section'>
                                <motion.header exit={fadeOut} className="title-block section-title pb-xl-3">
                                    <h2 className='h1'>2017</h2>
                                </motion.header>
                                <div className="history-row">
                                    <MotionArtLink initial="rest" whileHover="hover" whileFocus="hover" animate="rest" exit={hideBorder}>
                                        <motion.div className='art-card-content row py-3 py-md-4'>
                                            <Col xs={12} lg={{ span: 3, order: 2 }} xl>
                                                <motion.div exit={fadeOut} className="art-details d-flex align-items-end justify-content-between d-sm-block mb-4 ms-lg-4 ms-xl-5">
                                                    <h4 className='h3 font-aeonik text-light-70'>March 25, 2014</h4>
                                                    <h5 className='font-aeonik small text-light-70'>1BTC:$438.89</h5>
                                                </motion.div>
                                            </Col>
                                            <motion.div exit={centerArt} className='art-wrapper col-xs-12 col-lg-4 order-md-3 col-xl-5'>
                                                <motion.div exit={resetArt} className='art-holder' animate={artHolderAnimation} >
                                                    <motion.div exit={resetArt} className="art-frame" variants={artHolderMotion}>
                                                        <motion.img exit={resetArt} src={honeybadger} alt="Dummy" className="art-img" animate={artImgAnimation} />
                                                    </motion.div>
                                                </motion.div>
                                            </motion.div>
                                            <Col xs={12} lg={{ span: 5, order: 1 }} xl={4}>
                                                <motion.div
                                                    exit={fadeOut}
                                                    className="art-card-main mt-4 mt-md-0 d-md-flex flex-column h-100"
                                                >
                                                    <h3 className='mb-md-3 text-light-100'>IRS declares bitcoin be taxed as property</h3>
                                                    <motion.div variants={detailsMotion}>
                                                        <p className='text-light-70'>It’s official, bitcoin is not a currency. The Internal Revenue Service ruled in May 2014 that the Bitcoin and its rivals will be treated as property, not cash, for tax purposes.</p>
                                                    </motion.div>
                                                    <motion.div
                                                        variants={ctaMotion}
                                                        className="cta-arrow-holder mt-md-auto"
                                                    >
                                                        <AnimatedArrow />
                                                        Learn More
                                                    </motion.div>
                                                </motion.div>
                                            </Col>
                                        </motion.div>

                                    </MotionArtLink>
                                    <MotionArtLink initial="rest" whileHover="hover" whileFocus="hover" animate="rest" exit={hideBorder}>
                                        <motion.div className='art-card-content row py-3 py-md-4'>
                                            <Col xs={12} lg={{ span: 3, order: 2 }} xl>
                                                <motion.div exit={fadeOut} className="art-details d-flex align-items-end justify-content-between d-sm-block mb-4 ms-lg-4 ms-xl-5">
                                                    <h4 className='h3 font-aeonik text-light-70'>March 25, 2014</h4>
                                                    <h5 className='font-aeonik small text-light-70'>1BTC:$438.89</h5>
                                                </motion.div>
                                            </Col>
                                            <motion.div exit={centerArt} className='art-wrapper col-xs-12 col-lg-4 order-md-3 col-xl-5'>
                                                <motion.div exit={resetArt} className='art-holder' animate={artHolderAnimation} >
                                                    <motion.div exit={resetArt} className="art-frame" variants={artHolderMotion}>
                                                        <motion.img exit={resetArt} src={dummy2} alt="Dummy" className="art-img" animate={artImgAnimation} />
                                                    </motion.div>
                                                </motion.div>
                                            </motion.div>
                                            <Col xs={12} lg={{ span: 5, order: 1 }} xl={4}>
                                                <motion.div
                                                    exit={fadeOut}
                                                    className="art-card-main mt-4 mt-md-0 d-md-flex flex-column h-100"
                                                >
                                                    <h3 className='mb-md-3 text-light-100'>IRS declares bitcoin be taxed as property</h3>
                                                    <motion.div variants={detailsMotion}>
                                                        <p className='text-light-70'>It’s official, bitcoin is not a currency. The Internal Revenue Service ruled in May 2014 that the Bitcoin and its rivals will be treated as property, not cash, for tax purposes.</p>
                                                    </motion.div>
                                                    <motion.div
                                                        variants={ctaMotion}
                                                        className="cta-arrow-holder mt-md-auto"
                                                    >
                                                        <AnimatedArrow />
                                                        Learn More
                                                    </motion.div>
                                                </motion.div>
                                            </Col>
                                        </motion.div>

                                    </MotionArtLink>
                                </div>
                            </section>
                            <section id='18' className='history-section'>
                                <motion.header exit={fadeOut} className="title-block section-title pb-xl-3">
                                    <h2 className='h1'>2018</h2>
                                </motion.header>
                                <div className="history-row">
                                    <MotionArtLink initial="rest" whileHover="hover" whileFocus="hover" animate="rest" exit={hideBorder}>
                                        <motion.div className='art-card-content row py-3 py-md-4'>
                                            <Col xs={12} lg={{ span: 3, order: 2 }} xl>
                                                <motion.div exit={fadeOut} className="art-details d-flex align-items-end justify-content-between d-sm-block mb-4 ms-lg-4 ms-xl-5">
                                                    <h4 className='h3 font-aeonik text-light-70'>March 25, 2014</h4>
                                                    <h5 className='font-aeonik small text-light-70'>1BTC:$438.89</h5>
                                                </motion.div>
                                            </Col>
                                            <motion.div exit={centerArt} className='art-wrapper col-xs-12 col-lg-4 order-md-3 col-xl-5'>
                                                <motion.div exit={resetArt} className='art-holder' animate={artHolderAnimation} >
                                                    <motion.div exit={resetArt} className="art-frame" variants={artHolderMotion}>
                                                        <motion.img exit={resetArt} src={honeybadger} alt="Dummy" className="art-img" animate={artImgAnimation} />
                                                    </motion.div>
                                                </motion.div>
                                            </motion.div>
                                            <Col xs={12} lg={{ span: 5, order: 1 }} xl={4}>
                                                <motion.div
                                                    exit={fadeOut}
                                                    className="art-card-main mt-4 mt-md-0 d-md-flex flex-column h-100"
                                                >
                                                    <h3 className='mb-md-3 text-light-100'>IRS declares bitcoin be taxed as property</h3>
                                                    <motion.div variants={detailsMotion}>
                                                        <p className='text-light-70'>It’s official, bitcoin is not a currency. The Internal Revenue Service ruled in May 2014 that the Bitcoin and its rivals will be treated as property, not cash, for tax purposes.</p>
                                                    </motion.div>
                                                    <motion.div
                                                        variants={ctaMotion}
                                                        className="cta-arrow-holder mt-md-auto"
                                                    >
                                                        <AnimatedArrow />
                                                        Learn More
                                                    </motion.div>
                                                </motion.div>
                                            </Col>
                                        </motion.div>

                                    </MotionArtLink>
                                    <MotionArtLink initial="rest" whileHover="hover" whileFocus="hover" animate="rest" exit={hideBorder}>
                                        <motion.div className='art-card-content row py-3 py-md-4'>
                                            <Col xs={12} lg={{ span: 3, order: 2 }} xl>
                                                <motion.div exit={fadeOut} className="art-details d-flex align-items-end justify-content-between d-sm-block mb-4 ms-lg-4 ms-xl-5">
                                                    <h4 className='h3 font-aeonik text-light-70'>March 25, 2014</h4>
                                                    <h5 className='font-aeonik small text-light-70'>1BTC:$438.89</h5>
                                                </motion.div>
                                            </Col>
                                            <motion.div exit={centerArt} className='art-wrapper col-xs-12 col-lg-4 order-md-3 col-xl-5'>
                                                <motion.div exit={resetArt} className='art-holder' animate={artHolderAnimation} >
                                                    <motion.div exit={resetArt} className="art-frame" variants={artHolderMotion}>
                                                        <motion.img exit={resetArt} src={dummy2} alt="Dummy" className="art-img" animate={artImgAnimation} />
                                                    </motion.div>
                                                </motion.div>
                                            </motion.div>
                                            <Col xs={12} lg={{ span: 5, order: 1 }} xl={4}>
                                                <motion.div
                                                    exit={fadeOut}
                                                    className="art-card-main mt-4 mt-md-0 d-md-flex flex-column h-100"
                                                >
                                                    <h3 className='mb-md-3 text-light-100'>IRS declares bitcoin be taxed as property</h3>
                                                    <motion.div variants={detailsMotion}>
                                                        <p className='text-light-70'>It’s official, bitcoin is not a currency. The Internal Revenue Service ruled in May 2014 that the Bitcoin and its rivals will be treated as property, not cash, for tax purposes.</p>
                                                    </motion.div>
                                                    <motion.div
                                                        variants={ctaMotion}
                                                        className="cta-arrow-holder mt-md-auto"
                                                    >
                                                        <AnimatedArrow />
                                                        Learn More
                                                    </motion.div>
                                                </motion.div>
                                            </Col>
                                        </motion.div>

                                    </MotionArtLink>
                                </div>
                            </section>
                        </div>
                        {/* <HistoryNav/> */}
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default History;