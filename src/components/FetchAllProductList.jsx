"use client";

import { useGetProductsQuery } from "@/services/product";
import ProductsList from "./ProductsList";
import { useSelector } from "react-redux";

const FetchAllProductList = () => {
    const {category} = useSelector(state=>state.filters)
    
    const {data, isLoading, isError, error} = useGetProductsQuery(category);
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