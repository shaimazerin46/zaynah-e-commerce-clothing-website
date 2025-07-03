"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import GoogleLogin from "@/components/socialLogin/GoogleLogin";
import GithubLogin from "@/components/socialLogin/GithubLogin";


const loginPage = () => {
  const router = useRouter()
  const handleLogin = async(e)=>{
     e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        try {
         const res = await signIn("credentials",{
            redirect: false,
            email,password
          })
        if(res.ok){
           toast.success("Successfully logged in");
           form.reset();
          router.push('/')
        }else{
          toast.error(res.error.message || "Login failed. Please check your credentials.")
        }
        } catch (error) {
          toast.error(error.message)
        }

  }
    return (
      <div className="min-h-screen flex justify-center items-center">
           <Card className="w-full max-w-sm mx-auto border-0 shadow-2xl ">
      
      <CardContent className=''>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-6">
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
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input name="password" type="password" required className='focus:!ring-0'/>
            </div>
          </div>
          <div className="flex item-center gap-3">
             <Button type="submit" className="lite_orange text-white mt-5">
          Login
        </Button>
      
         <GoogleLogin></GoogleLogin>
         <GithubLogin></GithubLogin>
     
          </div>
        </form>
        <p className="text-xs">Don't have an account?<Link href='/signup' className="text-blue-500">signup</Link></p>
      </CardContent>
      
    </Card>
      </div>
    );
};

export default loginPage;