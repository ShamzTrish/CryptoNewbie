

import { FC } from 'react'

interface PriceProps {
    currentPrice: number
}

const Price: FC<PriceProps> = ({ currentPrice }) => {
    return <div className='flex flex-col font-normal'>
        <div>${currentPrice.toLocaleString()}</div>
    </div>
}

export default Price