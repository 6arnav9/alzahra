import React from 'react'
import Link from 'next/link'
import redirect from 'next/navigation'

const NavButton = ({ menuName } : { menuName : string }) => {
    
    const routeLink = menuName == "Dashboard" ? "/dashboard" : `/dashboard/${menuName.split(" ").join("").toLowerCase()}` 
    return (
        <Link
        href={routeLink}
        className="text-white"
        >
            {menuName}
        </Link>
    )
}

export default NavButton