import React from "react";
import "swiper/css";
import Container from "react-bootstrap/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import Row from "react-bootstrap/Row";
import ArtSlideContent from "./ArtSlideContent";
import { ArtSlideData } from "../types";

interface ArtSliderProps {
  slides: ArtSlideData[];
}

const ArtSlider = (props: ArtSliderProps) => {
  const { slides } = props;
  return (
    <section className="art-slider">
      <Container className="px-xl-5">
        <Row className="g-0">
          {/* <Swiper slidesPerView={1}>
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <ArtSlideContent slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper> */}
        </Row>
      </Container>
    </section>
  );
};

export default ArtSlider;
