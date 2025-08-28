"use client";

import { FC } from 'react'
import Logo from './logo';
import { X } from 'lucide-react';
import { headerData } from '@/constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './social-media';
import { useOutsideClick } from '@/hooks';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();
    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
    return (
        <div
            className={`fixed text-white/70 inset-y-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl ${isOpen ? 'translate-x-0' : '-translate-x-full'} hoverEffect`}
        >
            <div ref={sidebarRef} className="min-w-72 max-w-96 bg-black h-screen gap-5 p-10 border-r border-r-shop-light-green flex flex-col">
                <div className='flex items-center justify-between gap-5'>
                    <Logo className='text-white' spanDesign="group-hover:text-white" />
                    <button onClick={onClose} className='hover:text-shop-light-green hoverEffect'>
                        <X />
                    </button>
                </div>
                <div className='flex flex-col space-y-3.5 font-semibold tracking-wider'>
                    {
                        headerData?.map((item) => (
                            <Link href={item?.href} key={item?.title} className={`hover:text-shop-light-green hoverEffect ${pathname === item?.href && "text-shop-light-green"}`}>
                                {item?.title}
                            </Link>
                        ))
                    }
                </div>
                <SocialMedia />
            </div>
        </div>
    )
}

export default SideMenu