import { Layout } from 'antd';
import './style.css'

const { Content } = Layout;


export const HomePage = () => {

    return (
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
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}
