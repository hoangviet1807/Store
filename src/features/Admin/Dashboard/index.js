import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { AddProduct } from './AddProduct';
import { Order } from './Orders';
import './style.css'
const { Header, Sider, Content } = Layout;

export const DashBoard = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('item1');


    const componentsSwtich = (key) => {
        switch (key) {
            case '1':
                return (<h1>item1</h1>);
            case 'orders':
                return (<Order />);
            case 'products':
                return (<AddProduct />);
            default:
                break;
        }
    };

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider style={{ width: 'fit-content' }}>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={(e) => setSelectedMenuItem(e.key)}
                    items={[
                        {
                            key: '0',
                            icon: <img src="https://bizweb.dktcdn.net/100/318/614/themes/667160/assets/logo.png?1644389389404" style={{ width: '90%' }} />,

                        },
                        {
                            key: 'dashboard',
                            icon: <UserOutlined />,
                            label: 'Dashboard',

                        },
                        {
                            key: 'orders',
                            icon: <VideoCameraOutlined />,
                            label: 'Orders',
                        },
                        {
                            key: 'products',
                            icon: <VideoCameraOutlined />,
                            label: 'Products',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                    }}
                >
                    {componentsSwtich(selectedMenuItem)}
                </Content>

            </Layout>
        </Layout>
    );
};
