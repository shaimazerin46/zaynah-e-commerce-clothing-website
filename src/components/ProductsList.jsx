import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";


const ProductsList = ({data}) => {
    return (
       
             <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                {
                    data?.map(item=>(
                        <Link href={`allProducts/${item._id}`} key={item._id}>
                    <div  className="space-y-3 ">
                       <div className="overflow-hidden">
                         <Image src={item?.img} alt={item?.title} height={300} width={400} className="h-[300px] md:w-[400px] w-full object-cover transition-transform duration-300 hover:scale-110"></Image>
                       </div>
                        <div className="flex justify-between text-sm">
                            <p>{item.title}</p>
                            <span>BDT {item.price}</span>
                        </div>
                        <p className="text-xs text-[#89898b]">{item.description}</p>
                        <Button className='text-[#FCB454] border-[1px] border-[#FCB454] text-sm hover:bg-[#FCB454] hover:text-white'>Add to cart</Button>
                    </div>
                   </Link>
                    ))
                }
            </div>
       
    );
};

export default ProductsList;