import React from "react";
import Container from "react-bootstrap/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import honeybadger from "../../assets/images/honeybadger.jpg";
import { Link } from "react-router-dom";
import ArtSlide from "./ArtSlide";

interface ArtSliderProps {}

const ArtSlider = (props: ArtSliderProps) => {
  return (
    <section className="art-slider">
      <Container className="px-xl-5">
        <Row className="g-0">
          <Swiper
            className="mySwiper"
            // spaceBetween={50}
            // slidesPerView={3}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <ArtSlide />
            <ArtSlide />
            <ArtSlide />
          </Swiper>
        </Row>
        {/* <Row className="g-0">
          <Col xs={12} lg={6}>
            <Link className="art-card slider-card" to={""}>
              <div className="art-card-content d-sm-flex">
                <div className="art-wrapper">
                  <img className="art-img" src={honeybadger} alt="" />
                </div>
                <div className="art-card-body py-4 py-sm-1 ps-sm-4">
                  <div className="art-details d-flex align-items-center justify-content-between justify-content-sm-start mb-1">
                    <h4 className="font-aeonik small text-light-70 me-5">March 25, 2014</h4>
                    <h5 className="font-aeonik small text-light-70">1BTC:$438.89</h5>
                  </div>
                  <div className="art-card-main">
                    <h3 className="mb-0">IRS declares bitcoin be taxed as property</h3>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};

export default ArtSlider;
