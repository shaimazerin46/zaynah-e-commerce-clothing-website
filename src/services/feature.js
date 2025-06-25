import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const featureApi = createApi({
    reducerPath: 'featureApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
    endpoints: (builder)=>({
        getFeatureProducts: builder.query({
            query: ()=> 'featureProducts',
        }),
    }),
})

export const { useGetFeatureProductsQuery } = featureApi;