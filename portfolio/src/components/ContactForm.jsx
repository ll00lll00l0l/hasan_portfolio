import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const SignUp = () => {
  return (
  <>
   
    <div className="flex justify-center items-center h-screen ">
       <div>
    <h1 className='flex flex-col	 font-bold font-mont text-base pb-2'>Sign In</h1>
    <h2 className='text-sm font-lato pb-6'> Sign in to your account</h2>
    <span className=' flex  flex-nowrap space-x-8 pb-6'>
      <button className='bg-white rounded-lg text-vsm px-3 py-2 flex flex-nowrap '>
        <Image src="/assests/gicon.png"  className='mr-4'width={15}  height={15} alt=""/> Sign in with Google</button>
      <button className='bg-white rounded-lg text-vsm px-3 py-2  flex flex-nowrap  '>
      <Image src="/assests/appleicon.png"  className='mr-4' width={15}  height={15} alt=""/>
        Sign in with Apple</button>
    </span>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">

        <form className=" space-y-3	font-lato">
          <label  className='pt-3	'>Email address</label>
          <input
            type="text"
            className="border bg-gray-300 px-3 pb-4 rounded-md w-full"
          />
         <label >password</label>
          <input
            type="password"
            className=" bg-gray-300 px-3 py-2 rounded-md w-full"
            required
          />
          <a href="#" className="text-blue-500 font-lato"> Forgot password?</a>
          <Link href="/pages/index"> <button
            type="submit"
            className="bg-indigo-500
            text-white px-4 py-2 rounded-md w-full font-lato hover:bg-blue-600">
           Sign In

          </button></Link>
         
        </form>
      
      </div>
         <p className="text-gray-500 text-vsm pt-4 justify-center items-center">
         Don’t have an account? <Link href="/pages/index" className="text-blue-500"> Register here</Link>
          </p>
    </div></div>
    </>
  );
};

export default SignUp;
