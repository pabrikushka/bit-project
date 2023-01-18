import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { useMeasure } from 'react-use'
import { motion, useAnimation } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import dummy from '../assets/images/dummy.jpg';
import honeybadger from '../assets/images/honeybadger.jpg';
import honeybadgerLoop from "../assets/videos/Honey-Badger-Loop.mp4"
import AnimatedArrow from '../assets/icons/animatedArrow';
import DeepDiveIcon from '../assets/icons/deepDiveIcon';
import FullScreenIcon from "../assets/icons/fullScreenIcon";
import AudioOnIcon from "../assets/icons/audioOnIcon";
import AudioOffIcon from "../assets/icons/audioOffIcon";
import PlayIcon from "../assets/icons/playIcon";
import PauseIcon from "../assets/icons/pauseIcon";
import { animateScroll } from "react-scroll";


const Art = () => {
    const transition = { duration: 1, delay: 3, ease: "easeInOut" };
    const [ref, { width }] = useMeasure();
    const line1 = "IRS declares bitcoin "
    const line2 = "be taxed as property"
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: .2,
                duration: .2,
                staggerChildren: 0.08
            }
        }
    }
    const letter = {
        hidden: { opacity: 0, translateY: 50 },
        visible: {
            opacity: 1,
            translateY: 0
        }
    }

    return (
        <main>
            <section>
                <Container className='px-xl-5 pt-5 mt-5'>
                    <Row>
                        <Col xs={12}>
                            <motion.header className="pb-xl-3 title-block art-title-block">
                                <motion.div className="art-title-holder pb-4">
                                    <motion.h1 className='art-title h1-mini'
                                        initial={{
                                            y: 300,
                                            opacity: 0,
                                            skewY: -30
                                        }}
                                        animate={{
                                            y: 0,
                                            opacity: 1,
                                            skewY: 0,
                                            transition: {
                                                duration: .3,
                                                ease: "easeOut"
                                            },
                                        }}
                                    >
                                        IRS declares bitcoin be taxed as property
                                    </motion.h1>
                                </motion.div>

                                <motion.div
                                    className="art-details d-flex align-items-end justify-content-between pt-4 pt-lg-2"
                                    initial={{
                                        y: 40,
                                        opacity: 0,
                                        // skewY: -30
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        skewY: 0,
                                        transition: {
                                            delay: .2,
                                            duration: .3,
                                            ease: "easeOut"
                                        },
                                    }}
                                >
                                    <h2 className='h3 font-aeonik text-light-70'>March 25, 2014</h2>
                                    <h3 className='h3 font-aeonik text-light-70'>1BTC:$438.89</h3>
                                </motion.div>
                            </motion.header>
                        </Col>
                        <Col xs={12}>
                            <div className="art-banner position-relative row pb-3 pb-md-4" ref={ref}>
                                <motion.div
                                    className="art-wrapper position-relative h-100 top-0"
                                >
                                    <motion.div className='art-holder position-relative overflow-hidden'>
                                        <motion.div className="art-frame">
                                            <motion.img src={honeybadger} alt="Dummy" className="art-img position-static w-100" />
                                        </motion.div>
                                        <motion.div className="art-video-frame position-absolute top-0 left-0 w-100 h-100">
                                            <motion.video
                                                className='art-video w-100 h-100' src={honeybadgerLoop} loop muted autoPlay="true">
                                            </motion.video>
                                        </motion.div>
                                        <motion.div
                                            className="controls-holder fader fader-bottom"
                                            initial={{
                                                opacity: 0,
                                                y: 100
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0
                                            }}
                                            transition={{
                                                delay: .3,
                                                duration: .5,
                                                ease: "easeOut"
                                            }}
                                        >
                                            <div className="controls-content d-flex align-items-center px-2 py-1">
                                                <Button variant="link" href="#" className="controls-btn p-2 glow-svg-hover" title="Mute">
                                                    <AudioOnIcon />
                                                    <AudioOffIcon />
                                                </Button>
                                                <Button variant="link" href="#" className="controls-btn p-2 glow-svg-hover" title="Pause">
                                                    <PlayIcon />
                                                    <PauseIcon />
                                                </Button>
                                                <Button variant="link" href="#" className="ms-auto controls-btn p-2 glow-svg-hover" title="Full Screen">
                                                    <FullScreenIcon />
                                                </Button>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="art-body position-relative">
                        <Col xs={12} lg={7} className="art-body-main">
                            <div className="pe-xl-5">
                                <p className="lead mb-4 pb-2">
                                    It’s official, bitcoin is not a currency. The Internal Revenue Service ruled in May 2014 that the Bitcoin and its rivals will be treated as property, not cash, for tax purposes.
                                </p>
                                <p>
                                    The ruling had been expected and marked another step in the wider attempt to make bitcoin mainstream. In its notice, the IRS said bitcoin would be treated like stock or other intangible property.
                                </p>
                                <p>
                                    "The notice provides that virtual currency is treated as property for US federal tax purposes. General tax principles that apply to property transactions apply to transactions using virtual currency," according to an IRS news release.
                                </p>
                                <p>
                                    The ruling means gains in value will be treated as capital gains and as such could be subject to lower tax rates than income. The top long-term capital gains tax rate is 20%, while the top ordinary income tax rate is 39.6%.
                                </p>
                                <p>
                                    The ruling means gains in value will be treated as capital gains and as such could be subject to lower tax rates than income. The top long-term capital gains tax rate is 20%, while the top ordinary income tax rate is 39.6%.
                                </p>
                                <p>
                                    The ruling means gains in value will be treated as capital gains and as such could be subject to lower tax rates than income. The top long-term capital gains tax rate is 20%, while the top ordinary income tax rate is 39.6%.
                                </p>
                                <p>
                                    The ruling means gains in value will be treated as capital gains and as such could be subject to lower tax rates than income. The top long-term capital gains tax rate is 20%, while the top ordinary income tax rate is 39.6%.
                                </p>
                                <p>
                                    The ruling means gains in value will be treated as capital gains and as such could be subject to lower tax rates than income. The top long-term capital gains tax rate is 20%, while the top ordinary income tax rate is 39.6%.
                                </p>
                                <p>
                                    The ruling means gains in value will be treated as capital gains and as such could be subject to lower tax rates than income. The top long-term capital gains tax rate is 20%, while the top ordinary income tax rate is 39.6%.
                                </p>
                                <p>
                                    The ruling means gains in value will be treated as capital gains and as such could be subject to lower tax rates than income. The top long-term capital gains tax rate is 20%, while the top ordinary income tax rate is 39.6%.
                                </p>
                                <p>
                                    The ruling means gains in value will be treated as capital gains and as such could be subject to lower tax rates than income. The top long-term capital gains tax rate is 20%, while the top ordinary income tax rate is 39.6%.
                                </p>
                                <p>
                                    The ruling means gains in value will be treated as capital gains and as such could be subject to lower tax rates than income. The top long-term capital gains tax rate is 20%, while the top ordinary income tax rate is 39.6%.
                                </p>

                            </div>
                        </Col>
                        <Col xs={12} lg={{ span: 12, order: 3 }}>
                            <Row className="art-actions g-4 mt-4">
                                <Col xs={12} sm={6}>
                                    <Button variant="outline-primary" className="bit-btn icon-btn d-block d-lg-inline-block" href="#">
                                        <DeepDiveIcon />
                                        Deep Dive
                                    </Button>
                                </Col>
                                <Col xs={12} sm={6} lg={{ span: 5, offset: 1 }} className="ps-xl-5 px-xxl-5">
                                    <div className="btn-holder w-100 d-lg-block ps-xl-5 px-xxl-5">
                                        <Button variant="outline-primary" className="bit-btn icon-btn w-100" href="#">
                                            <AnimatedArrow />
                                            Share This
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg={5} className="art-credits-col ps-xl-5 px-xxl-5 mt-5 mt-lg-0">


                            <div className="art-credits-holder ps-xl-5 px-xxl-5">
                                <motion.div className="art-wrapper art-tease mb-lg-5">
                                    <div className="art-holder position-relative">
                                        <motion.img className="art-img" src={honeybadger} alt=""></motion.img>
                                        <FullScreenIcon/>
                                    </div>
                                    <div className="small text-uppercase font-aeonik text-center d-lg-none">
                                        Expand
                                    </div>
                                </motion.div>
                                <h2 className="small font-aeonik text-light-70 text-uppercase">
                                    Credits
                                </h2>
                                <div className="art-credits py-3 my-3">
                                    <div className="art-credit py-1 my-1">
                                        <h3 className="small font-aeonik text-light-70">Artist</h3>
                                        <h4 className="p">Illtopia</h4>
                                    </div>
                                    <div className="art-credit py-1 my-1">
                                        <h3 className="small font-aeonik text-light-70">Label</h3>
                                        <h4 className="small font-aeonik text-light-70">AR Enchanced</h4>
                                    </div>
                                    <div className="art-credit py-1 my-1">
                                        <h3 className="small font-aeonik text-light-70">Audio</h3>
                                        <h4 className="p">Dj Phantom</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12}>

                        </Col>

                    </Row>
                </Container>
            </section>
            <section className="art-slider">
                <Container className="px-xl-5">
                    <Row className="g-0">
                        <Col xs={12} lg={6}>
                            <Link className="art-card slider-card">
                                <div className="art-card-content d-sm-flex">
                                    <div className="art-wrapper">
                                        <img className="art-img" src={honeybadger} alt="" />
                                    </div>
                                    <div className="art-card-body py-4 py-sm-1 ps-sm-4">
                                        <div className="art-details d-flex align-items-center justify-content-between justify-content-sm-start mb-1">
                                            <h4 className="font-aeonik small text-light-70 me-5">March 25, 2014</h4>
                                            <h5 className="font-aeonik small text-light-70">1BTC:$438.89</h5>
                                        </div>
                                        <div className="art-card-main">
                                            <h3 className="mb-0">IRS declares bitcoin be taxed as property</h3>
                                        </div>
                                    </div>
                                </div>

                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Art;