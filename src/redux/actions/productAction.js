import { createAction } from ".";
import { productService } from "../../services";
import {
  ADD_CART,
  DELETE_CART,
  FETCH_PRODUCT,
  HANDLE_QUANTITY,
} from "../types/index";

export const getProduct = () => {
  return (dispatch) => {
    productService
      .getProduct()
      .then((res) => {
        dispatch(createAction(FETCH_PRODUCT, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addToCart = (product) => {
  return (dispatch) => {
    dispatch(createAction(ADD_CART, product));
  };
};

export const handleQuantity = (item, status) => {
  return (dispatch) => {
    dispatch(createAction(HANDLE_QUANTITY, { item, status }));
  };
};

export const deleteFromCart = (item) => {
  return (dispatch) => {
    dispatch(createAction(DELETE_CART, item));
  };
};
