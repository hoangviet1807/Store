import { useQuery } from "react-query";
import { getProvince } from "../service";

export default function useProvince(code) {
    return useQuery(["province"], () => getProvince(code));
}
