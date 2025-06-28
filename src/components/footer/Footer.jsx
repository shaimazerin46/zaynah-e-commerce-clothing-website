import Link from 'next/link';
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button';
import Image from 'next/image';


const Footer = () => {
    const date = new Date()
    return (
        <div className='bg-[#f2f4f5] py-5 mt-10 px-3 lg:px-0'>
            <div className='max-w-6xl mx-auto space-y-3'>
                <div className='grid lg:grid-cols-7 gap-10'>
                    <div className='col-span-2'>
                        <Link href='/'>
                            <span className='text-2xl tracking-widest'>Zaynah </span>
                        </Link>
                        <ul className='space-y-3 text-xs mt-3'>
                            <li>Satkhira, Khulna, Bangladesh</li>
                            <li>shaimazerin46@gmail.com</li>
                            <li>01*********</li>
                            <li className='flex gap-2'>
                                <a href='https://www.facebook.com/shaimazerinrichi' target='_blank'><FaFacebook /></a>
                                <a href='https://www.youtube.com/' target='_blank'><FaYoutube /></a>
                                <a href='https://www.instagram.com/' target='_blank'><FaInstagram /></a>
                                <a href='https://www.pinterest.com/' target='_blank'><FaPinterest /></a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-3'>
                        <div className='grid grid-cols-3'>
                            <div className='space-y-3'>
                                <h3 className=''>Company</h3>
                                <ul className='text-xs space-y-3'>
                                    <li>About Us</li>
                                    <li>Career</li>
                                    <li>Affiliates</li>
                                    <li>Blog</li>
                                    <li>Contact</li>
                                </ul>
                            </div>

                            <div className='space-y-3'>
                                <h3 className=''>Shop</h3>
                                <ul className='text-xs space-y-3'>
                                    <li>New Arraivals</li>
                                    <li>Accessories</li>
                                    <li>Men</li>
                                    <li>Women</li>
                                    <li>All Products</li>
                                </ul>
                            </div>

                            <div className='space-y-3'>
                                <h3 className=''>Help</h3>
                                <ul className='text-xs space-y-3'>
                                    <li>Customer Service</li>
                                    <li>My Account</li>
                                    <li>Find and Store</li>
                                    <li>Legacy & Policy</li>
                                    <li>Gift Cards</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='col-span-2 space-y-3'>
                        <h3>Subscribe</h3>
                        <ul className='space-y-3 text-xs'>
                            <li>Be the first to get latest news about treds, promotions and much more</li>
                            <li>
                                <div className="flex w-full max-w-sm items-center gap-0">
                                    <Input type="email" placeholder="Email" className='rounded-r-none border-0 bg-white  focus:!ring-0' />
                                    <Button type="submit" className='rounded-l-none text-white bg-[#F16767]'>
                                        Subscribe
                                    </Button>
                                </div>
                            </li>
                            <li className='font-bold'>Secure Payments</li>
                            <li className='flex gap-5'>
                                <Image src='/paypal.png' height={64} width={64} alt='paypal' />
                                <Image
                                    src='/mastercard.png'
                                    height={32}
                                    width={32}
                                    alt='mastercard'
                                    style={{ height: "auto", width: "32px" }}
                                />
                                <Image
                                    src='/visa.png'
                                    height={32}
                                    width={32}
                                    alt='visa'
                                    style={{ height: "auto", width: "32px" }}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between text-xs flex-col md:flex-row gap-3'>
                    <p >@ {date.getFullYear()} Zayanah shop </p>
                    <p>Language <span className='font-bold mx-3'>Bangladesh | English </span> Currency <span className='font-bold mx-3'>BDT</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;