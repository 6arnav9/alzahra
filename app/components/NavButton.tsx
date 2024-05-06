import React from 'react'
import Link from 'next/link'
import { FaUsers } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { LuBuilding2 } from "react-icons/lu";
import { MdOutlinePeopleOutline } from "react-icons/md";


const NavButton = ({ menuName } : { menuName : string }) => {


    const iconCollection : React.ReactNode[] =  [<RxDashboard className='ml-8 pb-1 pr-1 scale-150 items-center' key={"Dashboard"}/>, 
                                                <LiaFileInvoiceSolid className='ml-8 pb-1 pr-1 scale-150' key={"Invoices"}/>, 
                                                <MdOutlinePeopleOutline className='ml-8 pb-1 pr-1 scale-150' key={"Agents"}/>, 
                                                <LuBuilding2 className='ml-8 pb-1 pr-1 scale-150' key={"Clients"}/>, 
                                                <FaUsers className='ml-12 pb-1 pr-1 scale-150' key={"Manage Users"}/>]

    const icon = (iconCollection : React.ReactNode[] , menuName : string) => {
            if(menuName == "Dashboard") return iconCollection[0]
            if(menuName == "Invoices") return iconCollection[1]
            if(menuName == "Agents") return iconCollection[2]
            if(menuName == "Clients") return iconCollection[3]
            if(menuName == "Manage Users") return iconCollection[4]
        
    }
    const routeLink = menuName == "Dashboard" ? "/dashboard" : `/dashboard/${menuName.split(" ").join("").toLowerCase()}` 
    return (
        <Link
        href={routeLink}
        className="text-white"
        >
            
            {icon(iconCollection, menuName)} {menuName}
        </Link>
    )
}

export default NavButton