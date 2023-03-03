import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IArtist } from "../types";

interface SocialsFooterProps {
  artist: IArtist;
}

const SocialsFooter = (props: SocialsFooterProps) => {
  const { artist } = props;
  return (
    <Row className="g-2 mt-4">
      <Col xs={12}>
        <h3 className="small font-aeonik text-light-70 mb-md-0">Socials</h3>
      </Col>
      <Col xs={12} md={3}>
        <a className="nav-link p-0 text-start fs-1" href={artist.discord ?? "#"}>
          <span className="h5 m-0">Discord</span>
        </a>
      </Col>
      <Col xs={12} md={3}>
        <a className="nav-link p-0 text-start fs-1" href={artist.instagram ?? "#"}>
          <span className="h5 m-0">Instagram</span>
        </a>
      </Col>
      <Col xs={12} md={3}>
        <a className="nav-link p-0 text-start fs-1" href={artist.youTube ?? "#"}>
          <span className="h5 m-0">YouTube</span>
        </a>
      </Col>
      <Col xs={12} md={3}>
        <a className="nav-link p-0 text-start fs-1" href={artist.mastodon ?? "#"}>
          <span className="h5 m-0">Mastodon</span>
        </a>
      </Col>
    </Row>
  );
};

export default SocialsFooter;
