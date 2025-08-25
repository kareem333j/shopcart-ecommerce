import { Container } from "@/components/container";
import HomePanner from "@/components/home-panner";
import ProductGrid from "@/components/product-gride";

const Home = () => {
  return (
    <Container>
      <HomePanner />
      <div className="py-10">
        <ProductGrid />
      </div>
    </Container>
  )
}

export default Home;