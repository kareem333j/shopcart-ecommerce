import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SignIn = () => {
  return (
    <SignInButton mode='modal'>
      <button className='text-sm font-semibold hover:text-darkColor hoverEffect text-lightColor hover:cursor-pointer'>Login</button>
    </SignInButton>
  )
}

export default SignIn