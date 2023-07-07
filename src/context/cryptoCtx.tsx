
import { CardData, ResponseChartDetailsData, ResponseData, ResponseDetailsData, ResponseTrendingData, TrendingData } from "@/lib/coinTypes/coinTypes"
import { notFound } from "next/navigation"
import { ReactNode, createContext, useState } from "react"

// TS
export const CoinMarketContext = createContext<{
    coins: CardData[]
    isLoading: boolean,
    setIsLoading: (isLoading: boolean) => any,
    setCoins: React.Dispatch<React.SetStateAction<CardData[]>>,
    getCoins: (page: number) => any,
    getCoinsDetails: (id: string) => any,
    getChartData: (id: string) => any,
    getTrendingData: () => any,
    detailCoin: ResponseDetailsData,
    chartData: ResponseChartDetailsData[],
    trendingData: TrendingData[],


}>({ // DEFAULT VALUES
    coins: [],
    isLoading: false,
    setCoins: () => { },
    setIsLoading: () => { },
    getCoins: async (page) => { },
    getCoinsDetails: async (id) => { },
    getChartData: async (id) => { },
    getTrendingData: async () => { },
    chartData: [],
    trendingData: [],
    detailCoin: {
        symbol: "",
        name: "",
        image: { large: "" },
        id: "",
        description: { en: "" },
        market_cap_rank: 0,
        market_data: {
            ath: { usd: 0 },
            current_price: { usd: 0 },
            market_cap: { usd: 0 },
            fully_diluted_valuation: { usd: 0 },
            total_volume: { usd: 0 },
            price_change_percentage_24h: 0,
            price_change_percentage_1y: 0,
            circulating_supply: 0,
            sparkline_7d: { price: [] },
        },
    }



})

export const CoinMarketProvider = ({ children }: { children: ReactNode }) => {

    const [coins, setCoins] = useState<CardData[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [chartData, setChartData] = useState<ResponseChartDetailsData[]>([])
    const [trendingData, setTrendingData] = useState<TrendingData[]>([])


    const [detailCoin, setDetailCoin] = useState<ResponseDetailsData>({
        symbol: "",
        name: "",
        image: { large: "" },
        id: "",
        description: { en: "" },
        market_cap_rank: 0,
        market_data: {
            ath: { usd: 0 },
            current_price: { usd: 0 },
            market_cap: { usd: 0 },
            fully_diluted_valuation: { usd: 0 },
            total_volume: { usd: 0 },
            price_change_percentage_24h: 0,
            price_change_percentage_1y: 0,
            circulating_supply: 0,
            sparkline_7d: { price: [] },
        },
    }
    )


    // tahle funkce nam vytahuje vsecny data ktery chceme dostat z rawDat. 
    // tuhle funkci si pak zavolam v cardList a posilame sem cislo podle toho jestli user scrollnul na bottom of the page (page: number) 
    // getting all our coins to be rendered on tha main page in Card component
    const getCoins = async (page: number) => {
        try {
            setIsLoading(true)
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`, {
                method: 'GET',
                headers: {
                    'accept': 'application/json'
                }
            })
            const resData: ResponseData[] = await res.json();

            // get only data we need
            const newData = resData.map((data: ResponseData) => {
                // here we deconstruct from the recieved data what we actual want to display
                const { symbol, id, name, image, current_price, market_cap, price_change_percentage_24h, market_cap_rank, sparkline_in_7d: { price }, price_change_percentage_7d_in_currency, price_change_percentage_1h_in_currency } = data;
                return {
                    symbol,
                    id,
                    name,
                    image,
                    chartData: price,
                    marketCap: market_cap,
                    currentPrice: current_price,
                    marketRank: market_cap_rank,
                    priceChange: price_change_percentage_24h,
                    priceChange7d: price_change_percentage_7d_in_currency,
                    priceChange1h: price_change_percentage_1h_in_currency
                }
            })

            setCoins((prevCoins) => [...prevCoins, ...newData])

            if (!res.ok) {
                throw new Error(`FAILED ${res.status}`)
            }
            return newData

        } catch (error) {
            return new Response('Invalid request.', { status: 400 })
        } finally {
            setIsLoading(false)
        }
    }

    // getting details for eahc of our coins - we had to use different route to get information about each coin
    const getCoinsDetails = async (coinId: string) => {

        try {
            setIsLoading(true)
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&sparkline=true`, {
                method: 'GET',
                headers: {
                    'accept': 'application/json'
                }
            })
            const resData: ResponseDetailsData = await res.json();

            if (!res.ok) {
                throw new Error(`FAILED ${res.status}`)
            }

            setDetailCoin(resData)
            setIsLoading(false)
            return resData

        } catch (e) {
            notFound()
        } finally {
            setIsLoading(false)
        }
    }


    // getting coin chart details
    const getChartData = async (id: string) => {

        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365&interval=monthly`, {
                method: 'GET',
                headers: {
                    'accept': 'application/json'
                }
            })

            const resData = await response.json();

            if (!response.ok) {
                throw new Error(`FAILED ${response.status}`)
            }

            const data: ResponseChartDetailsData[] = resData.prices.map((oneValue: any) => ({
                x: oneValue[0], y: oneValue[1].toFixed(2)
            }))

            setChartData(data)

            return data

        } catch (e) {
            throw new Error('Something went wrong')
        }
    }

    // getting top 5 trending coins
    const getTrendingData = async () => {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/search/trending',
                {
                    headers: {
                        'accept': 'application/json'
                    }
                }
            );

            if (!response.ok) {
                throw new Error(`FAILED ${response.status}`);
            }
            const resData: ResponseTrendingData = await response.json();

            const data = resData.coins.map((coinData) => {
                const { item: { market_cap_rank, name, large, slug } } = coinData;
                return {
                    name,
                    market_cap_rank,
                    slug,
                    large
                };
            });
            const top5Coins = data.slice(0, 5); // Get the first 5 coins


            setTrendingData(top5Coins);
            return top5Coins;

        } catch (error) {
            throw new Error('Something went wrong')
        }
    }


    return <CoinMarketContext.Provider value={{
        coins, setCoins, isLoading, setIsLoading, getCoins, detailCoin, getCoinsDetails, getChartData, chartData, getTrendingData, trendingData

    }}>{children}

    </CoinMarketContext.Provider>





}

