"use client";

import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Menu = () => {
    const [open, setopen] = useState(false);
    return (
        <div>
            <span className="cursor-pointer" onClick={()=>setopen(prev=> !prev)}>
                <RxHamburgerMenu />
            </span>
            {
                open && (
                   <div className="absolute left-0 top-20 bg-black text-white w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                     <Link href="/">Home</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                     <Link href="/">Logout</Link>
                      <Link href="/">Cart</Link>
                   </div>
                )
            }
        </div>
    );
};

export default Menu;