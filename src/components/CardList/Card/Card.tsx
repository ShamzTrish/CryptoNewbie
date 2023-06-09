"use client"

import { FC } from 'react'
import { CardData } from '@/lib/coinTypes/coinTypes'
import Pair from './Pair'
import Price from './Price'
import PriceChange from './PriceChange'
import PriceChange7d from './PriceChange7d'
import PriceChange1h from './PriceChange1h'
import MarketCap from './MarketCap'
import Chart from './Chart'
import { useRouter } from 'next/navigation'



const Card: FC<CardData> = ({ symbol, name, image, currentPrice, marketCap, priceChange, id, marketRank, chartData, priceChange7d, priceChange1h }) => {

    const router = useRouter()


    const viewCoinDetails = (id: string) => {
        router.push(`/currencies/info?id=${id}`)
    }


    return <tr onClick={() => viewCoinDetails(id)} className='cursor-pointer hover:bg-gray-400 dark:hover:bg-slate-800 transition-colors'>
        <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">{marketRank}</td>
        <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-left"> <Pair name={name} image={image} symbol={symbol} />
        </td>
        <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap">
            <PriceChange1h priceChange1h={priceChange1h} />
        </td>
        <td className="px-1 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
            <PriceChange priceChange={priceChange} />
        </td>
        <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap">
            <PriceChange7d priceChange7d={priceChange7d} />
        </td>
        <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap">
            <MarketCap marketCap={marketCap} />
        </td>
        <td className="hidden sm:table-cell px-1 py-1 whitespace-nowrap">
            <Chart chartData={chartData} priceChange7d={priceChange7d} />
        </td>
        <td className="px-1 py-3 sm:px-6 sm:py-4 whitespace-nowrap">
            <Price currentPrice={currentPrice} />
        </td>
    </tr >
}

export default Card

