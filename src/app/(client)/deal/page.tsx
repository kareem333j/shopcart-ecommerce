import { Container } from "@/components/container";
import { Title } from "@/components/text";
import { getDealProducts } from "@/sanity/queries";
import HotDealProducts from "@/components/hot-deal-products";
import { Product } from "../../../../sanity.types";

const DealsPage = async () => {
    const products: Product[] = await getDealProducts();

    return (
        <div className="py-6 bg-shop-lighter-bg">
            <Container>
                <Title className="mb-3 bg-shop-lighter-bg/30 backdrop-blur-md sticky top-18 left-0 z-15 underline underline-offset-4 decoration-[1px]
                text-base uppercase tracking-wide py-3">
                    Hot Deals Of The Weak
                </Title>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
                    {
                        products?.map((product) => (
                            <HotDealProducts key={product?._id} product={product} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default DealsPage