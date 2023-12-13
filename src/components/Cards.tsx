
import * as React from "react";
import  Heroimage from "@/assets/hero image.webp";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import  image from "@/assets/Zulf.jpg";
export default function CardWithForm(props:{title:string,
  description:string
  image:string
}) {

  return (
    
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        
      </CardHeader>
      <CardContent>
        <img src = {
          props.image
        }  
        width={700} height={700} alt = "post image"/>
              <CardDescription>{props.description} </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Ask me</Button>
        <Button>Se more</Button>
      </CardFooter>
    </Card>
    
  )
}
