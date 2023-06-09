'use client'
import { FC, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'

interface ChartProps {
    chartData: number[]
    priceChange7d: number
}

const DynamicReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Chart: FC<ChartProps> = ({ chartData, priceChange7d }) => {
    const [chartOptions, setChartOptions] = useState<ApexOptions>({
        series: [
            {
                data: [...chartData],
            },
        ],
        chart: {
            type: 'area',
            sparkline: { enabled: true },
            animations: { enabled: true },
        },
        tooltip: { enabled: false },
        stroke: { width: 1 },
        colors: [() => {
            if (priceChange7d <= 0) {
                return '#FF2400'
            } else {
                return '#1CBD00'
            }
        }],
    })

    useEffect(() => {
        setChartOptions((prevOptions) => ({
            ...prevOptions,
            series: [{ data: [...chartData] }],
        }))
    }, [chartData])




    return (
        <DynamicReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="area"
            height={60}
            width={150}
        />
    )
}

export default Chart
