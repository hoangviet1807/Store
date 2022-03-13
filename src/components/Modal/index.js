import React from "react";
import { Modal, Button } from "antd";

export const SimpleModal = ({ isModalVisible, setIsModalVisible }) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        centered
        title="Thông báo"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Thêm vào giỏ hàng thành công...</p>
        <Button>Xem giỏ hàng</Button>
      </Modal>
    </>
  );
};
