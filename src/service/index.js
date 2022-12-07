import axios from "axios";

export const getProduct = () => {
  return axios.get(`http://localhost:5000/product`).then((res) => res.data);
};

export const getDetailProduct = (id) => {
  return axios
    .get(`http://localhost:5000/product/${id}`)
    .then((res) => res.data);
};

export const getProductByType = (category) => {
  return axios
    .get(`http://localhost:5000/product/category/${category}`)
    .then((res) => res.data);
};

export const searchProduct = (searchText) => {
  return axios
    .get(`http://localhost:5000/product/search/${searchText}`)
    .then((res) => res.data);
}

export const register = (data) => {
  return axios
    .post(`http://localhost:5000/user/register`, data)
    .then((res) => res.data);
}

export const login = (data) => {
  return axios
    .post(`http://localhost:5000/user/login`, data)
    .then((res) => res.data);
}

export const createProduct = (data) => {
  return axios
    .post(`http://localhost:5000/product`, data)
    .then((res) => res.data)
}

export const getProvince = (code) => {
  return axios.get(`https://provinces.open-api.vn/api/w/`).then((res) => res.data);
};