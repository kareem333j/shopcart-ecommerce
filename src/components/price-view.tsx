import { cn } from '@/lib/utils'
import PriceFormatter from './price-formatter'

interface Props {
  price: number | undefined,
  discount?: number | undefined,
  className?: string
}

const PriceView = ({
  price,
  discount,
  className
}: Props) => {
  return (
    <div className={cn('flex items-center justify-between gap-2', className)}>
      <PriceFormatter amount={price} className='text-shop-dark-green' />
      {
        price && discount && (
          <PriceFormatter amount={price + (discount * price) / 100}
            className='line-through font-normal text-shop-light-text' />
        )
      }
    </div>
  )
}

export default PriceView;