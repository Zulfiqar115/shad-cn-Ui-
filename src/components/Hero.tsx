import react from 'react';
import Image from "next/image";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import  heroImage from "@/assets/hero image.webp";
export default function Hero() {
  return (
    
    <div className="max-w-sm sm:max-w-xl md:max-w-2xl">
        <h1 className="p-8 text-3xl sm:p-10 sm:text-5xl font-blod text-gray-900">
            Welcome to Mughal's Blog
            </h1>
            <Button className="sm:max-16 mx-10">
                <Mail className="mr-2 h-4 w-4" />
                <p>Sign in with email</p>
                {/*<link href={"/signup"}>Sign in with email</link>*/} 
            </Button>
            <Image 
            src={heroImage} alt="blogs" className ="w-screen h-screen object-cover
            object-middle-top opacity-80
             absolute top-0 odd:-z-10"/> 
    </div>
  );
}
