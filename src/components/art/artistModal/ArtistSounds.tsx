import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SoundcloudIcon from "../../../assets/icons/soundcloud";
import ApplemusicIcon from "../../../assets/icons/applemusic";
import SpotifyIcon from "../../../assets/icons/spotify";
import Button from "react-bootstrap/Button";
import { IArtist } from "./types";

interface ArtistSoundsProps {
  artist: IArtist;
}

const ArtistSounds = (props: ArtistSoundsProps) => {
  const { artist } = props;
  return (
    <div className="mt-5">
      <Row className="g-4">
        <Col lg="auto">
          <Button variant="outline-primary" className="bit-btn icon-btn d-flex d-lg-inline-flex align-items-center" href={artist.spotify ?? "#"}>
            <SpotifyIcon />
            Spotify
          </Button>
        </Col>
        <Col lg="auto">
          <Button variant="outline-primary" className="bit-btn icon-btn d-flex d-lg-inline-flex align-items-center" href={artist.appleMusic ?? "#"}>
            <ApplemusicIcon />
            Apple Music
          </Button>
        </Col>
        <Col lg="auto">
          <Button variant="outline-primary" className="bit-btn icon-btn d-flex d-lg-inline-flex align-items-center" href={artist.soundcloud ?? "#"}>
            <SoundcloudIcon />
            Soundcloud
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ArtistSounds;
