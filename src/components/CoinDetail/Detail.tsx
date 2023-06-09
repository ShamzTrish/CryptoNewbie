import { CoinMarketContext } from '@/context/cryptoCtx'
import { cn, currencyFormat, numbersFormat } from '@/lib/utils'
import { ArrowBigDown, ArrowBigUp } from 'lucide-react'
import Image from 'next/image'
import { FC, useContext } from 'react'

interface DetailProps {

}

const styles = {
    title: `dark:text-gray-400 text-slate-900 font-medium whitespace-nowrap mr-2`,
}


const Detail: FC<DetailProps> = ({ }) => {

    const { detailCoin } = useContext(CoinMarketContext)


    const currentPrice = detailCoin?.market_data.current_price.usd
    const volume = detailCoin?.market_data.total_volume.usd
    const priceChange24h = detailCoin?.market_data.price_change_percentage_24h
    const marketCap = detailCoin?.market_data.market_cap.usd
    const fullMarketCap = detailCoin?.market_data.fully_diluted_valuation.usd
    const CSSupply = detailCoin?.market_data.circulating_supply
    const ath = detailCoin?.market_data.ath.usd
    const priceChange1y = detailCoin?.market_data.price_change_percentage_1y



    return (
        <main className='max-w-screen-xl mx-auto text-slate-900 dark:text-zinc-300'>
            <div className='flex max-w-screen-2xl m-auto pt-10 flex-col justify-between lg:flex-row'>
                <div className='flex flex-col'>
                    <div className='flex flex-col sm:flex-row justify-between'>
                        <div className='flex items-center mr-[4.5rem]'>
                            {detailCoin?.image.large && (
                                <Image
                                    src={detailCoin.image.large}
                                    height={55}
                                    width={55}
                                    alt={`${detailCoin.name} logo`}
                                    className='items-center justify-center h-55 w-55 mr-4'
                                />
                            )}
                            <div>
                                <div className='flex'>
                                    <p className='text-3xl'>{detailCoin?.name}</p>
                                    &nbsp; &nbsp;
                                    <p className='bg-slate-800 text-zinc-300 flex items-center px-3 rounded-xl'>{detailCoin?.symbol}</p>
                                </div>
                            </div>
                        </div>
                        <div className='pl-5 pt-5 sm:pl-0 sm:pt-0'>
                            <div className='flex pb-1'>
                                <p className='text-slate-900 dark:text-zinc-400 font-medium'>
                                    {detailCoin?.name} ({detailCoin?.symbol.toLocaleUpperCase()})
                                </p>
                            </div>
                            <div className='flex items-start'>
                                <h1 className='dark:text-zinc-200 text-slate-900 text-4xl'>{currencyFormat(currentPrice)}</h1>
                                &nbsp;&nbsp;&nbsp;
                                <div className={cn('flex items-center px-3 py-1.5 ml-3 rounded-xl text-zinc-200', {
                                    'dark:bg-green-600 bg-green-700': priceChange24h > 0,
                                    'dark:bg-red-600 bg-red-700': priceChange24h < 0,

                                })}>
                                    {priceChange24h > 0 ? (
                                        <ArrowBigUp className='h-4 w-4' />
                                    ) : priceChange24h === 0 ? (
                                        null
                                    ) : (
                                        <ArrowBigDown className='h-4 w-4' />
                                    )}
                                    <small className='pl-1'>{priceChange24h.toFixed(3)}%</small>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* market cap etc */}
                    <div className='flex justify-between flex-col sm:flex-row p-4 mt-[4rem] border-b border-t border-gray-800 '>
                        <div className='flex'>
                            <div className='pr-2 ml-1 md:ml-10 sm:pl-5 w-full'>
                                <div>
                                    <small className={styles.title}>Market Cap</small>
                                </div>
                                <small>{currencyFormat(marketCap)}</small>
                            </div>

                            <div className='ml-1 md:ml-10 pl-5 w-full sm:border-l sm:border-gray-800'>
                                <div>
                                    <div>
                                        <small className={styles.title}>Fully Diluted Market Cap</small>
                                    </div>
                                    <small>{currencyFormat(fullMarketCap)}</small>
                                </div>
                                <br />
                                <div>
                                    <div>
                                        <small className={styles.title}>Price change 24h</small>
                                    </div>
                                    <small className={cn({
                                        'text-red-600': priceChange24h < 0,
                                        'text-green-600': priceChange24h > 0,

                                    })}>{priceChange24h.toFixed(2)}%</small>
                                </div>
                            </div>
                        </div>
                        {/* --------- */}
                        <div className='flex '>
                            <div className='ml-1 md:ml-8 sm:pl-5 w-full sm:border-l sm:border-gray-800'>
                                <div className='border-t border-gray-800 sm:border-none'>
                                    <div>
                                        <small className={styles.title}>All time high</small>
                                    </div>
                                    <small>{currencyFormat(ath)}</small>
                                </div>
                                <br />
                                <div>
                                    <div>
                                        <small className={styles.title}>Price change 1y</small>
                                    </div>
                                    <small className={cn({
                                        'text-red-600': priceChange1y < 0,
                                        'text-green-600': priceChange1y > 0,

                                    })}>{priceChange1y.toFixed(2)}%</small>
                                </div>
                            </div>

                            <div className='ml-1 md:ml-10 pl-5 w-full sm:border-l sm:border-gray-800'>
                                <div className='border-t border-gray-800 sm:border-none'>
                                    <div>
                                        <small className={styles.title}>Circulating Supply</small>
                                    </div>
                                    <small>{numbersFormat(CSSupply)} {detailCoin?.symbol.toLocaleUpperCase()}</small>
                                </div>
                                <br />
                                <div>
                                    <div>
                                        <div>
                                            <small className={styles.title}>Volume</small>
                                        </div>
                                        <small>{currencyFormat(volume)}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex mt-5 lg:mt-0 mx-auto lg:mx-0'>
                    <div className='flex items-center justify-center'>
                        <Image src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" width={300} height={300} className='rounded-xl' />
                    </div>
                </div>


            </div>
        </main >
    )
}

export default Detail
