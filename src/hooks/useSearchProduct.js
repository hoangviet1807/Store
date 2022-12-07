import { useQuery } from "react-query";
import { searchProduct } from "../service";

export const useSearchProduct = (searchText) => {
    return useQuery(["search_product"], () => searchProduct(searchText));
}
