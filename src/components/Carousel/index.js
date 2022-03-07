import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";

export const Carousel = ({ items, handleClick }) => {
  const imgStyle = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  };

  const carouselItems = items?.map((val) => (
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
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      items={carouselItems}
      disableDotsControls
    />
  );
};
