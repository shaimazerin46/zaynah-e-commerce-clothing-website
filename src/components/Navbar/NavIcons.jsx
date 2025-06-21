"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";



const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    return (
        <div className="flex justify-between items-center gap-4 md:gap-6">
            <Avatar className='cursor-pointer'>
                <AvatarImage src="" />
                <AvatarFallback className='bg-blue-500 text-white' >CN</AvatarFallback>
            </Avatar>
            <span className="text-2xl"><IoIosNotificationsOutline /></span>
            <span className="text-2xl"><CiShoppingCart />
</span>
        </div>
    );
};

export default NavIcons;