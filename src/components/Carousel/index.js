import React from "react";
import "./style.css";
import { Carousel } from "@trendyol-js/react-carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ENV } from "../../config/config";

export const Carousel1 = ({ items, handleClick }) => {
  const imgStyle = {
    width: "100%",
    objectFit: "cover",
    height: "100px",
  };

  console.log(items.map((val) => val.fileName));

  return (
    <Carousel
      className="carousel"
      show={4}
      responsive={true}
      rightArrow={
        <Button
          size="small"
          style={{ margin: "0 5px" }}
          icon={<RightOutlined />}
        />
      }
      leftArrow={
        <Button
          style={{ margin: "0 5px" }}
          size="small"
          icon={<LeftOutlined />}
        />
      }
    >
      {items.map((val, index) => (
        <div key={index} style={{ width: "95%" }}>
          <img
            onClick={() => handleClick(val.fileName)}
            src={ENV + val.fileName}
            alt={"img"}
            style={imgStyle}
            loading="lazy"
          />
        </div>
      ))}
    </Carousel>
  );
};
