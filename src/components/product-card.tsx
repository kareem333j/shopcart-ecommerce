import { Product } from '../../sanity.types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link';
import { Flame, StarIcon } from 'lucide-react';
import AddToWishListButton from './add-to-wish-list-button';
import { Title } from './text';
import PriceView from './price-view';
import AddToCartButton from './add-to-cart-button';
import { CardCarousel } from './card-carousel';

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className='text-sm border-[1px] border-dark-blue/20 rounded-md
        bg-white group'>
            <div className='relative overflow-hidden bg-shop-light-bg group'>
                {product?.images && (
                    <div className="mx-auto max-w-xs py-2 relative">
                        <CardCarousel product={product} />
                    </div>
                )}
                <AddToWishListButton product={product} />
                {
                    product?.status === "sale" ? (
                        <p className="absolute top-2 left-2 z-10 text-xs border 
                        border-darkColor/50 px-2 rounded-full 
                        group-hover:border-shop-light-green 
                        group-hover:text-shop-light-green hoverEffect">
                            Sale!
                        </p>
                    ) : (
                        <Link
                            href={"/deal"}
                            className="absolute top-2 left-2 z-10 border 
                            border-shop-orange/50 p-1 rounded-full 
                            group-hover:border-shop-orange 
                            hover:text-shop-dark-green hoverEffect"
                        >
                            <Flame
                                size={18}
                                fill="#fb6c08"
                                className="text-shop-orange/50 group-hover:text-shop-orange hoverEffect"
                            />
                        </Link>
                    )
                }
            </div>
            <div className="p-3 flex flex-col gap-2">
                {
                    product?.categories && (
                        <p className='uppercase text-xs line-clamp-1
                        text-shop-light-text/90'>
                            {
                                product?.categories?.map((cat) => cat).join(", ")
                            }
                        </p>
                    )
                }
                <Title className='text-sm line-clamp-1'>
                    {product?.name}
                </Title>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-0.5'>
                        {
                            [...Array(5)].map((_, index) => (
                                <StarIcon key={index}
                                    size={12}
                                    className={
                                        index < 4 ? "text-shop-lighter-green" : "text-shop-lighter-text"
                                    }
                                    fill={index < 4 ? "#93D991" : "#ababab"}
                                />
                            ))
                        }
                    </div>
                    <p className='text-shop-light-text text-xs tracking-wide'>5 Reviws</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='font-medium'>In Stock</p>
                    <p className={(product?.stock as number) === 0 ? "text-red-600 hoverEffect" : "font-semibold text-shop-light-green/90"}>
                        {
                            (product?.stock as number) > 0 ?
                                "x" + product?.stock
                                :
                                <span className='flex items-start flex-col'>
                                    unavailable
                                    <span className='w-0 h-0.25 bg-red-600 group-hover:w-full hoverEffect'></span>
                                </span>
                        }

                    </p>
                </div>
                <PriceView
                    price={product?.price}
                    discount={product?.discount}
                />
                <AddToCartButton
                    product={product}
                    className='w-full rounded-lg'
                />
            </div>
        </div>
    )
}

export default ProductCard