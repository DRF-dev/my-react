import React from 'react';
import {
  Carousel,
  Image,
} from 'react-bootstrap';

const itemCarroussel = ({ images }) => (
  <Carousel>
    {images.map((img) => (
      <Carousel.Item className="carroussel-item">
        <Image src={img} fluid />
      </Carousel.Item>
    ))}
  </Carousel>
);

export default itemCarroussel;
