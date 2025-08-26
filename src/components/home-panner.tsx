import React from 'react'
import { Title } from './text'
import Link from 'next/link'
import Image from 'next/image'
import { banner_1 } from '@/images'

const HomePanner = () => {
    return (
        <div className='py-16 md:py-0 bg-shop-light-pink rounded-lg px-10 lg:px-24 flex items-center justify-between'>
            <div className='space-y-5'>
                <Title>
                    Grab Upto 50% off on <br />
                    Selected headphones
                </Title>
                <Link href="/shop"
                    className='bg-shop-dark-green/90 text-white/90 
                text-sm font-semibold hover:text-white hover:bg-shop-dark-green py-2 px-5 rounded-md hoverEffect'
                >Buy Now</Link>
            </div>
            <div>
                <Image src={banner_1} alt='banner-1' className='hidden md:inline-flex w-96' />
            </div>
        </div>
    )
}

export default HomePanner