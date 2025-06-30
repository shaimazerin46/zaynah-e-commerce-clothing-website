import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
    endpoints: (builder)=>({
        getProducts: builder.query({
            query: ({category, sort, min, max, searchQuery})=> ({
                url: 'products',
                params: {category, sort, min, max, searchQuery},
            }),
        }),

        getProductById: builder.query({
            query: (id)=>({
                url: `products/${id}`
            })
        })
    })
})
export const {useGetProductsQuery, useGetProductByIdQuery} = productApi