import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '600', '800', '900'],
  subsets: ["latin"],
});



const Navbar = () => {
    return (
        <div className={`h-20 px-4 lg:px-16 md:px-8 xl:px-32 2xl:px-64 relative ${roboto.className}`}>
            {/* mobile */}
            <div className='h-full flex items-center justify-between md:hidden'>
                <Link href='/'>
                    <span className='text-2xl tracking-widest'>Zaynah </span>
                </Link>
                <Menu></Menu>
            </div>

            {/* desktop */}
            <div className='hidden md:flex items-center justify-between gap-8 h-full'>
                {/* left side */}
                <div className='  flex gap-5'>
                     <Link href='/' >
                     <div className='flex items-center gap-2'>
                         <img src='/bow.png' alt="" className='w-10 flex items-center'/>
                    <span className='text-2xl tracking-widest '>Zaynah </span>
                     </div>
                   
                </Link>
                <ul className='lg:flex gap-3 items-center text-sm md:hidden'>
                    <li><Link href='/'>
                    Home
                    </Link></li>
                     <li><Link href='/allProducts'>
                    Shop
                    </Link></li>
                </ul>
                </div>

                {/* right side */}
                <div className='flex justify-between items-center gap-8'>
                    <SearchBar></SearchBar>
                    <NavIcons></NavIcons>
                </div>
            </div>

        </div>
    );
};

export default Navbar;