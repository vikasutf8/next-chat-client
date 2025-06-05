import Link from 'next/link'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ProfileMenu from '../auth/ProfileMenu'


function DashNav({name, image}:{name:string,image?:string}) {
  return (
     <nav className="p-6 flex justify-between items-center bg-white shadow-sm">
      <h1 className="text-xl md:text-2xl font-extrabold">QuickChat</h1>
      <div className="flex items-center space-x-2 md:space-x-6 text-gray-700">
       <ProfileMenu name={name} image={image}/>
     
       
      </div>
    </nav>

  )
}

export default DashNav