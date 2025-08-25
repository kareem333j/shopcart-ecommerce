import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CartIcon = () => {
  return (
    <Link href="/cart" className='group relative'>
      <ShoppingBag className='w-5 h-5 hover:text-shop-light-green hoverEffect cursor-pointer' />
      <span className='absolute -top-2 -right-2 bg-shop-dark-green text-white h-5 w-5 rounded-full text-xs font-semibold flex items-center justify-center p-1'>0</span>
    </Link>
  )
}
