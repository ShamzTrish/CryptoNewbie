
import { CardData, ResponseChartDetailsData, ResponseData, ResponseDetailsData, ResponseTrendingData, TrendingData } from "@/lib/coinTypes/coinTypes"
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
    const getCoins = async (page: number) => {
        try {
            setIsLoading(true)
            const rawResponse = await fetch(`/api/crypto/${page}`)
            //here I'm taking the fetched data from CG and parse them through json and string result is saved into const data.
            const data: ResponseData[] = await rawResponse.json()
            console.log(data, 'DATA')
            const newData = data.map((data: ResponseData) => {
                const { id, symbol, name, image, current_price, market_cap, price_change_percentage_24h, market_cap_rank, sparkline_in_7d: { price }, price_change_percentage_7d_in_currency, price_change_percentage_1h_in_currency
                } = data // here I choose which data I want to take out from all the coinGecco data I get from them.

                return {
                    symbol,
                    name,
                    image,
                    currentPrice: current_price,
                    marketCap: market_cap,
                    priceChange: price_change_percentage_24h,
                    priceChange1h: price_change_percentage_1h_in_currency
                    ,
                    id,
                    marketRank: market_cap_rank,
                    chartData: price,
                    priceChange7d: price_change_percentage_7d_in_currency
                }
            })

            console.log('NEW DATA', newData)

            setCoins((prevCoins) => [...prevCoins, ...newData])
            return newData


        } catch (error) {
            console.log('MOJE error', error)

        } finally {
            setIsLoading(false)
        }
    }

    // tady dostavame detaily o coins

    const getCoinsDetails = async (id: string) => {

        try {
            const rawResponse = await fetch(`/api/crypto/info/${id}`)
            const data: ResponseDetailsData = await rawResponse.json()

            setDetailCoin(data)

            return data

        } catch (error) {
            throw new Error('Something went wrong!')

        }
    }

    // getting dATA FOR OUR CHART
    const getChartData = async (id: string) => {

        try {
            const rawResponse = await fetch(`/api/crypto/info/chart/${id}`)
            const resData = await rawResponse.json()
            const data: ResponseChartDetailsData[] = resData.prices.map((value: any) => {
                return { x: value[0], y: value[1].toFixed(2) }
            })

            setChartData(data)

            return data


        } catch (error) {
            throw new Error('Something went wrong!')
        }

    }


    // getting trending coins
    const getTrendingData = async () => {
        try {
            const rawResponse = await fetch(`api/crypto/trending`);
            const resData: ResponseTrendingData = await rawResponse.json();
            console.log('RES DATA', resData);

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
            throw new Error('Something went wrong!')
        }
    }


    return <CoinMarketContext.Provider value={{
        coins, setCoins, isLoading, setIsLoading, getCoins, detailCoin, getCoinsDetails, getChartData, chartData, getTrendingData, trendingData

    }}>{children}

    </CoinMarketContext.Provider>





}

