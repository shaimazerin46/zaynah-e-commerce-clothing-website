"use client";
import {usePathname, useRouter} from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    

    const handleSearch = (e)=>{
         e.preventDefault();
        if(searchQuery){
           router.push(`/allProducts?searchQuery=${encodeURIComponent(searchQuery)}`)
        }   
    }


    return (
        <div>
            <form onSubmit={handleSearch} className="flex justify-between gap-4 bg-gray-100 p-2 flex-1 rounded-md lg:w-[400px]">
                <input 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}name="title" type="text" placeholder="Search" className="bg-transparent focus:outline-0"/><button type="submit" className="cursor-pointer text-[16px]">
                    <CiSearch />
                </button>
                
            </form>
        </div>
    );
};

export default SearchBar;