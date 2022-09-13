import { Button, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import "./style.css";
import { Input } from "antd";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import useDetailProduct from "../../hooks/useGetDetailProduct";
import { useLocation } from "react-router-dom";
import { changeColor } from "../../util/convertColor";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/productAction";
import { Spin, Space } from "antd";
import { SimpleModal } from "../../components/Modal";
import { Carousel1 } from "../../components/Carousel";

export const DetailProduct = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.state.id;
  const { data, isLoading } = useDetailProduct(id);
  const [image, setImage] = useState();
  const [colorSelected, setColorSelected] = useState();
  const [sizeSelected, setSizeSelected] = useState();
  const [quantity, setQuantity] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addDataIntoCache = (cacheName, url, response) => {
    // Converting our response into Actual Response form
    const data = new Response(JSON.stringify(response));

    if ("caches" in window) {
      // Opening given cache and putting our data into it
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
        alert("Data Added into cache!");
      });
    }
  };

  const renderLoading = () => {
    if (isLoading) {
      return (
        <div style={{ textAlignLast: "center", padding: "10% 0" }}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      );
    }
  };
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

  const handleAddToCart = (product) => {
    const payload = {
      id: product._id,
      name: product.name,
      price: product.price,
      color: colorSelected ? colorSelected : data?.color[0],
      size: sizeSelected ? sizeSelected : data?.size[0],
      image: product.attachment,
      quantity: parseInt(quantity),
    };
    dispatch(addToCart(payload));
    setIsModalVisible(true);
  };

  useEffect(() => {
    if (data) {
      setColorSelected(data?.colors[0]);
      setSizeSelected(data?.size[0]);
    }
  }, [data]);

  const renderModal = () => {
    return (
      <SimpleModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
        /
      </SimpleModal>
    );
  };

  return (
    <>
      {renderLoading()}
      {!isLoading && data && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderModal()}
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
                    className="zoom-image"
                  />
                </div>

                <div>
                  <Carousel1 items={items} handleClick={setImage} />
                </div>
              </div>

              <div className="info-product">
                <div className="name">{data.name}</div>
                {/* Tinh trang */}
                <div className="brand-info">
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
                    <Tooltip title={color} key={index}>
                      <div
                        onClick={() => setColorSelected(color)}
                        style={{ backgroundColor: changeColor(color) }}
                        className={
                          color === colorSelected ? "color_selected" : "color"
                        }
                      >
                        <span style={{ visibility: "hidden" }}>{color}</span>
                      </div>
                    </Tooltip>
                  ))}
                </div>
                {/* Chon size */}
                <div>Kích thước:</div>
                <div className="size">
                  {data.size.map((option, index) => (
                    <div
                      className={
                        option === sizeSelected
                          ? "size_clothes_selected"
                          : "size_clothes"
                      }
                      key={index}
                    >
                      <Button
                        type="text"
                        onClick={() => setSizeSelected(option)}
                      >
                        <span
                          className={
                            option === sizeSelected ? "size_label" : ""
                          }
                        >
                          Size {option}
                        </span>
                      </Button>
                    </div>
                  ))}
                </div>
                {/* Chon so luong */}
                <div className="action">
                  <div>
                    <header>Số lượng:</header>
                    <div className="input-quantity">
                      <Input
                        onChange={(e) => setQuantity(e.target.value)}
                        defaultValue={1}
                        size="large"
                        style={{ textAlign: "center" }}
                        min={1}
                        type="number"
                      />
                    </div>
                    <Button
                      className="btn-add"
                      onClick={() => {
                        handleAddToCart(data);
                        addDataIntoCache(
                          "MyCache",
                          "https://localhost:300",
                          "SampleData"
                        );
                      }}
                      size="large"
                    >
                      Thêm vào giỏ hàng
                    </Button>
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
