import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
    endpoints: (builder)=>({
        getProducts: builder.query({
            query: (category)=> {return category ? `products?category=${category}` : 'products'},
        })
    })
})
export const {useGetProductsQuery} = productApi