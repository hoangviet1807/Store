import { Button, Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import './style.css'

export const DetailProduct = () => {
    const price = 1200000
    return (
        <Layout>
            <Layout >
                <Content
                    className="site-layout-background"
                    style={{
                        padding: '30px 10%',
                        margin: 0,
                        minHeight: 280,
                        display: 'flex'
                    }}
                >
                    <div className='img-product'>
                        <div className='img'>
                            <img src='https://bizweb.dktcdn.net/thumb/grande/100/318/614/products/2-21.jpg?v=1643170716000' alt='product' />
                        </div>
                    </div>
                    <div className='info-product'>
                        <div className='name'>
                            INTRO FLEECE VARSITY JACKET
                        </div>

                        <div style={{ display: 'flex' }}>
                            <div className='brand'>
                                Thương hiệu:NEEDS OF WISDOM®
                            </div>
                            <div className='status'>
                                Tình trạng:Còn hàng
                            </div>
                        </div>

                        <div className='price'>
                            {price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                        </div>
                        <div className='size'>
                            <Button block type="primary" ghost style={{ whiteSpace: "normal", height: 'auto', marginBottom: '10px' }}>M</Button>
                            <Button>M</Button>
                            <Button>L</Button>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

// INTRO FLEECE VARSITY JACKET
// Thương hiệu:NEEDS OF WISDOM®   |  Tình trạng:Còn hàng1.195.000₫
// NEEDS OF WISDOM® / Streetwear / Based in Saigon / Made in Vietnam