import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

interface contactItemData {
    title: string,
    subtitle: string,
    icon: React.ReactNode
}

const data: contactItemData[] = [
    {
        title: "Visit Us",
        subtitle: "Cairo, Egypt",
        icon: <MapPin className='h-6 w-6 text-gray-600 group-hover:text-proimary transition-colors' />
    },
    {
        title: "Call Us",
        subtitle: "+010 0000 0000",
        icon: <Phone className='h-6 w-6 text-gray-600 group-hover:text-proimary transition-colors' />
    },
    {
        title: "Working Hours",
        subtitle: "Mon - Sat: 10:00 AM - 7:00 PM",
        icon: <Clock className='h-6 w-6 text-gray-600 group-hover:text-proimary transition-colors' />
    },
    {
        title: "Email Us",
        subtitle: "Shopcart@gmail.com",
        icon: <Mail className='h-6 w-6 text-gray-600 group-hover:text-proimary transition-colors' />
    },
]

const FooterTop = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8
        border-b'>
            {
                data?.map((item, index) => (
                    <div className='flex items-center gap-3 group hover:bg-gray-50
                    transition-colors p-4 hoverEffect' key={index}>
                        {item?.icon}
                        <div>
                            <h3 className='font-semibold text-gray-900 group-hover:text-black hoverEffect'>
                                {item?.title}
                            </h3>
                            <p className='text-gray-600 text-sm mt-1 group-hover:text-gray-900 hoverEffect'>
                                {item?.subtitle}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FooterTop;