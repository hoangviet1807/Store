import { createAction } from ".";
import { productService } from "../../services";
import { FETCH_PRODUCT }
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
