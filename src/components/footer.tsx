import React from 'react'
import { Container } from './container';
import FooterTop from './footer-top';
import Logo from './logo';
import SocialMedia from './social-media';
import { SubText, SubTitle } from './ui/text';
import { categoriesData, quickLinksData } from '@/constants/data';
import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  return (
    <footer className='bg-white border-t border-t-black/20'>
      <Container>
        <FooterTop />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12'>
          <div className='space-y-4'>
            <Logo />
            <SubText>
              Discover curated furniture collections at Shopcart, blending style
              and comfort to elevate your living spaces
            </SubText>
            <SocialMedia
              className='text-darkColor/60'
              iconClassName='border-darkColor/60 hover:border-shop-dark-green
              hover:text-shop-dark-green'
              tooltipClassName='bg-darkColor text-white'
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className='space-y-3 mt-4'>
              {
                quickLinksData?.map((item) => (
                  <li key={item?.title} className='hover:text-shop-light-green hoverEffect font-medium text-gray-600'>
                    <Link href={item?.href}>{item?.title}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className='space-y-3 mt-4'>
              {
                categoriesData?.map((item) => (
                  <li key={item?.title} className='hover:text-shop-light-green hoverEffect font-medium text-gray-600'>
                    <Link href={`/categories/${item?.href}`}>{item?.title}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='space-y-4'>
            <SubTitle>Newsletter</SubTitle>
            <SubText>
              Subscribe to our newsletter to receive updates and exclusive
              offers
            </SubText>
            <form className='space-y-2'>
              <Input type="email" placeholder='Enter your email' required />
              <Button className='w-full'>Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} <Logo className="text-sm" />. All
            rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;