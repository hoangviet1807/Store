import { createAction } from ".";
import { productService } from "../../services";
import { ADD_CART, ADD_PRODUCT, BUY_PRODUCT, DELETE_CART, DELETE_PRODUCT, FETCH_DETAIL, FETCH_PRODUCT, NUMBER_QUANTITY, SEARCH_PRODUCT, START_LOADING, STOP_LOADING, UPDATE_PRODUCT }
    from '../types/index'

export const getProduct = () => {
    return (dispatch) => {
        productService.getProduct()
            .then((res) => {
                dispatch(createAction(FETCH_PRODUCT, res.data))
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
