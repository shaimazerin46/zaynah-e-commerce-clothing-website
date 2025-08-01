import Heading from '@/components/Heading/Heading';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import FetchAllProductList from '@/components/FetchAllProductList';
import FilterProducts from '@/components/FilterProducts';

const allProductsPage = () => {
  
    return (
        <div className='max-w-6xl mx-auto'>

            {/* Banner */}
            <div className='md:h-[350px] bg-[#FDF1F9] grid md:grid-cols-2 grid-cols-1 lg:px-40 px-3 pt-3 md:pt-0 items-center'>
                <div className='space-y-5'>
                    <p className='lg:text-4xl md:text-3xl text-xl'>Grab up to 30% off on selected products</p>
                   <a href="#allProducts"> <Button className='bg-[#F16767] rounded-3xl text-white cursor-pointer'>Buy now</Button></a>
                </div>
               <div className='flex md:justify-end justify-center'>
                 <Image src={'/product.png'} alt='Woman' height={350} width={233} className='mr-0'></Image>
               </div>

            </div>

            <div className='lg:px-0 px-3'>

            {/* filter */}
           <FilterProducts ></FilterProducts>

            {/* product list */}
            <section id='allProducts'>
                <Heading text={"All products for you"}></Heading>
            <FetchAllProductList></FetchAllProductList>
            </section>
            </div>
            
        </div>
    );
};

export default allProductsPage;