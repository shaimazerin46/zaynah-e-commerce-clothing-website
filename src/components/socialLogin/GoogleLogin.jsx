'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';


const GoogleLogin = () => {
    const handleLogin = ()=>{
        signIn('google',{
            callbackUrl: '/',
        })
    }
    return (
        <div onClick={handleLogin} className='flex items-center justify-center h-full mt-5 cursor-pointer'>
           
         <Image src={'/google.png'} height={30} width={30} alt="Google"></Image>
    
        </div>
    );
};

export default GoogleLogin;