import { Badge, Button, Form, Input, Select, Spin } from 'antd'
import React, { useState } from 'react'
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { convertPrice } from '../../../common/convert_price';
import { District } from '../../../common/district';
import { Province } from '../../../common/province';
import { Ward } from '../../../common/ward';
import { ENV } from '../../../config/config';
import { createOrder } from '../../../service';
import './style.css'
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';

const Option = Select.Option;

export const Checkout = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const productCheckout = useSelector((state) => state.defaultReducers.cart);
  const [province, setProvince] = useState()
  const [district, setDistrict] = useState()
  const [ward, setWard] = useState()
  const [lastName, setLastName] = useState()
  const [address, setAddress] = useState()
  const [note, setNote] = useState()
  const [phone, setPhone] = useState()
  const [mail, setMail] = useState()

  const handleChangeProvince = (value) => {
    setProvince(value)
    form.resetFields(["district"])
    form.resetFields(["ward"])
    setDistrict()
    setWard()
  };

  const handleChangeDistrict = (value) => {
    setDistrict(value)
    form.resetFields(["ward"])
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

  const { mutate, isLoading } = useMutation(createOrder, {
    onSuccess: () => {
      navigate('/order')
    }
  })

  const handleOrder = () => {
    const order = {
      customerName: lastName,
      address: province.split('/')[1] + ", " + district.split('/')[1] + ", " + ward + ", " + address,
      product: productCheckout,
      phone: phone,
      note,
      email: mail

    }
    mutate(order)
  }

  const antIcon = <LoadingOutlined style={{ fontSize: '5em' }} spin />;

  return (
    <Spin style={{ transform: 'translateX(-2.5em)', maxHeight: 'unset' }} spinning={isLoading} indicator={antIcon}>
      <Form form={form} onFinish={handleOrder}>
        <div className='container-checkout'>
          <div className='info-customer'>
            <div className='box-info-customer'>
              <h2>Shipping address</h2>
              <div style={{ padding: '20px', boxShadow: 'rgb(0 0 0 / 24%) 0px 3px 8px', borderRadius: '20px' }}>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Name',
                    },
                  ]}>
                  <Input onChange={(value) => setLastName(value.target.value)} size='large' placeholder='Last name' style={{ borderRadius: 20 }} />
                </Form.Item>

                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Phone',
                    },
                  ]}>
                  <Input onChange={(e) => setPhone(e.target.value)} size='large' placeholder='Phone' style={{ borderRadius: 20 }} />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Email',
                    },
                  ]}>
                  <Input onChange={(e) => setMail(e.target.value)} size='large' placeholder='Email' style={{ borderRadius: 20 }} />
                </Form.Item>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  <Form.Item
                    name="province"
                    rules={[{ required: true, message: 'Province is required', }]}>
                    <Select value={province} onSelect={handleChangeProvince} size='large' placeholder="Select a province">
                      {Province.map((val, index) => (
                        <Option key={index} value={val.code + "/" + val.name}>{val.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="district"
                    rules={[{ required: true, message: 'District is required', }]}>
                    <Select value={null} onSelect={handleChangeDistrict} disabled={!province} size='large' placeholder="Select a district">
                      {District.filter((value) => value.province_code === parseInt(province?.split('/'[0]))).map((val, index) => (
                        <Option key={index} value={val.code + "/" + val.name}>{val.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="ward"
                    rules={[{ required: true, message: 'Ward is required', }]}>
                    <Select value={ward} onSelect={(value) => setWard(value)} disabled={!district} size='large' placeholder="Select a ward" >
                      {Ward.filter((value) => value.district_code === parseInt(district?.split('/'[0]))).map((val, index) => (
                        <Option key={index} value={val.name}>{val.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
                <Form.Item
                  name="address"
                  rules={[{ required: true, message: 'Address is required', }]}>
                  <Input size='large' onChange={(e) => setAddress(e.target.value)} placeholder='Address' style={{ borderRadius: 20 }} />
                </Form.Item>
                <div>
                  <Input.TextArea onChange={(e) => setNote(e.target.value)} size='large' placeholder='Note' style={{ borderRadius: 20 }} />
                </div>
              </div>

            </div>
          </div>
          <div className='info-product-checkout'>
            <div className='product-checkout'>
              <h2>Product</h2>
              <div className='box-product'>
                {productCheckout.map((val, index) => (
                  <div key={index} style={{ display: 'flex', padding: '10px 0' }}>
                    <div className='img-product'>
                      <Badge count={val.quantity}>
                        <img style={{ width: '100%', borderRadius: '10px', height: '5em', textAlign: 'center', objectFit: 'contain' }} src={ENV + val.image} alt="" />
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

              <div className='box-voucher'>
                <Input size='large' placeholder='Enter voucher code' style={{ marginRight: '15px' }} />
                <Button size='large'>APPLY</Button>
              </div>

              <div className='box-total'>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <p>Subtotal</p>
                  <p style={{ fontWeight: 600 }}>{convertPrice(renderTotalPrice())}</p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <h2>TOTAL</h2>
                <p style={{ fontWeight: 600, color: 'green' }}>{convertPrice(renderTotalPrice())}</p>
              </div>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ float: 'right' }} >CHECKOUT</Button>
              </Form.Item>
            </div>
          </div>
        </div >
      </Form>
    </Spin>

  )
}
