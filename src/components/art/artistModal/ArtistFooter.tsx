import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface ArtistFooterProps {}

const ArtistFooter = (props: ArtistFooterProps) => {
  return (
    <div className="mt-3  pt-3">
      <div className="separator mt-5 mb-3"></div>
      <div className="d-flex flex-md-column">
        <Row className="g-2 mt-4">
          <Col xs={12}>
            <h3 className="small font-aeonik text-light-70 mb-md-0">Socials</h3>
          </Col>
          <Col xs={12} md={3}>
            <a className="nav-link p-0 text-start fs-1">
              <span className="h5 m-0">Discord</span>
            </a>
          </Col>
          <Col xs={12} md={3}>
            <a className="nav-link p-0 text-start fs-1">
              <span className="h5 m-0">Instagram</span>
            </a>
          </Col>
          <Col xs={12} md={3}>
            <a className="nav-link p-0 text-start fs-1">
              <span className="h5 m-0">YouTube</span>
            </a>
          </Col>
          <Col xs={12} md={3}>
            <a className="nav-link p-0 text-start fs-1">
              <span className="h5 m-0">Mastodon</span>
            </a>
          </Col>
        </Row>
        <Row className="g-2 mt-4">
          <Col xs={12}>
            <h3 className="small font-aeonik text-light-70 mb-md-0">Marketplace</h3>
          </Col>
          <Col xs={12} md={3}>
            <a className="nav-link p-0 text-start fs-1">
              <span className="h5 m-0">OpenSea</span>
            </a>
          </Col>
          <Col xs={12} md={3}>
            <a className="nav-link p-0 text-start fs-1">
              <span className="h5 m-0">Fountain</span>
            </a>
          </Col>
          <Col xs={12} md={3}>
            <a className="nav-link p-0 text-start fs-1">
              <span className="h5 m-0">SuperRare</span>
            </a>
          </Col>
          <Col xs={12} md={3}>
            <a className="nav-link p-0 text-start fs-1">
              <span className="h5 m-0">Rairable</span>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ArtistFooter;
