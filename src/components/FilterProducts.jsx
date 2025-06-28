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
import { useDispatch } from "react-redux";
import { setCategory } from "@/app/features/filterState/filterSlice";

const FilterProducts = () => {
    const dispatch = useDispatch()
    return (
        <div className="mt-10 flex flex-wrap gap-5 md:w-[700px] justify-between mx-auto">
            {/* category */}
            <Select onValueChange={(value)=>dispatch(setCategory(value))}>
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
              <Select>
                <SelectTrigger className="md:w-[180px] focus:!ring-0 bg-gray-200 border-0 rounded-3xl text-sm text-gray-600">
                    <SelectValue placeholder="Sort By" className=''/>
                </SelectTrigger>
                <SelectContent side='bottom' className='bg-black text-white border-0'>
                    <SelectGroup>
                        <SelectItem value="grapes" className='hover:bg-[#FCB454]'>Low to high</SelectItem>
                        <SelectItem value="pineapple" className='hover:bg-[#FCB454]'>High to low</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

             {/* price */}
            <Input placeholder='Min' type='text' className='w-30 border-gray-500 rounded-3xl focus:!ring-0'></Input>
            <Input placeholder='Max' type='text' className='w-30 border-gray-500 rounded-3xl focus:!ring-0'></Input>

        </div>
    );
};

export default FilterProducts;