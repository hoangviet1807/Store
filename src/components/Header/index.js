import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './style.css'
import React from 'react'

const { SubMenu } = Menu;

export const Header = () => {
    return (

        <Layout>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                    <div>
                        SDT: 0292384723
                    </div>
                    <div style={{ padding: '0 10px' }}>
                        <span>Dang nhap</span>
                        <span>Dang ky</span>
                        <span>Lien he</span>
                    </div>
                </div>
            </Menu>
            <div style={{ padding: '20px 0px', alignSelf: 'center' }}>
                <img src='https://bizweb.dktcdn.net/100/318/614/themes/667160/assets/logo.png?1644389389404' alt='logo' />
            </div>
            <div style={{ display: 'flex' }}>
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{ placeContent: 'center', width: '100%', paddingLeft: '15%' }}>
                    <Menu.Item key="1">HOME</Menu.Item>
                    <SubMenu key="SubMenu" title="CLOTHING">
                        <Menu.Item key="setting:1">TEE</Menu.Item>
                        <Menu.Item key="setting:2">PANT</Menu.Item>
                        <Menu.Item key="setting:3">ACCESSORIES</Menu.Item>
                        <Menu.Item key="setting:4">JACKT</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="3">ALL ITEM</Menu.Item>
                    <Menu.Item key="4">CONTACT</Menu.Item>
                </Menu>

                <Menu theme="light" mode="horizontal" style={{ placeContent: 'center', width: '100%' }}>
                    <div>
                        <ShoppingCartOutlined />
                    </div>
                </Menu>
            </div>
        </Layout>
    )
}
