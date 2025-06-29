"use client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";


const FilterProducts = () => {
    const [category,setCategory] = useState(null);
    const [sort,setSort] = useState(null);
    const [minPrice,setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();
    const router = useRouter();
    const pathname = usePathname();
     
   useEffect(()=>{
    const params = new URLSearchParams(); // 1. URLSearchParams() is javascript object that allow to work with url query strings which are placed after ?

    // 2. Add category to params if it exists
    if(category) params.set('category', category);

    // 3. Add sort to params if it exists
    if(sort) params.set('sort', sort);
    if(maxPrice) params.set('max', maxPrice);
    if(minPrice) params.set('min', minPrice);

    // 4. Check if we have any filters to apply
    if(category || sort || maxPrice || minPrice){
        router.push(`${pathname}?${params.toString()}`)
    }
    // 6. If no filters, use clean URL
    else{
        router.push(pathname)
    }
    
   },[category,sort,maxPrice,minPrice]) // 7. Dependency array - effect runs when these change
  
    return (
        <div className="mt-10 flex flex-wrap gap-5 md:w-[700px] justify-between mx-auto">
            {/* category */}
            <Select onValueChange={(value)=>setCategory(value)}>
                <SelectTrigger className="md:w-[180px] focus:!ring-0 bg-gray-200 border-0 rounded-3xl text-sm text-gray-600">
                    <SelectValue placeholder="Category" className=''/>
                </SelectTrigger>
                <SelectContent side='bottom' className='bg-black text-white border-0'>
                    <SelectGroup>
                      
                        <SelectItem value="Men" className='hover:bg-[#FCB454]'>Men</SelectItem>
                        <SelectItem value="Women" className='hover:bg-[#FCB454]'>Women</SelectItem>
                        <SelectItem value="T-shirt" className='hover:bg-[#FCB454]'>T-shirt</SelectItem>
                        <SelectItem value="Accessories" className='hover:bg-[#FCB454]'>Accessories</SelectItem>
                        <SelectItem value="Featured" className='hover:bg-[#FCB454]'>Featured</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            {/* sort by */}
              <Select onValueChange={(value)=>setSort(value)}>
                <SelectTrigger className="md:w-[180px] focus:!ring-0 bg-gray-200 border-0 rounded-3xl text-sm text-gray-600">
                    <SelectValue placeholder="Sort By" className=''/>
                </SelectTrigger>
                <SelectContent side='bottom' className='bg-black text-white border-0'>
                    <SelectGroup>
                        <SelectItem value="lowToHigh" className='hover:bg-[#FCB454]'>Low to high</SelectItem>
                        <SelectItem value="highToLow" className='hover:bg-[#FCB454]'>High to low</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

             {/* price */}
            <Input onChange={(e)=>setMinPrice(e.target.value)} placeholder='Min' type='text' className='w-30 border-gray-500 rounded-3xl focus:!ring-0'></Input>
            <Input  onChange={(e)=>setMaxPrice(e.target.value)} placeholder='Max' type='text' className='w-30 border-gray-500 rounded-3xl focus:!ring-0'></Input>

        </div>
    );
};

export default FilterProducts;