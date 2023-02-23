import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SoundcloudIcon from "../../../assets/icons/soundcloud";
import ApplemusicIcon from "../../../assets/icons/applemusic";
import SpotifyIcon from "../../../assets/icons/spotify";
import Button from "react-bootstrap/Button";

interface ArtistSoundsProps {}

const ArtistSounds = (props: ArtistSoundsProps) => {
  return (
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
  );
};

export default ArtistSounds;
