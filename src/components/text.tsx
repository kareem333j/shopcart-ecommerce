import { cn } from "@/lib/utils"

const Title = ({children, className}:{children:React.ReactNode, className?:string})=>{
    return(
        <h1 className={cn("text-2xl font-bold text-shop-btn-dark-green capitalize tracking-wide font-sans",className)}>
            {children}
        </h1>
    )
}

const SubTitle = ({children, className}:{children:React.ReactNode, className?:string})=>{
    return(
        <h3 className={cn("font-semibold text-gray-900",className)}>
            {children}
        </h3>
    )
}

const SubText = ({children, className}:{children:React.ReactNode, className?:string})=>{
    return(
        <p className={cn('text-gray-600 text-sm',className)}>
            {children}
        </p>
    )
}

export {Title, SubText, SubTitle};