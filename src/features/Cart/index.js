import React from "react";
import { useSelector } from "react-redux";
import { Button, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const Cart = () => {
  const cart = useSelector((state) => state.defaultReducers.cart);

  console.log("cart", cart);

  const columns = [
    {
      title: "Ảnh sản phẩm",
      dataIndex: "image",
      key: "image",
      render: () => (
        <img
          style={{ width: "100px", height: "100px" }}
          src={cart.map((val) => val.image)}
        />
      ),
    },
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Giá", dataIndex: "price", key: "price" },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: () => (
        <div>
          <Button type="default" shape="circle">
            -
          </Button>
          <span style={{ margin: "0 5px" }}>
            {cart.map((val) => val.quantity)}
          </span>
          <Button type="default" shape="circle">
            +
          </Button>
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "delete",
      render: () => <Button type="text" icon={<DeleteOutlined />} />,
    },
  ];

  return (
    <div style={{ padding: "5% 10%" }}>
      <Table columns={columns} dataSource={cart} />
    </div>
  );
};
