import React from "react";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnimatedArrow from "../../assets/icons/animatedArrow";
import Button from "react-bootstrap/Button";
import { artBodyAnimationSettings, artItemToIArtPiece, prepareArtSlides } from "./helpers";
import useOnScreen from "../../shared/useOnScreen";
import { AudioContainer, AudioLoadingStatuses, IArtPiece, VideoContainer, VideoLoadingStatuses } from "./types";
import ArtBanner from "./artBanner/ArtBanner";
import DeepDiveIcon from "../../assets/icons/deepDiveIcon";
import ArtBannerMini from "./ArtBannerMini";
import ArtHeader from "./ArtHeader";
import ArtBody from "./ArtBody";
import ArtCredits from "./ArtCredits";
import ArtSlider from "./artSlider/ArtSlider";
import ArtistModal from "./artistModal/ArtistModal";
import { useQuery } from "@apollo/client";
import { GET_ART } from "../../services/graphql/artQuery";
import { useParams } from "react-router-dom";
import { IArtist } from "./artistModal/types";

const ArtWidget = (props: any) => {
  const [isFullScreenBanner, setIsFullScreenBanner] = useState(false);
  const [artistForModalModal, setArtistForModalModal] = useState<IArtist | null>(null);
  const refToPageArtBanner = useRef(null);

  const [artPiece, setArtPiece] = useState<IArtPiece | undefined>(props.initialArt);

  const isModal = artistForModalModal ? true : false;

  const videoContainerState = useState<VideoContainer>({
    videoLoadingStatus: VideoLoadingStatuses.loading,
    video: null,
  });
  const [videoContainer, setVideoContainer] = videoContainerState;

  const audioContainerState = useState<AudioContainer>({
    audioLoadingStatus: AudioLoadingStatuses.loading,
    audio: null,
  });
  const [audioContainer, setAudioContainer] = audioContainerState;

  const params = useParams();

  const {
    loading,
    error,
    data: artQueryData,
  } = useQuery(GET_ART, {
    variables: {
      id: params.artId,
    },
  });

  console.log(artPiece);

  const isPageArtBannerVisible = useOnScreen(refToPageArtBanner);

  useEffect(() => {
    //document.documentElement.scrollTop || document.body.scrollTop
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      // @ts-ignore
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);

  useEffect(() => {
    if (artQueryData) {
      const newArtPiece = artItemToIArtPiece(artQueryData.arts);
      setArtPiece(newArtPiece);

      setVideoContainer({
        ...videoContainer,
        video: newArtPiece.video,
      });

      setAudioContainer({
        ...audioContainer,
        audio: newArtPiece.audio,
      });
    }
  }, [artQueryData]);

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

  return (
    <>
      <main>
        <section>
          <Container className="px-xl-5">
            <Row>
              <Col xs={12}>
                <ArtHeader artPiece={artPiece} />
              </Col>
              <Col xs={12}>
                <div ref={refToPageArtBanner}>
                  <ArtBanner
                    image={artPiece?.mainImage}
                    videoContainerState={videoContainerState}
                    audioContainerState={audioContainerState}
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
                  <ArtBody content={artPiece?.content} />
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
                      image={artPiece?.thumbnail}
                      isVisible={!isFullScreenBanner && !isPageArtBannerVisible}
                      setIsFullScreenBanner={() => toogleBannerFullScreen(true)}
                    />
                    <ArtCredits
                      setArtistForModalModal={setArtistForModalModal}
                      arEnhanced={artPiece?.arEnhanced}
                      audioArtist={artPiece?.audioArtist}
                      visualArtist={artPiece?.visualArtist}
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
            image={artPiece?.mainImage}
            videoContainerState={videoContainerState}
            audioContainerState={audioContainerState}
            isFullScreenBanner={true}
            setIsFullScreenBanner={toogleBannerFullScreen}
          />
        </div>
      ) : null}
      <AnimatePresence mode="wait">
        {isModal ? <ArtistModal closeModal={() => setArtistForModalModal(null)} artist={artistForModalModal!} /> : null}
      </AnimatePresence>
    </>
  );
};

export default ArtWidget;
