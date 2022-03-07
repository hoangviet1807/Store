import { useQuery } from "react-query";
import { getProduct } from "../service";

export default function useProduct() {
  return useQuery(["product"], () => getProduct());
}
