"use client";

import { useEffect, useRef, useState } from "react";
import { Category, Product } from "../../sanity.types";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { Button } from "./ui/button";
import NoProductAvailable from "./no-product-available";
import { AnimatePresence, motion } from "motion/react";
import { Loader2 } from "lucide-react";
import ProductCard from "./product-card";

const ProductsByCategory = ({ categories, slug }: { categories: Category[], slug: string }) => {
    const [currentSlug, setCurrentSlug] = useState(slug);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleCategoryChange = (newSlug: string) => {
        if (newSlug === currentSlug) return; // Prevent unnecessary updates
        setCurrentSlug(newSlug);
        router.push(`/category/${newSlug}`, { scroll: false }); // Update URL without
    };

    const ref = useRef<HTMLDivElement | null>(null);
    const buttonRefs = useRef<HTMLButtonElement[]>([]);

    const scrollToWithOffset = (element: HTMLElement, offset: number) => {
        const y = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y - offset, behavior: "smooth" });
    };

    const scrollToFirstSection = () => {
        if (ref.current) {
            scrollToWithOffset(ref.current, 130);
        }
    };


    const fetchProducts = async (categorySlug: string) => {
        setLoading(true);
        try {
            const query = `
        *[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc){
        ...,"categories": categories[]->title}
      `;
            const data = await client.fetch(query, { categorySlug });
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts(currentSlug);
    }, [router]);

    useEffect(() => {
        setTimeout(() => {
            scrollToFirstSection();
        }, 100);

        const index = categories.findIndex(cat => cat.slug?.current === currentSlug);
        if (index !== -1) {
            requestAnimationFrame(() => { // Use requestAnimationFrame to ensure scrolling will play after dom is loaded
                buttonRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest"
                });
            });
        }

    }, [currentSlug, categories]);

    return (
        <div className="py-5 w-[100%] flex flex-col md:flex-row items-start gap-5">
            <div className="flex flex-row overflow-x-scroll scrollbar-hide border
                sticky top-18 left-0 z-15 bg-white/30 backdrop-blur-md
                w-screen -mx-80 pr-4 md:w-auto md:mx-0 md:pr-0 lg:pr-0 md:flex-col">
                {categories?.map((item, index) => (
                    <Button
                        ref={(el: HTMLButtonElement | null) => {
                            buttonRefs.current[index] = el!;
                        }}
                        key={item?._id}
                        onClick={() => {
                            handleCategoryChange(item?.slug?.current as string);
                        }}
                        className={`bg-transparent border-0 p-0 rounded-none text-darkColor shadow-none hover:bg-shop-lighter-green hover:text-darkColor font-semibold hoverEffect border-b last:border-b-0 transition-colors capitalize ${item?.slug?.current === currentSlug && "bg-shop-light-green text-white border-shop-light-green"}`}
                    >
                        <p className="w-full text-left px-2">{item?.title}</p>
                    </Button>
                ))}
            </div>
            <div className="flex-1 md:w-auto" ref={ref}>
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full">
                        <div className="flex items-center space-x-2 text-blue-600">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Products is loading...</span>
                        </div>
                    </div>
                ) : products?.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
                        {products?.map((product: Product) => (
                            <AnimatePresence key={product._id}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0.2, scale: 0.97, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0.2 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            </AnimatePresence>
                        ))}
                    </div>
                ) : (
                    <NoProductAvailable
                        selectedTab={currentSlug}
                        className="mt-0 w-full"
                    />
                )}
            </div>
        </div>
    )
}

export default ProductsByCategory