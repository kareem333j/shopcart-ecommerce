"use client";
import { productType } from '@/constants/data'
import Link from 'next/link'

const HomeTapBar = ({ selectedTap, onTapSelected, onClick }: { selectedTap: string, onTapSelected: (title: string) => void , onClick: () => void }) => {

    return (
        <div className={`flex items-center border-t border-shop-dark-green/10 justify-between flex-wrap gap-5 sticky top-18 z-15 bg-white/70 backdrop-blur-md py-5`}>
            <div className='flex items-center gap-3 font-semibold text-sm'>
                {
                    productType?.map((item) => (
                        <button onClick={() => {
                            onTapSelected(item?.title);
                            onClick();
                        }} key={item?.title} className={`border border-shop-light-green/30 font-semibold
                            py-1.5 px-4 md:px-6 md:py-2 rounded-full hover:bg-shop-light-green hover:border-shop-light-green
                            hover:text-white hoverEffect ${item?.title === selectedTap ? "bg-shop-light-green border-shop-light-green text-white" : "bg-shop-light-green/10"}`}>
                            {item?.title}
                        </button>
                    ))
                }
            </div>
            <Link href={"/shop"} className={`border border-shop-light-green/30
                py-1.5 px-4 md:px-6 rounded-full hover:bg-shop-light-green hover:border-shop-light-green
                hover:text-white bg-shop-light-green/10 font-semibold hoverEffect`}>
                See all
            </Link>
        </div>
    )
}

export default HomeTapBar