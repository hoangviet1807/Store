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
import { configImg } from "../../common/constant";
import { ENV } from "../../config/config";

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


  const renderLoading = () => {
    if (isLoading) {
      return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} size="large" >
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      );
    }
  };

  const handleAddToCart = (product) => {
    const payload = {
      id: product._id,
      name: product.name,
      price: product.price,
      color: colorSelected ? colorSelected : data?.color[0],
      size: sizeSelected ? sizeSelected : data?.size[0],
      image: product.attachment[0].fileName,
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
                    src={image ? ENV + image : ENV + data.attachment[0].fileName}
                    // width='100%'
                    // height={500}
                    hasSpacer={true}
                    zoomSrc={image ? ENV + image : ENV + data.attachment[0].fileName}
                    zoomType="hover"
                    zoomPreload={true}
                    fullscreenOnMobile={true}
                    zoomScale={0.3}
                    className="zoom-image"
                  />
                </div>

                <div>
                  <Carousel1 items={data.attachment} handleClick={setImage} />
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
