import { useQuery } from "react-query";
import { getDetailProduct } from "../service";

export default function useDetailProduct(id) {
  return useQuery(["detailProduct", id], () => getDetailProduct(id), { staleTime: Infinity });
}
