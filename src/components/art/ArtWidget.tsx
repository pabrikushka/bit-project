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
import PageSpecificSEO from "../seo/PageSpecificSEO";
import ArtBodyRightPart from "./ArtBodyRightPart";

const ArtWidget = (props: any) => {
  const [isFullScreenBanner, setIsFullScreenBanner] = useState(false);
  const [artistForModalModal, setArtistForModalModal] = useState<IArtist | null>(null);
  const refToPageArtBanner = useRef(null);

  const [artPiece, setArtPiece] = useState<IArtPiece | undefined>(props.initialArt);

  const isArtistModalOpened = artistForModalModal ? true : false;

  const videoContainerState = useState<VideoContainer>({
    videoLoadingStatus: VideoLoadingStatuses.loading,
    video: props.initialArt ? props.initialArt.video : null,
  });
  const [videoContainer, setVideoContainer] = videoContainerState;

  const audioContainerState = useState<AudioContainer>({
    audioLoadingStatus: AudioLoadingStatuses.loading,
    audio: props.initialArt ? props.initialArt.audio : null,
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
    errorPolicy: "all"
  });

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
    // for smooth transition animation do not update data if
    // they provided initially 
    if (artQueryData && artQueryData.arts && !props.initialArt) {
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
    } else if (artQueryData && !artQueryData.arts) {
      // TODO show error page ???
    }
  }, [artQueryData]);

  const toogleBannerFullScreen = (isFullScreen: boolean) => {
    setIsFullScreenBanner(isFullScreen);
  };

  useEffect(() => {
    if (isFullScreenBanner || isArtistModalOpened) {
      document.getElementsByTagName("html")[0].classList.add("overflow-hidden");
    } else {
      document.getElementsByTagName("html")[0].classList.remove("overflow-hidden");
    }
    return () => document.getElementsByTagName("html")[0].classList.remove("overflow-hidden");
  }, [isFullScreenBanner, isArtistModalOpened]);

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
                    artReleased={artPiece?.artReleased}
                  />
                </div>
              </Col>
            </Row>
            <ArtBodyRightPart artPiece={artPiece} setArtistForModalModal={setArtistForModalModal}/>
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
            artReleased={artPiece?.artReleased}
          />
        </div>
      ) : null}
      {artPiece?.artReleased && <ArtBannerMini
        image={artPiece?.thumbnail}
        isVisible={!isFullScreenBanner && !isPageArtBannerVisible}
        setIsFullScreenBanner={() => toogleBannerFullScreen(true)}
      />}
      <AnimatePresence mode="wait">
        {isArtistModalOpened ? <ArtistModal closeModal={() => setArtistForModalModal(null)} artist={artistForModalModal!} /> : null}
      </AnimatePresence>
      {artPiece?.metaTitle ? <PageSpecificSEO 
        title={artPiece.metaTitle}
        description={artPiece.metaDescription }
        imageSrc={artPiece.metaImage?.url}
        keywords={artPiece.metaTags}
        pageUrl={window.location.href}
      /> : null}
    </>
  );
};

export default ArtWidget;
