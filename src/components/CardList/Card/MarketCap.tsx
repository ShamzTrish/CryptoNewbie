

import { FC } from 'react'

interface VolumeProps {
    marketCap: number
}

const MarketCap: FC<VolumeProps> = ({ marketCap }) => {
    return <div className='font-light'>${marketCap.toLocaleString()}</div>
}

export default MarketCap