import { NextPage } from "next";
import Nav from "../../components/Nav"
import { useSession } from "next-auth/react";
import { useState } from "react";
interface props {}

const SignIn: NextPage =(props): JSX.Element=>{
    usestate
    const handlesubmit=()=>{

    }
    return(
        <>
            <Nav/>
            <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={userInfo.username} onchange={(target)=>setuserInfo({...userInfo,username:target.value})}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={userInfo.password} onchange={(target)=>setuserInfo({...userInfo,password:target.value})}/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handlesubmit}>
        Sign In
      </button>
          </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2023 turing tech. All rights reserved.
  </p>
</div>
</div>
        </>
    )
}
export default SignIn