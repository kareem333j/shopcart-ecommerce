import React from 'react'
import { Title } from './text'
import { Category } from '../../sanity.types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

const HomeCategpries = ({ categories }: { categories: Category[] }) => {
    return (
        <div className='bg-white border border-shop-light-green/20 my-10 md:my-20
    p-5 md:p-7 rounded-md'>
            <Title className='text-2xl border-b border-shop-light-green/20 pb-3 bg-white'>Popular Categories</Title>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    categories?.map((category) => (
                        <Link href={`/category/${category?.slug?.current}`} key={category?._id} className='bg-shop-light-bg p-5 flex items-center
                        gap-3 group rounded-md'>
                            {
                                category?.image && (
                                    <div className='overflow-hidden border border-shop-dark-green/30 group-hover:border-shop-dark-green
                                    hoverEffect w-20 h-20 p-1 rounded-md'>
                                        <Image
                                            src={urlFor(category?.image).url()}
                                            width={500}
                                            height={500}
                                            alt='category-image'
                                            className='w-full h-full object-contain mix-blend-multiply group-hover:scale-110 hoverEffect'
                                        />
                                    </div>
                                )
                            }
                            <div className='space-y-1'>
                                <h3 className='text-base font-semibold group-hover:text-shop-light-green'>{category?.title}</h3>
                                <p className='text-sm'>
                                    <span className='font-bold text-shop-dark-green'>
                                        {`(${category?.productCount})`}
                                    </span> items available
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeCategpries