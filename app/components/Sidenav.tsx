
import Image from "next/image"
import zahralogo from '@/app/assets/images/zahrabg-rem-white.png'
import { Cinzel } from 'next/font/google'
import NavButton from "./NavButton"

const cinzel = Cinzel({ 
                    style:'normal',
                    weight:'500',
                    subsets:['latin'],
                })

export default function SideNav() {

    const navList : string[] = ["Dashboard", "Invoices", "Agents", "Clients"]
    const accountOptions : string[] = ["Manage Users", "Sign Out"]
    
    return(
        <>
            <div className="flex flex-col items-center row-span-2">
                <Image className='mt-20'
                    src={zahralogo}
                    height={100}
                    width={100}
                    alt="Al Zahra Logo"
                />
                <h1 className={`${cinzel.className} text-center text-2xl text-white`}>
                    Al Zahra 
                </h1>
                <h1 className={`${cinzel.className} text-center text-sm text-white`}>
                    Human Resource Consultancy
                </h1>
            </div>
            <div className="flex flex-col place-content-evenly  items-center row-span-6">
                <ul className="flex flex-col text-center gap-6">
                    {navList.map((navItem) => {
                        return(
                            <li key={navItem}
                                className="px-8 py-4">
                                
                                <NavButton  
                                    menuName={navItem}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="flex flex-col place-content-around items-center row-span-2">
                <ul className="flex flex-col text-center gap-4">
                    {accountOptions.map((accountItem) => {
                        return(
                            <li 
                                key={accountItem}
                                className="px-5 py-4">
                                <NavButton  
                                    menuName={accountItem}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
} 