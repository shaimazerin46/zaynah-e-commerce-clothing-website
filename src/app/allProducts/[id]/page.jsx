"use client"

import AddToCartButton from "@/components/addToCart/AddToCartButton";
import { Button } from "@/components/ui/button";
import { useGetProductByIdQuery } from "@/services/product";
import Image from "next/image";
import { use, useState } from "react";

const page = ({params}) => {
    const {id} =  use(params);
    const {data,isLoading, isError, error} = useGetProductByIdQuery(id);
    const [quantity,setQuantity] = useState(1);
    const [size,setSize] = useState('');
    const sizeArray = ['S', 'M', 'L', 'XL'];
    console.log(size)
   
    if(isLoading){
       <div className="max-w-6xl mx-auto min-h-[60vh] flex items-center justify-center">
                <p>Loading...</p>
            </div>
    }
    if(isError){
       <div className="max-w-6xl mx-auto min-h-[60vh] flex items-center justify-center">
                <p>{error.message}</p>
            </div>
    }
    if (!data) {
        return (
            <div className="max-w-6xl mx-auto min-h-[60vh] flex items-center justify-center">
                <p>Product not found</p>
            </div>
        );
    }
    const handleIncrement = ()=>{
        setQuantity((prev)=>prev+1)
    }
    const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
};
    return (
        <div className="max-w-6xl mx-auto">
           <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            {/* image */}
                <div>
                    <Image src={data?.img} height={500} width={400} alt={data?.title} className="object-cover"></Image>
                </div>
                {/* text */}
                <div className="space-y-5 ">
                    <h2 className="text-4xl">{data?.title}</h2>
                    <p className="text-sm text-[#c4c4c6]">{data?.description}</p>
                    <p className="text-xl">{data?.price}BDT</p>

                    {/* set size */}
                    <p>Choose a size</p>
                    <div className="flex gap-3">
                        {
                            sizeArray.map((s,idx)=>(
                                 <Button 
                                 key={idx}
                                 onClick={()=>setSize(s)}
                                 className={`border-[1px] border-[#F16767]
                                    ${
                                        size==s ? "bg-[#F16767] text-white" : "text-[#F16767] hover:bg-[#F16767] hover:text-white"
                                    } `}>
                                        {s}
                                        </Button>
                            ))
                        }
                       
                    </div>
                   
                    <div className="flex justify-between">
                         {/* quantity */}
                        <div className='bg-[#E9EBEC] w-[100px] justify-center py-2 flex gap-5 rounded-3xl'>
                            <button
                             disabled={quantity === 1}
                             onClick={handleDecrement}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrement}>+</button>
                        </div>
                        {/* add to cart */}
                        <AddToCartButton></AddToCartButton>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default page;