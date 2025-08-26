"use client";

import { useEffect, useRef, useState } from "react";
import HomeTapBar from "./home-tap-bar";
import { productType } from "@/constants/data";
import { client } from "@/sanity/lib/client";
import { AnimatePresence, motion } from "motion/react";
import { Loader2 } from "lucide-react";
import NoProductAvailable from "./no-product-available";
import ProductCard from "./product-card";
import { Product } from "../../sanity.types";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTap, setSelectedTap] = useState(productType[0]?.title || "");
  const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ..., "categories":categories[]->title
}`
  const params = { variant: selectedTap.toLowerCase() };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(response);
        console.log(typeof response);
        console.log(typeof response[0]);
      } catch (error) {
        console.log("Product fetching error: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [selectedTap]);

  const ref = useRef<HTMLDivElement | null>(null);

  const scrollToWithOffset = (element: HTMLElement, offset: number) => {
    const y = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y - offset, behavior: "smooth" });
  };

  const scrollToFirstSection = () => {
    if (ref.current) {
      scrollToWithOffset(ref.current, 50);
    }
  };

  return (
    <div ref={ref} className="py-10">
      <HomeTapBar selectedTap={selectedTap} onTapSelected={setSelectedTap} onClick={scrollToFirstSection} />
      {
        loading ? (
          <div className="flex items-center justify-center rounded-lg
            flex-col py-10 min-h-80 gap-5 bg-gray-100 w-full mt-10">
            <div className="space-x-2 flex items-center text-blue-600">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Products are loading...</span>
            </div>
          </div>
        ) : (
          products?.length ?
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
              {
                products?.map((product) => (
                  <AnimatePresence key={product?._id}>
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
                ))
              }
            </div>
            : <NoProductAvailable selectedTab={selectedTap} />
        )
      }
    </div>
  )
}

export default ProductGrid