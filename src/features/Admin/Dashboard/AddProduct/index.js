import React, { useState } from 'react'
import { Input, Tabs, Select, Button } from 'antd';
import {
    FileImageOutlined
} from '@ant-design/icons';
import { useMutation } from 'react-query';
import { createProduct } from '../../../../service';

const { Option } = Select;
const { TextArea } = Input;

export const AddProduct = () => {
    const [image, setImage] = useState(["", "", "", ""])
    const [listSize, setListSize] = useState()
    const [color, setColor] = useState()
    const [category, setCategory] = useState("TEE")
    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState()
    const [quantity, setQuantity] = useState()
    const [preview, setPreview] = useState(["", "", "", ""])

    const listImageComponent = [0, 1, 2, 3]

    const { mutate } = useMutation(createProduct, {
        onSuccess: () => {
            // handleRestField()
        }
    });

    const handleRestField = () => {
        setImage([])
        setListSize([])
        setColor([])
        setCategory("TEE")
        setProductName("")
        setPrice("")
        setQuantity()
    }

    const handleSelectCategory = (value) => {
        setCategory(value)
    };

    const handleChangeSize = (value) => {
        setListSize(value)
    };

    const handleChangeColor = (value) => {
        setColor(value)
    };


    const selectFile = (e, index) => {
        if (e.target.files[0]) {
            const listImage = [...image]
            listImage.splice(index, 1, e.target.files[0])
            setImage(listImage);
            // setImage(e.target.files[0])
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                const listImagePreview = [...preview]
                listImagePreview.splice(index, 1, reader.result)
                setPreview(listImagePreview)
                // setPreview(oldData => [...oldData, reader.result]);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }


    const handleAddProduct = () => {
        const formData = new FormData()
        Object.values(image).forEach(file => {
            formData.append("attachment", file);
        });
        formData.append('name', productName)
        formData.append('price', parseInt(price))
        formData.append('size', listSize)
        formData.append('colors', color)
        formData.append('category', category,)
        formData.append('quantity', parseInt(quantity))
        mutate(formData)
    }

    const addProduct = () => {
        return (
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <div style={{ width: '47%' }}>
                    <div>
                        <h3>Product name</h3>
                        <Input value={productName} onChange={(value) => setProductName(value.target.value)} />
                        <span style={{ fontWeight: 200, color: 'grey', fontSize: '12px' }}>Do not exceed 20 characters when entering the product name</span>
                    </div>
                    <br />
                    <div>
                        <h3>Category</h3>
                        <Select defaultValue="TEE" style={{ width: '100%' }} onChange={handleSelectCategory}>
                            <Option value="TEE">Tee</Option>
                            <Option value="JACKET">Jacket</Option>
                            <Option value="PANT">Pant</Option>
                            <Option value="ACCESSORIES">Accessories</Option>
                        </Select>
                    </div>
                    <br />
                    <div>
                        <h3>Description</h3>
                        <TextArea rows={4} />
                    </div>
                    <br />
                    <div>
                        <h3>Size</h3>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: '100%',
                            }}
                            placeholder="Please select"
                            onChange={handleChangeSize}
                        >
                            <Option value="S">S</Option>
                            <Option value="M">M</Option>
                            <Option value="L">L</Option>
                            <Option value="XL">XL</Option>
                            <Option value="XXL">XXL</Option>
                        </Select>
                    </div>
                    <br />
                    <div>
                        <h3>Color</h3>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: '100%',
                            }}
                            placeholder="Please select"
                            onChange={handleChangeColor}
                        >
                            <Option value="Đen">Đen</Option>
                            <Option value="Trắng">Trắng</Option>
                            <Option value="Đỏ">Đỏ</Option>
                        </Select>
                    </div>
                </div>



                <div style={{ width: '47%' }}>
                    <div>
                        <h3>Product images</h3>
                        <div style={{ display: 'flex', width: '100%', height: '12em', justifyContent: 'space-between' }}>
                            {listImageComponent.map((val, index) => (
                                <div key={index} style={{
                                    width: '32%',
                                    borderStyle: 'dashed',
                                    borderColor: 'Grey',
                                    borderWidth: '1px',
                                    margin: '2px'

                                }}>
                                    <label>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%',
                                            justifyContent: 'center',
                                            width: '100%',
                                            position: 'relative'
                                            // margin: '0 auto'
                                        }}>

                                            <input type="file" style={{ display: 'none' }} accept="image/*" onChange={(e) => selectFile(e, index)} />
                                            {/* <input style={{ width: '100%', height: '100%', display: 'none' }} accept="image/*" type="file" onChange={(e) => selectFile(e, index)} /> */}
                                            {preview[index] ?
                                                <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={preview[index]} alt='preview' />
                                                :
                                                <>
                                                    <FileImageOutlined style={{ fontSize: '16px', color: '#08c', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} />

                                                </>
                                            }
                                            {/* <input {...getInputProps(val, index)} /> */}
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p style={{ fontWeight: 200, fontSize: '12px', color: 'grey' }}>First image will show in Dashboard</p>
                    <div>
                        <h3>Quantity</h3>
                        <Input type='number' onChange={(value) => setQuantity(parseInt(value.target.value))} />
                    </div>
                    <br />
                    <div>
                        <h3>Price</h3>
                        <Input type='number' onChange={(value) => setPrice(parseInt(value.target.value))} />
                    </div>

                    <br />
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={() => handleAddProduct()}>ADD</Button>
                    </div>
                </div>
            </div >

        )
    }

    const items = [
        { label: 'Add Product', key: 'item-1', children: addProduct() }, // remember to pass the key prop
    ];

    return (
        <div>
            <h2>Add product</h2>
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    )
}
