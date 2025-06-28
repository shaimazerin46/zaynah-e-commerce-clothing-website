"use client";

import { useGetProductsQuery } from "@/services/product";
import ProductsList from "./ProductsList";

const FetchAllProductList = () => {
    const {data, isLoading, isError, error} = useGetProductsQuery();
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