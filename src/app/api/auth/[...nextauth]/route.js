import dbConnect, { collectionName } from "@/lib/dbConnect";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

export const authOptions = {
    providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      email: {label: "email", type: "email", placeholder: "jsmith@gmail.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const {email,password} = credentials;
      const user = await dbConnect(collectionName.USERS).findOne({email});
      const isPasswordOk = password===user.password;

      if (isPasswordOk) {
        // Any object returned will be saved in `user` property of the JWT
        console.log('USER',user)
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  }),
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
],
callbacks: {
   async signIn({user,account}){
    if(account){
     try {
       const {name,email,image} = user;
      const payload = {role: 'user', name,email,image};
      const isUserExist = await dbConnect(collectionName.USERS).findOne({email});
      if(!isUserExist){
        await dbConnect(collectionName.USERS).insertOne(payload);
        console.log(payload)
      }
     } catch (error) {
      console.log(error.message)
      return false
     }
    }
      return true
   },
   async jwt({ token, user}) {
      if(user){
      
        token.role = user.role
      }
      return token
    },
  async session({ session,token }) {
    if(session){
     
      session.user.role=token.role
    }
      return session
    },
  
   
}
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }