import Heading from '@/components/Heading/Heading';
import ProductList from '@/components/FetchAllProductList';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import FetchAllProductList from '@/components/FetchAllProductList';

const allProductsPage = () => {
    return (
        <div className='max-w-6xl mx-auto'>

            {/* Banner */}
            <div className='h-[350px] bg-[#FDF1F9] grid md:grid-cols-2 grid-cols-1 lg:px-40 px-3 items-center'>
                <div className='space-y-5'>
                    <p className='lg:text-4xl md:text-3xl text-xl'>Grab up to 30% off on selected products</p>
                    <Button className='bg-[#F16767] rounded-3xl text-white'>Buy now</Button>
                </div>
               <div className='flex justify-end'>
                 <Image src={'/product.png'} alt='Woman' height={350} width={233} className='mr-0'></Image>
               </div>

            </div>

            <div className='lg:px-0 px-3'>
                {/* filter */}
            <h3>Filter</h3>

            {/* product list */}
            <Heading text={"All products for you"}></Heading>
            <FetchAllProductList></FetchAllProductList>
            </div>
            
        </div>
    );
};

export default allProductsPage;