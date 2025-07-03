"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";



const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const router = useRouter();
    const {data:session} = useSession();
   
    const existingUser = session?.user

   
   const handleClick = () => {
  if (!existingUser) {
    router.push("/login");
  } else {
    setIsProfileOpen(!isProfileOpen);
  }
};
    const handleCart = ()=>{
        router.push('/')
    }
    const handleLogin = ()=>{
        router.push('/login')
    }
    const handleLogout = async()=>{
        await signOut({
            callbackUrl: '/login',
        })
    }
    return (
        <div className="flex justify-between items-center gap-4 md:gap-6 ">
        {
            existingUser ?
                <div className="relative">
                <Avatar onClick={handleClick} className='cursor-pointer relative'>
                    <AvatarImage src="" />
                    <AvatarFallback className='bg-[#FCB454] text-white' >
                    {existingUser.name.charAt(0)}
                    </AvatarFallback>

                </Avatar>

                {
                    isProfileOpen && <div className="flex flex-col absolute p-5 shadow-xl rounded-xl top-10 transform -translate-x-1/2 left-1/2 text-center space-y-3 z-10 bg-white">
                        <Link href='/'>Profile</Link>
                        <p>{existingUser?.email}</p>
                         <Button onClick={handleLogout} className='btn_style'>Logout</Button>
                        
                    </div>
                }
            </div> 
            :   <Button onClick={handleLogin} className='lite_orange text-white'>Login</Button>
        }

        
              
            <span className="text-2xl"><IoIosNotificationsOutline /></span>
            <span onClick={handleCart} className="text-2xl relative"><CiShoppingCart />
            <div className="absolute h-5 w-5 rounded-full btn_style -right-3 -top-3 flex justify-center items-center text-sm"><span>0</span></div>
            </span>
        </div>
    );
};

export default NavIcons;