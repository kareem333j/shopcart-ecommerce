"use client";

import { useState } from "react";
import HomeTapBar from "./home-tap-bar";
import { productType } from "@/constants/data";

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([]);
    const [selectedTap, setSelectedTap] = useState(productType[0]?.title || "");
  return (
    <div>
        <HomeTapBar selectedTap={selectedTap} onSelectedTap={setSelectedTap} />
    </div>
  )
}

export default ProductGrid