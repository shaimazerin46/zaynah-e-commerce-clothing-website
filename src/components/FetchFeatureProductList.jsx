"use client";

import { useGetFeatureProductsQuery } from "@/services/feature";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import ProductsList from "./ProductsList";

const FetchFeatureProductList = () => {
    const {data, isLoading, isError, error} = useGetFeatureProductsQuery();

    if(isLoading){
        return <p>Loading...</p>
    }
    if(isError){
        return <p>{error.message}</p>
    }
    
    return (
        <ProductsList data={data}></ProductsList>
    );
};

export default FetchFeatureProductList;