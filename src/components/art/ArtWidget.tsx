import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import honeybadger from "../../assets/images/honeybadger.jpg";
import AnimatedArrow from "../../assets/icons/animatedArrow";
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

const ArtWidget = (props: any) => {
  const [isFullScreenBanner, setIsFullScreenBanner] = useState(false);
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
    if (isFullScreenBanner) {
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
    }
    return () => document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
  }, [isFullScreenBanner]);
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
                    <ArtBannerMini
                      image={honeybadger}
                      isVisible={!isFullScreenBanner && !isPageArtBannerVisible}
                      setIsFullScreenBanner={() => toogleBannerFullScreen(true)}
                    />
                    <ArtCredits />
                  </div>
                </Col>
                <Col xs={12}></Col>
              </Row>
            </motion.div>
          </Container>
        </section>
        <ArtSlider slides={prepareArtSlides()}/>
      </main>
      {isFullScreenBanner ? (
        <div className="full-screen position-fixed w-100 top-0 left-0 d-flex align-items-center justify-content-center">
          <ArtBanner
            image={honeybadger}
            videoContainer={videoContainer}
            audioContainer={audioContainer}
            isFullScreenBanner={true}
            setIsFullScreenBanner={toogleBannerFullScreen}
          />
        </div>
      ) : null}
    </>
  );
};

export default ArtWidget;
