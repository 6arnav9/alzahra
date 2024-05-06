"use client";

import Image from "next/image"
import zahralogo from '@/app/assets/images/zahrabg-rem-white.png'
import { Cinzel } from 'next/font/google'
import NavButton from "./NavButton"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoIosClose } from "react-icons/io";
import { GoSignOut } from "react-icons/go";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from '@/app/firebase/config';
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";


const cinzel = Cinzel({ 
                    style:'normal',
                    weight:'500',
                    subsets:['latin'],
                })
export default function SideNav() {

    const [user] = useAuthState(auth);
    const router = useRouter()
    // if (typeof window !== 'undefined') {
    //     // Safe to use sessionStorage
    //     const userSession = sessionStorage.getItem('user');
    // }

    if(!user) {
        router.push('/')
    }

    const navList : string[] = [`Dashboard`, "Invoices", "Agents", "Clients"]
    const accountOptions : string[] = ["Manage Users"]
    let navOpen = false

    function openSideNav() {
        console.log("Toggled SideNav")
        const hamburger = document.getElementById("hamburger")
        const close = document.getElementById("close")
        const sidenav = document.getElementById("sidenav")

        addEventListener("click", () => {
            if(!navOpen){
                navOpen = true
                console.log("SideNav Opened")
                hamburger?.classList.add("hidden")
                close?.classList.replace("hidden", "visible")
                sidenav?.classList.remove("max-md:hidden")
                sidenav?.classList.add("absolute")
                sidenav?.classList.remove("max-md:closeNav")
                sidenav?.classList.add("max-md:openNav")
            }
        })

        
    }

    function closeSideNav() {
        const close = document.getElementById("close")
        const hamburger = document.getElementById("hamburger")
        const sidenav = document.getElementById("sidenav")

        addEventListener("click", () => {
            if(navOpen) {
                navOpen = false
                console.log("SideNav Closed")
                hamburger?.classList.remove("hidden")
                close?.classList.replace("visible", "hidden")
                sidenav?.classList.add("max-md:hidden")
                sidenav?.classList.remove("absolute")
                sidenav?.classList.add("max-md:closeNav")
                sidenav?.classList.remove("max-md:openNav")

            }
        })
    }
    
    return(
        <>
            <div className="absolute mx-6 my-6 scale-[1.75] md:hidden z-11" id="hamburger" onClick={openSideNav}>
                <GiHamburgerMenu/>
            </div>
            <nav className="min-w-fit min-height-full col-span-2 bg-green-800 h-screen grid grid-rows-10 max-md:hidden transition-transform" id="sidenav">
                <div className="absolute mx-6 mr-6 ml-56 mt-4 scale-[3] text-white hidden md:hidden" id="close" onClick={closeSideNav}>
                    <IoIosClose className="text-white"/>
                </div>
                <section className="flex flex-col items-center row-span-2">
                    <Image className='mt-20'
                        src={zahralogo}
                        height={100}
                        width={100}
                        alt="Al Zahra Logo"
                        />
                    <h1 className={`${cinzel.className} text-center text-2xl text-white`}>
                        Al Zahra 
                    </h1>
                    <h1 className={`${cinzel.className} text-center text-sm text-white max-md:px-4`}>
                        Human Resource Consultancy
                    </h1>
                </section>
                <section className="flex flex-col place-content-evenly  items-center row-span-6">
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
                </section>
                <section className="flex flex-col place-content-around items-center row-span-2">
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
                    <button className="text-white" onClick={() =>{ 
                                                                        signOut(auth)
                                                                        // if (typeof window !== 'undefined') {
                                                                        //     sessionStorage.removeItem('user')
                                                                        // }
                                                                }} > {<GoSignOut className="inline pb-1 pr-1 scale-150"/>} 
                                                                Sign Out
                    </button>
                </section>
            </nav>
        </>
    )
}