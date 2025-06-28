import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
    endpoints: (builder)=>({
        getProducts: builder.query({
            query: ({category, sort})=> ({
                url: 'products',
                params: {category, sort},
            }),
        })
    })
})
export const {useGetProductsQuery} = productApi