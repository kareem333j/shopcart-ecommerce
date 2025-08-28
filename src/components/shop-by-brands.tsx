import Link from "next/link"
import { Title } from "./text"
import { ChevronRight, ArrowRight, Truck, GitCompareArrows, Headset, ShieldCheck } from "lucide-react";
import { getAllBrands } from "@/sanity/queries";
import { BrandsCarousel } from "./brands-carousel";

const extraData = [
    {
        title: "Free Delivery",
        description: "Free shipping over $100",
        icon: <Truck size={45} />,
    },
    {
        title: "Free Return",
        description: "Free shipping over $100",
        icon: <GitCompareArrows size={45} />,
    },
    {
        title: "Customer Support",
        description: "Friendly 27/7 customer support",
        icon: <Headset size={45} />,
    },
    {
        title: "Money Back guarantee",
        description: "Quality checked by our team",
        icon: <ShieldCheck size={45} />,
    },
];


const ShopByBrands = async () => {
    const brands = await getAllBrands();
    return (
        <div className="mb-10 lg:mb-20 bg-shop-light-bg rounded-md
        p-5 lg:p-7">
            <div className="flex items-center justify-between gap-5 mb-10">
                <Title className="text-2xl">
                    Shop By Brands
                </Title>
                <Link
                    href={'/shop'}
                    className="text-sm group flex gap-1 items-center font-semibold tracking-wide
                    hover:text-shop-btn-dark-green pe-3 hoverEffect justify-between"
                >
                    <span>View all</span>
                    <div className="relative flex items-center">
                        <ChevronRight
                            size={17}
                            className="absolute transition-opacity duration-200 group-hover:opacity-0"
                        />
                        <ArrowRight
                            size={17}
                            className="absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        />
                    </div>
                </Link>
            </div>
            <div className="w-full">
                <BrandsCarousel brands={brands} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 p-2 px-auto shadow-sm hover:shadow-shop-light-green/20 py-5">
                {extraData?.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 group text-lightColor hover:text-shop-light-green"
                    >
                        <span className="inline-flex scale-100 group-hover:scale-90 hoverEffect">
                            {item?.icon}
                        </span>
                        <div className="text-sm">
                            <p className="text-darkColor/80 font-bold capitalize">
                                {item?.title}
                            </p>
                            <p className="text-lightColor">{item?.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopByBrands