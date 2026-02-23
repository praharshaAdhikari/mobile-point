import { crAxios } from "..";

export interface Category {
  id: number;
  name: string;
  slug: string;
  is_featured: boolean;
  image: string;
  description: string;
  parent: number | null;
  children: Category[];
  is_active: boolean;
  total_products: number;
}

export interface CategoryListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[];
}

export const categoryApi = {
  getAll: async (): Promise<CategoryListResponse> => {
    const response = await crAxios.get("/categories/");
    return response.data;
  },
};
