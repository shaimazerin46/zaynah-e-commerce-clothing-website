"use client";

import { useGetProductsQuery } from "@/services/product";
import ProductsList from "./ProductsList";
import { useSearchParams } from "next/navigation";


const FetchAllProductList = () => {
    const searchParams = useSearchParams(); //useSearchParams() is a Client Component hook that lets you read the current URL's query string.
   
  const queryParams = {
        searchQuery: searchParams.get('searchQuery') || undefined,
        category: searchParams.get('category') || undefined,
        sort: searchParams.get('sort') || undefined,
        min: searchParams.get('min') || undefined,
        max: searchParams.get('max') || undefined
    };

    const {data, isLoading, isError, error} = useGetProductsQuery(queryParams);
      if(isLoading){
        return <p>Loading...</p>
    }
    if(isError){
        return <p>{error.message}</p>
    }
    return (
        <div>
             
            <ProductsList data={data}></ProductsList>
        </div>
    );
};

export default FetchAllProductList;