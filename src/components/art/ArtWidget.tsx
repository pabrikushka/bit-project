import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { artItemToIArtPiece, prepareArtSlides } from "./helpers";
import {
  AudioContainer,
  AudioLoadingStatuses,
  IArtPiece,
  VideoContainer,
  VideoLoadingStatuses,
} from "./types";
import ArtBanner from "./artBanner/ArtBanner";
import ArtBannerMini from "./ArtBannerMini";
import ArtHeader from "./ArtHeader";
import ArtSlider from "./artSlider/ArtSlider";
import ArtistModal from "./artistModal/ArtistModal";
import { useQuery } from "@apollo/client";
import { GET_ART } from "../../services/graphql/artQuery";
import { useParams } from "react-router-dom";
import { IArtist } from "./artistModal/types";
import PageSpecificSEO from "../seo/PageSpecificSEO";
import ArtBodyRightPart from "./ArtBodyRightPart";
import ShareModal from "./share/ShareModal";
import TransitAnimator from "../../shared/TransitAnimator";
import ArtGroup from "./artViewAll/ArtGroup";

const ArtWidget = (props: any) => {
  const [isFullScreenBanner, setIsFullScreenBanner] = useState(false);
  const [artistForModal, setArtistForModal] = useState<IArtist | null>(null);
  const [isShareModelOpened, setIsShareModelOpened] = useState<boolean>(false);
  const refToPageArtBanner = useRef(null);
  const [animationImage, setAnimationImage] = useState<string | null>(null);

  const [artPiece, setArtPiece] = useState<IArtPiece | undefined>(
    props.initialArt
  );

  const isArtistModalOpened = artistForModal ? true : false;

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
    errorPolicy: "all",
  });

  const targetRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetElement = targetRef.current;
      const targetHeight = targetElement.offsetHeight
      setIsScrolled(scrollPosition > targetHeight-60);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    //document.documentElement.scrollTop || document.body.scrollTop
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      // @ts-ignore
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });

    const handlePopstate = (event: PopStateEvent) => {
      if (!event.currentTarget) {
        return;
      }
      const currentTarget = event.currentTarget as Window;
      const pathName = currentTarget.location?.pathname ?? "";
      if (pathName.includes("history"))
        sessionStorage.setItem("scrollPositionArtId", params.artId);
    };

    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [params.artId]);

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
    if (isFullScreenBanner || isArtistModalOpened || isShareModelOpened) {
      document.getElementsByTagName("html")[0].classList.add("overflow-hidden");
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-hidden");
    }
    return () =>
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-hidden");
  }, [isFullScreenBanner, isArtistModalOpened, isShareModelOpened]);

  return (
    <>
      <motion.main
        className=""
        exit={{
          y: "-4rem",
          scale: 0.8,
          opacity: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          scale: {
            duration: 1,
          },
        }}
        //onAnimationStart={() => setExitAnimationStarting(true)}
      >
        <section>
          <Container className="px-xl-5">
            <Row ref={targetRef}>
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
                    setIsShareModelOpened={setIsShareModelOpened}
                  />
                </div>
              </Col>
            </Row>
            <ArtBodyRightPart
              artPiece={artPiece}
              setArtistForModal={setArtistForModal}
              setIsShareModelOpened={setIsShareModelOpened}
            />
          </Container>
        </section>
        {/* <ArtSlider slides={prepareArtSlides()} /> */}
        <ArtGroup setAnimationImage={setAnimationImage} />
      </motion.main>
      {isFullScreenBanner ? (
        <div className="full-screen position-fixed w-100 vh-100 top-0 left-0 d-flex align-items-center justify-content-center">
          <ArtBanner
            image={artPiece?.mainImage}
            videoContainerState={videoContainerState}
            audioContainerState={audioContainerState}
            isFullScreenBanner={true}
            setIsFullScreenBanner={toogleBannerFullScreen}
            artReleased={artPiece?.artReleased}
            setIsShareModelOpened={setIsShareModelOpened}
          />
        </div>
      ) : null}
      {artPiece?.artReleased && (
        <ArtBannerMini
          image={artPiece?.thumbnail}
          isVisible={!isFullScreenBanner && isScrolled && !animationImage}
          setIsFullScreenBanner={() => toogleBannerFullScreen(true)}
        />
      )}
      <AnimatePresence mode="wait">
        {isArtistModalOpened ? (
          <ArtistModal
            closeModal={() => setArtistForModal(null)}
            artist={artistForModal!}
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isShareModelOpened ? (
          <ShareModal
            closeModal={() => setIsShareModelOpened(false)}
            title={artPiece?.title}
          />
        ) : null}
      </AnimatePresence>
      {artPiece?.metaTitle ? (
        <PageSpecificSEO
          title={artPiece.metaTitle}
          description={artPiece.metaDescription}
          imageSrc={artPiece.metaImage?.url}
          keywords={artPiece.metaTags}
          pageUrl={window.location.href}
        />
      ) : null}
      <TransitAnimator image={animationImage} />
    </>
  );
};

export default ArtWidget;
