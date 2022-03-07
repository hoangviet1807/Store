import axios from "axios";

export const getProduct = () => {
  return axios.get(`http://localhost:5000/product`).then((res) => res.data);
};

export const getDetailProduct = (id) => {
  return axios
    .get(`http://localhost:5000/product/${id}`)
    .then((res) => res.data);
};
