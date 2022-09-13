import React from "react";
import { useSelector } from "react-redux";
import { Button, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { convertMoney } from "../../util/convertToVND";
import { useDispatch } from "react-redux";
import {
  deleteFromCart,
  handleQuantity,
} from "../../redux/actions/productAction";
import { Mobile } from "../../components/common/isMobile";
import "./style.css";

export const Cart = () => {
  const isMobile = Mobile();
  const cart = useSelector((state) => state.defaultReducers.cart);
  const dispatch = useDispatch();
  const handleAddQuantity = (id, size, color) => {
    const item = {
      id: id,
      size: size,
      color: color,
    };
    dispatch(handleQuantity(item, true));
  };

  const handleReduceQuantity = (id, size, color) => {
    const item = {
      id: id,
      size: size,
      color: color,
    };
    dispatch(handleQuantity(item, false));
  };

  const handleDeleteProduct = (id, size, color) => {
    const item = {
      id: id,
      size: size,
      color: color,
    };
    dispatch(deleteFromCart(item));
  };

  const columns = [
    {
      title: "Ảnh sản phẩm",
      dataIndex: "image",
      key: "image",
      render: (text, row, index) => (
        <img
          style={{ width: "100px", height: "100px" }}
          src={row.image}
          alt=""
        />
      ),
    },
    {
      title: "Tên",
      dataIndex: ["name", "color", "size"],
      key: "name",
      render: (text, row, index) => (
        <div key={index}>
          <p>{row.name}</p>
          <p>
            Size {row.size.toUpperCase()} / {row.color.toUpperCase()}
          </p>
        </div>
      ),
    },
    {
      title: "Giá",
      dataIndex: ["price", "quantity"],
      key: "price",
      render: (text, row, index) => (
        <p key={index}>{convertMoney(row.price, row.quantity)}</p>
      ),
    },
    {
      title: "Số lượng",
      dataIndex: ["quantity", "id", "size", "color", "quantity"],
      key: "quantity",
      render: (text, row, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #dddddd",
            width: "fit-content",
            borderRadius: "15px",
          }}
        >
          <Button
            type="text"
            shape="circle"
            disabled={row.quantity === 1 ? true : false}
            onClick={() => handleReduceQuantity(row.id, row.size, row.color)}
          >
            -
          </Button>
          <span style={{ margin: "0 5px" }}>{row.quantity}</span>
          <Button
            type="text"
            shape="circle"
            onClick={() => handleAddQuantity(row.id, row.size, row.color)}
          >
            +
          </Button>
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: ["quantity", "id", "size", "color"],
      key: "delete",
      render: (text, row, index) => (
        <Button
          key={index}
          onClick={() => handleDeleteProduct(row.id, row.size, row.color)}
          type="text"
          icon={<DeleteOutlined />}
        />
      ),
    },
  ];

  const columnsResponsive = [
    {
      dataIndex: "image",
      key: "image",
      render: (text, row, index) => (
        <img
          style={{ width: "100px", height: "100px" }}
          src={row.image}
          alt=""
        />
      ),
    },
    {
      dataIndex: ["name", "color", "size", "price"],
      key: "name",
      render: (text, row, index) => (
        <div key={index}>
          <p>{row.name}</p>
          <p>
            Size {row.size.toUpperCase()} / {row.color.toUpperCase()}
          </p>
          <p>Giá: {row.price} </p>
        </div>
      ),
    },
    {
      dataIndex: ["quantity", "id", "size", "color", "quantity"],
      key: "quantity",
      render: (text, row, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            key={index}
            style={{
              border: "1px solid #dddddd",
              width: "fit-content",
              borderRadius: "15px",
            }}
          >
            <Button
              type="text"
              shape="circle"
              disabled={row.quantity === 1 ? true : false}
              onClick={() => handleReduceQuantity(row.id, row.size, row.color)}
            >
              -
            </Button>
            <span style={{ margin: "0 5px" }}>{row.quantity}</span>
            <Button
              type="text"
              shape="circle"
              onClick={() => handleAddQuantity(row.id, row.size, row.color)}
            >
              +
            </Button>
          </div>
          <Button
            key={index}
            onClick={() => handleDeleteProduct(row.id, row.size, row.color)}
            type="text"
            icon={<DeleteOutlined />}
          />
        </div>
      ),
    },
  ];

  const renderTotalPrice = () => {
    return cart.reduce((sum, item) => {
      return (sum += parseInt(item.price * item.quantity));
    }, 0);
  };

  return (
    <div className="container-cart">
      <div className="table-cart">
        <Table
          columns={!isMobile ? columns : columnsResponsive}
          dataSource={cart}
          pagination={false}
        />
      </div>

      <div className="table-checkout-cart">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #dddddd",
            padding: "10px",
          }}
        >
          <div>Tổng tiền</div>
          <div>
            {renderTotalPrice().toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
        <div style={{ padding: "20px", textAlign: "center" }}>
          <Button
            style={{
              borderRadius: "15px",
              backgroundColor: "black",
              color: "white",
              fontSize: "16px",
            }}
          >
            THANH TOÁN
          </Button>
        </div>
      </div>
    </div>
  );
};
