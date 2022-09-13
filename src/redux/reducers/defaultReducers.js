import {
  ADD_CART,
  DELETE_CART,
  FETCH_PRODUCT,
  HANDLE_QUANTITY,
} from "../types/index";
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

    ///ADD PRODUCT TO CART
    case ADD_CART: {
      let cart = [...state.cart];
      const index = cart.findIndex((cart) => {
        return cart.id === payload.id;
      });
      const color = cart.findIndex((cart) => {
        return cart.color === payload.color;
      });
      const size = cart.findIndex((cart) => {
        return cart.size === payload.size;
      });
      if (index !== -1 && size !== -1 && color !== -1) {
        cart[index].quantity += payload.quantity;
      } else {
        cart = [...cart, payload];
      }
      state.cart = cart;
      return { ...state };
    }

    ///ADD/REDUCE QUANTITY
    case HANDLE_QUANTITY: {
      let cart = [...state.cart];
      const item = payload.item;
      const status = payload.status;
      let index = cart.findIndex(
        (element) =>
          element.color === item.color &&
          element.id === item.id &&
          element.size === item.size
      );

      if (status === true) {
        cart[index].quantity += 1;
      } else {
        cart[index].quantity -= 1;
      }
      state.cart = cart;
      return { ...state };
    }

    ///ADD/REDUCE QUANTITY
    case DELETE_CART: {
      let cart = [...state.cart];
      let index = cart.findIndex(
        (element) =>
          element.color === payload.color &&
          element.id === payload.id &&
          element.size === payload.size
      );
      cart.splice(index, 1);
      state.cart = cart;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
