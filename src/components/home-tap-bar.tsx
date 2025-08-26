import { productType } from '@/constants/data'
import Link from 'next/link'
import React from 'react'

const HomeTapBar = ({selectedTap, onTapSelected}: {selectedTap: string, onTapSelected: (title: string) => void}) => {
    return (
        <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-3 font-semibold text-sm'>
                {
                    productType?.map((item) => (
                        <button onClick={() => onTapSelected(item?.title)} key={item?.title} className={`border border-shop-light-green/30
                            py-1.5 px-4 md:px-6 md:py-2 rounded-full hover:bg-shop-light-green hover:border-shop-light-green
                            hover:text-white hoverEffect ${item?.title === selectedTap ? "bg-shop-light-green border-shop-light-green text-white":"bg-shop-light-green/10"}`}>
                            {item?.title}
                        </button>
                    ))
                }
            </div>
            <Link href={"/shop"} className={`border border-shop-light-green/30
                py-1.5 px-4 md:px-6 md:py-2 rounded-full hover:bg-shop-light-green hover:border-shop-light-green
                hover:text-white hoverEffect`}>
                See all
            </Link>
        </div>
    )
}

export default HomeTapBar