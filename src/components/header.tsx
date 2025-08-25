import React from 'react'
import { Container } from './container';
import Logo from './logo';
import HeaderMenu from './header-menu';
import SearchBar from './search-bar';
import { CartIcon } from './cart-icon';
import FavoriteButton from './favorite-button';
import SignIn from './signin';
import { MobileMenu } from './mobile-menu';
import { SignedIn, ClerkLoaded, UserButton, SignedOut } from '@clerk/nextjs';

const Header = async () => {
    return (
        <header className='bg-white py-5'>
            <Container className="flex items-center justify-between text-lightColor">
                <div className='w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0'>
                    <MobileMenu />
                    <Logo />
                </div>
                <HeaderMenu />
                <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
                    <SearchBar />
                    <CartIcon />
                    <FavoriteButton />
                    {/* <SignIn /> */}
                    <ClerkLoaded>
                        <SignedOut>
                            <SignIn />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </ClerkLoaded>
                </div>
            </Container>
        </header>
    )
}

export default Header;