import 'antd/dist/antd.css';
import { Layout, Menu, Button } from 'antd';
import { ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import './style.css'


const { SubMenu } = Menu;
const { Content } = Layout;


export const HomePage = () => {

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

            <Layout>
                <Layout >
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: '30px 10%',
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <div className='product'>
                            <div className='img'>
                                <img src='https://bizweb.dktcdn.net/thumb/grande/100/318/614/products/2-21.jpg?v=1643170716000' alt='product' style={{ width: '100%' }} />
                                <div className='info'>
                                    <div className='name_product'>INTRO FLEECE VARSITY JACKET</div>
                                    <div>1.195.000₫</div>
                                </div>

                            </div>
                            {/* <div className='img'>
                                <img src='https://bizweb.dktcdn.net/thumb/grande/100/318/614/products/2-21.jpg?v=1643170716000' alt='product' style={{ width: '100%' }} />
                            </div>
                            <div className='img'>
                                <img src='https://bizweb.dktcdn.net/thumb/grande/100/318/614/products/2-21.jpg?v=1643170716000' alt='product' style={{ width: '100%' }} />
                            </div>
                            <div className='img'>
                                <img src='https://bizweb.dktcdn.net/thumb/grande/100/318/614/products/2-21.jpg?v=1643170716000' alt='product' style={{ width: '100%' }} />
                            </div> */}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
