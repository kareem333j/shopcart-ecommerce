"use client";

import { cn } from "@/lib/utils";
import { Brand } from "../../sanity.types";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "./ui/carousel";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

import AutoScroll from "embla-carousel-auto-scroll";

export function BrandsCarousel({
    brands,
    className,
}: {
    brands: Brand[];
    className?: string;
}) {

    return (
        <>
            <Carousel
                opts={{
                    loop: true,
                    align: "start",
                }}
                plugins={[
                    AutoScroll({
                        speed: 1,
                        startDelay: 0,
                        stopOnMouseEnter: true,
                        stopOnInteraction: false,
                    }),

                ]}
                className={cn("w-full relative", className)}
            >
                <CarouselContent className="-ml-2">
                    {brands?.map((brand, index) => (
                        <CarouselItem key={index} className="basis-1 mx-25 p-0">
                            <Link
                                href={`/brand/${brand?.slug?.current}`}
                                key={brand?._id}
                                className="bg-white flex items-center justify-center p-5 rounded-md
                                hover:bg-shop-light-green/10 hoverEffect w-46 h-24 overflow-hidden"
                            >
                                {brand?.image && (
                                    <Image
                                        src={urlFor(brand?.image).url()}
                                        width={250}
                                        height={250}
                                        alt="brand-image"
                                        className="w-36 h-20 mix-blend-multiply object-contain"
                                    />
                                )}
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute top-0 left-0 w-7 h-full bg-gradient-to-l from-shop-light-bg/10 to-shop-light-bg"></div>
                <div className="absolute top-0 right-0 w-7 h-full bg-gradient-to-l from-shop-light-bg to-shop-light-bg/10"></div>
            </Carousel>
        </>
    );
}
