import { Container } from "@/components/container";
import HomeCategpries from "@/components/home-categories";
import HomePanner from "@/components/home-panner";
import ProductGrid from "@/components/product-gride";
import { getCategories } from "@/sanity/queries";

const Home = async() => {
  const categories = await getCategories(6);
  return (
    <Container>
      {/* not forget to add suspense */}
      <HomePanner />
      <ProductGrid />
      <HomeCategpries categories={categories} />
    </Container>
  )
}

export default Home;