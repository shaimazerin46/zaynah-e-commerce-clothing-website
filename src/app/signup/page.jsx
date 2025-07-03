"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const signupPage = () => {
  const router = useRouter()
    const [error,setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~\\|-]).+$/;
    const handleSignup = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = 'user'
        if(password.length<6){
            setError("Password must be at least 6 character")
        }
        if(!regex.test(password)){
            setError('Password must include at least one uppercase letter and one special character.')
        }
       
        try {
             const payload = {name,email,password,role}
            const res = await fetch('/api/authentication/signup',{
                method: 'POST',
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify(payload)
            });
            const data = await res.json()
            console.log(data)
            if(data.result.insertedId){
                form.reset()
                toast.success('Successfully signed up')
                router.push('/')
            }

        } catch (error) {
            console.log(error.message)
        }
    }
    return (
         <div className="min-h-screen flex justify-center items-center">
           <Card className="w-full max-w-sm mx-auto border-0 shadow-2xl ">
      
      <CardContent className=''>
        <form onSubmit={handleSignup}>
          <div className="flex flex-col gap-6">
             <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                name="name"
                type="text"
                className='focus:!ring-0'
                placeholder="John doe"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                className='focus:!ring-0'
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2 relative">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input name="password" type={showPassword ? 'text' : 'password'} required className='focus:!ring-0'/>
              <span onClick={()=>setShowPassword(!showPassword)} className="absolute bottom-3 right-3">
                {
                    showPassword ? <IoEyeOffOutline /> : <IoEyeOutline /> 
                }
                
                </span>
              {
                error && <p className="text-red-500 text-xs">{error}</p>
              }
            </div>
          </div>
          <div className="flex justify-between">
             <Button type="submit" className="w-full lite_orange text-white mt-5">
          Sign up
        </Button>
          </div>
        </form>
        <p className="text-xs">Already have an account?<Link href='/login' className="text-blue-500">login</Link></p>
      </CardContent>
      
    </Card>
      </div>
    );
};

export default signupPage;