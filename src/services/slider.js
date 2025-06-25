import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const slidersApi = createApi({
    reducerPath: 'slidersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
    endpoints: (builder)=>({
        getSliders: builder.query({
            query: ()=> 'sliders',
        })
    })
})

export const {useGetSlidersQuery} = slidersApi