"use client"

import Image from "next/image";
import zahralogo from "../assets/images/zahralogo.jpg"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";

export default function SignInForm() {

  function signInTaker() {
    console.log("function call");
    let takenToSignIn = false
    const signInTaker = document.getElementById("signInTaker");
    const welcomeText = document.getElementById("welcomeText");
    const signInForm = document.getElementById("signInForm")

    addEventListener("click", () => {
      if(!takenToSignIn) {
        takenToSignIn = true
        signInTaker?.classList.add("hidden")
        welcomeText?.classList.add("hidden")
        signInForm?.classList.remove("hidden")
        signInForm?.classList.add("max-sm:flex")
      }
    })
  }

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const[CreateUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)
  const[signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)

  const router = useRouter()

  const handleSignUp = async () => {
    try {
      const result = await CreateUserWithEmailAndPassword(email, password)
      console.log(email, password)
      console.log({result})
      setEmail('')
      setPassword('')
    } catch(error) {
      console.error("There was a major error dummy: ",error)
    }
  }

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password)
      console.log("Signed in")
      console.log({res})
      setEmail('')
      setPassword('')
      router.push('/dashboard')
    //   if (typeof window !== 'undefined') {
    //     // Safe to use sessionStorage
    //     sessionStorage.setItem('user', 'true')
    // }
    
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="relative h-screen bg-gradient-to-b from-green-500 to-green-200">
      <div className="rounded-md bg-white shadow-xl w-4/12 min-w-fit max-h-fit absolute inset-0 mx-auto my-auto flex items-center justify-center">
          <div className="flex flex-col gap-2 items-center mt-5">
            <Image className="my-4"
                src={zahralogo}
                height={100}
                width={100}
                alt="Al Zahra Logo"
            />
            <h1 className="my-4 text-2xl font-bold text-green-900 text-center px-4" id="welcomeText">Welcome to Al Zahra</h1>
            <form action="" className="hidden max-sm:flex-col max-sm:items-center" id="signInForm">
                <h1 className="my-4 text-2xl font-bold text-green-900 text-center px-4" id="signInText">Sign Up</h1>

                  <label htmlFor="user" className="sm:pl-8 sm:pr-1 sm:py-2">Username: </label> 
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="sm:my-2 sm:mr-8 max-sm:mx-4 border-solid border-2 border-gray-400 rounded-sm transition hover:scale-105 focus:scale-105 duration-1000"
                  /> <br />
                  
                  <label htmlFor="pass" className="sm:pl-8 sm:pr-1 sm:py-2">Password: </label> 
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="sm:my-2 sm:mr-8 sm:ml-1 max-sm:mx-4 border-solid border-2 border-gray-400 rounded-sm transition hover:scale-105 focus:scale-105 duration-1000"
                  /> <br />

                <button 
                  type="button" 
                  onClick={handleSignIn} 
                  className="block mt-4 mb-10 mx-auto py-2 px-3 rounded-lg bg-green-500 active:bg-green-800 text-white transition hover:scale-110 active:scale-110 duration-500" 
                  id="">
                    Sign in
                </button>
            </form>
            <button 
              type="button" 
              className="block mt-4 mb-10 mx-auto py-2 px-3 rounded-lg bg-green-500 active:bg-green-800 text-white transition hover:scale-110 active:scale-110 duration-500" 
              onClick={signInTaker} 
              id="signInTaker">
                Sign in
            </button>
          </div>
      </div>
    </div>
  );
}
