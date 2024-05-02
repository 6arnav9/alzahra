"use client"

import Image from "next/image";
import zahralogo from "../assets/images/zahralogo.jpg"
// flex flex-row justify-center  h-screen border-solid border-2 border-red-600
// py-10 flex flex-col items-center w-4/12 h-2/6 my-auto shadow-xl py-auto
export default function SignInForm() {

  function signIn() {
    console.log("function call");
    let takenToSignIn = false
    const signInTaker = document.getElementById("signInTaker");
    const welcomeText = document.getElementById("welcomeText");
    const signInText = document.getElementById("signInText");
    const signInForm = document.getElementById("signInForm")

    addEventListener("click", () => {
      if(!takenToSignIn) {
        takenToSignIn = true
        signInTaker?.classList.add("hidden")
        welcomeText?.classList.add("hidden")
        // signInText?.classList.remove("hidden")
        signInForm?.classList.remove("hidden")
        signInForm?.classList.add("max-sm:flex")
      }
    })
  }

  return (
    <div className="flex flex-col gap-2 items-center mt-5">
        <Image className="my-4"
            src={zahralogo}
            height={100}
            width={100}
            alt="Al Zahra Logo"
        />
        <h1 className="my-4 text-2xl font-bold text-green-900 text-center px-4" id="welcomeText">Welcome to Al Zahra</h1>
        <form action="" className="hidden max-sm:flex-col max-sm:items-center" id="signInForm">
            <h1 className="my-4 text-2xl font-bold text-green-900 text-center px-4" id="signInText">Sign In</h1>
            <label htmlFor="user" className="sm:pl-8 sm:pr-1 sm:py-2">Username: </label> 
            <input type="text" name="user" id="user" className="sm:my-2 sm:mr-8 max-sm:mx-4 border-solid border-2 border-gray-400 rounded-sm transition hover:scale-105 focus:scale-105 duration-1000"/> <br />
            <label htmlFor="pass" className="sm:pl-8 sm:pr-1 sm:py-2">Password: </label> 
            <input type="password" name="pass" id="pass" className="sm:my-2 sm:mr-8 sm:ml-1 max-sm:mx-4 border-solid border-2 border-gray-400 rounded-sm transition hover:scale-105 focus:scale-105 duration-1000"/> <br />
            <button type="button" className="block mt-4 mb-10 mx-auto py-2 px-3 rounded-lg bg-green-500 active:bg-green-800 text-white transition hover:scale-110 active:scale-110 duration-500" id="">Sign in</button>
        </form>
        <button type="button" className="block mt-4 mb-10 mx-auto py-2 px-3 rounded-lg bg-green-500 active:bg-green-800 text-white transition hover:scale-110 active:scale-110 duration-500" onClick={signIn} id="signInTaker">Sign in</button>
    </div>
  );
}
