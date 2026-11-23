import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://shopping-cart-q6ef.vercel.app/"
    }),

    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products"
        })
    })
});

export const { useGetAllProductsQuery } = productsApi;