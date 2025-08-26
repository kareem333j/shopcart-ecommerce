"use client";

import { cn } from "@/lib/utils"
import { Product } from "../../sanity.types"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { useEffect, useState } from "react"

export function CardCarousel({ product, className }: { product: Product, className?: string }) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api]);

    return (
        <>
            <Carousel setApi={setApi} className={cn("w-full max-w-xs", className)}>
                <CarouselContent>
                    {
                        product?.images && (
                            product?.images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <Image
                                        src={urlFor(product.images![0]).url()}
                                        alt='ProductImage'
                                        width={700}
                                        height={700}
                                        loading='lazy'
                                        className={`w-full h-64 object-contain overflow-hidden
                                        transition-transform hoverEffect bg-shop-light-bg
                                        ${product?.stock !== 0 ? "group-hover:scale-105" : "obacity-50"}`}
                                    />
                                </CarouselItem>
                            ))
                        )
                    }
                </CarouselContent>
                <CarouselPrevious className="absolute top-2/4 left-2" />
                <CarouselNext className="absolute top-2/4 right-2" />
            </Carousel>
            <div className="flex justify-center mt-2 gap-2">
                {Array.from({ length: count }).map((_, i) => (
                    <button
                        key={i}
                        className={cn(
                            "h-2 w-2 rounded-full transition-colors",
                            current === i ? "bg-shop-light-green" : "bg-gray-300"
                        )}
                        onClick={() => api?.scrollTo(i)}
                    />
                ))}
            </div>
        </>
    )
}
