import { Button } from "antd";
import React, { useCallback, useState } from "react";
import "./style.css";
import { Input } from "antd";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import useDetailProduct from "../../hooks/useGetDetailProduct";
import { useLocation } from "react-router-dom";
import { Carousel } from "../../components/Carousel";

export const DetailProduct = () => {
  const location = useLocation();
  const id = location.state.id;
  const { data, isLoading } = useDetailProduct(id);
  const [image, setImage] = useState();
  const [color, setColor] = useState();
  const [size, setSize] = useState();

  const items = [
    "https://www.w3schools.com/howto/img_forest.jpg",
    "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://static.remove.bg/remove-bg-web/726c8211ef4fdb5ce44accdf843f9bab4d2a356a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    "https://bizweb.dktcdn.net/thumb/grande/100/318/614/products/2-15.jpg?v=1646202684000",

    "https://www.w3schools.com/howto/img_forest.jpg",
    "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://static.remove.bg/remove-bg-web/726c8211ef4fdb5ce44accdf843f9bab4d2a356a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    "https://bizweb.dktcdn.net/thumb/grande/100/318/614/products/2-15.jpg?v=1646202684000",
  ];

  console.log(data);

  return (
    <>
      {!isLoading && data && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "80%",
              color: "white",
            }}
          >
            <div className="detail_product">
              <div className="image_product">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "15px",
                  }}
                >
                  <InnerImageZoom
                    src={image ? image : data.attachment}
                    width={500}
                    height={500}
                    hasSpacer={true}
                    zoomSrc={image ? image : data.attachment}
                    zoomType="hover"
                    zoomPreload={true}
                    fullscreenOnMobile={true}
                    zoomScale={1.5}
                  />
                </div>

                <div>
                  <Carousel items={items} handleClick={setImage} />
                </div>
              </div>

              <div className="info-product">
                <div className="name">{data.name}</div>
                {/* Tinh trang */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "15px 0",
                    color: "black",
                  }}
                >
                  <div className="brand">Thương hiệu: NEEDS OF WISDOM®</div>
                  <span className="hidden-xs">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                  <div className="status">
                    Tình trạng:{" "}
                    <span style={{ color: "blue", padding: 0 }}> Còn hàng</span>
                  </div>
                </div>
                {/* Gia tien */}
                <div className="price">
                  {data.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
                {/* Chon mau */}
                <div>Màu sắc:</div>
                <div className="colors">
                  {data.colors.map((color, index) => (
                    <div className="color" key={index}></div>
                  ))}
                </div>
                {/* Chon size */}
                <div className="size">
                  {data.size.map((option, index) => (
                    <Button key={index} style={{ margin: "10px 10px 10px 0" }}>
                      Size {option}
                    </Button>
                  ))}
                </div>
                {/* Chon so luong */}
                <div>
                  <header>Số lượng:</header>
                  <div style={{ padding: "20px 0" }}>
                    <Input
                      defaultValue={1}
                      size="large"
                      style={{ width: "80px", marginRight: "10px" }}
                      type="number"
                    />
                    <Button size="large">Thêm vào giỏ hàng</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
