import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";
import { useState } from "react";

export const Carousel = ({ items, handleClick }) => {
  const imgStyle = {
    width: "100%",
    objectFit: "cover",
    height: "100px",
  };

  const carouselItems = items?.map((val, index) => (
    <div
      className="item"
      onClick={() => {
        handleClick(val);
      }}
    >
      <img alt="" style={imgStyle} src={val}></img>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 4,
    },
    1024: {
      items: 5,
    },
  };
  return (
    <div>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        items={carouselItems}
        disableDotsControls
        touchTracking
      />
    </div>
  );
};
