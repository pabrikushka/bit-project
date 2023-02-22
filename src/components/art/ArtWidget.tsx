import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import honeybadger from "../../assets/images/honeybadger.jpg";
import fellas from "../../assets/images/fellas.jpg";
import avatar from "../../assets/images/avatar.jpg";
import AnimatedArrow from "../../assets/icons/animatedArrow";
import SoundcloudIcon from "../../assets/icons/soundcloud";
import ApplemusicIcon from "../../assets/icons/applemusic";
import SpotifyIcon from "../../assets/icons/spotify";
import CloseIcon from "../../assets/icons/close";
import Button from "react-bootstrap/Button";
import { artBodyAnimationSettings, preloadAudio, preloadVideo, prepareArtSlides } from "./helpers";
import useOnScreen from "../../shared/useOnScreen";
import { AudioContainer, AudioLoadingStatuses, VideoContainer, VideoLoadingStatuses } from "./types";
import ArtBanner from "./artBanner/ArtBanner";
import DeepDiveIcon from "../../assets/icons/deepDiveIcon";
import ArtBannerMini from "./ArtBannerMini";
import ArtHeader from "./ArtHeader";
import ArtBody from "./ArtBody";
import ArtCredits from "./ArtCredits";
import ArtSlider from "./artSlider/ArtSlider";
import useMouse from "@react-hook/mouse-position";

