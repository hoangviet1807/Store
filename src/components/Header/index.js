import "antd/dist/antd.css";
import { Layout, Menu, Badge, Button, Drawer, Input } from "antd";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Mobile } from "../common/isMobile";
import { useQueryClient } from "react-query";

export const Header = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate();
  const cart = useSelector((state) => state.defaultReducers.cart);
  const isMobile = Mobile();
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("")

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

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSearch = () => {
    queryClient.removeQueries('search_product')
    navigate(`/search/${searchText}`);
  }

  const items = [
    {
      label: 'HOME',
      key: '/',
    },
    {
      label: 'CLOTHING',
      key: '/clothing',
      children: [
        {
          label: 'TEE',
          key: '/tee',
        },
        {
          label: 'PANT',
          key: '/pant',
        },
        {
          label: 'ACCESSORIES',
          key: '/accessories',
        },
        {
          label: 'JACKET',
          key: '/jacket',
        },
      ]
    },
    {
      label: 'ALL ITEMS',
      key: '/all-items',
    },
    {
      label: 'CONTACT',
      key: '/contact',
    },
  ]

  const handleNavigate = (e) => {
    navigate(e.key)
  }

  const defaultMenu = () => {
    return (
      <div className="menu">
        {/* <Menu
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
                navigate(`/collection/tee`);
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
        </Menu> */}
        <Menu onClick={handleNavigate} theme="light"
          mode={"horizontal"}
          defaultSelectedKeys={["1"]}
          style={{ placeContent: "center", width: "100%" }} items={items} />
        <Menu theme="light" mode="horizontal" className="icon-cart-fs">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <Input onChange={handleChange} onPressEnter={handleSearch} />
            </div>
            <Badge count={renderQuantity()} size="small">
              <Button
                type="text"
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
        <Menu onClick={handleNavigate} theme="light"
          mode={"vertical"}
          defaultSelectedKeys={["1"]}
          style={{ placeContent: "center", width: "100%" }} items={items} />

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
          {/* <div className="action">
            <span>Đăng nhập</span>
            <span>Đăng ký</span>
            <span>Liên hệ</span>
          </div> */}
          <ul className="action">
            <li>Đăng nhập</li>
            <li>Đăng ký</li>
            <li>Liên hệ</li>
          </ul>
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
        {/* <img
          src="https://bizweb.dktcdn.net/100/318/614/themes/667160/assets/logo.png?1644389389404"
          alt="logo"
        /> */}
        <div className="cart-responsive">
          <Badge count={renderQuantity()} size="small">
            <Button
              type="text"
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
