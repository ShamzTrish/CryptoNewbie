
import { FC, useContext } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js'

import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { ResponseDetailsData } from '@/lib/coinTypes/coinTypes';
import { CoinMarketContext } from '@/context/cryptoCtx';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)


interface HistoryChartProps {
    coinId: string
    detailCoin: ResponseDetailsData
}

const HistoryChart: FC<HistoryChartProps> = ({ coinId, detailCoin }) => {

    const { chartData } = useContext(CoinMarketContext)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: 'white', // Set the color of legend labels
                },
            },
            title: {
                display: true,
                text: '1 year monthly chart of',
                color: 'white', // Set the color of the chart title
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white', // Set the color of x-axis labels
                },
            },
            y: {
                ticks: {
                    color: 'white', // Set the color of y-axis labels
                },
            },
        }
    }

    const data = {
        labels: chartData.map((value) => {
            return moment(value.x).format('MMM DD, YY')
        }),
        datasets: [
            {
                fill: true,
                data: chartData.map((value) => value.y),
                label: `${coinId.charAt(0).toUpperCase() + coinId.slice(1)} `,
                borderColor: 'rgb(0, 74, 123)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                color: 'white',
            }
        ]
    }

    return <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 dark:bg-slate-900 bg-slate-800 mt-10 py-10 px-3">
        <div>
            <Line options={options} data={data} className="dark:text-white" />
        </div>
        <div>
            <div className="bg-[#CDCDCD] dark:bg-gray-800 rounded-lg p-4">
                <h2 className="text-gray-900 dark:text-zinc-200 text-xl font-bold mb-4">Description</h2>
                <p className="mt-6 text-gray-700 dark:text-gray-300 text-sm">
                    {detailCoin.description.en.length === 0 ? (
                        <span>We apologize for the inconvenience. The description for this coin is currently unavailable. </span>
                    ) : (
                        <span
                            dangerouslySetInnerHTML={{ __html: detailCoin.description.en.replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ') }} className='[&>a]:text-blue-600'
                        ></span>

                    )}
                </p>

            </div>
        </div>
    </div>


}

export default HistoryChart
