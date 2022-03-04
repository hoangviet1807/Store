import { ADD_CART, ADD_PRODUCT, BUY_PRODUCT, DELETE_CART, DELETE_PRODUCT, FETCH_DETAIL, FETCH_PRODUCT, NUMBER_QUANTITY, SEARCH_PRODUCT, START_LOADING, STOP_LOADING, UPDATE_PRODUCT }
    from '../types/index'
const initialState = {
    products: [],
    cart: [],
    selected: "",
    search: [],
    productDetail: null
}

export const defaultReducers = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case FETCH_PRODUCT: {
            state.products = payload;
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}