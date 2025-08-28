import { Container } from '@/components/container';
import ProductsByCategory from '@/components/products-by-category';
import { Title } from '@/components/text';
import { getCategories } from '@/sanity/queries';
import React from 'react'

const CategoryPage = async({params}: {params: Promise<{slug: string}>}) => {
  const categories = await getCategories();
  const {slug} = await params; 
  return (
    <div className='py-6'>
      <Container>
        <Title className='text-lg'>
          Products By Category: {" "}
          <span className='font-bold text-green-600 capitalize tracking-wide'>
            {slug && slug}
          </span>
        </Title>
        <ProductsByCategory categories={categories} slug={slug} />
      </Container>
    </div>
  )
}

export default CategoryPage