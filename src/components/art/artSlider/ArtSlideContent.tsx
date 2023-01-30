import React from "react";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { ArtSlideData } from "../types";

interface ArtSlideContentProps {
  slide: ArtSlideData
}

const ArtSlideContent = (props: ArtSlideContentProps) => {
  const {slide} = props;
  return (
    <Col xs={12} lg={6}>
      <Link className="art-card slider-card" to={""}>
        <div className="art-card-content d-sm-flex">
          <div className="art-wrapper">
            <img className="art-img" src={slide.image} alt="" />
          </div>
          <div className="art-card-body py-4 py-sm-1 ps-sm-4">
            <div className="art-details d-flex align-items-center justify-content-between justify-content-sm-start mb-1">
              <h4 className="font-aeonik small text-light-70 me-5">{slide.dateStr}</h4>
              <h5 className="font-aeonik small text-light-70">{slide.priceStr}</h5>
            </div>
            <div className="art-card-main">
              <h3 className="mb-0">{slide.description}</h3>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default ArtSlideContent;
