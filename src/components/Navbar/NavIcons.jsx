"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import Link from "next/link";



const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const router = useRouter();

   
    const handleClick = () => {
        if (!isLoggedIn) {
            // router.push('/login');
            console.log("not login")
            setIsProfileOpen(!isProfileOpen)
        }
    }

    const handleCart = ()=>{
        router.push('/')
    }
    return (
        <div className="flex justify-between items-center gap-4 md:gap-6 ">
            <div className="relative">
                <Avatar onClick={handleClick} className='cursor-pointer relative'>
                    <AvatarImage src="" />
                    <AvatarFallback className='bg-[#FCB454] text-white' >CN</AvatarFallback>

                </Avatar>

                {
                    isProfileOpen && <div className="flex flex-col absolute p-5 shadow-xl rounded-xl top-5 transform -translate-x-1/2 left-1/2 text-center space-y-3 ">
                        <Link href='/'>Profile</Link>
                        <Button className='btn_style'>Logout</Button>
                    </div>
                }
            </div>


            <span className="text-2xl"><IoIosNotificationsOutline /></span>
            <span onClick={handleCart} className="text-2xl relative"><CiShoppingCart />
            <div className="absolute h-5 w-5 rounded-full btn_style -right-3 -top-3 flex justify-center items-center text-sm"><span>0</span></div>
            </span>
        </div>
    );
};

export default NavIcons;