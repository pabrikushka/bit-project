import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnimatedArrow from "../../assets/icons/animatedArrow";
import Button from "react-bootstrap/Button";
import { artBodyAnimationSettings } from "./helpers";
import { IArtPiece } from "./types";
import ArtBody from "./ArtBody";
import ArtCredits from "./ArtCredits";

interface ArtBodyRightPartProps {
  artPiece: IArtPiece | undefined;
  setArtistForModal: any;
  setIsShareModelOpened: any;
}

const ArtBodyRightPart = (props: ArtBodyRightPartProps) => {
  const { artPiece, setArtistForModal, setIsShareModelOpened } = props;

  return (
    <motion.div
      initial={artBodyAnimationSettings.initial}
      animate={artBodyAnimationSettings.animate}
      transition={artBodyAnimationSettings.transition}
    >
      <Row className="art-body position-relative">
        <Col xs={12} lg={7} className="art-body-main">
          <ArtBody content={artPiece?.content} demoContent={artPiece?.demoContent} overview={artPiece?.overview} contentReleased={artPiece?.contentReleased} />
          <div className="btn-holder w-100 d-lg-block mt-5">
            <Button 
              variant="outline-primary" 
              className="bit-btn icon-btn w-100" 
              onClick={() => setIsShareModelOpened(true)}>
              <AnimatedArrow />
              Share This
            </Button>
          </div>
        </Col>
        <Col xs={12} lg={5} className="art-credits-col ps-xl-5 px-xxl-5 mt-5 mt-lg-0">
          <div className="art-credits-holder ps-xl-5 px-xxl-5">
            <ArtCredits setArtistForModal={setArtistForModal} artPiece={artPiece} visualArtist={artPiece?.visualArtist} />
          </div>
        </Col>
        <Col xs={12}></Col>
      </Row>
    </motion.div>
  );
};

export default ArtBodyRightPart;
