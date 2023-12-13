import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { AvatarUser } from "./AvatarUser";
import Menu from "./Menu";
import { Button } from "./ui/button";


export default function Navbar() {
  return (
    <header className="grid grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] justify-between items-center w-screen px-3 py-3 border-b">
   <div className="flex justify-center items-center gap-x-3"> 
   
<HamburgerMenuIcon className="md:hidden h-8 w-10 text-gray-300 bg-gray-950 py-1 rounded-md"/>
 
<AvatarUser/>
</div> 
<div className="hidden md:flex justify-center gap-x-3">
<Menu/>
</div>
<div className="justify-self-start">
<Button> Get in Touch </Button>
</div>     
    </header>
  )
}
