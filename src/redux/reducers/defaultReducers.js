import { ADD_CART, FETCH_PRODUCT } from "../types/index";
const initialState = {
  products: [],
  cart: [],
  selected: "",
  search: [],
  productDetail: null,
};

export const defaultReducers = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCT: {
      state.products = payload;
      return { ...state };
    }
    case ADD_CART: {
      let cart = [...state.cart];
      const index = cart.findIndex((cart) => {
        return cart._id === payload._id;
      });
      const color = cart.findIndex((cart) => {
        return cart.color === payload.color;
      });
      const size = cart.findIndex((cart) => {
        return cart.size === payload.size;
      });
      if (index !== -1 && size !== -1 && color !== -1) {
        cart[index].quantity += 1;
      } else {
        cart = [...cart, payload];
      }
      state.cart = cart;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
