"use client";

import { useGetProductsQuery } from "@/services/product";
import ProductsList from "./ProductsList";
import { useSearchParams } from "next/navigation";


const FetchAllProductList = () => {
    const searchParams = useSearchParams(); //useSearchParams() is a Client Component hook that lets you read the current URL's query string.
   
    const category = searchParams.get('category')
    const sort = searchParams.get('sort')
   
    
    const {data, isLoading, isError, error} = useGetProductsQuery({category, sort});
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