"use client";

import { Product } from '../../sanity.types'
import { AnimatePresence, motion } from 'motion/react'
import ProductCard from './product-card'

const HotDealProducts = ({ product }: { product: Product }) => {
    return (
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
    )
}

export default HotDealProducts