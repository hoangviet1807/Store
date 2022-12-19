import axios from "axios";
import { ENV } from "../config/config";

export const getProduct = () => {
  return axios.get(`${ENV}product`).then((res) => res.data);
};

export const getDetailProduct = (id) => {
  return axios
    .get(`${ENV}product/${id}`)
    .then((res) => res.data);
};

export const getProductByType = (category) => {
  return axios
    .get(`${ENV}product/category/${category}`)
    .then((res) => res.data);
};

export const searchProduct = (searchText) => {
  return axios
    .get(`${ENV}product/search/${searchText}`)
    .then((res) => res.data);
}

export const register = (data) => {
  return axios
    .post(`${ENV}user/register`, data)
    .then((res) => res.data);
}

export const login = (data) => {
  return axios
    .post(`${ENV}user/login`, data)
    .then((res) => res.data);
}

export const createProduct = (data) => {
  return axios
    .post(`${ENV}product`, data)
    .then((res) => res.data)
}

export const getProvince = (code) => {
  return axios.get(`https://provinces.open-api.vn/api/w/`).then((res) => res.data);
};

export const createOrder = (data) => {
  return axios.post(`${ENV}order`, data)
    .then((res) => res.data)
}