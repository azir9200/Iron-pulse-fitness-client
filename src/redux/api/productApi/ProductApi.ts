import { baseApi } from "../baseApi/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all products
    getAllProduct: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),
    // Fetch a single product by ID
    getProductDetails: builder.query({
      query: (id: string) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
    // Add a new product
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/product/create",
        method: "POST",
        body: newProduct,
      }),
    }),

    // Update an existing product
    updateProduct: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: updates,
      }),
    }),

    // Delete a product by ID (optional, but useful)
    deleteProduct: builder.mutation({
      query: (id: string) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetProductDetailsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
