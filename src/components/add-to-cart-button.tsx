"use client";
import { Product } from '../../sanity.types'
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const AddToCartButton = ({ product, className }: {
  product: Product,
  className?: string
}) => {
  const isOutOfStock = product?.stock === 0;
  const handleAddToCart = () => {
    window.alert("Product added to cart")
  }
  return (
    <div>
      <Button
        onClick={handleAddToCart}
        className={cn(`w-full bg-shop-dark-green/80 text-shop-light-bg
          shodow-none border border-shop-dark-green font-semibold tracking-wide
          hover:bg-shop-dark-green hover:border-shop-dark-green hoverEffect`, className)}
      >
        <ShoppingBag />{isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  )
}

export default AddToCartButton