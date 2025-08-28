import { Container } from "@/components/container";
import HomeCategpries from "@/components/home-categories";
import HomePanner from "@/components/home-panner";
import LatestBlogs from "@/components/latest-blogs";
import ProductGrid from "@/components/product-gride";
import ShopByBrands from "@/components/shop-by-brands";
import { getCategories } from "@/sanity/queries";

const Home = async() => {
  const categories = await getCategories(6);
  return (
    <Container>
      {/* not forget to add suspense */}
      <HomePanner />
      <ProductGrid />
      <HomeCategpries categories={categories} />
      <ShopByBrands />
      <LatestBlogs />
    </Container>
  )
}

export default Home;