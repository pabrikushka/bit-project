import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IArtist } from "../types";

interface MarketplaceFooterProps {
  artist: IArtist;
}

const MarketplaceFooter = (props: MarketplaceFooterProps) => {
  const { artist } = props;
  return (
    <Row className="g-2 mt-4">
      <Col xs={12}>
        <h3 className="small font-aeonik text-light-70 mb-md-0">Marketplace</h3>
      </Col>
      <Col xs={12} md={3}>
        <a className="nav-link p-0 text-start fs-1" href={artist.openSea ?? "#"}>
          <span className="h5 m-0">OpenSea</span>
        </a>
      </Col>
      <Col xs={12} md={3}>
        <a className="nav-link p-0 text-start fs-1" href={artist.foundation ?? "#"}>
          <span className="h5 m-0">Fountain</span>
        </a>
      </Col>
      <Col xs={12} md={3}>
        <a className="nav-link p-0 text-start fs-1" href={artist.superRare ?? "#"}>
          <span className="h5 m-0">SuperRare</span>
        </a>
      </Col>
      <Col xs={12} md={3}>
        <a className="nav-link p-0 text-start fs-1" href={artist.rairable ?? "#"}>
          <span className="h5 m-0">Rairable</span>
        </a>
      </Col>
    </Row>
  );
};

export default MarketplaceFooter;
