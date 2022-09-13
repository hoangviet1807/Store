import { useQuery } from "react-query";
import { getProductByType } from "../service";

export default function useGetCategoryProduct(category) {
  return useQuery(["detailProduct", category], () =>
    getProductByType(category)
  );
}
