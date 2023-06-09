

import { Volume } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

interface PairProps {
    name: string
    image: string
    symbol: string
}

const Pair: FC<PairProps> = ({ name, image, symbol }) => {

    return <div className='flex justify-start items-start'>
        <span className='pr-5'>
            <Image src={image} height={35} width={35} alt={`${name} logo`} className='items-center justify-center h-35 w-35' />
        </span>
        <div className='flex-col'>
            <div>{name}</div>
            <div className='font-medium text-xs'>{symbol.toLocaleUpperCase()}</div>
        </div>
    </div>

}

export default Pair