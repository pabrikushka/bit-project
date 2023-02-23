import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fellas from "../../../assets/images/fellas.jpg";

interface ArtistGalleryProps {}

const ArtistGallery = (props: ArtistGalleryProps) => {
  return (
    <div className="mt-5">
      <Row className="g-4 row-cols-2">
        <Col>
          <img src={fellas} alt="" className="artist-gallery-img w-100" />
        </Col>
        <Col>
          <img src={fellas} alt="" className="artist-gallery-img w-100" />
        </Col>
        <Col>
          <img src={fellas} alt="" className="artist-gallery-img w-100" />
        </Col>
        <Col>
          <img src={fellas} alt="" className="artist-gallery-img w-100" />
        </Col>
      </Row>
    </div>
  );
};

export default ArtistGallery;
