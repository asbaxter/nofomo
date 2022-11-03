import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "./api";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
