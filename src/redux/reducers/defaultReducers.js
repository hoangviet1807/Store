import { FETCH_PRODUCT }
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