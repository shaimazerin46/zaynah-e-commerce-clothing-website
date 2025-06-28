"use client";

import { useGetProductsQuery } from "@/services/product";
import Heading from "./Heading/Heading";
import Link from "next/link";
import Image from "next/image";

const Categories = () => {
    const {data} = useGetProductsQuery();
     const uniqueCategories = Array.from(
    new Map(data?.map((item) => [item.category, item])).values()
  );
    
    return (
        <div className="max-w-6xl mx-auto px-3 md:px-0">
            <Heading text={"Categories"}></Heading>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                {
                    uniqueCategories?.map(item=>(
                        <Link href='/' key={item._id}>
                            <div className="space-y-3">
                                 <div className="overflow-hidden">
                                    <Image src={item?.img} alt={item.title} height={300} width={400} className="h-[300px] md:w-[400px] w-full object-cover transition-transform duration-300 hover:scale-110"></Image>
                                 </div>

                                    <p>{item.category}</p>
                                    
                                  
                            </div>

                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;