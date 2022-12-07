import { Badge, Button, Input, Select, Space } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { configImg } from '../../../common/constant';
import { convertPrice } from '../../../common/convert_price';
import { District } from '../../../common/district';
import { Province } from '../../../common/province';
import { Ward } from '../../../common/ward';
import { ENV } from '../../../config/config';
import './style.css'
const Option = Select.Option;

export const Checkout = () => {
  const productCheckout = useSelector((state) => state.defaultReducers.cart);
  const [province, setProvince] = useState()
  const [district, setDistrict] = useState()
  const [ward, setWard] = useState()

  const handleChange = (value) => {
    setProvince(parseInt(value))
    setDistrict()
    setWard()
  };

  const renderTotalPrice = () => {
    return productCheckout.reduce((sum, item) => {
      return (sum += parseInt(item.price * item.quantity));
    }, 0);
  };


  const renderTotalEachProduct = (product) => {
    return product.price * product.quantity
  };

  return (
    <div className='container-checkout'>
      <div className='info-customer'>
        <div className='box-info-customer'>
          <h2>Shipping address</h2>
          <div style={{ padding: '20px', boxShadow: 'rgb(0 0 0 / 24%) 0px 3px 8px', borderRadius: '20px' }}>
            <div>
              <Input size='large' placeholder='Last name' style={{ borderRadius: 20 }} />
            </div>
            <br />
            <div>
              <Input size='large' placeholder='Address' style={{ borderRadius: 20 }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Select onChange={(value) => handleChange(value)} style={{ marginRight: '20px', marginTop: '20px', width: 'fit-content' }} size='large' placeholder="Select a province">
                {Province.map((val, index) => (
                  <Option key={index} value={val.code}>{val.name}</Option>
                ))}
              </Select>
              <Select value={district} onChange={(value) => setDistrict(parseInt(value))} disabled={!province} style={{ marginRight: '20px', marginTop: '20px', borderRadius: 20 }} size='large' placeholder="Select a district">
                {District.filter((value) => value.province_code === province).map((val, index) => (
                  <Option key={index} value={val.code}>{val.name}</Option>
                ))}
              </Select>
              <br />
              <div>
                <Select value={ward} onChange={(value) => setWard(parseInt(value))} disabled={!district} style={{ marginRight: '20px', marginTop: '20px', borderRadius: 20 }} size='large' placeholder="Select a ward" >
                  {Ward.filter((value) => value.district_code === district).map((val, index) => (
                    <Option key={index} value={val.code}>{val.name}</Option>
                  ))}
                </Select>
              </div>

            </div>
            <br />
            <div>
              <Input size='large' placeholder='Phone' style={{ borderRadius: 20 }} />
            </div>
            <br />
            <div>
              <Input.TextArea size='large' placeholder='Note' style={{ borderRadius: 20 }} />
            </div>
          </div>
        </div>
      </div>
      <div className='info-product-checkout'>
        <div className='product-checkout'>
          <h2>Product</h2>
          <div className='box-product'>
            {productCheckout.map((val) => (
              <div style={{ display: 'flex', padding: '10px 0' }}>
                <div className='img-product'>
                  <Badge count={val.quantity}>
                    <img style={{ width: '100%', borderRadius: '10px', height: '5em', textAlign: 'center' }} src={ENV + val.image} />
                  </Badge>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0 15px', width: '80%' }}>
                  <span>{val.name}</span>
                  <span style={{ color: 'grey', fontSize: '12px' }}>{val.color + " / " + val.size}</span>
                </div>
                <div style={{ fontWeight: 600, }}>
                  {convertPrice(renderTotalEachProduct(val))}
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className='box-voucher'>
            <Input size='large' placeholder='Enter voucher code' style={{ marginRight: '15px' }} />
            <Button size='large'>APPLY</Button>
          </div>
          <br />
          <div className='box-total'>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <p>Subtotal</p>
              <p style={{ fontWeight: 600 }}>{convertPrice(renderTotalPrice())}</p>
            </div>
          </div>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <h2>TOTAL</h2>
            <p style={{ fontWeight: 600, color: 'green' }}>{convertPrice(renderTotalPrice())}</p>
          </div>
        </div>
      </div>
    </div >
  )
}
