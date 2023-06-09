'use client'
import { FC, useContext, useEffect } from 'react'
import Image from 'next/image'
import { CoinMarketContext } from '@/context/cryptoCtx'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


interface TrendingProps {

}

const Trending: FC<TrendingProps> = ({ }) => {


    const { trendingData, getTrendingData } = useContext(CoinMarketContext)

    useEffect(() => {
        getTrendingData()
    }, [])



    return <>
        {trendingData.length ? (
            <div className="w-50 sm:w-full max-w-md p-8 mt-11 border rounded-lg shadowbg-gray-800 border-gray-700 bg-gray-800 mb-5 md:mb-10 lg:ml-10 mx-auto shadow-xl dark:shadow-md">
                <div className="flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none mb-4 border-b-4 text-white border-b-blue-600">Trending Cryptocurrency</h5>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-700">

                        {trendingData.map((oneData, index) => (

                            <li className="py-2 sm:py-2" key={index}>
                                <div className="flex items-center justify-between space-x-4">
                                    <div className='flex flex-row gap-3'>
                                        <p className="text-sm text-gray-400 truncate">
                                            #{index + 1}
                                        </p>
                                        <Image className="w-6 h-6 rounded-full" width={10} height={10} src={oneData.large} alt={`${oneData.name} picture`} />
                                        <p className="text-sm font-medium truncate text-white">
                                            {oneData.name}
                                        </p>
                                        <p className="text-xs flex justify-center items-center text-gray-400 truncate">
                                            ({oneData.slug})
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-400 truncate">
                                            Rank #{oneData.market_cap_rank}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ) : (
            <div className="w-50 sm:w-full max-w-md p-8 mt-11 border rounded-lg shadowbg-gray-800 border-gray-700 bg-gray-800 mb-5 md:mb-10 lg:ml-10 mx-auto shadow-xl dark:shadow-md">
                <div className="flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-white mb-4 border-b-4 border-b-blue-600">Trending Cryptocurrency</h5>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-700">
                        <li className="py-2 sm:py-2">
                            <SkeletonTheme baseColor="#172436" highlightColor="#22344d">
                                <Skeleton className='pb-5' height={33} />
                                <Skeleton className='pb-5' height={33} />
                                <Skeleton className='pb-5' height={33} />
                                <Skeleton className='pb-5' height={34} />
                                <Skeleton height={34} />
                            </SkeletonTheme>
                        </li>

                    </ul>
                </div>
            </div>

        )}

    </>

}

export default Trending