const ArtWidget = (props: any) => {
  const [isFullScreenBanner, setIsFullScreenBanner] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const refToPageArtBanner = useRef(null);
  // TODO info about video should come outside
  const [videoContainer, setVideoContainer] = useState<VideoContainer>({
    videoLoadingStatus: VideoLoadingStatuses.loading,
    video: null,
  });

  const [audioContainer, setAudioContainer] = useState<AudioContainer>({
    audioLoadingStatus: AudioLoadingStatuses.loading,
    audio: null,
  });

  const isPageArtBannerVisible = useOnScreen(refToPageArtBanner);

  const loadVideo = useCallback(async () => {
    const data = await preloadVideo();
    setVideoContainer(data);
  }, []);
  const loadAudio = useCallback(async () => {
    const data = await preloadAudio();
    setAudioContainer(data);
  }, []);

  useEffect(() => {
    loadVideo().catch(console.error);
  }, [loadVideo]);
  useEffect(() => {
    loadAudio().catch(console.error);
  }, [loadAudio]);

  useEffect(() => {
    //document.documentElement.scrollTop || document.body.scrollTop
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      // @ts-ignore
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
    loadVideo().catch(console.error);
  }, []);

  const toogleBannerFullScreen = (isFullScreen: boolean) => {
    setIsFullScreenBanner(isFullScreen);
  };



  useEffect(() => {
    if (isFullScreenBanner || isModal) {
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
    }
    return () => document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
  }, [isFullScreenBanner, isModal]);


  const backdropVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0
      }
    },
    visible: {
      opacity: 1,
      transition:
        { duration: .3 }
    }
  }

  const popContentVariants = {
    hidden: {
      opacity: 0,
      y: '100vh',
      scale: 1.4,
      transition: {
        duration: 0
      }
    },
    visible: {
      opacity: 1,
      y: '0vh',
      scale: 1,
      transition: {
        type: "tween",
        duration: .4,
        ease: "easeOut"
      }
    }
  }

  const avatarVariants = {
    hidden: {
      height: '0%',
      transition: {
        duration: 0
      }
    },
    visible: {
      height: '100%',
      transition: {
        type: "tween",
        duration: .3,
        delay: .3,
        ease: "easeOut"
      }
    }
  }

  const avatarImgVariants = {
    hidden: {
      scale: 1.2,
      y: '-50%',
      x: '-50%',
      transition: {
        duration: 0
      }
    },
    visible: {
      scale: 1,
      y: '-50%',
      x: '-50%',
      transition: {
        type: "tween",
        duration: .3,
        delay: .3,
        ease: "easeOut"
      }
    }
  }

  const bannerVariants = {
    hidden: {
      scale: 1.4,
      transition: {
        duration: 0
      }
    },
    visible: {
      scale: 1,
      transition: {
        type: "tween",
        duration: .6,
        delay: .2,
        ease: "easeOut"
      }
    }
  }

  const artistNameVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      skewY: -30,
      transition: {
        duration: 0
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: {
        type: "tween",
        duration: .5,
        delay: .4,
        ease: "easeOut"
      }
    }
  }

  const artistSubVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      skewY: -30,
      transition: {
        duration: 0
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: {
        type: "tween",
        duration: .5,
        delay: .5,
        ease: "easeOut"
      }
    }
  }

  const artistOverviewVariants = {
    hidden: {
      y: 200,
      opacity: 0,
      skewY: -5,
      transition: {
        duration: 0
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: {
        type: "tween",
        duration: .4,
        delay: .6,
        ease: "easeOut"
      }
    }
  }

  const artistContentVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: .5,
        delay: .6,
        ease: "easeOut"
      }
    }
  }

  const ref = React.useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  let mouseXPosition = 0;
  let mouseYPosition = 0;
  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  const cursorVariants = {
    default: {
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.2,
      }
    }
  }



  return (
    <>
      <main>
        <section>
          <Container className="px-xl-5">
            <Row>
              <Col xs={12}>
                <ArtHeader headerText="IRS declares bitcoin be taxed as property" />
              </Col>
              <Col xs={12}>
                <div ref={refToPageArtBanner}>
                  <ArtBanner
                    image={honeybadger}
                    videoContainer={videoContainer}
                    audioContainer={audioContainer}
                    isFullScreenBanner={false}
                    setIsFullScreenBanner={toogleBannerFullScreen}
                  />
                </div>
              </Col>
            </Row>
            <motion.div
              initial={artBodyAnimationSettings.initial}
              animate={artBodyAnimationSettings.animate}
              transition={artBodyAnimationSettings.transition}
            >
              <Row className="art-body position-relative">
                <Col xs={12} lg={7} className="art-body-main">
                  <ArtBody />
                </Col>
                <Col xs={12} lg={{ span: 12, order: 3 }}>
                  <Row className="art-actions g-4 mt-4">
                    <Col xs={12} sm={6}>
                      <Button variant="outline-primary" className="bit-btn icon-btn d-block d-lg-inline-block" href="#">
                        <DeepDiveIcon />
                        Read More
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
                    <ArtBannerMini
                      image={honeybadger}
                      isVisible={!isFullScreenBanner && !isPageArtBannerVisible}
                      setIsFullScreenBanner={() => toogleBannerFullScreen(true)}
                    />
                    <ArtCredits
                      isModal={false}
                      setIsModal={setIsModal}
                    />
                  </div>
                </Col>
                <Col xs={12}></Col>
              </Row>
            </motion.div>
          </Container>
        </section>
        <ArtSlider slides={prepareArtSlides()} />
      </main>
      {isFullScreenBanner ? (
        <div className="full-screen position-fixed w-100 vh-100 top-0 left-0 d-flex align-items-center justify-content-center">
          <ArtBanner
            image={honeybadger}
            videoContainer={videoContainer}
            audioContainer={audioContainer}
            isFullScreenBanner={true}
            setIsFullScreenBanner={toogleBannerFullScreen}
          />
        </div>
      ) : null}

      <AnimatePresence mode='wait'>
        {isModal ? (
          <div className="pop position-fixed w-100 vh-100 top-0 left-0 d-flex justify-content-center" ref={ref}>
            <div className="pop-wrapper">
              <motion.div
                className="pop-backdrop position-absolute w-100 h-100 left-0 top-0"
                onClick={() => setIsModal(!isModal)}
                
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.div 
                className="cursor-holder"
                variants={cursorVariants}
                animate="default"
                >
                  <CloseIcon/>
                </motion.div>
              </motion.div>
              <motion.div
                className="pop-content position-relative artist-content"
                variants={popContentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="pop-head position-relative overflow-hidden">
                  <motion.img
                    src={fellas}
                    alt=""
                    className="pop-head-img position-absolute w-100 h-100"
                    variants={bannerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  />
                </div>
                <div className="pop-body px-4 pb-4 px-sm-5 pb-sm-5">
                  <div className="artist-img-wrapper position-relative">
                    <motion.div
                      className="artist-img-holder w-100  overflow-hidden"
                      variants={avatarVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <motion.img
                        src={avatar}
                        alt=""
                        className="artist-img"
                        variants={avatarImgVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      />
                    </motion.div>
                  </div>
                  x: ${mouse.x}
                  y: ${mouse.y}
                  <div className="overflow-hidden mt-4">
                    <motion.h1
                      className=" h1-mini text-gradient"
                      variants={artistNameVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      .illtopia
                    </motion.h1>
                  </div>
                  <div className="overflow-hidden mt-1">
                    <motion.h2
                      className="h5 small font-aeonik text-light-70"
                      variants={artistSubVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      Digital Artist
                    </motion.h2>
                  </div>
                  <div className="overflow-hidden mt-4 mt-sm-3">
                    <motion.p
                      variants={artistOverviewVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      Corrupting good ideas since 96. We will discuss this ASAP and come back on it today. Quick question, will there be a scheduling feature on this so we can schedule the weeks art etc to go live as soon as possible.
                    </motion.p>
                  </div>

                  <motion.div
                    variants={artistContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="mt-4">
                      <a target="_blank" href="#" className="nav-link p-0 text-primary text-decoration-none glow-svg-hover  cta-arrow-holder mt-md-auto d-inline-flex">
                        <AnimatedArrow />
                        <span className="font-aeonik h6 my-0">
                          illtopia.art
                        </span>
                      </a>
                    </div>

                    <div className="mt-5">
                      <Row className="g-4 row-cols-2">
                        <Col >
                          <img src={fellas} alt="" className="artist-gallery-img w-100" />
                        </Col>
                        <Col >
                          <img src={fellas} alt="" className="artist-gallery-img w-100" />
                        </Col>
                        <Col >
                          <img src={fellas} alt="" className="artist-gallery-img w-100" />
                        </Col>
                        <Col >
                          <img src={fellas} alt="" className="artist-gallery-img w-100" />
                        </Col>
                      </Row>
                    </div>

                    <div className="mt-5">
                      <Row className="g-4">
                        <Col lg="auto">
                          <Button variant="outline-primary" className="bit-btn icon-btn d-flex d-lg-inline-flex align-items-center" href="#">
                            <SpotifyIcon />
                            Spotify
                          </Button>
                        </Col>
                        <Col lg="auto">
                          <Button variant="outline-primary" className="bit-btn icon-btn d-flex d-lg-inline-flex align-items-center" href="#">
                            <ApplemusicIcon />
                            Apple Music
                          </Button>
                        </Col>
                        <Col lg="auto">
                          <Button variant="outline-primary" className="bit-btn icon-btn d-flex d-lg-inline-flex align-items-center" href="#">
                            <SoundcloudIcon />
                            Soundcloud
                          </Button>
                        </Col>
                      </Row>
                    </div>

                    <div className="mt-3  pt-3">
                      <div className="separator mt-5 mb-3"></div>
                      <div className="d-flex flex-md-column">
                        <Row className="g-2 mt-4">
                          <Col xs={12}>
                            <h3 className="small font-aeonik text-light-70 mb-md-0">
                              Socials
                            </h3>
                          </Col>
                          <Col xs={12} md={3}>
                            <a className="nav-link p-0 text-start fs-1">
                              <span className="h5 m-0">
                                Discord
                              </span>
                            </a>
                          </Col>
                          <Col xs={12} md={3}>
                            <a className="nav-link p-0 text-start fs-1">
                              <span className="h5 m-0">
                                Instagram
                              </span>
                            </a>
                          </Col>
                          <Col xs={12} md={3}>
                            <a className="nav-link p-0 text-start fs-1">
                              <span className="h5 m-0">
                                YouTube
                              </span>
                            </a>
                          </Col>
                          <Col xs={12} md={3}>
                            <a className="nav-link p-0 text-start fs-1">
                              <span className="h5 m-0">
                                Mastodon
                              </span>
                            </a>
                          </Col>
                        </Row>
                        <Row className="g-2 mt-4">
                          <Col xs={12}>
                            <h3 className="small font-aeonik text-light-70 mb-md-0">
                              Marketplace
                            </h3>
                          </Col>
                          <Col xs={12} md={3}>
                            <a className="nav-link p-0 text-start fs-1">
                              <span className="h5 m-0">
                                OpenSea
                              </span>
                            </a>
                          </Col>
                          <Col xs={12} md={3}>
                            <a className="nav-link p-0 text-start fs-1">
                              <span className="h5 m-0">
                                Fountain
                              </span>
                            </a>
                          </Col>
                          <Col xs={12} md={3}>
                            <a className="nav-link p-0 text-start fs-1">
                              <span className="h5 m-0">
                                SuperRare
                              </span>
                            </a>
                          </Col>
                          <Col xs={12} md={3}>
                            <a className="nav-link p-0 text-start fs-1">
                              <span className="h5 m-0">
                                Rairable
                              </span>
                            </a>
                          </Col>
                        </Row>
                      </div>

                    </div>
                  </motion.div>

                </div>
              </motion.div>
            </div>
          </div>
        ) : null}
      </AnimatePresence>

    </>
  );
};

export default ArtWidget;
