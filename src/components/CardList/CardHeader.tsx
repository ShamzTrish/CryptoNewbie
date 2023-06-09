import { FC } from 'react'


const CardHeader: FC = ({ }) => {
    return <thead className="dark:bg-gray-50 bg-slate-900">
        <tr>
            <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-200 dark:text-gray-500 uppercase tracking-wider">
                Rank
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 dark:text-gray-500 uppercase tracking-wider">
                Name
            </th>
            <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-200 dark:text-gray-500 uppercase tracking-wider">
                1h % Change
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 dark:text-gray-500 uppercase tracking-wider">
                24h % Change
            </th>
            <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-200 dark:text-gray-500 uppercase tracking-wider">
                7d % Change
            </th>
            <th className="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-200 dark:text-gray-500 uppercase tracking-wider">
                Market Cap
            </th>
            <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-200 dark:text-gray-500 uppercase tracking-wider">
                Chart last 7 days
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 dark:text-gray-500 uppercase tracking-wider">
                Price
            </th>
        </tr>
    </thead>
}

export default CardHeader
