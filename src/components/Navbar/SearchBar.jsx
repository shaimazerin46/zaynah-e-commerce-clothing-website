"use client";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
    const router = useRouter()

    const handleSearch = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
       if(name){
        router.push(`/allProducts?name=${name}`)
       }
    }
    return (
        <div>
            <form onSubmit={handleSearch} className="flex justify-between gap-4 bg-gray-100 p-2 flex-1 rounded-md lg:w-[400px]">
                <input name="name" type="text" placeholder="Search" className="bg-transparent focus:outline-0"/>
                <button className="cursor-pointer text-[16px]">
                    <CiSearch />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;