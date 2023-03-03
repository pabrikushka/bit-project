import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IVisualArtistGallery } from "./types";

interface ArtistGalleryProps {
  artistGalleryCollection: IVisualArtistGallery[];
}

const ArtistGallery = (props: ArtistGalleryProps) => {
  const { artistGalleryCollection } = props;
  return (
    <div className="mt-5">
      <Row className="g-4 row-cols-2">
        {artistGalleryCollection.map((item: IVisualArtistGallery) => {
          return (
            <Col key={item.id}>
              <img src={item.url} alt={item.title} className="artist-gallery-img w-100" />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ArtistGallery;
