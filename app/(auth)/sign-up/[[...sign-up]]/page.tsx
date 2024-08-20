import {  SignUp } from '@clerk/nextjs'
import React from 'react'
//this component is same as clerk userbtn in nav but to customise the btn we have specific route and component if we add 2 routes in .env.local then this will work 
const SignUpPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
        <SignUp />
    </main>
  )
}

export default SignUpPage