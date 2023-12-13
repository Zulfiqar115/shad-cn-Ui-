import  CardWithForm  from "@/components/Cards"
import { Montserrat } from "next/font/google";
const mont = Montserrat({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

export default function blog() {
  return (
    <>
    <section  className="flex justify-center shadow-lg min-h-screen"> </section>
      
    <div className='w-11/12 m-4 rounded-sm bg-white'>
      <h1 className={`${mont.className} text-center mt-3 font-bold text-3xl`}>
      Our Futured Blog
      </h1>
      <div className="flex items-center flex-wrap mt-20 justify-center gap-4">
        <CardWithForm title ="Our First Blog" 
        description="My first blog description"
        image = "https://media.istockphoto.com/id/1452841791/photo/beautiful-shot-of-the-grande-canyon-at-sunrise.jpg?s=1024x1024&w=is&k=20&c=2qKQ9yDdAxXHy9YZjv-2bB1YEcE2e7ISdtlO2TY8WwI="
        />
        <CardWithForm title ="Our Second Blog"
        description="My Second  blog description"
        image="https://media.istockphoto.com/id/1503370782/photo/highway-on-the-road-arizona-usa.jpg?s=1024x1024&w=is&k=20&c=gRMNk0w9TE8xMg6k_WvbZibRUW3qq0QzwK-tbEh3HL8="
        />
        <CardWithForm title ="Our Third Blog"
        description="My Third  blog description"
        image="https://media.istockphoto.com/id/1447630335/photo/wide-angle-view-of-grand-canyon.jpg?s=1024x1024&w=is&k=20&c=-q7pGD1hsE8F4QmCsHwoJ08mNmo9L-_jBogQ3GcToQg="
        />
        <CardWithForm title ="Our Forth Blog"
        description="My Forth blog description"
        image="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CardWithForm title ="Our  Fifth Blog"
        description="My  Fifth blog description"
        image="https://images.unsplash.com/photo-1522878129833-838a904a0e9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CardWithForm title ="Our Sixth Blog"
        description="My Sixth blog description"
        image = "https://media.istockphoto.com/id/1475658080/photo/grand-canyon-sunset-view-from-south-rim.jpg?s=1024x1024&w=is&k=20&c=FOT1dau8V8sPIYedU6X6kA7BI2CNgvPrhf9LQiAYpRs="
        />
       </div>
      </div>
      
      </> 
     
  
  )
}
