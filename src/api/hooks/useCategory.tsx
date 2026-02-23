import { useQuery } from "@tanstack/react-query";
import { categoryApi } from "../endpoints/category";

export default function useCategory() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: categoryApi.getAll,
  });
}
