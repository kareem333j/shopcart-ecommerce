import { Facebook, Github, Linkedin, Slack, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { cn } from '@/lib/utils';

interface Props {
    className?: string,
    iconClassName?: string,
    tooltipClassName?: string;
}

const socialMedia = [
    {
        title: "Youtube",
        href: "#",
        icon: <Youtube className='w-5 h-5' />
    },
    {
        title: "Github",
        href: "#",
        icon: <Github className='w-5 h-5' />
    },
    {
        title: "LinkedIn",
        href: "#",
        icon: <Linkedin className='w-5 h-5' />
    },
    {
        title: "Facebook",
        href: "#",
        icon: <Facebook className='w-5 h-5' />
    },
    {
        title: "Slack",
        href: "#",
        icon: <Slack className='w-5 h-5' />
    }
]

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
    return (
        <TooltipProvider>
            <div className={cn('flex items-center gap-3.5', className)}>
                {
                    socialMedia?.map((item) => (
                        <Tooltip key={item?.title}>
                            <TooltipTrigger asChild>
                                <Link className={cn("p-2 border rounded-full hover:text-white hover:border-shop-light-green hoverEffect", iconClassName)} href={item?.href} key={item?.title}>
                                    {item?.icon}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className={cn("text-darkColor bg-white font-semibold", tooltipClassName)}>
                                {item?.title}
                            </TooltipContent>
                        </Tooltip>
                    ))
                }
            </div>
        </TooltipProvider>
    )
}

export default SocialMedia;