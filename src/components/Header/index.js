import "antd/dist/antd.css";
import { Layout, Menu, Badge, Button, Drawer } from "antd";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Mobile } from "../common/isMobile";

const { SubMenu } = Menu;

export const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.defaultReducers.cart);
  const isMobile = Mobile();
  const [visible, setVisible] = useState(false);

  const renderQuantity = () => {
    return cart.reduce((sum, item) => {
      return (sum += item.quantity);
    }, 0);
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const tee = "tee";
  const defaultMenu = () => {
    return (
      <div className="menu">
        <Menu
          theme="light"
          mode={"horizontal"}
          defaultSelectedKeys={["1"]}
          style={{ placeContent: "center", width: "100%" }}
        >
          <Menu.Item
            key="1"
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </Menu.Item>
          <SubMenu key="SubMenu" title="CLOTHING">
            <Menu.Item
              onClick={() => {
                navigate(`/collection/${tee}`);
              }}
              key="setting:1"
            >
              TEE
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/collection/pant");
              }}
              key="setting:2"
            >
              PANT
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/collection/accessories");
              }}
              key="setting:3"
            >
              ACCESSORIES
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/collection/jacket");
              }}
              key="setting:4"
            >
              JACKET
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            onClick={() => {
              navigate("/collection/all");
            }}
            key="3"
          >
            ALL ITEM
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              navigate("/contact");
            }}
            key="4"
          >
            CONTACT
          </Menu.Item>
        </Menu>

        <Menu theme="light" mode="horizontal" className="icon-cart-fs">
          <div>
            <Badge count={renderQuantity()} size="small">
              <Button
                type="text"
                // shape="circle"
                onClick={() => navigate("/cart")}
                icon={<ShoppingCartOutlined />}
              />
            </Badge>
          </div>
        </Menu>
      </div>
    );
  };

  const MenuResponsive = () => {
    return (
      <Drawer
        className="drawer"
        placement="left"
        onClose={onClose}
        visible={visible}
        style={{ padding: 0 }}
      >
        <Menu
          theme="light"
          mode={"inline"}
          defaultSelectedKeys={["1"]}
          style={{ placeContent: "center", width: "100%" }}
        >
          <Menu.Item
            key="1"
            onClick={() => {
              navigate("/");
              setVisible(false);
            }}
          >
            HOME
          </Menu.Item>
          <SubMenu key="SubMenu" title="CLOTHING">
            <Menu.Item
              onClick={() => {
                navigate("/collection/tee");
                setVisible(false);
              }}
              key="setting:1"
            >
              TEE
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/collection/pant");
                setVisible(false);
              }}
              key="setting:2"
            >
              PANT
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/collection/accessories");
                setVisible(false);
              }}
              key="setting:3"
            >
              ACCESSORIES
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/collection/jacket");
                setVisible(false);
              }}
              key="setting:4"
            >
              JACKET
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            onClick={() => {
              navigate("/collection/all");
              setVisible(false);
            }}
            key="3"
          >
            ALL ITEM
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              navigate("/");
              setVisible(false);
            }}
            key="4"
          >
            CONTACT
          </Menu.Item>
        </Menu>

        <Menu theme="light" mode="horizontal" className="icon-cart-fs">
          <div>
            <Badge count={renderQuantity()} size="small">
              <Button
                type="text"
                // shape="circle"
                onClick={() => navigate("/cart")}
                icon={<ShoppingCartOutlined />}
              />
            </Badge>
          </div>
        </Menu>
      </Drawer>
    );
  };

  return (
    <Layout>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div>SDT: 0292384723</div>
          <div style={{ padding: "0 10px" }}>
            <span>Dang nhap</span>
            <span>Dang ky</span>
            <span>Lien he</span>
          </div>
        </div>
      </Menu>
      <div
        style={{
          padding: "20px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="sidenav">
          <MenuOutlined onClick={showDrawer} />
        </div>
        <img
          src="https://bizweb.dktcdn.net/100/318/614/themes/667160/assets/logo.png?1644389389404"
          alt="logo"
        />
        <div className="cart-responsive">
          <Badge count={renderQuantity()} size="small">
            <Button
              type="text"
              // shape="circle"
              onClick={() => navigate("/cart")}
              icon={<ShoppingCartOutlined />}
            />
          </Badge>
        </div>
      </div>
      {isMobile ? MenuResponsive() : defaultMenu()}
    </Layout>
  );
};
