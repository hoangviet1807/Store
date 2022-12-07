import React from "react";
import { Modal, Button } from "antd";
import "./style.css";
import { useNavigate } from "react-router-dom";
export const SimpleModal = ({ isModalVisible, setIsModalVisible }) => {
  const navigate = useNavigate()
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleClickToCart = () => {
    navigate(`/cart`);
  }

  return (
    <>
      <Modal
        centered
        title="Thông báo"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={"fit-content"}
      >
        <p style={{ fontWeight: 700, fontSize: "18px", fontStyle: "italic" }}>
          Thêm vào giỏ hàng thành công...
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            style={{
              backgroundColor: "black",
              color: "white",
              textTransform: "uppercase",
              fontWeight: 700,
              margin: "0 5px",
            }}
            onClick={handleCancel}
          >
            Tiếp tục mua sắm
          </Button>
          <Button
            type="text"
            style={{
              backgroundColor: "black",
              color: "white",
              textTransform: "uppercase",
              fontWeight: 700,
              margin: "0 5px",
            }}
            onClick={handleClickToCart}
          >
            Xem giỏ hàng
          </Button>
        </div>
      </Modal>
    </>
  );
};
